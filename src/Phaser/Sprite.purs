module Phaser.Sprite where

import Control.Monad.Eff
import Data.Foreign.EasyFFI
import Phaser.Core

foreign import data Preload :: !

type Point = { x :: Number, y :: Number }

type AssetName = String
type AssetPath = String

loadImage :: forall eff. Phaser -> AssetName -> AssetPath -> Eff (game :: Game | eff) Unit
loadImage = unsafeForeignFunction ["game", "name", "path", ""] "game.load.image(name, path)"

addSprite :: forall eff. Phaser -> AssetName -> Point -> Eff (game :: Game | eff) Unit
addSprite = unsafeForeignFunction ["game", "name", "point", ""] "game.add.sprite(point.x, point.y, name)"