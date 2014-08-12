module Main where

import           Control.Monad.Eff
import           Control.Monad.Eff.Phaser
import qualified Data.Phaser.Group   as G
import qualified Data.Phaser.Physics as P
import           Data.Phaser.Sprite
import           Debug.Trace

path :: String -> String
path asset = "img/" ++ asset ++ ".png"

sky    = "sky"
ground = "platform"
star   = "star"
player = "player"


preload :: forall eff. Game -> Eff (phaser :: Phaser, trace :: Trace | eff) Unit
preload game = do
  loadImage  game sky    $ path sky
  loadImage  game ground $ path ground
  loadImage  game star   $ path star
  loadSprite game player (path player) 32 48

create :: forall eff. Game -> Eff (phaser :: Phaser, trace :: Trace | eff) G.Group
create game = do
  P.startSystem game P.Arcade
  renderSky    game
  renderGround game

renderSky :: forall eff. Game -> Eff (phaser :: Phaser | eff) Unit
renderSky = addSprite sky { x: 0, y: 0 }

renderGround :: forall eff. Game -> Eff (phaser :: Phaser | eff) G.Group
renderGround game =
  G.group game >>= P.enableBody
               >>= G.create ground { x: 0, y: 10 }

main = phaser config { width = 800, height = 600 }
              { preload : preload, create : create }