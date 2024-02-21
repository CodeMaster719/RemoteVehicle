/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_tree_pineDefaultA: THREE.Mesh;
    Mesh_tree_pineDefaultA_1: THREE.Mesh;
  };
  materials: {
    leafsDark: THREE.MeshStandardMaterial;
    woodBarkDark: THREE.MeshStandardMaterial;
  };
};

export function TreeA(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/tree_pineDefaultA.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.05, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tree_pineDefaultA.geometry}
          material={materials.leafsDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_tree_pineDefaultA_1.geometry}
          material={materials.woodBarkDark}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/tree_pineDefaultA.glb');