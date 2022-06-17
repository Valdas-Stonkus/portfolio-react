import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import WelcomePage from '../../WelcomePage'
import ResumePage from '../../ResumePage'
import './styles.scss'

const LayoutTwoPages = () => {
    const [isLeftPageActive, setLeftPageActive] = useState(true)
    const leftPageEl = useRef(null)
    const rightPageEl = useRef(null)

    useEffect(
        () => {
            if (isLeftPageActive) {
                leftPageEl.current.classList.add('page-left-fadeIn')
                rightPageEl.current.classList.add('page-right-fadeOut')
                setTimeout(() => {
                    rightPageEl.current.classList.remove('page-right-fadeIn')
                }, 500)
            } else {
                leftPageEl.current.classList.remove('page-left-fadeIn')
                rightPageEl.current.classList.remove('page-right-fadeOut')
                rightPageEl.current.classList.add('page-right-fadeIn')
            }
        },
        [isLeftPageActive]
    )

    const clickHandler = (action) => {
        if (action === 'activateFirstPage') {
            setLeftPageActive(true)
        } else {
            setLeftPageActive(false)
        }
    }
    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                bgcolor: 'red',
                position: 'relative',
                top: '0px'
            }}
        >
            <Container
                className="page page-left"
                ref={leftPageEl}
                onClick={() => clickHandler('activateFirstPage')}
                disableGutters
                maxWidth="md"
                sx={{
                    boxShadow: 24
                }}
            >
                <WelcomePage />
            </Container>
            <Container
                className="page page-right"
                ref={rightPageEl}
                onClick={() => clickHandler('')}
                disableGutters
                maxWidth="md"
                sx={{
                    boxShadow: 24
                }}
            >
                <ResumePage />
            </Container>

        </Container>
    )
}
export default LayoutTwoPages
