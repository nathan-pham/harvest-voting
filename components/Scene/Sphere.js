// import * as THREE from "three"

// import fragment from "../../shaders/fragment.glsl"
// import vertex from "../../shaders/vertex.glsl"

// export default class Sphere {
//     constructor(name="plane", planeArgs=[0.5, 10, 10]) {
//         this.name = name

//         this.geometry = new THREE.SphereBufferGeometry(...planeArgs)
//         this.material = new THREE.ShaderMaterial({
//             side: THREE.DoubleSide,
//             // wireframe: true,
//             uniforms: {
//                 time: { value: 0 }
//             },

//             fragmentShader: fragment,
//             vertexShader: vertex
//         })
        
//         this.object = new THREE.Mesh(this.geometry, this.material)
//     }

//     render(sketch) {
//         this.material.uniforms.time.value = sketch.time
//     }
// }
