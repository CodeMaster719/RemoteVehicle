/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_body: THREE.Mesh;
    Mesh_body_1: THREE.Mesh;
    Mesh_body_2: THREE.Mesh;
    Mesh_body_3: THREE.Mesh;
    Mesh_body_4: THREE.Mesh;
    Mesh_body_5: THREE.Mesh;
    Mesh_body_6: THREE.Mesh;
  };
  materials: {
    plastic: THREE.MeshStandardMaterial;
    carTire: THREE.MeshStandardMaterial;
    paintGreen: THREE.MeshStandardMaterial;
    lightFront: THREE.MeshStandardMaterial;
    _defaultMat: THREE.MeshStandardMaterial;
    lightBack: THREE.MeshStandardMaterial;
    window: THREE.MeshStandardMaterial;
    wheelInside: THREE.MeshStandardMaterial;
  };
};

export default function Chassis(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/truck.glb') as GLTFResult;

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body.geometry}
        material={materials.plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_1.geometry}
        material={materials.carTire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_2.geometry}
        material={materials.paintGreen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_3.geometry}
        material={materials.lightFront}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_4.geometry}
        material={materials._defaultMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_5.geometry}
        material={materials.lightBack}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_body_6.geometry}
        material={materials.window}
      />
    </group>
  );
}

useGLTF.preload('/assets/truck.glb');
