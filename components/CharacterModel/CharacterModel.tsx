import { useEffect, useRef } from 'react'
import { ContainerScene } from './CharacterModel.styles'
import { cleanUpScene, initScene } from './Script'

const CharacterModel = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    initScene(mountRef)

    return () => {
      cleanUpScene()
    }
  }, [])

  return (
    <ContainerScene className="SceneContainer" ref={mountRef}></ContainerScene>
  )
}

export default CharacterModel
