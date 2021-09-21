import { useEffect, useRef } from "react"
import * as THREE from "three"

import createSphere from "./create/createSphere"

const Canvas = (props) => {
    const mountRef = useRef(null)

    useEffect(() => {
        const container = mountRef.current

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        
        renderer.setSize(container.offsetWidth, container.offsetHeight)
        container.appendChild(renderer.domElement)

        scene.background = new THREE.Color(0xffffe6)
        camera.position.z = 4

        const [ sphereMesh, animateSphere ] = createSphere(container, scene, camera)
        scene.add(sphereMesh)

        const animate = () => {
            requestAnimationFrame(animate)
            animateSphere()

            renderer.render(scene, camera)
        }

        animate()

        return () => renderer.domElement.remove()
    }, [])

    return (
        <div ref={ mountRef } { ...props }></div>
    )
}

export default Canvas