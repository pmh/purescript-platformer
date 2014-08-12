module Data.Phaser.Group where

import Control.Monad.Eff
import Control.Monad.Eff.Phaser
import Data.Foreign.EasyFFI

foreign import data Group :: *

group :: forall eff. Game -> Eff (phaser :: Phaser | eff) Group
group = unsafeForeignFunction ["game", ""] "game.add.group();"