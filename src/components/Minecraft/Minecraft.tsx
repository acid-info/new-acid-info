import { DEFAULT_WORLD_STRING } from '@/components/Minecraft/Minecraft.defaultWorld'
import { MinecraftGameState } from '@/components/Minecraft/Minecraft.types'
import { breakpoints } from '@/configs/ui.configs'
import Physics from '@/webCraft/physics'
import Player from '@/webCraft/player'
import Renderer from '@/webCraft/render'
import { SELECTOR_WIDTH_PX } from '@/webCraft/shared/blocks'
import World from '@/webCraft/world'
import styled from '@emotion/styled'
import { MouseEventHandler, useEffect, useState } from 'react'

export default function Minecraft() {
  const [gameState, setGameState] = useState<MinecraftGameState>()

  const initWorldState = () => {
    const world = new World(16, 16, 16)
    world.createFromString(DEFAULT_WORLD_STRING)

    const renderer = new Renderer('minecraftRenderSurface')
    renderer.setWorld(world, 8)
    renderer.setPerspective(60, 0.01, 200)

    const physics = new Physics()
    physics.setWorld(world)

    const player = new Player()
    player.setWorld(world)
    player.setInputCanvas('minecraftRenderSurface')
    player.setMaterialSelector('minecraftItemSelector')

    setGameState({
      world,
      renderer,
      physics,
      player,
    })
  }

  const renderWorld = () => {
    if (gameState) {
      const { physics, player, renderer } = gameState

      physics.simulate()
      player.update()
      renderer.buildChunks(1)
      renderer.setCamera(player.getEyePos().toArray(), player.angles)
      renderer.draw()
    }
  }

  useEffect(() => {
    initWorldState()
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined
    if (gameState) {
      intervalId = setInterval(renderWorld, 16)
    } else {
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [gameState])

  const onContextMenu: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    return false
  }

  return (
    <Body onContextMenu={onContextMenu}>
      <Canvas id="minecraftRenderSurface" />
      <ItemsSelectorTableContainer>
        <ItemsSelectorTable id="minecraftItemSelector">
          <tr></tr>
        </ItemsSelectorTable>
      </ItemsSelectorTableContainer>
    </Body>
  )
}

const Body = styled.div`
  height: 360px;
  width: 100%;
  background: url('/minecraft/background.png');
  position: relative;

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`

const ItemsSelectorTableContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${SELECTOR_WIDTH_PX}px;
  display: flex;
  justify-content: center;
`

const ItemsSelectorTable = styled.table`
  background: rgba(0, 0, 0, 0.6);

  & > tr {
    height: ${SELECTOR_WIDTH_PX}px;
  }

  & > tr > td {
    width: ${SELECTOR_WIDTH_PX}px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0.3;

    background: url('/minecraft/blockthumbs.png') 0 0;
  }
`
