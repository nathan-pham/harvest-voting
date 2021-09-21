import { useEffect, useRef } from "react"
import gsap, { Expo } from "gsap"

const Page = () => {
    const animationRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(animationRef.current.querySelectorAll("div"), { height: 0 }, {
            height: "100%",
            stagger: 0.5,
            ease: Expo.easeInOut
        })

        gsap.to(animationRef.current, {
            autoAlpha: 0,
            delay: 1.5,
            duration: 1,
            ease: Expo.easeInOut
        })
    }, [])


    return (
        <div ref={ animationRef } className="flex fixed top-0 left-0 w-screen h-screen z-50">
            { new Array(3).fill(0).map((v, i) => <div className="h-0 w-1/3 bg-black" key={ i }></div>) }
        </div>
    )
}

export default Page