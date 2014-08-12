module Data.Phaser.Sprite where

import Control.Monad.Eff
import Control.Monad.Eff.Phaser
import Data.Foreign.EasyFFI

type AssetName   = String
type AssetPath   = String

type FrameWidth  = Number
type FrameHeight = Number

loadImage :: forall eff. AssetName -> AssetPath -> Game -> Eff (phaser :: Phaser | eff) Game
loadImage = unsafeForeignProcedure ["name", "path", "game", ""] "game.load.image(name, path); return game"

loadSprite :: forall eff. AssetName -> AssetPath -> FrameWidth -> FrameHeight -> Game -> Eff (phaser :: Phaser | eff) Game
loadSprite = unsafeForeignProcedure ["name", "path", "frameWidth", "frameHeight", "game", ""] "game.load.spritesheet(name, path, frameWidth, frameHeight); return game;"

addSprite :: forall eff. AssetName -> Point -> Game -> Eff (phaser :: Phaser | eff) Game
addSprite = unsafeForeignProcedure ["name", "point", "game", ""] "game.add.sprite(point.x, point.y, name); return game;"