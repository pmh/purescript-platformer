module Group where

import Control.Monad.Eff
import Control.Monad.Eff.Phaser
import Data.Foreign.EasyFFI

foreign import data Group :: *

group :: Game -> Eff (phaser :: Phaser) Group
group = unsafeForeignFunction ["game", ""] "return game.add.group();"