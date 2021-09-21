import { useEffect, useRef } from "react"
import * as THREE from "three"

const createCube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

    const mesh = new THREE.Mesh(geometry, material)
    const animate = () => {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
    }   

    return [ mesh, animate ]
}

const Canvas = ({ className }) => {
    const mountRef = useRef(null)

    useEffect(() => {
        const container = mountRef.current

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        
        renderer.setSize(container.offsetWidth, container.offsetHeight)
        container.appendChild(renderer.domElement)

        const [ cubeMesh, animateCube ] = createCube()
        scene.add(cubeMesh)

        camera.position.z = 5

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