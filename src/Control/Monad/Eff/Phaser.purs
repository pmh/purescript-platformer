module Control.Monad.Eff.Phaser
  ( Game     ()
  , Phaser   ()
  , Point    ()
  , Config   ()
  , Renderer (..)
  , config
  , phaser
  ) where

import Control.Monad.Eff
import Data.Foreign.EasyFFI

foreign import data Phaser :: !
foreign import data Game   :: *

foreign import innerWidth  "window.innerWidth"  :: Number
foreign import innerHeight "window.innerHeight" :: Number

data Renderer = Auto | Canvas | WebGL

type Point  = { x :: Number, y :: Number }
type Config = { id :: String, renderer :: Renderer, width :: Number, height :: Number }


config :: Config
config = { id : "body", renderer : Auto, width : innerWidth, height : innerHeight }

foreign import phaser
  "function phaser (conf) { \
  \  return function (props) { \
  \    return function () { \
  \      var renderer = (conf.renderer === Auto ? 0 : (conf.renderer === Canvas ? 1 : 2));\
  \      var game = new Phaser.Game(conf.width, conf.height, renderer, conf.id, { \
  \        preload : function () { if ( props.preload ) props.preload (game)(); }, \
  \        create  : function () { if ( props.create  ) props.create  (game)(); } \
  \      });\
  \      return game; \
  \    } \
  \  } \
  \}" :: forall props eff. Config -> {| props} -> Eff (game :: Phaser | eff) Game