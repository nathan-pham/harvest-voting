import { useRouter } from "next/router"
import gsap from "gsap"

const Link = ({ children, href, real, ...props }) => {
    const router = useRouter()

    const click = (e) => {
        e.preventDefault()

        if(href !== router.pathname) {
            gsap.to("#page-content", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => { router.push(href) }
            })
        }
    }

    return (
        real 
            ? <a href={ href } { ...props }>{children}</a>
            : <a href={ href } onClick={ click } { ...props }>{children}</a>
    )
}

export default Link