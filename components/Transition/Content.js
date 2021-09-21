import { useEffect, useRef } from "react"
import gsap, { Expo } from "gsap"

const Content = ({ children }) => {
    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current.classList.remove("opacity-0")

        gsap.from(animationRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 1.5,
            ease: Expo.easeInOut
        })
    }, [])

    return (
        <div ref={ animationRef } className="opacity-0">
            { children }
        </div>
    )
}

export default Content