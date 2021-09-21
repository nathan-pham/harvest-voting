import { useEffect, useRef } from "react"
import * as THREE from "three"

import createSphere from "./create/createSphere"

const Canvas = ({ className }) => {
    const mountRef = useRef(null)

    useEffect(() => {
        const container = mountRef.current

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        
        renderer.setSize(container.offsetWidth, container.offsetHeight)
        container.appendChild(renderer.domElement)

        scene.background = new THREE.Color(0xfffff7)
        camera.position.z = 4

        const [ cubeMesh, animateCube ] = createSphere()
        scene.add(cubeMesh)

        const animate = () => {
            requestAnimationFrame(animate)

            animateCube()

            renderer.render(scene, camera)
        }

        animate()

        return () => renderer.domElement.remove()
    }, [])

    return (
        <div ref={ mountRef } className={ className }></div>
    )
}

export default Canvas