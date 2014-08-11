module Phaser.Core ( Game     ()
                   , Phaser   ()
                   , Config   ()
                   , Actions  ()
                   , Renderer (..)
                   , config
                   , actions
                   , phaser
                   ) where

import Control.Monad.Eff
import Data.Foreign.EasyFFI

foreign import data Game :: !
foreign import data Phaser :: *

foreign import innerWidth  "window.innerWidth"  :: Number
foreign import innerHeight "window.innerHeight" :: Number

type Config  = { id :: String, renderer :: Renderer, width :: Number, height :: Number }
type Actions = { preload :: forall eff. Phaser -> Eff (game :: Game | eff) Unit
               , create  :: forall eff. Phaser -> Eff (game :: Game | eff) Unit
               }

data Renderer = Auto | Canvas | WebGL

config :: Config
config = { id : "body", renderer : Auto, width : innerWidth, height : innerHeight }

actions :: Actions
actions = { preload : (\_ -> return unit), create : (\_ -> return unit) }

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
  \}" :: forall props eff. Config -> {| props} -> Eff (game :: Game | eff) Phaser