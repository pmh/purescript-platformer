module Phaser.Sprite where

import Control.Monad.Eff
import Data.Foreign.EasyFFI
import Phaser.Core

type Point = { x :: Number, y :: Number }

type AssetName   = String
type AssetPath   = String

type FrameWidth  = Number
type FrameHeight = Number

loadImage :: forall eff. Phaser -> AssetName -> AssetPath -> Eff (game :: Game | eff) Unit
loadImage = unsafeForeignFunction ["game", "name", "path", ""] "game.load.image(name, path)"

loadSprite :: forall eff. Phaser -> AssetName -> AssetPath -> FrameWidth -> FrameHeight -> Eff (game :: Game | eff) Unit
loadSprite = unsafeForeignFunction ["game", "name", "path", "frameWidth", "frameHeight", ""] "game.load.spritesheet(name, path, frameWidth, frameHeight)"

addSprite :: forall eff. Phaser -> AssetName -> Point -> Eff (game :: Game | eff) Unit
addSprite = unsafeForeignFunction ["game", "name", "point", ""] "game.add.sprite(point.x, point.y, name)"