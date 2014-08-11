module Main where

import Control.Monad.Eff
import Debug.Trace
import Phaser.Core
import Phaser.Sprite

path :: String -> String
path asset = "img/" ++ asset ++ ".png"

sky    = "sky"
ground = "platform"
star   = "star"
player = "player"


preload :: forall eff. Phaser -> Eff (game :: Game, trace :: Trace | eff) Unit
preload game = do
  loadImage game sky    $ path sky
  loadImage game ground $ path ground
  loadImage game star   $ path star

create :: forall eff. Phaser -> Eff (game :: Game, trace :: Trace | eff) Unit
create game  = trace "create called ..."

main = phaser config { preload : preload, create : create }