module Data.Phaser.Sprite where

import Control.Monad.Eff
import Control.Monad.Eff.Phaser
import Data.Foreign.EasyFFI

type AssetName   = String
type AssetPath   = String

type FrameWidth  = Number
type FrameHeight = Number

loadImage :: forall eff. Game -> AssetName -> AssetPath -> Eff (phaser :: Phaser | eff) Unit
loadImage = unsafeForeignFunction ["game", "name", "path", ""] "game.load.image(name, path)"

loadSprite :: forall eff. Game -> AssetName -> AssetPath -> FrameWidth -> FrameHeight -> Eff (phaser :: Phaser | eff) Unit
loadSprite = unsafeForeignFunction ["game", "name", "path", "frameWidth", "frameHeight", ""] "game.load.spritesheet(name, path, frameWidth, frameHeight)"

addSprite :: forall eff. AssetName -> Point -> Game -> Eff (phaser :: Phaser | eff) Unit
addSprite = unsafeForeignFunction ["name", "point", "game", ""] "game.add.sprite(point.x, point.y, name)"