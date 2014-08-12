(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("Main").main();

},{"Main":7}],2:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
function Auto() {

};
Auto.value = new Auto();
function Canvas() {

};
Canvas.value = new Canvas();
function WebGL() {

};
WebGL.value = new WebGL();
window.innerWidth;
window.innerHeight;
function phaser (conf) {   return function (props) {     return function () {       var renderer = (conf.renderer === Auto ? 0 : (conf.renderer === Canvas ? 1 : 2));      var game = new Phaser.Game(conf.width, conf.height, renderer, conf.id, {         preload : function () { if ( props.preload ) props.preload (game)(); },         create  : function () { if ( props.create  ) props.create  (game)(); }       });      return game;     }   } };
var config = {
    id: "body", 
    renderer: Auto.value, 
    width: innerWidth, 
    height: innerHeight
};
module.exports = {
    Auto: Auto, 
    Canvas: Canvas, 
    WebGL: WebGL, 
    phaser: phaser, 
    config: config
};
},{"Prelude":8}],3:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
function returnE(a) {  return function() {    return a;  };};
function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
function runPure(f) {  return f();};
function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
var applicativeEff = function (_) {
    return new Prelude.Applicative(function (__1) {
        return applyEff({});
    }, returnE);
};
var applyEff = function (_) {
    return new Prelude.Apply(Prelude.ap(monadEff({})), function (__1) {
        return functorEff({});
    });
};
var monadEff = function (_) {
    return new Prelude.Monad(function (__1) {
        return applicativeEff({});
    }, function (__1) {
        return bindEff({});
    });
};
var bindEff = function (_) {
    return new Prelude.Bind(bindE, function (__1) {
        return applyEff({});
    });
};
var functorEff = function (_) {
    return new Prelude.Functor(Prelude.liftA1(applicativeEff({})));
};
module.exports = {
    foreachE: foreachE, 
    forE: forE, 
    whileE: whileE, 
    untilE: untilE, 
    runPure: runPure, 
    bindE: bindE, 
    returnE: returnE, 
    functorEff: functorEff, 
    applyEff: applyEff, 
    applicativeEff: applicativeEff, 
    bindEff: bindEff, 
    monadEff: monadEff
};
},{"Prelude":8}],4:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
function unsafeForeignProcedure(args) {  return function (stmt) {    return Function(wrap(args.slice()))();    function wrap() {      return !args.length ? stmt : 'return function (' + args.shift() + ') { ' + wrap() + ' };';    }  };};
var unsafeForeignFunction = function (args) {
    return function (expr) {
        return unsafeForeignProcedure(args)("return " + expr + ";");
    };
};
module.exports = {
    unsafeForeignProcedure: unsafeForeignProcedure, 
    unsafeForeignFunction: unsafeForeignFunction
};
},{"Prelude":8}],5:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Foreign_EasyFFI = require("Data.Foreign.EasyFFI");
function Arcade() {

};
Arcade.value = new Arcade();
function Chipmunk() {

};
Chipmunk.value = new Chipmunk();
function Ninja() {

};
Ninja.value = new Ninja();
function P2JS() {

};
P2JS.value = new P2JS();
function Box2D() {

};
Box2D.value = new Box2D();
var startSystem$prime = Data_Foreign_EasyFFI.unsafeForeignFunction([ "game", "type", "" ])("game.physics.startSystem(type);");
var startSystem = function (_0) {
    return function (_1) {
        if (_1 instanceof Arcade) {
            return startSystem$prime(_0)(0);
        };
        if (_1 instanceof P2JS) {
            return startSystem$prime(_0)(1);
        };
        if (_1 instanceof Ninja) {
            return startSystem$prime(_0)(2);
        };
        if (_1 instanceof Box2D) {
            return startSystem$prime(_0)(3);
        };
        if (_1 instanceof Chipmunk) {
            return startSystem$prime(_0)(5);
        };
        throw new Error("Failed pattern match");
    };
};
module.exports = {
    Arcade: Arcade, 
    Chipmunk: Chipmunk, 
    Ninja: Ninja, 
    P2JS: P2JS, 
    Box2D: Box2D, 
    startSystem: startSystem
};
},{"Data.Foreign.EasyFFI":4,"Prelude":8}],6:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Foreign_EasyFFI = require("Data.Foreign.EasyFFI");
var loadSprite = Data_Foreign_EasyFFI.unsafeForeignFunction([ "game", "name", "path", "frameWidth", "frameHeight", "" ])("game.load.spritesheet(name, path, frameWidth, frameHeight)");
var loadImage = Data_Foreign_EasyFFI.unsafeForeignFunction([ "game", "name", "path", "" ])("game.load.image(name, path)");
var addSprite = Data_Foreign_EasyFFI.unsafeForeignFunction([ "game", "name", "point", "" ])("game.add.sprite(point.x, point.y, name)");
module.exports = {
    addSprite: addSprite, 
    loadSprite: loadSprite, 
    loadImage: loadImage
};
},{"Data.Foreign.EasyFFI":4,"Prelude":8}],7:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Data_Phaser_Sprite = require("Data.Phaser.Sprite");
var Data_Phaser_Physics = require("Data.Phaser.Physics");
var Control_Monad_Eff_Phaser = require("Control.Monad.Eff.Phaser");
var star = "star";
var sky = "sky";
var player = "player";
var path = function (asset) {
    return "img/" + asset + ".png";
};
var ground = "platform";
var preload = function (game) {
    return function __do() {
        Data_Phaser_Sprite.loadImage(game)(sky)(path(sky))();
        var __1 = Data_Phaser_Sprite.loadImage(game)(ground)(path(ground))();
        var __2 = Data_Phaser_Sprite.loadImage(game)(star)(path(star))();
        return Data_Phaser_Sprite.loadSprite(game)(player)(path(player))(32)(48)();
    };
};
var create = function (game) {
    return function __do() {
        Data_Phaser_Physics.startSystem(game)(Data_Phaser_Physics.Arcade.value)();
        return Data_Phaser_Sprite.addSprite(game)(sky)({
            x: 0, 
            y: 0
        })();
    };
};
var main = Control_Monad_Eff_Phaser.phaser((function () {
    var _0 = {};
    for (var _1 in Control_Monad_Eff_Phaser.config) {
        if (Control_Monad_Eff_Phaser.config.hasOwnProperty(_1)) {
            _0[_1] = Control_Monad_Eff_Phaser.config[_1];
        };
    };
    _0.width = 800;
    _0.height = 600;
    return _0;
})())({
    preload: preload, 
    create: create
});
module.exports = {
    main: main, 
    create: create, 
    preload: preload, 
    player: player, 
    star: star, 
    ground: ground, 
    sky: sky, 
    path: path
};
},{"Control.Monad.Eff":3,"Control.Monad.Eff.Phaser":2,"Data.Phaser.Physics":5,"Data.Phaser.Sprite":6,"Prelude":8}],8:[function(require,module,exports){
"use strict";
var Unit = {
    create: function (value) {
        return value;
    }
};
function LT() {

};
LT.value = new LT();
function GT() {

};
GT.value = new GT();
function EQ() {

};
EQ.value = new EQ();
function Semigroupoid($less$less$less) {
    this["<<<"] = $less$less$less;
};
function Category(__superclass_Prelude$dotSemigroupoid_0, id) {
    this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
    this.id = id;
};
function Show(show) {
    this.show = show;
};
function Functor($less$dollar$greater) {
    this["<$>"] = $less$dollar$greater;
};
function Apply($less$times$greater, __superclass_Prelude$dotFunctor_0) {
    this["<*>"] = $less$times$greater;
    this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
};
function Applicative(__superclass_Prelude$dotApply_0, pure) {
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    this.pure = pure;
};
function Alternative($less$bar$greater, empty) {
    this["<|>"] = $less$bar$greater;
    this.empty = empty;
};
function Bind($greater$greater$eq, __superclass_Prelude$dotApply_0) {
    this[">>="] = $greater$greater$eq;
    this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
};
function Monad(__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
    this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
    this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
};
function Num($percent, $times, $plus, $minus, $div, negate) {
    this["%"] = $percent;
    this["*"] = $times;
    this["+"] = $plus;
    this["-"] = $minus;
    this["/"] = $div;
    this.negate = negate;
};
function Eq($div$eq, $eq$eq) {
    this["/="] = $div$eq;
    this["=="] = $eq$eq;
};
function Ord(__superclass_Prelude$dotEq_0, compare) {
    this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
    this.compare = compare;
};
function Bits($amp, $up, complement, shl, shr, zshr, $bar) {
    this["&"] = $amp;
    this["^"] = $up;
    this.complement = complement;
    this.shl = shl;
    this.shr = shr;
    this.zshr = zshr;
    this["|"] = $bar;
};
function BoolLike($amp$amp, not, $bar$bar) {
    this["&&"] = $amp$amp;
    this.not = not;
    this["||"] = $bar$bar;
};
function Semigroup($less$greater) {
    this["<>"] = $less$greater;
};
function cons(e) {  return function (l) {    return [e].concat(l);  };};
function showStringImpl(s) {  return JSON.stringify(s);};
function showNumberImpl(n) {  return n.toString();};
function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
function numNegate(n) {  return -n;};
function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
function unsafeCompareImpl(lt) {  return function (eq) {    return function (gt) {      return function (x) {        return function (y) {          return x < y ? lt : x > y ? gt : eq;        };      };    };  };};
function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
function numComplement(n) {  return ~n;};
function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
function boolNot(b) {  return !b;};
function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
var $bar$bar = function (dict) {
    return dict["||"];
};
var $bar = function (dict) {
    return dict["|"];
};
var $up = function (dict) {
    return dict["^"];
};
var $greater$greater$eq = function (dict) {
    return dict[">>="];
};
var $eq$eq = function (dict) {
    return dict["=="];
};
var $less$bar$greater = function (dict) {
    return dict["<|>"];
};
var $less$greater = function (dict) {
    return dict["<>"];
};
var $less$less$less = function (dict) {
    return dict["<<<"];
};
var $greater$greater$greater = function (__dict_Semigroupoid_0) {
    return function (f) {
        return function (g) {
            return $less$less$less(__dict_Semigroupoid_0)(g)(f);
        };
    };
};
var $less$times$greater = function (dict) {
    return dict["<*>"];
};
var $less$dollar$greater = function (dict) {
    return dict["<$>"];
};
var $colon = cons;
var $div$eq = function (dict) {
    return dict["/="];
};
var $div = function (dict) {
    return dict["/"];
};
var $minus = function (dict) {
    return dict["-"];
};
var $plus$plus = function (__dict_Semigroup_1) {
    return $less$greater(__dict_Semigroup_1);
};
var $plus = function (dict) {
    return dict["+"];
};
var $times = function (dict) {
    return dict["*"];
};
var $amp$amp = function (dict) {
    return dict["&&"];
};
var $amp = function (dict) {
    return dict["&"];
};
var $percent = function (dict) {
    return dict["%"];
};
var $dollar = function (f) {
    return function (x) {
        return f(x);
    };
};
var $hash = function (x) {
    return function (f) {
        return f(x);
    };
};
var zshr = function (dict) {
    return dict.zshr;
};
var unsafeCompare = unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
var unit = {};
var shr = function (dict) {
    return dict.shr;
};
var showUnit = function (_) {
    return new Show(function (_19) {
        return "Unit {}";
    });
};
var showString = function (_) {
    return new Show(showStringImpl);
};
var showOrdering = function (_) {
    return new Show(function (_27) {
        if (_27 instanceof LT) {
            return "LT";
        };
        if (_27 instanceof GT) {
            return "GT";
        };
        if (_27 instanceof EQ) {
            return "EQ";
        };
        throw new Error("Failed pattern match");
    });
};
var showNumber = function (_) {
    return new Show(showNumberImpl);
};
var showBoolean = function (_) {
    return new Show(function (_20) {
        if (_20) {
            return "true";
        };
        if (!_20) {
            return "false";
        };
        throw new Error("Failed pattern match");
    });
};
var show = function (dict) {
    return dict.show;
};
var showArray = function (__dict_Show_2) {
    return new Show(showArrayImpl(show(__dict_Show_2)));
};
var shl = function (dict) {
    return dict.shl;
};
var semigroupoidArr = function (_) {
    return new Semigroupoid(function (f) {
        return function (g) {
            return function (x) {
                return f(g(x));
            };
        };
    });
};
var semigroupUnit = function (_) {
    return new Semigroup(function (_34) {
        return function (_35) {
            return {};
        };
    });
};
var semigroupString = function (_) {
    return new Semigroup(concatString);
};
var semigroupArr = function (__dict_Semigroup_3) {
    return new Semigroup(function (f) {
        return function (g) {
            return function (x) {
                return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
            };
        };
    });
};
var pure = function (dict) {
    return dict.pure;
};
var $$return = function (__dict_Monad_4) {
    return pure(__dict_Monad_4["__superclass_Prelude.Applicative_0"]({}));
};
var numNumber = function (_) {
    return new Num(numMod, numMul, numAdd, numSub, numDiv, numNegate);
};
var not = function (dict) {
    return dict.not;
};
var negate = function (dict) {
    return dict.negate;
};
var liftM1 = function (__dict_Monad_5) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_5["__superclass_Prelude.Bind_1"]({}))(a)(function (_0) {
                return $$return(__dict_Monad_5)(f(_0));
            });
        };
    };
};
var liftA1 = function (__dict_Applicative_6) {
    return function (f) {
        return function (a) {
            return $less$times$greater(__dict_Applicative_6["__superclass_Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
        };
    };
};
var id = function (dict) {
    return dict.id;
};
var functorArr = function (_) {
    return new Functor($less$less$less(semigroupoidArr({})));
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var eqUnit = function (_) {
    return new Eq(function (_23) {
        return function (_24) {
            return false;
        };
    }, function (_21) {
        return function (_22) {
            return true;
        };
    });
};
var ordUnit = function (_) {
    return new Ord(function (__1) {
        return eqUnit({});
    }, function (_28) {
        return function (_29) {
            return EQ.value;
        };
    });
};
var eqString = function (_) {
    return new Eq(refIneq, refEq);
};
var ordString = function (_) {
    return new Ord(function (__1) {
        return eqString({});
    }, unsafeCompare);
};
var eqNumber = function (_) {
    return new Eq(refIneq, refEq);
};
var ordNumber = function (_) {
    return new Ord(function (__1) {
        return eqNumber({});
    }, unsafeCompare);
};
var eqBoolean = function (_) {
    return new Eq(refIneq, refEq);
};
var ordBoolean = function (_) {
    return new Ord(function (__1) {
        return eqBoolean({});
    }, function (_30) {
        return function (_31) {
            if (!_30 && !_31) {
                return EQ.value;
            };
            if (!_30 && _31) {
                return LT.value;
            };
            if (_30 && _31) {
                return EQ.value;
            };
            if (_30 && !_31) {
                return GT.value;
            };
            throw new Error("Failed pattern match");
        };
    });
};
var empty = function (dict) {
    return dict.empty;
};
var $$const = function (_15) {
    return function (_16) {
        return _15;
    };
};
var $$void = function (__dict_Functor_8) {
    return function (fa) {
        return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
    };
};
var complement = function (dict) {
    return dict.complement;
};
var compare = function (dict) {
    return dict.compare;
};
var $less = function (__dict_Ord_10) {
    return function (a1) {
        return function (a2) {
            return (function (_277) {
                if (_277 instanceof LT) {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_10)(a1)(a2));
        };
    };
};
var $less$eq = function (__dict_Ord_11) {
    return function (a1) {
        return function (a2) {
            return (function (_278) {
                if (_278 instanceof GT) {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_11)(a1)(a2));
        };
    };
};
var $greater = function (__dict_Ord_12) {
    return function (a1) {
        return function (a2) {
            return (function (_279) {
                if (_279 instanceof GT) {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_12)(a1)(a2));
        };
    };
};
var $greater$eq = function (__dict_Ord_13) {
    return function (a1) {
        return function (a2) {
            return (function (_280) {
                if (_280 instanceof LT) {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_13)(a1)(a2));
        };
    };
};
var categoryArr = function (_) {
    return new Category(function (__1) {
        return semigroupoidArr({});
    }, function (x) {
        return x;
    });
};
var boolLikeBoolean = function (_) {
    return new BoolLike(boolAnd, boolNot, boolOr);
};
var eqArray = function (__dict_Eq_7) {
    return new Eq(function (xs) {
        return function (ys) {
            return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
        };
    }, function (xs) {
        return function (ys) {
            return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
        };
    });
};
var ordArray = function (__dict_Ord_9) {
    return new Ord(function (_) {
        return eqArray(__dict_Ord_9["__superclass_Prelude.Eq_0"]({}));
    }, function (_32) {
        return function (_33) {
            if (_32.length === 0 && _33.length === 0) {
                return EQ.value;
            };
            if (_32.length === 0) {
                return LT.value;
            };
            if (_33.length === 0) {
                return GT.value;
            };
            if (_32.length > 0) {
                var _287 = _32.slice(1);
                if (_33.length > 0) {
                    var _285 = _33.slice(1);
                    return (function (_283) {
                        if (_283 instanceof EQ) {
                            return compare(ordArray(__dict_Ord_9))(_287)(_285);
                        };
                        return _283;
                    })(compare(__dict_Ord_9)(_32[0])(_33[0]));
                };
            };
            throw new Error("Failed pattern match");
        };
    });
};
var eqOrdering = function (_) {
    return new Eq(function (x) {
        return function (y) {
            return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
        };
    }, function (_25) {
        return function (_26) {
            if (_25 instanceof LT && _26 instanceof LT) {
                return true;
            };
            if (_25 instanceof GT && _26 instanceof GT) {
                return true;
            };
            if (_25 instanceof EQ && _26 instanceof EQ) {
                return true;
            };
            return false;
        };
    });
};
var bitsNumber = function (_) {
    return new Bits(numAnd, numXor, numComplement, numShl, numShr, numZshr, numOr);
};
var asTypeOf = function (_17) {
    return function (_18) {
        return _17;
    };
};
var applyArr = function (_) {
    return new Apply(function (f) {
        return function (g) {
            return function (x) {
                return f(x)(g(x));
            };
        };
    }, function (__1) {
        return functorArr({});
    });
};
var bindArr = function (_) {
    return new Bind(function (m) {
        return function (f) {
            return function (x) {
                return f(m(x))(x);
            };
        };
    }, function (__1) {
        return applyArr({});
    });
};
var applicativeArr = function (_) {
    return new Applicative(function (__1) {
        return applyArr({});
    }, $$const);
};
var monadArr = function (_) {
    return new Monad(function (__1) {
        return applicativeArr({});
    }, function (__1) {
        return bindArr({});
    });
};
var ap = function (__dict_Monad_14) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(f)(function (_2) {
                return $greater$greater$eq(__dict_Monad_14["__superclass_Prelude.Bind_1"]({}))(a)(function (_1) {
                    return $$return(__dict_Monad_14)(_2(_1));
                });
            });
        };
    };
};
module.exports = {
    Unit: Unit, 
    LT: LT, 
    GT: GT, 
    EQ: EQ, 
    Semigroup: Semigroup, 
    BoolLike: BoolLike, 
    Bits: Bits, 
    Ord: Ord, 
    Eq: Eq, 
    Num: Num, 
    Monad: Monad, 
    Bind: Bind, 
    Alternative: Alternative, 
    Applicative: Applicative, 
    Apply: Apply, 
    Functor: Functor, 
    Show: Show, 
    Category: Category, 
    Semigroupoid: Semigroupoid, 
    unit: unit, 
    "++": $plus$plus, 
    "<>": $less$greater, 
    not: not, 
    "||": $bar$bar, 
    "&&": $amp$amp, 
    complement: complement, 
    zshr: zshr, 
    shr: shr, 
    shl: shl, 
    "^": $up, 
    "|": $bar, 
    "&": $amp, 
    ">=": $greater$eq, 
    "<=": $less$eq, 
    ">": $greater, 
    "<": $less, 
    compare: compare, 
    refIneq: refIneq, 
    refEq: refEq, 
    "/=": $div$eq, 
    "==": $eq$eq, 
    negate: negate, 
    "%": $percent, 
    "/": $div, 
    "*": $times, 
    "-": $minus, 
    "+": $plus, 
    ap: ap, 
    liftM1: liftM1, 
    "return": $$return, 
    ">>=": $greater$greater$eq, 
    "<|>": $less$bar$greater, 
    empty: empty, 
    liftA1: liftA1, 
    pure: pure, 
    "<*>": $less$times$greater, 
    "void": $$void, 
    "<$>": $less$dollar$greater, 
    show: show, 
    cons: cons, 
    ":": $colon, 
    "#": $hash, 
    "$": $dollar, 
    id: id, 
    ">>>": $greater$greater$greater, 
    "<<<": $less$less$less, 
    asTypeOf: asTypeOf, 
    "const": $$const, 
    flip: flip, 
    semigroupoidArr: semigroupoidArr, 
    categoryArr: categoryArr, 
    showUnit: showUnit, 
    showString: showString, 
    showBoolean: showBoolean, 
    showNumber: showNumber, 
    showArray: showArray, 
    functorArr: functorArr, 
    applyArr: applyArr, 
    applicativeArr: applicativeArr, 
    bindArr: bindArr, 
    monadArr: monadArr, 
    numNumber: numNumber, 
    eqUnit: eqUnit, 
    eqString: eqString, 
    eqNumber: eqNumber, 
    eqBoolean: eqBoolean, 
    eqArray: eqArray, 
    eqOrdering: eqOrdering, 
    showOrdering: showOrdering, 
    ordUnit: ordUnit, 
    ordBoolean: ordBoolean, 
    ordNumber: ordNumber, 
    ordString: ordString, 
    ordArray: ordArray, 
    bitsNumber: bitsNumber, 
    boolLikeBoolean: boolLikeBoolean, 
    semigroupUnit: semigroupUnit, 
    semigroupString: semigroupString, 
    semigroupArr: semigroupArr
};
},{}]},{},[1]);