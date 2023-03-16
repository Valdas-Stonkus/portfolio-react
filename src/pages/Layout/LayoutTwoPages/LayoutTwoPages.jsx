import React, {
    useEffect, useRef, useState, useCallback
} from 'react'
import { Container } from '@mui/material'
import HomePage from '../../HomePage'
import ResumePage from '../../ResumePage'
import './styles.scss'

export const PageContext = React.createContext()

const LayoutTwoPages = () => {
    const [isHomePageActive, setHomePageActive] = useState(true)
    const [isFocusOnContacts, setFocusOnContacts] = useState(false)
    const homePageEl = useRef(null)
    const resumePageEl = useRef(null)

    useEffect(
        () => {
            if (isHomePageActive) {
                resumePageEl.current.classList.remove('page-right-fadeIn')
                homePageEl.current.classList.remove('page-left-fadeOut')
                homePageEl.current.classList.remove('cursor-zoom')

                homePageEl.current.classList.add('page-left-fadeIn')
                resumePageEl.current.classList.add('page-right-fadeOut')
                resumePageEl.current.classList.add('cursor-zoom')
            } else {
                homePageEl.current.classList.remove('page-left-fadeIn')
                resumePageEl.current.classList.remove('page-right-fadeOut')
                resumePageEl.current.classList.remove('cursor-zoom')

                resumePageEl.current.classList.add('page-right-fadeIn')
                homePageEl.current.classList.add('page-left-fadeOut')
                homePageEl.current.classList.add('cursor-zoom')
            }
        },
        [isHomePageActive]
    )

    // use callback hook for minimize rerenders because this func is set as prop
    const handleContactMeButton = useCallback((e) => {
        setHomePageActive(false)
        e.stopPropagation()
        setFocusOnContacts(true)
        setTimeout(() => {
            setFocusOnContacts(false)
        }, 1500)
    }, [])

    return (
        <PageContext.Provider value={handleContactMeButton}>
            <Container
                disableGutters
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    top: '0px'
                }}
            >
                <Container
                    ref={homePageEl}
                    onClick={() => setHomePageActive(true)}
                    disableGutters
                    maxWidth="md"
                    sx={{
                        boxShadow: 24,
                        position: 'absolute',
                        backgroundColor: 'white'
                    }}
                >
                    <HomePage isActive={isHomePageActive} />
                </Container>
                <Container
                    ref={resumePageEl}
                    onClick={() => setHomePageActive(false)}
                    disableGutters
                    maxWidth="md"
                    sx={{
                        boxShadow: 24,
                        position: 'absolute',
                        backgroundColor: 'white'
                    }}
                >
                    <ResumePage
                        isActive={!isHomePageActive}
                        isFocusOnContacts={isFocusOnContacts}
                    />
                </Container>
            </Container>
        </PageContext.Provider>
    )
}

export default LayoutTwoPages
