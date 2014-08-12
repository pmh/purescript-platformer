module Main where

import           Control.Monad.Eff
import           Control.Monad.Eff.Phaser
import           Data.Phaser.Group
import qualified Data.Phaser.Physics as P
import           Data.Phaser.Sprite
import           Data.Phaser.World
import           Debug.Trace

path :: String -> String
path asset = "img/" ++ asset ++ ".png"

sky    = "sky"
ground = "platform"
star   = "star"
player = "player"

load :: AssetName -> (forall eff. Game -> Eff (phaser :: Phaser | eff) Game)
load asset | asset == player = loadSprite asset (path asset) 32 48
load asset                   = loadImage  asset $ path asset

preload' :: forall eff. Game -> Eff (phaser :: Phaser, trace :: Trace | eff) Game
preload' game = 
  return game >>= load sky
              >>= load ground
              >>= load star
              >>= load player

create' :: forall eff. Game -> Eff (phaser :: Phaser, trace :: Trace | eff) Group
create' game = do
  P.startSystem game P.Arcade
  renderSky     game
  renderGround  game

renderSky :: forall eff. Game -> Eff (phaser :: Phaser | eff) Game
renderSky = addSprite sky { x: 0, y: 0 }

renderGround :: forall eff. Game -> Eff (phaser :: Phaser | eff) Group
renderGround game =
  return game >>= group
              >>= P.enableBody
              >>= create ground { x: 0, y: (worldHeight game) - 64 }

main = phaser config { width = 800, height = 600 }
              { preload : preload', create : create' }