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

export default createCube