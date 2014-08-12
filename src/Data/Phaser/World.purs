module Data.Phaser.World where

import Control.Monad.Eff.Phaser

foreign import worldHeight
  "function worldHeight (game) { return game.world.height; }" :: Game -> Number