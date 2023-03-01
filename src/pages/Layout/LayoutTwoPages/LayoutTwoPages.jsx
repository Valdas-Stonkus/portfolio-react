import { Container } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import HomePage from '../../HomePage'
import ResumePage from '../../ResumePage'
import './styles.scss'

const LayoutTwoPages = () => {
    const [isLeftPageActive, setLeftPageActive] = useState(true)
    const leftPageEl = useRef(null)
    const rightPageEl = useRef(null)

    useEffect(
        () => {
            if (isLeftPageActive) {
                rightPageEl.current.classList.remove('page-right-fadeIn')
                leftPageEl.current.classList.remove('page-left-fadeOut')
                leftPageEl.current.classList.remove('cursor-zoom')

                leftPageEl.current.classList.add('page-left-fadeIn')
                rightPageEl.current.classList.add('page-right-fadeOut')
                rightPageEl.current.classList.add('cursor-zoom')
            } else {
                leftPageEl.current.classList.remove('page-left-fadeIn')
                rightPageEl.current.classList.remove('page-right-fadeOut')
                rightPageEl.current.classList.remove('cursor-zoom')

                rightPageEl.current.classList.add('page-right-fadeIn')
                leftPageEl.current.classList.add('page-left-fadeOut')
                leftPageEl.current.classList.add('cursor-zoom')
            }
        },
        [isLeftPageActive]
    )

    const clickHandler = (action) => {
        if (action === 'activateFirstPage') {
            setLeftPageActive(true)
        } else {
            console.log('Activation')
            setLeftPageActive(false)
        }
    }
    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                // TODO recheck this red
                bgcolor: 'red',
                position: 'relative',
                top: '0px'
            }}
        >
            <Container
                ref={leftPageEl}
                onClick={() => clickHandler('activateFirstPage')}
                disableGutters
                maxWidth="md"
                sx={{
                    boxShadow: 24,
                    position: 'absolute',
                    backgroundColor: 'white'
                }}
            >
                <HomePage />
            </Container>
            <Container
                ref={rightPageEl}
                onClick={() => clickHandler('')}
                disableGutters
                maxWidth="md"
                sx={{
                    boxShadow: 24,
                    position: 'absolute',
                    backgroundColor: 'white'
                }}
            >
                <ResumePage />
            </Container>

        </Container>
    )
}
export default LayoutTwoPages
