import Physics from '@/webCraft/physics'
import Player from '@/webCraft/player'
import Renderer from '@/webCraft/render'
import World from '@/webCraft/world'

export type MinecraftGameState = {
  world: World
  renderer: Renderer
  physics: Physics
  player: Player
}
