module Main where

import Control.Monad.Eff
import Phaser.Core
import Phaser.Sprite

babyZombie     = "baby-zombie"
babyZombiePath = "img/" ++ babyZombie ++ ".png"

preload :: forall eff. Phaser -> Eff (game :: Game | eff) Unit
preload game = loadImage game babyZombie babyZombiePath

create :: forall eff. Phaser -> Eff (game :: Game | eff) Unit
create game  = addSprite game babyZombie { x: 0, y: 0 }

main = phaser config actions { preload = preload, create = create }