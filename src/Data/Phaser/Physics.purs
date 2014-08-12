module Data.Phaser.Physics 
  ( PhysicsType(..)
  , startSystem
  , enableBody
  , disableBody
  ) where

import Control.Monad.Eff
import Control.Monad.Eff.Phaser
import Data.Phaser.Group
import Data.Foreign.EasyFFI

data PhysicsType = Arcade | Chipmunk | Ninja | P2JS | Box2D

startSystem' :: forall eff. Game -> Number -> Eff (phaser :: Phaser | eff) Unit
startSystem' = unsafeForeignFunction ["game", "type", ""] "game.physics.startSystem(type);"

startSystem :: forall eff. Game -> PhysicsType -> Eff (phaser :: Phaser | eff) Unit
startSystem game Arcade   = startSystem' game 0
startSystem game P2JS     = startSystem' game 1
startSystem game Ninja    = startSystem' game 2
startSystem game Box2D    = startSystem' game 3
startSystem game Chipmunk = startSystem' game 5

enableBody :: forall eff. Group -> Eff (phaser :: Phaser | eff) Group
enableBody = unsafeForeignProcedure ["group", ""] "group.enableBody = true; return group;"

disableBody :: forall eff. Group -> Eff (phaser :: Phaser | eff) Group
disableBody = unsafeForeignProcedure ["group", ""] "group.enableBody = false; return group;"