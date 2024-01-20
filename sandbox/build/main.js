var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// lib/rot.js
var require_rot = __commonJS((exports, module) => {
  var _assertThisInitialized = function(self) {
    if (self === undefined) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  };
  var _inheritsLoose = function(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  };
  (function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.ROT = {});
  })(exports, function(exports2) {
    var FRAC = 0.00000000023283064365386964;
    var RNG = function() {
      function RNG2() {
        this._seed = 0;
        this._s0 = 0;
        this._s1 = 0;
        this._s2 = 0;
        this._c = 0;
      }
      var _proto = RNG2.prototype;
      _proto.getSeed = function getSeed() {
        return this._seed;
      };
      _proto.setSeed = function setSeed(seed) {
        seed = seed < 1 ? 1 / seed : seed;
        this._seed = seed;
        this._s0 = (seed >>> 0) * FRAC;
        seed = seed * 69069 + 1 >>> 0;
        this._s1 = seed * FRAC;
        seed = seed * 69069 + 1 >>> 0;
        this._s2 = seed * FRAC;
        this._c = 1;
        return this;
      };
      _proto.getUniform = function getUniform() {
        var t = 2091639 * this._s0 + this._c * FRAC;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
      };
      _proto.getUniformInt = function getUniformInt(lowerBound, upperBound) {
        var max = Math.max(lowerBound, upperBound);
        var min = Math.min(lowerBound, upperBound);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
      };
      _proto.getNormal = function getNormal(mean, stddev) {
        if (mean === undefined) {
          mean = 0;
        }
        if (stddev === undefined) {
          stddev = 1;
        }
        var u, v, r;
        do {
          u = 2 * this.getUniform() - 1;
          v = 2 * this.getUniform() - 1;
          r = u * u + v * v;
        } while (r > 1 || r == 0);
        var gauss = u * Math.sqrt(-2 * Math.log(r) / r);
        return mean + gauss * stddev;
      };
      _proto.getPercentage = function getPercentage() {
        return 1 + Math.floor(this.getUniform() * 100);
      };
      _proto.getItem = function getItem(array) {
        if (!array.length) {
          return null;
        }
        return array[Math.floor(this.getUniform() * array.length)];
      };
      _proto.shuffle = function shuffle(array) {
        var result = [];
        var clone = array.slice();
        while (clone.length) {
          var _index = clone.indexOf(this.getItem(clone));
          result.push(clone.splice(_index, 1)[0]);
        }
        return result;
      };
      _proto.getWeightedValue = function getWeightedValue(data) {
        var total = 0;
        for (var _id in data) {
          total += data[_id];
        }
        var random = this.getUniform() * total;
        var id, part = 0;
        for (id in data) {
          part += data[id];
          if (random < part) {
            return id;
          }
        }
        return id;
      };
      _proto.getState = function getState() {
        return [this._s0, this._s1, this._s2, this._c];
      };
      _proto.setState = function setState(state) {
        this._s0 = state[0];
        this._s1 = state[1];
        this._s2 = state[2];
        this._c = state[3];
        return this;
      };
      _proto.clone = function clone() {
        var clone = new RNG2;
        return clone.setState(this.getState());
      };
      return RNG2;
    }();
    var RNG$1 = new RNG().setSeed(Date.now());
    var Backend = function() {
      function Backend2() {
      }
      var _proto2 = Backend2.prototype;
      _proto2.getContainer = function getContainer() {
        return null;
      };
      _proto2.setOptions = function setOptions(options) {
        this._options = options;
      };
      return Backend2;
    }();
    var Canvas = function(_Backend) {
      _inheritsLoose(Canvas2, _Backend);
      function Canvas2() {
        var _this;
        _this = _Backend.call(this) || this;
        _this._ctx = document.createElement("canvas").getContext("2d");
        return _this;
      }
      var _proto3 = Canvas2.prototype;
      _proto3.schedule = function schedule(cb) {
        requestAnimationFrame(cb);
      };
      _proto3.getContainer = function getContainer() {
        return this._ctx.canvas;
      };
      _proto3.setOptions = function setOptions(opts) {
        _Backend.prototype.setOptions.call(this, opts);
        var style = opts.fontStyle ? opts.fontStyle + " " : "";
        var font = style + " " + opts.fontSize + "px " + opts.fontFamily;
        this._ctx.font = font;
        this._updateSize();
        this._ctx.font = font;
        this._ctx.textAlign = "center";
        this._ctx.textBaseline = "middle";
      };
      _proto3.clear = function clear() {
        this._ctx.fillStyle = this._options.bg;
        this._ctx.fillRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
      };
      _proto3.eventToPosition = function eventToPosition(x, y) {
        var canvas = this._ctx.canvas;
        var rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
          return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
      };
      return Canvas2;
    }(Backend);
    function mod(x, n) {
      return (x % n + n) % n;
    }
    function clamp(val, min, max) {
      if (min === undefined) {
        min = 0;
      }
      if (max === undefined) {
        max = 1;
      }
      if (val < min)
        return min;
      if (val > max)
        return max;
      return val;
    }
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.substring(1);
    }
    function format(template) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;_key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var map2 = format.map;
      var replacer = function replacer(match, group1, group2, index2) {
        if (template.charAt(index2 - 1) == "%") {
          return match.substring(1);
        }
        if (!args.length) {
          return match;
        }
        var obj = args[0];
        var group = group1 || group2;
        var parts = group.split(",");
        var name = parts.shift() || "";
        var method = map2[name.toLowerCase()];
        if (!method) {
          return match;
        }
        obj = args.shift();
        var replaced = obj[method].apply(obj, parts);
        var first = name.charAt(0);
        if (first != first.toLowerCase()) {
          replaced = capitalize(replaced);
        }
        return replaced;
      };
      return template.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, replacer);
    }
    format.map = {
      s: "toString"
    };
    var util2 = Object.freeze({
      mod,
      clamp,
      capitalize,
      format
    });
    var Hex = function(_Canvas) {
      _inheritsLoose(Hex2, _Canvas);
      function Hex2() {
        var _this2;
        _this2 = _Canvas.call(this) || this;
        _this2._spacingX = 0;
        _this2._spacingY = 0;
        _this2._hexSize = 0;
        return _this2;
      }
      var _proto4 = Hex2.prototype;
      _proto4.draw = function draw(data, clearBefore) {
        var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
        var px = [(x + 1) * this._spacingX, y * this._spacingY + this._hexSize];
        if (this._options.transpose) {
          px.reverse();
        }
        if (clearBefore) {
          this._ctx.fillStyle = bg;
          this._fill(px[0], px[1]);
        }
        if (!ch) {
          return;
        }
        this._ctx.fillStyle = fg;
        var chars = [].concat(ch);
        for (var i = 0;i < chars.length; i++) {
          this._ctx.fillText(chars[i], px[0], Math.ceil(px[1]));
        }
      };
      _proto4.computeSize = function computeSize(availWidth, availHeight) {
        if (this._options.transpose) {
          availWidth += availHeight;
          availHeight = availWidth - availHeight;
          availWidth -= availHeight;
        }
        var width = Math.floor(availWidth / this._spacingX) - 1;
        var height = Math.floor((availHeight - 2 * this._hexSize) / this._spacingY + 1);
        return [width, height];
      };
      _proto4.computeFontSize = function computeFontSize(availWidth, availHeight) {
        if (this._options.transpose) {
          availWidth += availHeight;
          availHeight = availWidth - availHeight;
          availWidth -= availHeight;
        }
        var hexSizeWidth = 2 * availWidth / ((this._options.width + 1) * Math.sqrt(3)) - 1;
        var hexSizeHeight = availHeight / (2 + 1.5 * (this._options.height - 1));
        var hexSize = Math.min(hexSizeWidth, hexSizeHeight);
        var oldFont = this._ctx.font;
        this._ctx.font = "100px " + this._options.fontFamily;
        var width = Math.ceil(this._ctx.measureText("W").width);
        this._ctx.font = oldFont;
        var ratio = width / 100;
        hexSize = Math.floor(hexSize) + 1;
        var fontSize = 2 * hexSize / (this._options.spacing * (1 + ratio / Math.sqrt(3)));
        return Math.ceil(fontSize) - 1;
      };
      _proto4._normalizedEventToPosition = function _normalizedEventToPosition(x, y) {
        var nodeSize;
        if (this._options.transpose) {
          x += y;
          y = x - y;
          x -= y;
          nodeSize = this._ctx.canvas.width;
        } else {
          nodeSize = this._ctx.canvas.height;
        }
        var size = nodeSize / this._options.height;
        y = Math.floor(y / size);
        if (mod(y, 2)) {
          x -= this._spacingX;
          x = 1 + 2 * Math.floor(x / (2 * this._spacingX));
        } else {
          x = 2 * Math.floor(x / (2 * this._spacingX));
        }
        return [x, y];
      };
      _proto4._fill = function _fill(cx, cy) {
        var a = this._hexSize;
        var b = this._options.border;
        var ctx = this._ctx;
        ctx.beginPath();
        if (this._options.transpose) {
          ctx.moveTo(cx - a + b, cy);
          ctx.lineTo(cx - a / 2 + b, cy + this._spacingX - b);
          ctx.lineTo(cx + a / 2 - b, cy + this._spacingX - b);
          ctx.lineTo(cx + a - b, cy);
          ctx.lineTo(cx + a / 2 - b, cy - this._spacingX + b);
          ctx.lineTo(cx - a / 2 + b, cy - this._spacingX + b);
          ctx.lineTo(cx - a + b, cy);
        } else {
          ctx.moveTo(cx, cy - a + b);
          ctx.lineTo(cx + this._spacingX - b, cy - a / 2 + b);
          ctx.lineTo(cx + this._spacingX - b, cy + a / 2 - b);
          ctx.lineTo(cx, cy + a - b);
          ctx.lineTo(cx - this._spacingX + b, cy + a / 2 - b);
          ctx.lineTo(cx - this._spacingX + b, cy - a / 2 + b);
          ctx.lineTo(cx, cy - a + b);
        }
        ctx.fill();
      };
      _proto4._updateSize = function _updateSize() {
        var opts = this._options;
        var charWidth = Math.ceil(this._ctx.measureText("W").width);
        this._hexSize = Math.floor(opts.spacing * (opts.fontSize + charWidth / Math.sqrt(3)) / 2);
        this._spacingX = this._hexSize * Math.sqrt(3) / 2;
        this._spacingY = this._hexSize * 1.5;
        var xprop;
        var yprop;
        if (opts.transpose) {
          xprop = "height";
          yprop = "width";
        } else {
          xprop = "width";
          yprop = "height";
        }
        this._ctx.canvas[xprop] = Math.ceil((opts.width + 1) * this._spacingX);
        this._ctx.canvas[yprop] = Math.ceil((opts.height - 1) * this._spacingY + 2 * this._hexSize);
      };
      return Hex2;
    }(Canvas);
    var Rect = function() {
      var Rect2 = function(_Canvas2) {
        _inheritsLoose(Rect3, _Canvas2);
        function Rect3() {
          var _this3;
          _this3 = _Canvas2.call(this) || this;
          _this3._spacingX = 0;
          _this3._spacingY = 0;
          _this3._canvasCache = {};
          return _this3;
        }
        var _proto5 = Rect3.prototype;
        _proto5.setOptions = function setOptions(options) {
          _Canvas2.prototype.setOptions.call(this, options);
          this._canvasCache = {};
        };
        _proto5.draw = function draw(data, clearBefore) {
          if (Rect3.cache) {
            this._drawWithCache(data);
          } else {
            this._drawNoCache(data, clearBefore);
          }
        };
        _proto5._drawWithCache = function _drawWithCache(data) {
          var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
          var hash = "" + ch + fg + bg;
          var canvas;
          if (hash in this._canvasCache) {
            canvas = this._canvasCache[hash];
          } else {
            var b = this._options.border;
            canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = this._spacingX;
            canvas.height = this._spacingY;
            ctx.fillStyle = bg;
            ctx.fillRect(b, b, canvas.width - b, canvas.height - b);
            if (ch) {
              ctx.fillStyle = fg;
              ctx.font = this._ctx.font;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              var chars = [].concat(ch);
              for (var i = 0;i < chars.length; i++) {
                ctx.fillText(chars[i], this._spacingX / 2, Math.ceil(this._spacingY / 2));
              }
            }
            this._canvasCache[hash] = canvas;
          }
          this._ctx.drawImage(canvas, x * this._spacingX, y * this._spacingY);
        };
        _proto5._drawNoCache = function _drawNoCache(data, clearBefore) {
          var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
          if (clearBefore) {
            var b = this._options.border;
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(x * this._spacingX + b, y * this._spacingY + b, this._spacingX - b, this._spacingY - b);
          }
          if (!ch) {
            return;
          }
          this._ctx.fillStyle = fg;
          var chars = [].concat(ch);
          for (var i = 0;i < chars.length; i++) {
            this._ctx.fillText(chars[i], (x + 0.5) * this._spacingX, Math.ceil((y + 0.5) * this._spacingY));
          }
        };
        _proto5.computeSize = function computeSize(availWidth, availHeight) {
          var width = Math.floor(availWidth / this._spacingX);
          var height = Math.floor(availHeight / this._spacingY);
          return [width, height];
        };
        _proto5.computeFontSize = function computeFontSize(availWidth, availHeight) {
          var boxWidth = Math.floor(availWidth / this._options.width);
          var boxHeight = Math.floor(availHeight / this._options.height);
          var oldFont = this._ctx.font;
          this._ctx.font = "100px " + this._options.fontFamily;
          var width = Math.ceil(this._ctx.measureText("W").width);
          this._ctx.font = oldFont;
          var ratio = width / 100;
          var widthFraction = ratio * boxHeight / boxWidth;
          if (widthFraction > 1) {
            boxHeight = Math.floor(boxHeight / widthFraction);
          }
          return Math.floor(boxHeight / this._options.spacing);
        };
        _proto5._normalizedEventToPosition = function _normalizedEventToPosition(x, y) {
          return [Math.floor(x / this._spacingX), Math.floor(y / this._spacingY)];
        };
        _proto5._updateSize = function _updateSize() {
          var opts = this._options;
          var charWidth = Math.ceil(this._ctx.measureText("W").width);
          this._spacingX = Math.ceil(opts.spacing * charWidth);
          this._spacingY = Math.ceil(opts.spacing * opts.fontSize);
          if (opts.forceSquareRatio) {
            this._spacingX = this._spacingY = Math.max(this._spacingX, this._spacingY);
          }
          this._ctx.canvas.width = opts.width * this._spacingX;
          this._ctx.canvas.height = opts.height * this._spacingY;
        };
        return Rect3;
      }(Canvas);
      Rect2.cache = false;
      return Rect2;
    }();
    var Tile3 = function(_Canvas3) {
      _inheritsLoose(Tile4, _Canvas3);
      function Tile4() {
        var _this4;
        _this4 = _Canvas3.call(this) || this;
        _this4._colorCanvas = document.createElement("canvas");
        return _this4;
      }
      var _proto6 = Tile4.prototype;
      _proto6.draw = function draw(data, clearBefore) {
        var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
        var tileWidth = this._options.tileWidth;
        var tileHeight = this._options.tileHeight;
        if (clearBefore) {
          if (this._options.tileColorize) {
            this._ctx.clearRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
          } else {
            this._ctx.fillStyle = bg;
            this._ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
          }
        }
        if (!ch) {
          return;
        }
        var chars = [].concat(ch);
        var fgs = [].concat(fg);
        var bgs = [].concat(bg);
        for (var i = 0;i < chars.length; i++) {
          var tile = this._options.tileMap[chars[i]];
          if (!tile) {
            throw new Error("Char \"" + chars[i] + "\" not found in tileMap");
          }
          if (this._options.tileColorize) {
            var canvas = this._colorCanvas;
            var context = canvas.getContext("2d");
            context.globalCompositeOperation = "source-over";
            context.clearRect(0, 0, tileWidth, tileHeight);
            var _fg = fgs[i];
            var _bg = bgs[i];
            context.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
            if (_fg != "transparent") {
              context.fillStyle = _fg;
              context.globalCompositeOperation = "source-atop";
              context.fillRect(0, 0, tileWidth, tileHeight);
            }
            if (_bg != "transparent") {
              context.fillStyle = _bg;
              context.globalCompositeOperation = "destination-over";
              context.fillRect(0, 0, tileWidth, tileHeight);
            }
            this._ctx.drawImage(canvas, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
          } else {
            this._ctx.drawImage(this._options.tileSet, tile[0], tile[1], tileWidth, tileHeight, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
          }
        }
      };
      _proto6.computeSize = function computeSize(availWidth, availHeight) {
        var width = Math.floor(availWidth / this._options.tileWidth);
        var height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
      };
      _proto6.computeFontSize = function computeFontSize() {
        throw new Error("Tile backend does not understand font size");
      };
      _proto6._normalizedEventToPosition = function _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
      };
      _proto6._updateSize = function _updateSize() {
        var opts = this._options;
        this._ctx.canvas.width = opts.width * opts.tileWidth;
        this._ctx.canvas.height = opts.height * opts.tileHeight;
        this._colorCanvas.width = opts.tileWidth;
        this._colorCanvas.height = opts.tileHeight;
      };
      return Tile4;
    }(Canvas);
    function fromString(str) {
      var cached, r;
      if (str in CACHE) {
        cached = CACHE[str];
      } else {
        if (str.charAt(0) == "#") {
          var matched = str.match(/[0-9a-f]/gi) || [];
          var values = matched.map(function(x) {
            return parseInt(x, 16);
          });
          if (values.length == 3) {
            cached = values.map(function(x) {
              return x * 17;
            });
          } else {
            for (var i = 0;i < 3; i++) {
              values[i + 1] += 16 * values[i];
              values.splice(i, 1);
            }
            cached = values;
          }
        } else if (r = str.match(/rgb\(([0-9, ]+)\)/i)) {
          cached = r[1].split(/\s*,\s*/).map(function(x) {
            return parseInt(x);
          });
        } else {
          cached = [0, 0, 0];
        }
        CACHE[str] = cached;
      }
      return cached.slice();
    }
    function add(color1) {
      var result = color1.slice();
      for (var _len2 = arguments.length, colors = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;_key2 < _len2; _key2++) {
        colors[_key2 - 1] = arguments[_key2];
      }
      for (var i = 0;i < 3; i++) {
        for (var j = 0;j < colors.length; j++) {
          result[i] += colors[j][i];
        }
      }
      return result;
    }
    function add_(color1) {
      for (var _len3 = arguments.length, colors = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;_key3 < _len3; _key3++) {
        colors[_key3 - 1] = arguments[_key3];
      }
      for (var i = 0;i < 3; i++) {
        for (var j = 0;j < colors.length; j++) {
          color1[i] += colors[j][i];
        }
      }
      return color1;
    }
    function multiply(color1) {
      var result = color1.slice();
      for (var _len4 = arguments.length, colors = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;_key4 < _len4; _key4++) {
        colors[_key4 - 1] = arguments[_key4];
      }
      for (var i = 0;i < 3; i++) {
        for (var j = 0;j < colors.length; j++) {
          result[i] *= colors[j][i] / 255;
        }
        result[i] = Math.round(result[i]);
      }
      return result;
    }
    function multiply_(color1) {
      for (var _len5 = arguments.length, colors = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;_key5 < _len5; _key5++) {
        colors[_key5 - 1] = arguments[_key5];
      }
      for (var i = 0;i < 3; i++) {
        for (var j = 0;j < colors.length; j++) {
          color1[i] *= colors[j][i] / 255;
        }
        color1[i] = Math.round(color1[i]);
      }
      return color1;
    }
    function interpolate(color1, color2, factor) {
      if (factor === undefined) {
        factor = 0.5;
      }
      var result = color1.slice();
      for (var i = 0;i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    }
    var lerp = interpolate;
    function interpolateHSL(color1, color2, factor) {
      if (factor === undefined) {
        factor = 0.5;
      }
      var hsl1 = rgb2hsl(color1);
      var hsl2 = rgb2hsl(color2);
      for (var i = 0;i < 3; i++) {
        hsl1[i] += factor * (hsl2[i] - hsl1[i]);
      }
      return hsl2rgb(hsl1);
    }
    var lerpHSL = interpolateHSL;
    function randomize(color2, diff) {
      if (!(diff instanceof Array)) {
        diff = Math.round(RNG$1.getNormal(0, diff));
      }
      var result = color2.slice();
      for (var i = 0;i < 3; i++) {
        result[i] += diff instanceof Array ? Math.round(RNG$1.getNormal(0, diff[i])) : diff;
      }
      return result;
    }
    function rgb2hsl(color2) {
      var r = color2[0] / 255;
      var g = color2[1] / 255;
      var b = color2[2] / 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h = 0, s, l = (max + min) / 2;
      if (max == min) {
        s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    }
    function hue2rgb(p, q, t) {
      if (t < 0)
        t += 1;
      if (t > 1)
        t -= 1;
      if (t < 1 / 6)
        return p + (q - p) * 6 * t;
      if (t < 1 / 2)
        return q;
      if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    function hsl2rgb(color2) {
      var l = color2[2];
      if (color2[1] == 0) {
        l = Math.round(l * 255);
        return [l, l, l];
      } else {
        var s = color2[1];
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        var r = hue2rgb(p, q, color2[0] + 1 / 3);
        var g = hue2rgb(p, q, color2[0]);
        var b = hue2rgb(p, q, color2[0] - 1 / 3);
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
      }
    }
    function toRGB(color2) {
      var clamped = color2.map(function(x) {
        return clamp(x, 0, 255);
      });
      return "rgb(" + clamped.join(",") + ")";
    }
    function toHex(color2) {
      var clamped = color2.map(function(x) {
        return clamp(x, 0, 255).toString(16).padStart(2, "0");
      });
      return "#" + clamped.join("");
    }
    var CACHE = {
      black: [0, 0, 0],
      navy: [0, 0, 128],
      darkblue: [0, 0, 139],
      mediumblue: [0, 0, 205],
      blue: [0, 0, 255],
      darkgreen: [0, 100, 0],
      green: [0, 128, 0],
      teal: [0, 128, 128],
      darkcyan: [0, 139, 139],
      deepskyblue: [0, 191, 255],
      darkturquoise: [0, 206, 209],
      mediumspringgreen: [0, 250, 154],
      lime: [0, 255, 0],
      springgreen: [0, 255, 127],
      aqua: [0, 255, 255],
      cyan: [0, 255, 255],
      midnightblue: [25, 25, 112],
      dodgerblue: [30, 144, 255],
      forestgreen: [34, 139, 34],
      seagreen: [46, 139, 87],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      limegreen: [50, 205, 50],
      mediumseagreen: [60, 179, 113],
      turquoise: [64, 224, 208],
      royalblue: [65, 105, 225],
      steelblue: [70, 130, 180],
      darkslateblue: [72, 61, 139],
      mediumturquoise: [72, 209, 204],
      indigo: [75, 0, 130],
      darkolivegreen: [85, 107, 47],
      cadetblue: [95, 158, 160],
      cornflowerblue: [100, 149, 237],
      mediumaquamarine: [102, 205, 170],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      slateblue: [106, 90, 205],
      olivedrab: [107, 142, 35],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      mediumslateblue: [123, 104, 238],
      lawngreen: [124, 252, 0],
      chartreuse: [127, 255, 0],
      aquamarine: [127, 255, 212],
      maroon: [128, 0, 0],
      purple: [128, 0, 128],
      olive: [128, 128, 0],
      gray: [128, 128, 128],
      grey: [128, 128, 128],
      skyblue: [135, 206, 235],
      lightskyblue: [135, 206, 250],
      blueviolet: [138, 43, 226],
      darkred: [139, 0, 0],
      darkmagenta: [139, 0, 139],
      saddlebrown: [139, 69, 19],
      darkseagreen: [143, 188, 143],
      lightgreen: [144, 238, 144],
      mediumpurple: [147, 112, 216],
      darkviolet: [148, 0, 211],
      palegreen: [152, 251, 152],
      darkorchid: [153, 50, 204],
      yellowgreen: [154, 205, 50],
      sienna: [160, 82, 45],
      brown: [165, 42, 42],
      darkgray: [169, 169, 169],
      darkgrey: [169, 169, 169],
      lightblue: [173, 216, 230],
      greenyellow: [173, 255, 47],
      paleturquoise: [175, 238, 238],
      lightsteelblue: [176, 196, 222],
      powderblue: [176, 224, 230],
      firebrick: [178, 34, 34],
      darkgoldenrod: [184, 134, 11],
      mediumorchid: [186, 85, 211],
      rosybrown: [188, 143, 143],
      darkkhaki: [189, 183, 107],
      silver: [192, 192, 192],
      mediumvioletred: [199, 21, 133],
      indianred: [205, 92, 92],
      peru: [205, 133, 63],
      chocolate: [210, 105, 30],
      tan: [210, 180, 140],
      lightgray: [211, 211, 211],
      lightgrey: [211, 211, 211],
      palevioletred: [216, 112, 147],
      thistle: [216, 191, 216],
      orchid: [218, 112, 214],
      goldenrod: [218, 165, 32],
      crimson: [220, 20, 60],
      gainsboro: [220, 220, 220],
      plum: [221, 160, 221],
      burlywood: [222, 184, 135],
      lightcyan: [224, 255, 255],
      lavender: [230, 230, 250],
      darksalmon: [233, 150, 122],
      violet: [238, 130, 238],
      palegoldenrod: [238, 232, 170],
      lightcoral: [240, 128, 128],
      khaki: [240, 230, 140],
      aliceblue: [240, 248, 255],
      honeydew: [240, 255, 240],
      azure: [240, 255, 255],
      sandybrown: [244, 164, 96],
      wheat: [245, 222, 179],
      beige: [245, 245, 220],
      whitesmoke: [245, 245, 245],
      mintcream: [245, 255, 250],
      ghostwhite: [248, 248, 255],
      salmon: [250, 128, 114],
      antiquewhite: [250, 235, 215],
      linen: [250, 240, 230],
      lightgoldenrodyellow: [250, 250, 210],
      oldlace: [253, 245, 230],
      red: [255, 0, 0],
      fuchsia: [255, 0, 255],
      magenta: [255, 0, 255],
      deeppink: [255, 20, 147],
      orangered: [255, 69, 0],
      tomato: [255, 99, 71],
      hotpink: [255, 105, 180],
      coral: [255, 127, 80],
      darkorange: [255, 140, 0],
      lightsalmon: [255, 160, 122],
      orange: [255, 165, 0],
      lightpink: [255, 182, 193],
      pink: [255, 192, 203],
      gold: [255, 215, 0],
      peachpuff: [255, 218, 185],
      navajowhite: [255, 222, 173],
      moccasin: [255, 228, 181],
      bisque: [255, 228, 196],
      mistyrose: [255, 228, 225],
      blanchedalmond: [255, 235, 205],
      papayawhip: [255, 239, 213],
      lavenderblush: [255, 240, 245],
      seashell: [255, 245, 238],
      cornsilk: [255, 248, 220],
      lemonchiffon: [255, 250, 205],
      floralwhite: [255, 250, 240],
      snow: [255, 250, 250],
      yellow: [255, 255, 0],
      lightyellow: [255, 255, 224],
      ivory: [255, 255, 240],
      white: [255, 255, 255]
    };
    var color = Object.freeze({
      fromString,
      add,
      add_,
      multiply,
      multiply_,
      interpolate,
      lerp,
      interpolateHSL,
      lerpHSL,
      randomize,
      rgb2hsl,
      hsl2rgb,
      toRGB,
      toHex
    });
    var TileGL = function(_Backend2) {
      _inheritsLoose(TileGL2, _Backend2);
      function TileGL2() {
        var _this5;
        _this5 = _Backend2.call(this) || this;
        _this5._uniforms = {};
        try {
          _this5._gl = _this5._initWebGL();
        } catch (e) {
          alert(e.message);
        }
        return _this5;
      }
      TileGL2.isSupported = function isSupported() {
        return !!document.createElement("canvas").getContext("webgl2", {
          preserveDrawingBuffer: true
        });
      };
      var _proto7 = TileGL2.prototype;
      _proto7.schedule = function schedule(cb) {
        requestAnimationFrame(cb);
      };
      _proto7.getContainer = function getContainer() {
        return this._gl.canvas;
      };
      _proto7.setOptions = function setOptions(opts) {
        var _this6 = this;
        _Backend2.prototype.setOptions.call(this, opts);
        this._updateSize();
        var tileSet = this._options.tileSet;
        if (tileSet && "complete" in tileSet && !tileSet.complete) {
          tileSet.addEventListener("load", function() {
            return _this6._updateTexture(tileSet);
          });
        } else {
          this._updateTexture(tileSet);
        }
      };
      _proto7.draw = function draw(data, clearBefore) {
        var gl = this._gl;
        var opts = this._options;
        var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
        var scissorY = gl.canvas.height - (y + 1) * opts.tileHeight;
        gl.scissor(x * opts.tileWidth, scissorY, opts.tileWidth, opts.tileHeight);
        if (clearBefore) {
          if (opts.tileColorize) {
            gl.clearColor(0, 0, 0, 0);
          } else {
            gl.clearColor.apply(gl, parseColor(bg));
          }
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        if (!ch) {
          return;
        }
        var chars = [].concat(ch);
        var bgs = [].concat(bg);
        var fgs = [].concat(fg);
        gl.uniform2fv(this._uniforms["targetPosRel"], [x, y]);
        for (var i = 0;i < chars.length; i++) {
          var tile = this._options.tileMap[chars[i]];
          if (!tile) {
            throw new Error("Char \"" + chars[i] + "\" not found in tileMap");
          }
          gl.uniform1f(this._uniforms["colorize"], opts.tileColorize ? 1 : 0);
          gl.uniform2fv(this._uniforms["tilesetPosAbs"], tile);
          if (opts.tileColorize) {
            gl.uniform4fv(this._uniforms["tint"], parseColor(fgs[i]));
            gl.uniform4fv(this._uniforms["bg"], parseColor(bgs[i]));
          }
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
      };
      _proto7.clear = function clear() {
        var gl = this._gl;
        gl.clearColor.apply(gl, parseColor(this._options.bg));
        gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
      };
      _proto7.computeSize = function computeSize(availWidth, availHeight) {
        var width = Math.floor(availWidth / this._options.tileWidth);
        var height = Math.floor(availHeight / this._options.tileHeight);
        return [width, height];
      };
      _proto7.computeFontSize = function computeFontSize() {
        throw new Error("Tile backend does not understand font size");
      };
      _proto7.eventToPosition = function eventToPosition(x, y) {
        var canvas = this._gl.canvas;
        var rect = canvas.getBoundingClientRect();
        x -= rect.left;
        y -= rect.top;
        x *= canvas.width / rect.width;
        y *= canvas.height / rect.height;
        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
          return [-1, -1];
        }
        return this._normalizedEventToPosition(x, y);
      };
      _proto7._initWebGL = function _initWebGL() {
        var _this7 = this;
        var gl = document.createElement("canvas").getContext("webgl2", {
          preserveDrawingBuffer: true
        });
        window.gl = gl;
        var program = createProgram(gl, VS, FS);
        gl.useProgram(program);
        createQuad(gl);
        UNIFORMS.forEach(function(name) {
          return _this7._uniforms[name] = gl.getUniformLocation(program, name);
        });
        this._program = program;
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.SCISSOR_TEST);
        return gl;
      };
      _proto7._normalizedEventToPosition = function _normalizedEventToPosition(x, y) {
        return [Math.floor(x / this._options.tileWidth), Math.floor(y / this._options.tileHeight)];
      };
      _proto7._updateSize = function _updateSize() {
        var gl = this._gl;
        var opts = this._options;
        var canvasSize = [opts.width * opts.tileWidth, opts.height * opts.tileHeight];
        gl.canvas.width = canvasSize[0];
        gl.canvas.height = canvasSize[1];
        gl.viewport(0, 0, canvasSize[0], canvasSize[1]);
        gl.uniform2fv(this._uniforms["tileSize"], [opts.tileWidth, opts.tileHeight]);
        gl.uniform2fv(this._uniforms["targetSize"], canvasSize);
      };
      _proto7._updateTexture = function _updateTexture(tileSet) {
        createTexture(this._gl, tileSet);
      };
      return TileGL2;
    }(Backend);
    var UNIFORMS = ["targetPosRel", "tilesetPosAbs", "tileSize", "targetSize", "colorize", "bg", "tint"];
    var VS = "\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim();
    var FS = "\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();
    function createProgram(gl, vss, fss) {
      var vs = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vs, vss);
      gl.compileShader(vs);
      if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(vs) || "");
      }
      var fs = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fs, fss);
      gl.compileShader(fs);
      if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(fs) || "");
      }
      var p = gl.createProgram();
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(p) || "");
      }
      return p;
    }
    function createQuad(gl) {
      var pos = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    }
    function createTexture(gl, data) {
      var t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
      return t;
    }
    var colorCache = {};
    function parseColor(color2) {
      if (!(color2 in colorCache)) {
        var parsed;
        if (color2 == "transparent") {
          parsed = [0, 0, 0, 0];
        } else if (color2.indexOf("rgba") > -1) {
          parsed = (color2.match(/[\d.]+/g) || []).map(Number);
          for (var i = 0;i < 3; i++) {
            parsed[i] = parsed[i] / 255;
          }
        } else {
          parsed = fromString(color2).map(function($) {
            return $ / 255;
          });
          parsed.push(1);
        }
        colorCache[color2] = parsed;
      }
      return colorCache[color2];
    }
    function clearToAnsi(bg) {
      return "\x1B[0;48;5;" + termcolor(bg) + "m\x1B[2J";
    }
    function colorToAnsi(fg, bg) {
      return "\x1B[0;38;5;" + termcolor(fg) + ";48;5;" + termcolor(bg) + "m";
    }
    function positionToAnsi(x, y) {
      return "\x1B[" + (y + 1) + ";" + (x + 1) + "H";
    }
    function termcolor(color2) {
      var SRC_COLORS = 256;
      var DST_COLORS = 6;
      var COLOR_RATIO = DST_COLORS / SRC_COLORS;
      var rgb = fromString(color2);
      var r = Math.floor(rgb[0] * COLOR_RATIO);
      var g = Math.floor(rgb[1] * COLOR_RATIO);
      var b = Math.floor(rgb[2] * COLOR_RATIO);
      return r * 36 + g * 6 + b * 1 + 16;
    }
    var Term = function(_Backend3) {
      _inheritsLoose(Term2, _Backend3);
      function Term2() {
        var _this8;
        _this8 = _Backend3.call(this) || this;
        _this8._offset = [0, 0];
        _this8._cursor = [-1, -1];
        _this8._lastColor = "";
        return _this8;
      }
      var _proto8 = Term2.prototype;
      _proto8.schedule = function schedule(cb) {
        setTimeout(cb, 1000 / 60);
      };
      _proto8.setOptions = function setOptions(options) {
        _Backend3.prototype.setOptions.call(this, options);
        var size = [options.width, options.height];
        var avail = this.computeSize();
        this._offset = avail.map(function(val, index2) {
          return Math.floor((val - size[index2]) / 2);
        });
      };
      _proto8.clear = function clear() {
        process.stdout.write(clearToAnsi(this._options.bg));
      };
      _proto8.draw = function draw(data, clearBefore) {
        var x = data[0], y = data[1], ch = data[2], fg = data[3], bg = data[4];
        var dx = this._offset[0] + x;
        var dy = this._offset[1] + y;
        var size = this.computeSize();
        if (dx < 0 || dx >= size[0]) {
          return;
        }
        if (dy < 0 || dy >= size[1]) {
          return;
        }
        if (dx !== this._cursor[0] || dy !== this._cursor[1]) {
          process.stdout.write(positionToAnsi(dx, dy));
          this._cursor[0] = dx;
          this._cursor[1] = dy;
        }
        if (clearBefore) {
          if (!ch) {
            ch = " ";
          }
        }
        if (!ch) {
          return;
        }
        var newColor = colorToAnsi(fg, bg);
        if (newColor !== this._lastColor) {
          process.stdout.write(newColor);
          this._lastColor = newColor;
        }
        if (ch != "\t") {
          var chars = [].concat(ch);
          process.stdout.write(chars[0]);
        }
        this._cursor[0]++;
        if (this._cursor[0] >= size[0]) {
          this._cursor[0] = 0;
          this._cursor[1]++;
        }
      };
      _proto8.computeFontSize = function computeFontSize() {
        throw new Error("Terminal backend has no notion of font size");
      };
      _proto8.eventToPosition = function eventToPosition(x, y) {
        return [x, y];
      };
      _proto8.computeSize = function computeSize() {
        return [process.stdout.columns, process.stdout.rows];
      };
      return Term2;
    }(Backend);
    var RE_COLORS = /%([bc]){([^}]*)}/g;
    var TYPE_TEXT = 0;
    var TYPE_NEWLINE = 1;
    var TYPE_FG = 2;
    var TYPE_BG = 3;
    function measure(str, maxWidth) {
      var result = {
        width: 0,
        height: 1
      };
      var tokens = tokenize(str, maxWidth);
      var lineWidth = 0;
      for (var i = 0;i < tokens.length; i++) {
        var token = tokens[i];
        switch (token.type) {
          case TYPE_TEXT:
            lineWidth += token.value.length;
            break;
          case TYPE_NEWLINE:
            result.height++;
            result.width = Math.max(result.width, lineWidth);
            lineWidth = 0;
            break;
        }
      }
      result.width = Math.max(result.width, lineWidth);
      return result;
    }
    function tokenize(str, maxWidth) {
      var result = [];
      var offset = 0;
      str.replace(RE_COLORS, function(match, type, name, index2) {
        var part2 = str.substring(offset, index2);
        if (part2.length) {
          result.push({
            type: TYPE_TEXT,
            value: part2
          });
        }
        result.push({
          type: type == "c" ? TYPE_FG : TYPE_BG,
          value: name.trim()
        });
        offset = index2 + match.length;
        return "";
      });
      var part = str.substring(offset);
      if (part.length) {
        result.push({
          type: TYPE_TEXT,
          value: part
        });
      }
      return breakLines(result, maxWidth);
    }
    function breakLines(tokens, maxWidth) {
      if (!maxWidth) {
        maxWidth = Infinity;
      }
      var i = 0;
      var lineLength = 0;
      var lastTokenWithSpace = -1;
      while (i < tokens.length) {
        var token = tokens[i];
        if (token.type == TYPE_NEWLINE) {
          lineLength = 0;
          lastTokenWithSpace = -1;
        }
        if (token.type != TYPE_TEXT) {
          i++;
          continue;
        }
        while (lineLength == 0 && token.value.charAt(0) == " ") {
          token.value = token.value.substring(1);
        }
        var _index2 = token.value.indexOf("\n");
        if (_index2 != -1) {
          token.value = breakInsideToken(tokens, i, _index2, true);
          var arr = token.value.split("");
          while (arr.length && arr[arr.length - 1] == " ") {
            arr.pop();
          }
          token.value = arr.join("");
        }
        if (!token.value.length) {
          tokens.splice(i, 1);
          continue;
        }
        if (lineLength + token.value.length > maxWidth) {
          var _index3 = -1;
          while (true) {
            var nextIndex = token.value.indexOf(" ", _index3 + 1);
            if (nextIndex == -1) {
              break;
            }
            if (lineLength + nextIndex > maxWidth) {
              break;
            }
            _index3 = nextIndex;
          }
          if (_index3 != -1) {
            token.value = breakInsideToken(tokens, i, _index3, true);
          } else if (lastTokenWithSpace != -1) {
            var _token = tokens[lastTokenWithSpace];
            var breakIndex = _token.value.lastIndexOf(" ");
            _token.value = breakInsideToken(tokens, lastTokenWithSpace, breakIndex, true);
            i = lastTokenWithSpace;
          } else {
            token.value = breakInsideToken(tokens, i, maxWidth - lineLength, false);
          }
        } else {
          lineLength += token.value.length;
          if (token.value.indexOf(" ") != -1) {
            lastTokenWithSpace = i;
          }
        }
        i++;
      }
      tokens.push({
        type: TYPE_NEWLINE
      });
      var lastTextToken = null;
      for (var _i = 0;_i < tokens.length; _i++) {
        var _token2 = tokens[_i];
        switch (_token2.type) {
          case TYPE_TEXT:
            lastTextToken = _token2;
            break;
          case TYPE_NEWLINE:
            if (lastTextToken) {
              var _arr = lastTextToken.value.split("");
              while (_arr.length && _arr[_arr.length - 1] == " ") {
                _arr.pop();
              }
              lastTextToken.value = _arr.join("");
            }
            lastTextToken = null;
            break;
        }
      }
      tokens.pop();
      return tokens;
    }
    function breakInsideToken(tokens, tokenIndex, breakIndex, removeBreakChar) {
      var newBreakToken = {
        type: TYPE_NEWLINE
      };
      var newTextToken = {
        type: TYPE_TEXT,
        value: tokens[tokenIndex].value.substring(breakIndex + (removeBreakChar ? 1 : 0))
      };
      tokens.splice(tokenIndex + 1, 0, newBreakToken, newTextToken);
      return tokens[tokenIndex].value.substring(0, breakIndex);
    }
    var text = Object.freeze({
      TYPE_TEXT,
      TYPE_NEWLINE,
      TYPE_FG,
      TYPE_BG,
      measure,
      tokenize
    });
    var DEFAULT_WIDTH = 80;
    var DEFAULT_HEIGHT = 25;
    var DIRS = {
      4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
      8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
      6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
    };
    var KEYS = {
      VK_CANCEL: 3,
      VK_HELP: 6,
      VK_BACK_SPACE: 8,
      VK_TAB: 9,
      VK_CLEAR: 12,
      VK_RETURN: 13,
      VK_ENTER: 14,
      VK_SHIFT: 16,
      VK_CONTROL: 17,
      VK_ALT: 18,
      VK_PAUSE: 19,
      VK_CAPS_LOCK: 20,
      VK_ESCAPE: 27,
      VK_SPACE: 32,
      VK_PAGE_UP: 33,
      VK_PAGE_DOWN: 34,
      VK_END: 35,
      VK_HOME: 36,
      VK_LEFT: 37,
      VK_UP: 38,
      VK_RIGHT: 39,
      VK_DOWN: 40,
      VK_PRINTSCREEN: 44,
      VK_INSERT: 45,
      VK_DELETE: 46,
      VK_0: 48,
      VK_1: 49,
      VK_2: 50,
      VK_3: 51,
      VK_4: 52,
      VK_5: 53,
      VK_6: 54,
      VK_7: 55,
      VK_8: 56,
      VK_9: 57,
      VK_COLON: 58,
      VK_SEMICOLON: 59,
      VK_LESS_THAN: 60,
      VK_EQUALS: 61,
      VK_GREATER_THAN: 62,
      VK_QUESTION_MARK: 63,
      VK_AT: 64,
      VK_A: 65,
      VK_B: 66,
      VK_C: 67,
      VK_D: 68,
      VK_E: 69,
      VK_F: 70,
      VK_G: 71,
      VK_H: 72,
      VK_I: 73,
      VK_J: 74,
      VK_K: 75,
      VK_L: 76,
      VK_M: 77,
      VK_N: 78,
      VK_O: 79,
      VK_P: 80,
      VK_Q: 81,
      VK_R: 82,
      VK_S: 83,
      VK_T: 84,
      VK_U: 85,
      VK_V: 86,
      VK_W: 87,
      VK_X: 88,
      VK_Y: 89,
      VK_Z: 90,
      VK_CONTEXT_MENU: 93,
      VK_NUMPAD0: 96,
      VK_NUMPAD1: 97,
      VK_NUMPAD2: 98,
      VK_NUMPAD3: 99,
      VK_NUMPAD4: 100,
      VK_NUMPAD5: 101,
      VK_NUMPAD6: 102,
      VK_NUMPAD7: 103,
      VK_NUMPAD8: 104,
      VK_NUMPAD9: 105,
      VK_MULTIPLY: 106,
      VK_ADD: 107,
      VK_SEPARATOR: 108,
      VK_SUBTRACT: 109,
      VK_DECIMAL: 110,
      VK_DIVIDE: 111,
      VK_F1: 112,
      VK_F2: 113,
      VK_F3: 114,
      VK_F4: 115,
      VK_F5: 116,
      VK_F6: 117,
      VK_F7: 118,
      VK_F8: 119,
      VK_F9: 120,
      VK_F10: 121,
      VK_F11: 122,
      VK_F12: 123,
      VK_F13: 124,
      VK_F14: 125,
      VK_F15: 126,
      VK_F16: 127,
      VK_F17: 128,
      VK_F18: 129,
      VK_F19: 130,
      VK_F20: 131,
      VK_F21: 132,
      VK_F22: 133,
      VK_F23: 134,
      VK_F24: 135,
      VK_NUM_LOCK: 144,
      VK_SCROLL_LOCK: 145,
      VK_CIRCUMFLEX: 160,
      VK_EXCLAMATION: 161,
      VK_DOUBLE_QUOTE: 162,
      VK_HASH: 163,
      VK_DOLLAR: 164,
      VK_PERCENT: 165,
      VK_AMPERSAND: 166,
      VK_UNDERSCORE: 167,
      VK_OPEN_PAREN: 168,
      VK_CLOSE_PAREN: 169,
      VK_ASTERISK: 170,
      VK_PLUS: 171,
      VK_PIPE: 172,
      VK_HYPHEN_MINUS: 173,
      VK_OPEN_CURLY_BRACKET: 174,
      VK_CLOSE_CURLY_BRACKET: 175,
      VK_TILDE: 176,
      VK_COMMA: 188,
      VK_PERIOD: 190,
      VK_SLASH: 191,
      VK_BACK_QUOTE: 192,
      VK_OPEN_BRACKET: 219,
      VK_BACK_SLASH: 220,
      VK_CLOSE_BRACKET: 221,
      VK_QUOTE: 222,
      VK_META: 224,
      VK_ALTGR: 225,
      VK_WIN: 91,
      VK_KANA: 21,
      VK_HANGUL: 21,
      VK_EISU: 22,
      VK_JUNJA: 23,
      VK_FINAL: 24,
      VK_HANJA: 25,
      VK_KANJI: 25,
      VK_CONVERT: 28,
      VK_NONCONVERT: 29,
      VK_ACCEPT: 30,
      VK_MODECHANGE: 31,
      VK_SELECT: 41,
      VK_PRINT: 42,
      VK_EXECUTE: 43,
      VK_SLEEP: 95
    };
    var BACKENDS = {
      hex: Hex,
      rect: Rect,
      tile: Tile3,
      "tile-gl": TileGL,
      term: Term
    };
    var DEFAULT_OPTIONS = {
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      transpose: false,
      layout: "rect",
      fontSize: 15,
      spacing: 1,
      border: 0,
      forceSquareRatio: false,
      fontFamily: "monospace",
      fontStyle: "",
      fg: "#ccc",
      bg: "#000",
      tileWidth: 32,
      tileHeight: 32,
      tileMap: {},
      tileSet: null,
      tileColorize: false
    };
    var Display = function() {
      var Display2 = function() {
        function Display3(options) {
          if (options === undefined) {
            options = {};
          }
          this._data = {};
          this._dirty = false;
          this._options = {};
          options = Object.assign({}, DEFAULT_OPTIONS, options);
          this.setOptions(options);
          this.DEBUG = this.DEBUG.bind(this);
          this._tick = this._tick.bind(this);
          this._backend.schedule(this._tick);
        }
        var _proto9 = Display3.prototype;
        _proto9.DEBUG = function DEBUG(x, y, what) {
          var colors = [this._options.bg, this._options.fg];
          this.draw(x, y, null, null, colors[what % colors.length]);
        };
        _proto9.clear = function clear() {
          this._data = {};
          this._dirty = true;
        };
        _proto9.setOptions = function setOptions(options) {
          Object.assign(this._options, options);
          if (options.width || options.height || options.fontSize || options.fontFamily || options.spacing || options.layout) {
            if (options.layout) {
              var ctor = BACKENDS[options.layout];
              this._backend = new ctor;
            }
            this._backend.setOptions(this._options);
            this._dirty = true;
          }
          return this;
        };
        _proto9.getOptions = function getOptions() {
          return this._options;
        };
        _proto9.getContainer = function getContainer() {
          return this._backend.getContainer();
        };
        _proto9.computeSize = function computeSize(availWidth, availHeight) {
          return this._backend.computeSize(availWidth, availHeight);
        };
        _proto9.computeFontSize = function computeFontSize(availWidth, availHeight) {
          return this._backend.computeFontSize(availWidth, availHeight);
        };
        _proto9.computeTileSize = function computeTileSize(availWidth, availHeight) {
          var width = Math.floor(availWidth / this._options.width);
          var height = Math.floor(availHeight / this._options.height);
          return [width, height];
        };
        _proto9.eventToPosition = function eventToPosition(e) {
          var x, y;
          if ("touches" in e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
          } else {
            x = e.clientX;
            y = e.clientY;
          }
          return this._backend.eventToPosition(x, y);
        };
        _proto9.draw = function draw(x, y, ch, fg, bg) {
          if (!fg) {
            fg = this._options.fg;
          }
          if (!bg) {
            bg = this._options.bg;
          }
          var key = x + "," + y;
          this._data[key] = [x, y, ch, fg, bg];
          if (this._dirty === true) {
            return;
          }
          if (!this._dirty) {
            this._dirty = {};
          }
          this._dirty[key] = true;
        };
        _proto9.drawOver = function drawOver(x, y, ch, fg, bg) {
          var key = x + "," + y;
          var existing = this._data[key];
          if (existing) {
            existing[2] = ch || existing[2];
            existing[3] = fg || existing[3];
            existing[4] = bg || existing[4];
          } else {
            this.draw(x, y, ch, fg, bg);
          }
        };
        _proto9.drawText = function drawText(x, y, text2, maxWidth) {
          var fg = null;
          var bg = null;
          var cx = x;
          var cy = y;
          var lines = 1;
          if (!maxWidth) {
            maxWidth = this._options.width - x;
          }
          var tokens = tokenize(text2, maxWidth);
          while (tokens.length) {
            var token = tokens.shift();
            switch (token.type) {
              case TYPE_TEXT:
                var isSpace = false, isPrevSpace = false, isFullWidth = false, isPrevFullWidth = false;
                for (var i = 0;i < token.value.length; i++) {
                  var cc = token.value.charCodeAt(i);
                  var c = token.value.charAt(i);
                  if (this._options.layout === "term") {
                    var cch = cc >> 8;
                    var isCJK = cch === 17 || cch >= 46 && cch <= 159 || cch >= 172 && cch <= 215 || cc >= 43360 && cc <= 43391;
                    if (isCJK) {
                      this.draw(cx + 0, cy, c, fg, bg);
                      this.draw(cx + 1, cy, "\t", fg, bg);
                      cx += 2;
                      continue;
                    }
                  }
                  isFullWidth = cc > 65280 && cc < 65377 || cc > 65500 && cc < 65512 || cc > 65518;
                  isSpace = c.charCodeAt(0) == 32 || c.charCodeAt(0) == 12288;
                  if (isPrevFullWidth && !isFullWidth && !isSpace) {
                    cx++;
                  }
                  if (isFullWidth && !isPrevSpace) {
                    cx++;
                  }
                  this.draw(cx++, cy, c, fg, bg);
                  isPrevSpace = isSpace;
                  isPrevFullWidth = isFullWidth;
                }
                break;
              case TYPE_FG:
                fg = token.value || null;
                break;
              case TYPE_BG:
                bg = token.value || null;
                break;
              case TYPE_NEWLINE:
                cx = x;
                cy++;
                lines++;
                break;
            }
          }
          return lines;
        };
        _proto9._tick = function _tick() {
          this._backend.schedule(this._tick);
          if (!this._dirty) {
            return;
          }
          if (this._dirty === true) {
            this._backend.clear();
            for (var id in this._data) {
              this._draw(id, false);
            }
          } else {
            for (var key in this._dirty) {
              this._draw(key, true);
            }
          }
          this._dirty = false;
        };
        _proto9._draw = function _draw(key, clearBefore) {
          var data = this._data[key];
          if (data[4] != this._options.bg) {
            clearBefore = true;
          }
          this._backend.draw(data, clearBefore);
        };
        return Display3;
      }();
      Display2.Rect = Rect;
      Display2.Hex = Hex;
      Display2.Tile = Tile3;
      Display2.TileGL = TileGL;
      Display2.Term = Term;
      return Display2;
    }();
    var StringGenerator = function() {
      function StringGenerator2(options) {
        this._options = {
          words: false,
          order: 3,
          prior: 0.001
        };
        Object.assign(this._options, options);
        this._boundary = String.fromCharCode(0);
        this._suffix = this._boundary;
        this._prefix = [];
        for (var i = 0;i < this._options.order; i++) {
          this._prefix.push(this._boundary);
        }
        this._priorValues = {};
        this._priorValues[this._boundary] = this._options.prior;
        this._data = {};
      }
      var _proto10 = StringGenerator2.prototype;
      _proto10.clear = function clear() {
        this._data = {};
        this._priorValues = {};
      };
      _proto10.generate = function generate() {
        var result = [this._sample(this._prefix)];
        while (result[result.length - 1] != this._boundary) {
          result.push(this._sample(result));
        }
        return this._join(result.slice(0, -1));
      };
      _proto10.observe = function observe(string) {
        var tokens = this._split(string);
        for (var i = 0;i < tokens.length; i++) {
          this._priorValues[tokens[i]] = this._options.prior;
        }
        tokens = this._prefix.concat(tokens).concat(this._suffix);
        for (var _i2 = this._options.order;_i2 < tokens.length; _i2++) {
          var context = tokens.slice(_i2 - this._options.order, _i2);
          var event = tokens[_i2];
          for (var j = 0;j < context.length; j++) {
            var subcontext = context.slice(j);
            this._observeEvent(subcontext, event);
          }
        }
      };
      _proto10.getStats = function getStats() {
        var parts = [];
        var priorCount = Object.keys(this._priorValues).length;
        priorCount--;
        parts.push("distinct samples: " + priorCount);
        var dataCount = Object.keys(this._data).length;
        var eventCount = 0;
        for (var p in this._data) {
          eventCount += Object.keys(this._data[p]).length;
        }
        parts.push("dictionary size (contexts): " + dataCount);
        parts.push("dictionary size (events): " + eventCount);
        return parts.join(", ");
      };
      _proto10._split = function _split(str) {
        return str.split(this._options.words ? /\s+/ : "");
      };
      _proto10._join = function _join(arr) {
        return arr.join(this._options.words ? " " : "");
      };
      _proto10._observeEvent = function _observeEvent(context, event) {
        var key = this._join(context);
        if (!(key in this._data)) {
          this._data[key] = {};
        }
        var data = this._data[key];
        if (!(event in data)) {
          data[event] = 0;
        }
        data[event]++;
      };
      _proto10._sample = function _sample(context) {
        context = this._backoff(context);
        var key = this._join(context);
        var data = this._data[key];
        var available = {};
        if (this._options.prior) {
          for (var event in this._priorValues) {
            available[event] = this._priorValues[event];
          }
          for (var _event in data) {
            available[_event] += data[_event];
          }
        } else {
          available = data;
        }
        return RNG$1.getWeightedValue(available);
      };
      _proto10._backoff = function _backoff(context) {
        if (context.length > this._options.order) {
          context = context.slice(-this._options.order);
        } else if (context.length < this._options.order) {
          context = this._prefix.slice(0, this._options.order - context.length).concat(context);
        }
        while (!(this._join(context) in this._data) && context.length > 0) {
          context = context.slice(1);
        }
        return context;
      };
      return StringGenerator2;
    }();
    var MinHeap = function() {
      function MinHeap2() {
        this.heap = [];
        this.timestamp = 0;
      }
      var _proto11 = MinHeap2.prototype;
      _proto11.lessThan = function lessThan(a, b) {
        return a.key == b.key ? a.timestamp < b.timestamp : a.key < b.key;
      };
      _proto11.shift = function shift(v) {
        this.heap = this.heap.map(function(_ref) {
          var { key, value, timestamp } = _ref;
          return {
            key: key + v,
            value,
            timestamp
          };
        });
      };
      _proto11.len = function len() {
        return this.heap.length;
      };
      _proto11.push = function push(value, key) {
        this.timestamp += 1;
        var loc = this.len();
        this.heap.push({
          value,
          timestamp: this.timestamp,
          key
        });
        this.updateUp(loc);
      };
      _proto11.pop = function pop() {
        if (this.len() == 0) {
          throw new Error("no element to pop");
        }
        var top = this.heap[0];
        if (this.len() > 1) {
          this.heap[0] = this.heap.pop();
          this.updateDown(0);
        } else {
          this.heap.pop();
        }
        return top;
      };
      _proto11.find = function find(v) {
        for (var i = 0;i < this.len(); i++) {
          if (v == this.heap[i].value) {
            return this.heap[i];
          }
        }
        return null;
      };
      _proto11.remove = function remove(v) {
        var index2 = null;
        for (var i = 0;i < this.len(); i++) {
          if (v == this.heap[i].value) {
            index2 = i;
          }
        }
        if (index2 === null) {
          return false;
        }
        if (this.len() > 1) {
          var last = this.heap.pop();
          if (last.value != v) {
            this.heap[index2] = last;
            this.updateDown(index2);
          }
          return true;
        } else {
          this.heap.pop();
        }
        return true;
      };
      _proto11.parentNode = function parentNode(x) {
        return Math.floor((x - 1) / 2);
      };
      _proto11.leftChildNode = function leftChildNode(x) {
        return 2 * x + 1;
      };
      _proto11.rightChildNode = function rightChildNode(x) {
        return 2 * x + 2;
      };
      _proto11.existNode = function existNode(x) {
        return x >= 0 && x < this.heap.length;
      };
      _proto11.swap = function swap(x, y) {
        var t = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = t;
      };
      _proto11.minNode = function minNode(numbers) {
        var validnumbers = numbers.filter(this.existNode.bind(this));
        var minimal = validnumbers[0];
        for (var _iterator = validnumbers, _isArray = Array.isArray(_iterator), _i3 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();; ) {
          var _ref2;
          if (_isArray) {
            if (_i3 >= _iterator.length)
              break;
            _ref2 = _iterator[_i3++];
          } else {
            _i3 = _iterator.next();
            if (_i3.done)
              break;
            _ref2 = _i3.value;
          }
          var i = _ref2;
          if (this.lessThan(this.heap[i], this.heap[minimal])) {
            minimal = i;
          }
        }
        return minimal;
      };
      _proto11.updateUp = function updateUp(x) {
        if (x == 0) {
          return;
        }
        var parent = this.parentNode(x);
        if (this.existNode(parent) && this.lessThan(this.heap[x], this.heap[parent])) {
          this.swap(x, parent);
          this.updateUp(parent);
        }
      };
      _proto11.updateDown = function updateDown(x) {
        var leftChild = this.leftChildNode(x);
        var rightChild = this.rightChildNode(x);
        if (!this.existNode(leftChild)) {
          return;
        }
        var m = this.minNode([x, leftChild, rightChild]);
        if (m != x) {
          this.swap(x, m);
          this.updateDown(m);
        }
      };
      _proto11.debugPrint = function debugPrint() {
        console.log(this.heap);
      };
      return MinHeap2;
    }();
    var EventQueue = function() {
      function EventQueue2() {
        this._time = 0;
        this._events = new MinHeap;
      }
      var _proto12 = EventQueue2.prototype;
      _proto12.getTime = function getTime() {
        return this._time;
      };
      _proto12.clear = function clear() {
        this._events = new MinHeap;
        return this;
      };
      _proto12.add = function add(event, time) {
        this._events.push(event, time);
      };
      _proto12.get = function get() {
        if (!this._events.len()) {
          return null;
        }
        var _this$_events$pop = this._events.pop(), time = _this$_events$pop.key, event = _this$_events$pop.value;
        if (time > 0) {
          this._time += time;
          this._events.shift(-time);
        }
        return event;
      };
      _proto12.getEventTime = function getEventTime(event) {
        var r = this._events.find(event);
        if (r) {
          var key = r.key;
          return key;
        }
        return;
      };
      _proto12.remove = function remove(event) {
        return this._events.remove(event);
      };
      return EventQueue2;
    }();
    var Scheduler = function() {
      function Scheduler2() {
        this._queue = new EventQueue;
        this._repeat = [];
        this._current = null;
      }
      var _proto13 = Scheduler2.prototype;
      _proto13.getTime = function getTime() {
        return this._queue.getTime();
      };
      _proto13.add = function add(item3, repeat) {
        if (repeat) {
          this._repeat.push(item3);
        }
        return this;
      };
      _proto13.getTimeOf = function getTimeOf(item3) {
        return this._queue.getEventTime(item3);
      };
      _proto13.clear = function clear() {
        this._queue.clear();
        this._repeat = [];
        this._current = null;
        return this;
      };
      _proto13.remove = function remove(item3) {
        var result = this._queue.remove(item3);
        var index2 = this._repeat.indexOf(item3);
        if (index2 != -1) {
          this._repeat.splice(index2, 1);
        }
        if (this._current == item3) {
          this._current = null;
        }
        return result;
      };
      _proto13.next = function next() {
        this._current = this._queue.get();
        return this._current;
      };
      return Scheduler2;
    }();
    var Simple = function(_Scheduler) {
      _inheritsLoose(Simple2, _Scheduler);
      function Simple2() {
        return _Scheduler.apply(this, arguments) || this;
      }
      var _proto14 = Simple2.prototype;
      _proto14.add = function add(item3, repeat) {
        this._queue.add(item3, 0);
        return _Scheduler.prototype.add.call(this, item3, repeat);
      };
      _proto14.next = function next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
          this._queue.add(this._current, 0);
        }
        return _Scheduler.prototype.next.call(this);
      };
      return Simple2;
    }(Scheduler);
    var Speed = function(_Scheduler2) {
      _inheritsLoose(Speed2, _Scheduler2);
      function Speed2() {
        return _Scheduler2.apply(this, arguments) || this;
      }
      var _proto15 = Speed2.prototype;
      _proto15.add = function add(item3, repeat, time) {
        this._queue.add(item3, time !== undefined ? time : 1 / item3.getSpeed());
        return _Scheduler2.prototype.add.call(this, item3, repeat);
      };
      _proto15.next = function next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
          this._queue.add(this._current, 1 / this._current.getSpeed());
        }
        return _Scheduler2.prototype.next.call(this);
      };
      return Speed2;
    }(Scheduler);
    var Action3 = function(_Scheduler3) {
      _inheritsLoose(Action4, _Scheduler3);
      function Action4() {
        var _this9;
        _this9 = _Scheduler3.call(this) || this;
        _this9._defaultDuration = 1;
        _this9._duration = _this9._defaultDuration;
        return _this9;
      }
      var _proto16 = Action4.prototype;
      _proto16.add = function add(item3, repeat, time) {
        this._queue.add(item3, time || this._defaultDuration);
        return _Scheduler3.prototype.add.call(this, item3, repeat);
      };
      _proto16.clear = function clear() {
        this._duration = this._defaultDuration;
        return _Scheduler3.prototype.clear.call(this);
      };
      _proto16.remove = function remove(item3) {
        if (item3 == this._current) {
          this._duration = this._defaultDuration;
        }
        return _Scheduler3.prototype.remove.call(this, item3);
      };
      _proto16.next = function next() {
        if (this._current !== null && this._repeat.indexOf(this._current) != -1) {
          this._queue.add(this._current, this._duration || this._defaultDuration);
          this._duration = this._defaultDuration;
        }
        return _Scheduler3.prototype.next.call(this);
      };
      _proto16.setDuration = function setDuration(time) {
        if (this._current) {
          this._duration = time;
        }
        return this;
      };
      return Action4;
    }(Scheduler);
    var index = {
      Simple,
      Speed,
      Action: Action3
    };
    var FOV = function() {
      function FOV2(lightPassesCallback, options) {
        if (options === undefined) {
          options = {};
        }
        this._lightPasses = lightPassesCallback;
        this._options = Object.assign({
          topology: 8
        }, options);
      }
      var _proto17 = FOV2.prototype;
      _proto17._getCircle = function _getCircle(cx, cy, r) {
        var result = [];
        var dirs, countFactor, startOffset;
        switch (this._options.topology) {
          case 4:
            countFactor = 1;
            startOffset = [0, 1];
            dirs = [DIRS[8][7], DIRS[8][1], DIRS[8][3], DIRS[8][5]];
            break;
          case 6:
            dirs = DIRS[6];
            countFactor = 1;
            startOffset = [-1, 1];
            break;
          case 8:
            dirs = DIRS[4];
            countFactor = 2;
            startOffset = [-1, 1];
            break;
          default:
            throw new Error("Incorrect topology for FOV computation");
            break;
        }
        var x = cx + startOffset[0] * r;
        var y = cy + startOffset[1] * r;
        for (var i = 0;i < dirs.length; i++) {
          for (var j = 0;j < r * countFactor; j++) {
            result.push([x, y]);
            x += dirs[i][0];
            y += dirs[i][1];
          }
        }
        return result;
      };
      return FOV2;
    }();
    var DiscreteShadowcasting = function(_FOV) {
      _inheritsLoose(DiscreteShadowcasting2, _FOV);
      function DiscreteShadowcasting2() {
        return _FOV.apply(this, arguments) || this;
      }
      var _proto18 = DiscreteShadowcasting2.prototype;
      _proto18.compute = function compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        if (!this._lightPasses(x, y)) {
          return;
        }
        var DATA = [];
        var A, B, cx, cy, blocks;
        for (var r = 1;r <= R; r++) {
          var neighbors = this._getCircle(x, y, r);
          var angle = 360 / neighbors.length;
          for (var i = 0;i < neighbors.length; i++) {
            cx = neighbors[i][0];
            cy = neighbors[i][1];
            A = angle * (i - 0.5);
            B = A + angle;
            blocks = !this._lightPasses(cx, cy);
            if (this._visibleCoords(Math.floor(A), Math.ceil(B), blocks, DATA)) {
              callback(cx, cy, r, 1);
            }
            if (DATA.length == 2 && DATA[0] == 0 && DATA[1] == 360) {
              return;
            }
          }
        }
      };
      _proto18._visibleCoords = function _visibleCoords(A, B, blocks, DATA) {
        if (A < 0) {
          var v1 = this._visibleCoords(0, B, blocks, DATA);
          var v2 = this._visibleCoords(360 + A, 360, blocks, DATA);
          return v1 || v2;
        }
        var index2 = 0;
        while (index2 < DATA.length && DATA[index2] < A) {
          index2++;
        }
        if (index2 == DATA.length) {
          if (blocks) {
            DATA.push(A, B);
          }
          return true;
        }
        var count = 0;
        if (index2 % 2) {
          while (index2 < DATA.length && DATA[index2] < B) {
            index2++;
            count++;
          }
          if (count == 0) {
            return false;
          }
          if (blocks) {
            if (count % 2) {
              DATA.splice(index2 - count, count, B);
            } else {
              DATA.splice(index2 - count, count);
            }
          }
          return true;
        } else {
          while (index2 < DATA.length && DATA[index2] < B) {
            index2++;
            count++;
          }
          if (A == DATA[index2 - count] && count == 1) {
            return false;
          }
          if (blocks) {
            if (count % 2) {
              DATA.splice(index2 - count, count, A);
            } else {
              DATA.splice(index2 - count, count, A, B);
            }
          }
          return true;
        }
      };
      return DiscreteShadowcasting2;
    }(FOV);
    var PreciseShadowcasting = function(_FOV2) {
      _inheritsLoose(PreciseShadowcasting2, _FOV2);
      function PreciseShadowcasting2() {
        return _FOV2.apply(this, arguments) || this;
      }
      var _proto19 = PreciseShadowcasting2.prototype;
      _proto19.compute = function compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        if (!this._lightPasses(x, y)) {
          return;
        }
        var SHADOWS = [];
        var cx, cy, blocks, A1, A2, visibility;
        for (var r = 1;r <= R; r++) {
          var neighbors = this._getCircle(x, y, r);
          var neighborCount = neighbors.length;
          for (var i = 0;i < neighborCount; i++) {
            cx = neighbors[i][0];
            cy = neighbors[i][1];
            A1 = [i ? 2 * i - 1 : 2 * neighborCount - 1, 2 * neighborCount];
            A2 = [2 * i + 1, 2 * neighborCount];
            blocks = !this._lightPasses(cx, cy);
            visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);
            if (visibility) {
              callback(cx, cy, r, visibility);
            }
            if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
              return;
            }
          }
        }
      };
      _proto19._checkVisibility = function _checkVisibility(A1, A2, blocks, SHADOWS) {
        if (A1[0] > A2[0]) {
          var v1 = this._checkVisibility(A1, [A1[1], A1[1]], blocks, SHADOWS);
          var v2 = this._checkVisibility([0, 1], A2, blocks, SHADOWS);
          return (v1 + v2) / 2;
        }
        var index1 = 0, edge1 = false;
        while (index1 < SHADOWS.length) {
          var old = SHADOWS[index1];
          var diff = old[0] * A1[1] - A1[0] * old[1];
          if (diff >= 0) {
            if (diff == 0 && !(index1 % 2)) {
              edge1 = true;
            }
            break;
          }
          index1++;
        }
        var index2 = SHADOWS.length, edge2 = false;
        while (index2--) {
          var _old = SHADOWS[index2];
          var _diff = A2[0] * _old[1] - _old[0] * A2[1];
          if (_diff >= 0) {
            if (_diff == 0 && index2 % 2) {
              edge2 = true;
            }
            break;
          }
        }
        var visible = true;
        if (index1 == index2 && (edge1 || edge2)) {
          visible = false;
        } else if (edge1 && edge2 && index1 + 1 == index2 && index2 % 2) {
          visible = false;
        } else if (index1 > index2 && index1 % 2) {
          visible = false;
        }
        if (!visible) {
          return 0;
        }
        var visibleLength;
        var remove = index2 - index1 + 1;
        if (remove % 2) {
          if (index1 % 2) {
            var P = SHADOWS[index1];
            visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);
            if (blocks) {
              SHADOWS.splice(index1, remove, A2);
            }
          } else {
            var _P = SHADOWS[index2];
            visibleLength = (_P[0] * A1[1] - A1[0] * _P[1]) / (A1[1] * _P[1]);
            if (blocks) {
              SHADOWS.splice(index1, remove, A1);
            }
          }
        } else {
          if (index1 % 2) {
            var P1 = SHADOWS[index1];
            var P2 = SHADOWS[index2];
            visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);
            if (blocks) {
              SHADOWS.splice(index1, remove);
            }
          } else {
            if (blocks) {
              SHADOWS.splice(index1, remove, A1, A2);
            }
            return 1;
          }
        }
        var arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);
        return visibleLength / arcLength;
      };
      return PreciseShadowcasting2;
    }(FOV);
    var OCTANTS = [[-1, 0, 0, 1], [0, -1, 1, 0], [0, -1, -1, 0], [-1, 0, 0, -1], [1, 0, 0, -1], [0, 1, -1, 0], [0, 1, 1, 0], [1, 0, 0, 1]];
    var RecursiveShadowcasting = function(_FOV3) {
      _inheritsLoose(RecursiveShadowcasting2, _FOV3);
      function RecursiveShadowcasting2() {
        return _FOV3.apply(this, arguments) || this;
      }
      var _proto20 = RecursiveShadowcasting2.prototype;
      _proto20.compute = function compute(x, y, R, callback) {
        callback(x, y, 0, 1);
        for (var i = 0;i < OCTANTS.length; i++) {
          this._renderOctant(x, y, OCTANTS[i], R, callback);
        }
      };
      _proto20.compute180 = function compute180(x, y, R, dir, callback) {
        callback(x, y, 0, 1);
        var previousOctant = (dir - 1 + 8) % 8;
        var nextPreviousOctant = (dir - 2 + 8) % 8;
        var nextOctant = (dir + 1 + 8) % 8;
        this._renderOctant(x, y, OCTANTS[nextPreviousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[nextOctant], R, callback);
      };
      _proto20.compute90 = function compute90(x, y, R, dir, callback) {
        callback(x, y, 0, 1);
        var previousOctant = (dir - 1 + 8) % 8;
        this._renderOctant(x, y, OCTANTS[dir], R, callback);
        this._renderOctant(x, y, OCTANTS[previousOctant], R, callback);
      };
      _proto20._renderOctant = function _renderOctant(x, y, octant, R, callback) {
        this._castVisibility(x, y, 1, 1, 0, R + 1, octant[0], octant[1], octant[2], octant[3], callback);
      };
      _proto20._castVisibility = function _castVisibility(startX, startY, row, visSlopeStart, visSlopeEnd, radius, xx, xy, yx, yy, callback) {
        if (visSlopeStart < visSlopeEnd) {
          return;
        }
        for (var i = row;i <= radius; i++) {
          var dx = -i - 1;
          var dy = -i;
          var blocked = false;
          var newStart = 0;
          while (dx <= 0) {
            dx += 1;
            var mapX = startX + dx * xx + dy * xy;
            var mapY = startY + dx * yx + dy * yy;
            var slopeStart = (dx - 0.5) / (dy + 0.5);
            var slopeEnd = (dx + 0.5) / (dy - 0.5);
            if (slopeEnd > visSlopeStart) {
              continue;
            }
            if (slopeStart < visSlopeEnd) {
              break;
            }
            if (dx * dx + dy * dy < radius * radius) {
              callback(mapX, mapY, i, 1);
            }
            if (!blocked) {
              if (!this._lightPasses(mapX, mapY) && i < radius) {
                blocked = true;
                this._castVisibility(startX, startY, i + 1, visSlopeStart, slopeStart, radius, xx, xy, yx, yy, callback);
                newStart = slopeEnd;
              }
            } else {
              if (!this._lightPasses(mapX, mapY)) {
                newStart = slopeEnd;
                continue;
              }
              blocked = false;
              visSlopeStart = newStart;
            }
          }
          if (blocked) {
            break;
          }
        }
      };
      return RecursiveShadowcasting2;
    }(FOV);
    var index$1 = {
      DiscreteShadowcasting,
      PreciseShadowcasting,
      RecursiveShadowcasting
    };
    var Map3 = function() {
      function Map4(width, height) {
        if (width === undefined) {
          width = DEFAULT_WIDTH;
        }
        if (height === undefined) {
          height = DEFAULT_HEIGHT;
        }
        this._width = width;
        this._height = height;
      }
      var _proto21 = Map4.prototype;
      _proto21._fillMap = function _fillMap(value) {
        var map2 = [];
        for (var i = 0;i < this._width; i++) {
          map2.push([]);
          for (var j = 0;j < this._height; j++) {
            map2[i].push(value);
          }
        }
        return map2;
      };
      return Map4;
    }();
    var Arena = function(_Map) {
      _inheritsLoose(Arena2, _Map);
      function Arena2() {
        return _Map.apply(this, arguments) || this;
      }
      var _proto22 = Arena2.prototype;
      _proto22.create = function create(callback) {
        var w = this._width - 1;
        var h = this._height - 1;
        for (var i = 0;i <= w; i++) {
          for (var j = 0;j <= h; j++) {
            var empty = i && j && i < w && j < h;
            callback(i, j, empty ? 0 : 1);
          }
        }
        return this;
      };
      return Arena2;
    }(Map3);
    var Dungeon = function(_Map2) {
      _inheritsLoose(Dungeon2, _Map2);
      function Dungeon2(width, height) {
        var _this10;
        _this10 = _Map2.call(this, width, height) || this;
        _this10._rooms = [];
        _this10._corridors = [];
        return _this10;
      }
      var _proto23 = Dungeon2.prototype;
      _proto23.getRooms = function getRooms() {
        return this._rooms;
      };
      _proto23.getCorridors = function getCorridors() {
        return this._corridors;
      };
      return Dungeon2;
    }(Map3);
    var Feature = function Feature() {
    };
    var Room = function(_Feature) {
      _inheritsLoose(Room2, _Feature);
      function Room2(x1, y1, x2, y2, doorX, doorY) {
        var _this11;
        _this11 = _Feature.call(this) || this;
        _this11._x1 = x1;
        _this11._y1 = y1;
        _this11._x2 = x2;
        _this11._y2 = y2;
        _this11._doors = {};
        if (doorX !== undefined && doorY !== undefined) {
          _this11.addDoor(doorX, doorY);
        }
        return _this11;
      }
      Room2.createRandomAt = function createRandomAt(x, y, dx, dy, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = RNG$1.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        var height = RNG$1.getUniformInt(min, max);
        if (dx == 1) {
          var y2 = y - Math.floor(RNG$1.getUniform() * height);
          return new this(x + 1, y2, x + width, y2 + height - 1, x, y);
        }
        if (dx == -1) {
          var _y = y - Math.floor(RNG$1.getUniform() * height);
          return new this(x - width, _y, x - 1, _y + height - 1, x, y);
        }
        if (dy == 1) {
          var x2 = x - Math.floor(RNG$1.getUniform() * width);
          return new this(x2, y + 1, x2 + width - 1, y + height, x, y);
        }
        if (dy == -1) {
          var _x = x - Math.floor(RNG$1.getUniform() * width);
          return new this(_x, y - height, _x + width - 1, y - 1, x, y);
        }
        throw new Error("dx or dy must be 1 or -1");
      };
      Room2.createRandomCenter = function createRandomCenter(cx, cy, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = RNG$1.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        var height = RNG$1.getUniformInt(min, max);
        var x1 = cx - Math.floor(RNG$1.getUniform() * width);
        var y1 = cy - Math.floor(RNG$1.getUniform() * height);
        var x2 = x1 + width - 1;
        var y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
      };
      Room2.createRandom = function createRandom(availWidth, availHeight, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = RNG$1.getUniformInt(min, max);
        min = options.roomHeight[0];
        max = options.roomHeight[1];
        var height = RNG$1.getUniformInt(min, max);
        var left = availWidth - width - 1;
        var top = availHeight - height - 1;
        var x1 = 1 + Math.floor(RNG$1.getUniform() * left);
        var y1 = 1 + Math.floor(RNG$1.getUniform() * top);
        var x2 = x1 + width - 1;
        var y2 = y1 + height - 1;
        return new this(x1, y1, x2, y2);
      };
      var _proto24 = Room2.prototype;
      _proto24.addDoor = function addDoor(x, y) {
        this._doors[x + "," + y] = 1;
        return this;
      };
      _proto24.getDoors = function getDoors(cb) {
        for (var key in this._doors) {
          var parts = key.split(",");
          cb(parseInt(parts[0]), parseInt(parts[1]));
        }
        return this;
      };
      _proto24.clearDoors = function clearDoors() {
        this._doors = {};
        return this;
      };
      _proto24.addDoors = function addDoors(isWallCallback) {
        var left = this._x1 - 1;
        var right = this._x2 + 1;
        var top = this._y1 - 1;
        var bottom = this._y2 + 1;
        for (var x = left;x <= right; x++) {
          for (var y = top;y <= bottom; y++) {
            if (x != left && x != right && y != top && y != bottom) {
              continue;
            }
            if (isWallCallback(x, y)) {
              continue;
            }
            this.addDoor(x, y);
          }
        }
        return this;
      };
      _proto24.debug = function debug() {
        console.log("room", this._x1, this._y1, this._x2, this._y2);
      };
      _proto24.isValid = function isValid(isWallCallback, canBeDugCallback) {
        var left = this._x1 - 1;
        var right = this._x2 + 1;
        var top = this._y1 - 1;
        var bottom = this._y2 + 1;
        for (var x = left;x <= right; x++) {
          for (var y = top;y <= bottom; y++) {
            if (x == left || x == right || y == top || y == bottom) {
              if (!isWallCallback(x, y)) {
                return false;
              }
            } else {
              if (!canBeDugCallback(x, y)) {
                return false;
              }
            }
          }
        }
        return true;
      };
      _proto24.create = function create(digCallback) {
        var left = this._x1 - 1;
        var right = this._x2 + 1;
        var top = this._y1 - 1;
        var bottom = this._y2 + 1;
        var value = 0;
        for (var x = left;x <= right; x++) {
          for (var y = top;y <= bottom; y++) {
            if (x + "," + y in this._doors) {
              value = 2;
            } else if (x == left || x == right || y == top || y == bottom) {
              value = 1;
            } else {
              value = 0;
            }
            digCallback(x, y, value);
          }
        }
      };
      _proto24.getCenter = function getCenter() {
        return [Math.round((this._x1 + this._x2) / 2), Math.round((this._y1 + this._y2) / 2)];
      };
      _proto24.getLeft = function getLeft() {
        return this._x1;
      };
      _proto24.getRight = function getRight() {
        return this._x2;
      };
      _proto24.getTop = function getTop() {
        return this._y1;
      };
      _proto24.getBottom = function getBottom() {
        return this._y2;
      };
      return Room2;
    }(Feature);
    var Corridor = function(_Feature2) {
      _inheritsLoose(Corridor2, _Feature2);
      function Corridor2(startX, startY, endX, endY) {
        var _this12;
        _this12 = _Feature2.call(this) || this;
        _this12._startX = startX;
        _this12._startY = startY;
        _this12._endX = endX;
        _this12._endY = endY;
        _this12._endsWithAWall = true;
        return _this12;
      }
      Corridor2.createRandomAt = function createRandomAt(x, y, dx, dy, options) {
        var min = options.corridorLength[0];
        var max = options.corridorLength[1];
        var length = RNG$1.getUniformInt(min, max);
        return new this(x, y, x + dx * length, y + dy * length);
      };
      var _proto25 = Corridor2.prototype;
      _proto25.debug = function debug() {
        console.log("corridor", this._startX, this._startY, this._endX, this._endY);
      };
      _proto25.isValid = function isValid(isWallCallback, canBeDugCallback) {
        var sx = this._startX;
        var sy = this._startY;
        var dx = this._endX - sx;
        var dy = this._endY - sy;
        var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
          dx = dx / Math.abs(dx);
        }
        if (dy) {
          dy = dy / Math.abs(dy);
        }
        var nx = dy;
        var ny = -dx;
        var ok = true;
        for (var i = 0;i < length; i++) {
          var x = sx + i * dx;
          var y = sy + i * dy;
          if (!canBeDugCallback(x, y)) {
            ok = false;
          }
          if (!isWallCallback(x + nx, y + ny)) {
            ok = false;
          }
          if (!isWallCallback(x - nx, y - ny)) {
            ok = false;
          }
          if (!ok) {
            length = i;
            this._endX = x - dx;
            this._endY = y - dy;
            break;
          }
        }
        if (length == 0) {
          return false;
        }
        if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) {
          return false;
        }
        var firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
        var secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
        this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
        if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) {
          return false;
        }
        return true;
      };
      _proto25.create = function create(digCallback) {
        var sx = this._startX;
        var sy = this._startY;
        var dx = this._endX - sx;
        var dy = this._endY - sy;
        var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));
        if (dx) {
          dx = dx / Math.abs(dx);
        }
        if (dy) {
          dy = dy / Math.abs(dy);
        }
        for (var i = 0;i < length; i++) {
          var x = sx + i * dx;
          var y = sy + i * dy;
          digCallback(x, y, 0);
        }
        return true;
      };
      _proto25.createPriorityWalls = function createPriorityWalls(priorityWallCallback) {
        if (!this._endsWithAWall) {
          return;
        }
        var sx = this._startX;
        var sy = this._startY;
        var dx = this._endX - sx;
        var dy = this._endY - sy;
        if (dx) {
          dx = dx / Math.abs(dx);
        }
        if (dy) {
          dy = dy / Math.abs(dy);
        }
        var nx = dy;
        var ny = -dx;
        priorityWallCallback(this._endX + dx, this._endY + dy);
        priorityWallCallback(this._endX + nx, this._endY + ny);
        priorityWallCallback(this._endX - nx, this._endY - ny);
      };
      return Corridor2;
    }(Feature);
    var Uniform = function(_Dungeon) {
      _inheritsLoose(Uniform2, _Dungeon);
      function Uniform2(width, height, options) {
        var _this13;
        _this13 = _Dungeon.call(this, width, height) || this;
        _this13._options = {
          roomWidth: [3, 9],
          roomHeight: [3, 5],
          roomDugPercentage: 0.1,
          timeLimit: 1000
        };
        Object.assign(_this13._options, options);
        _this13._map = [];
        _this13._dug = 0;
        _this13._roomAttempts = 20;
        _this13._corridorAttempts = 20;
        _this13._connected = [];
        _this13._unconnected = [];
        _this13._digCallback = _this13._digCallback.bind(_assertThisInitialized(_assertThisInitialized(_this13)));
        _this13._canBeDugCallback = _this13._canBeDugCallback.bind(_assertThisInitialized(_assertThisInitialized(_this13)));
        _this13._isWallCallback = _this13._isWallCallback.bind(_assertThisInitialized(_assertThisInitialized(_this13)));
        return _this13;
      }
      var _proto26 = Uniform2.prototype;
      _proto26.create = function create(callback) {
        var t1 = Date.now();
        while (true) {
          var t2 = Date.now();
          if (t2 - t1 > this._options.timeLimit) {
            return null;
          }
          this._map = this._fillMap(1);
          this._dug = 0;
          this._rooms = [];
          this._unconnected = [];
          this._generateRooms();
          if (this._rooms.length < 2) {
            continue;
          }
          if (this._generateCorridors()) {
            break;
          }
        }
        if (callback) {
          for (var i = 0;i < this._width; i++) {
            for (var j = 0;j < this._height; j++) {
              callback(i, j, this._map[i][j]);
            }
          }
        }
        return this;
      };
      _proto26._generateRooms = function _generateRooms() {
        var w = this._width - 2;
        var h = this._height - 2;
        var room;
        do {
          room = this._generateRoom();
          if (this._dug / (w * h) > this._options.roomDugPercentage) {
            break;
          }
        } while (room);
      };
      _proto26._generateRoom = function _generateRoom() {
        var count = 0;
        while (count < this._roomAttempts) {
          count++;
          var room = Room.createRandom(this._width, this._height, this._options);
          if (!room.isValid(this._isWallCallback, this._canBeDugCallback)) {
            continue;
          }
          room.create(this._digCallback);
          this._rooms.push(room);
          return room;
        }
        return null;
      };
      _proto26._generateCorridors = function _generateCorridors() {
        var cnt = 0;
        while (cnt < this._corridorAttempts) {
          cnt++;
          this._corridors = [];
          this._map = this._fillMap(1);
          for (var i = 0;i < this._rooms.length; i++) {
            var room = this._rooms[i];
            room.clearDoors();
            room.create(this._digCallback);
          }
          this._unconnected = RNG$1.shuffle(this._rooms.slice());
          this._connected = [];
          if (this._unconnected.length) {
            this._connected.push(this._unconnected.pop());
          }
          while (true) {
            var connected = RNG$1.getItem(this._connected);
            if (!connected) {
              break;
            }
            var room1 = this._closestRoom(this._unconnected, connected);
            if (!room1) {
              break;
            }
            var room2 = this._closestRoom(this._connected, room1);
            if (!room2) {
              break;
            }
            var ok = this._connectRooms(room1, room2);
            if (!ok) {
              break;
            }
            if (!this._unconnected.length) {
              return true;
            }
          }
        }
        return false;
      };
      _proto26._closestRoom = function _closestRoom(rooms, room) {
        var dist = Infinity;
        var center = room.getCenter();
        var result = null;
        for (var i = 0;i < rooms.length; i++) {
          var r = rooms[i];
          var c = r.getCenter();
          var dx = c[0] - center[0];
          var dy = c[1] - center[1];
          var d = dx * dx + dy * dy;
          if (d < dist) {
            dist = d;
            result = r;
          }
        }
        return result;
      };
      _proto26._connectRooms = function _connectRooms(room1, room2) {
        var center1 = room1.getCenter();
        var center2 = room2.getCenter();
        var diffX = center2[0] - center1[0];
        var diffY = center2[1] - center1[1];
        var start;
        var end;
        var dirIndex1, dirIndex2, min, max, index2;
        if (Math.abs(diffX) < Math.abs(diffY)) {
          dirIndex1 = diffY > 0 ? 2 : 0;
          dirIndex2 = (dirIndex1 + 2) % 4;
          min = room2.getLeft();
          max = room2.getRight();
          index2 = 0;
        } else {
          dirIndex1 = diffX > 0 ? 1 : 3;
          dirIndex2 = (dirIndex1 + 2) % 4;
          min = room2.getTop();
          max = room2.getBottom();
          index2 = 1;
        }
        start = this._placeInWall(room1, dirIndex1);
        if (!start) {
          return false;
        }
        if (start[index2] >= min && start[index2] <= max) {
          end = start.slice();
          var value = 0;
          switch (dirIndex2) {
            case 0:
              value = room2.getTop() - 1;
              break;
            case 1:
              value = room2.getRight() + 1;
              break;
            case 2:
              value = room2.getBottom() + 1;
              break;
            case 3:
              value = room2.getLeft() - 1;
              break;
          }
          end[(index2 + 1) % 2] = value;
          this._digLine([start, end]);
        } else if (start[index2] < min - 1 || start[index2] > max + 1) {
          var diff = start[index2] - center2[index2];
          var rotation = 0;
          switch (dirIndex2) {
            case 0:
            case 1:
              rotation = diff < 0 ? 3 : 1;
              break;
            case 2:
            case 3:
              rotation = diff < 0 ? 1 : 3;
              break;
          }
          dirIndex2 = (dirIndex2 + rotation) % 4;
          end = this._placeInWall(room2, dirIndex2);
          if (!end) {
            return false;
          }
          var mid = [0, 0];
          mid[index2] = start[index2];
          var index22 = (index2 + 1) % 2;
          mid[index22] = end[index22];
          this._digLine([start, mid, end]);
        } else {
          var _index4 = (index2 + 1) % 2;
          end = this._placeInWall(room2, dirIndex2);
          if (!end) {
            return false;
          }
          var _mid = Math.round((end[_index4] + start[_index4]) / 2);
          var mid1 = [0, 0];
          var mid2 = [0, 0];
          mid1[index2] = start[index2];
          mid1[_index4] = _mid;
          mid2[index2] = end[index2];
          mid2[_index4] = _mid;
          this._digLine([start, mid1, mid2, end]);
        }
        room1.addDoor(start[0], start[1]);
        room2.addDoor(end[0], end[1]);
        index2 = this._unconnected.indexOf(room1);
        if (index2 != -1) {
          this._unconnected.splice(index2, 1);
          this._connected.push(room1);
        }
        index2 = this._unconnected.indexOf(room2);
        if (index2 != -1) {
          this._unconnected.splice(index2, 1);
          this._connected.push(room2);
        }
        return true;
      };
      _proto26._placeInWall = function _placeInWall(room, dirIndex) {
        var start = [0, 0];
        var dir = [0, 0];
        var length = 0;
        switch (dirIndex) {
          case 0:
            dir = [1, 0];
            start = [room.getLeft(), room.getTop() - 1];
            length = room.getRight() - room.getLeft() + 1;
            break;
          case 1:
            dir = [0, 1];
            start = [room.getRight() + 1, room.getTop()];
            length = room.getBottom() - room.getTop() + 1;
            break;
          case 2:
            dir = [1, 0];
            start = [room.getLeft(), room.getBottom() + 1];
            length = room.getRight() - room.getLeft() + 1;
            break;
          case 3:
            dir = [0, 1];
            start = [room.getLeft() - 1, room.getTop()];
            length = room.getBottom() - room.getTop() + 1;
            break;
        }
        var avail = [];
        var lastBadIndex = -2;
        for (var i = 0;i < length; i++) {
          var x = start[0] + i * dir[0];
          var y = start[1] + i * dir[1];
          avail.push(null);
          var isWall = this._map[x][y] == 1;
          if (isWall) {
            if (lastBadIndex != i - 1) {
              avail[i] = [x, y];
            }
          } else {
            lastBadIndex = i;
            if (i) {
              avail[i - 1] = null;
            }
          }
        }
        for (var _i4 = avail.length - 1;_i4 >= 0; _i4--) {
          if (!avail[_i4]) {
            avail.splice(_i4, 1);
          }
        }
        return avail.length ? RNG$1.getItem(avail) : null;
      };
      _proto26._digLine = function _digLine(points) {
        for (var i = 1;i < points.length; i++) {
          var start = points[i - 1];
          var end = points[i];
          var corridor = new Corridor(start[0], start[1], end[0], end[1]);
          corridor.create(this._digCallback);
          this._corridors.push(corridor);
        }
      };
      _proto26._digCallback = function _digCallback(x, y, value) {
        this._map[x][y] = value;
        if (value == 0) {
          this._dug++;
        }
      };
      _proto26._isWallCallback = function _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
          return false;
        }
        return this._map[x][y] == 1;
      };
      _proto26._canBeDugCallback = function _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
          return false;
        }
        return this._map[x][y] == 1;
      };
      return Uniform2;
    }(Dungeon);
    var Cellular = function(_Map3) {
      _inheritsLoose(Cellular2, _Map3);
      function Cellular2(width, height, options) {
        var _this14;
        if (options === undefined) {
          options = {};
        }
        _this14 = _Map3.call(this, width, height) || this;
        _this14._options = {
          born: [5, 6, 7, 8],
          survive: [4, 5, 6, 7, 8],
          topology: 8
        };
        _this14.setOptions(options);
        _this14._dirs = DIRS[_this14._options.topology];
        _this14._map = _this14._fillMap(0);
        return _this14;
      }
      var _proto27 = Cellular2.prototype;
      _proto27.randomize = function randomize(probability) {
        for (var i = 0;i < this._width; i++) {
          for (var j = 0;j < this._height; j++) {
            this._map[i][j] = RNG$1.getUniform() < probability ? 1 : 0;
          }
        }
        return this;
      };
      _proto27.setOptions = function setOptions(options) {
        Object.assign(this._options, options);
      };
      _proto27.set = function set(x, y, value) {
        this._map[x][y] = value;
      };
      _proto27.create = function create(callback) {
        var newMap = this._fillMap(0);
        var born = this._options.born;
        var survive = this._options.survive;
        for (var j = 0;j < this._height; j++) {
          var widthStep = 1;
          var widthStart = 0;
          if (this._options.topology == 6) {
            widthStep = 2;
            widthStart = j % 2;
          }
          for (var i = widthStart;i < this._width; i += widthStep) {
            var cur = this._map[i][j];
            var ncount = this._getNeighbors(i, j);
            if (cur && survive.indexOf(ncount) != -1) {
              newMap[i][j] = 1;
            } else if (!cur && born.indexOf(ncount) != -1) {
              newMap[i][j] = 1;
            }
          }
        }
        this._map = newMap;
        callback && this._serviceCallback(callback);
      };
      _proto27._serviceCallback = function _serviceCallback(callback) {
        for (var j = 0;j < this._height; j++) {
          var widthStep = 1;
          var widthStart = 0;
          if (this._options.topology == 6) {
            widthStep = 2;
            widthStart = j % 2;
          }
          for (var i = widthStart;i < this._width; i += widthStep) {
            callback(i, j, this._map[i][j]);
          }
        }
      };
      _proto27._getNeighbors = function _getNeighbors(cx, cy) {
        var result = 0;
        for (var i = 0;i < this._dirs.length; i++) {
          var dir = this._dirs[i];
          var x = cx + dir[0];
          var y = cy + dir[1];
          if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            continue;
          }
          result += this._map[x][y] == 1 ? 1 : 0;
        }
        return result;
      };
      _proto27.connect = function connect(callback, value, connectionCallback) {
        if (!value)
          value = 0;
        var allFreeSpace = [];
        var notConnected = {};
        var widthStep = 1;
        var widthStarts = [0, 0];
        if (this._options.topology == 6) {
          widthStep = 2;
          widthStarts = [0, 1];
        }
        for (var y = 0;y < this._height; y++) {
          for (var x = widthStarts[y % 2];x < this._width; x += widthStep) {
            if (this._freeSpace(x, y, value)) {
              var p = [x, y];
              notConnected[this._pointKey(p)] = p;
              allFreeSpace.push([x, y]);
            }
          }
        }
        var start = allFreeSpace[RNG$1.getUniformInt(0, allFreeSpace.length - 1)];
        var key = this._pointKey(start);
        var connected = {};
        connected[key] = start;
        delete notConnected[key];
        this._findConnected(connected, notConnected, [start], false, value);
        while (Object.keys(notConnected).length > 0) {
          var _p = this._getFromTo(connected, notConnected);
          var from = _p[0];
          var to = _p[1];
          var local = {};
          local[this._pointKey(from)] = from;
          this._findConnected(local, notConnected, [from], true, value);
          var tunnelFn = this._options.topology == 6 ? this._tunnelToConnected6 : this._tunnelToConnected;
          tunnelFn.call(this, to, from, connected, notConnected, value, connectionCallback);
          for (var k in local) {
            var pp = local[k];
            this._map[pp[0]][pp[1]] = value;
            connected[k] = pp;
            delete notConnected[k];
          }
        }
        callback && this._serviceCallback(callback);
      };
      _proto27._getFromTo = function _getFromTo(connected, notConnected) {
        var from = [0, 0], to = [0, 0], d;
        var connectedKeys = Object.keys(connected);
        var notConnectedKeys = Object.keys(notConnected);
        for (var i = 0;i < 5; i++) {
          if (connectedKeys.length < notConnectedKeys.length) {
            var keys = connectedKeys;
            to = connected[keys[RNG$1.getUniformInt(0, keys.length - 1)]];
            from = this._getClosest(to, notConnected);
          } else {
            var _keys = notConnectedKeys;
            from = notConnected[_keys[RNG$1.getUniformInt(0, _keys.length - 1)]];
            to = this._getClosest(from, connected);
          }
          d = (from[0] - to[0]) * (from[0] - to[0]) + (from[1] - to[1]) * (from[1] - to[1]);
          if (d < 64) {
            break;
          }
        }
        return [from, to];
      };
      _proto27._getClosest = function _getClosest(point, space) {
        var minPoint = null;
        var minDist = null;
        for (var k in space) {
          var p = space[k];
          var d = (p[0] - point[0]) * (p[0] - point[0]) + (p[1] - point[1]) * (p[1] - point[1]);
          if (minDist == null || d < minDist) {
            minDist = d;
            minPoint = p;
          }
        }
        return minPoint;
      };
      _proto27._findConnected = function _findConnected(connected, notConnected, stack, keepNotConnected, value) {
        while (stack.length > 0) {
          var p = stack.splice(0, 1)[0];
          var tests = undefined;
          if (this._options.topology == 6) {
            tests = [[p[0] + 2, p[1]], [p[0] + 1, p[1] - 1], [p[0] - 1, p[1] - 1], [p[0] - 2, p[1]], [p[0] - 1, p[1] + 1], [p[0] + 1, p[1] + 1]];
          } else {
            tests = [[p[0] + 1, p[1]], [p[0] - 1, p[1]], [p[0], p[1] + 1], [p[0], p[1] - 1]];
          }
          for (var i = 0;i < tests.length; i++) {
            var key = this._pointKey(tests[i]);
            if (connected[key] == null && this._freeSpace(tests[i][0], tests[i][1], value)) {
              connected[key] = tests[i];
              if (!keepNotConnected) {
                delete notConnected[key];
              }
              stack.push(tests[i]);
            }
          }
        }
      };
      _proto27._tunnelToConnected = function _tunnelToConnected(to, from, connected, notConnected, value, connectionCallback) {
        var a, b;
        if (from[0] < to[0]) {
          a = from;
          b = to;
        } else {
          a = to;
          b = from;
        }
        for (var xx = a[0];xx <= b[0]; xx++) {
          this._map[xx][a[1]] = value;
          var p = [xx, a[1]];
          var pkey = this._pointKey(p);
          connected[pkey] = p;
          delete notConnected[pkey];
        }
        if (connectionCallback && a[0] < b[0]) {
          connectionCallback(a, [b[0], a[1]]);
        }
        var x = b[0];
        if (from[1] < to[1]) {
          a = from;
          b = to;
        } else {
          a = to;
          b = from;
        }
        for (var yy = a[1];yy < b[1]; yy++) {
          this._map[x][yy] = value;
          var _p2 = [x, yy];
          var _pkey = this._pointKey(_p2);
          connected[_pkey] = _p2;
          delete notConnected[_pkey];
        }
        if (connectionCallback && a[1] < b[1]) {
          connectionCallback([b[0], a[1]], [b[0], b[1]]);
        }
      };
      _proto27._tunnelToConnected6 = function _tunnelToConnected6(to, from, connected, notConnected, value, connectionCallback) {
        var a, b;
        if (from[0] < to[0]) {
          a = from;
          b = to;
        } else {
          a = to;
          b = from;
        }
        var xx = a[0];
        var yy = a[1];
        while (!(xx == b[0] && yy == b[1])) {
          var stepWidth = 2;
          if (yy < b[1]) {
            yy++;
            stepWidth = 1;
          } else if (yy > b[1]) {
            yy--;
            stepWidth = 1;
          }
          if (xx < b[0]) {
            xx += stepWidth;
          } else if (xx > b[0]) {
            xx -= stepWidth;
          } else if (b[1] % 2) {
            xx -= stepWidth;
          } else {
            xx += stepWidth;
          }
          this._map[xx][yy] = value;
          var p = [xx, yy];
          var pkey = this._pointKey(p);
          connected[pkey] = p;
          delete notConnected[pkey];
        }
        if (connectionCallback) {
          connectionCallback(from, to);
        }
      };
      _proto27._freeSpace = function _freeSpace(x, y, value) {
        return x >= 0 && x < this._width && y >= 0 && y < this._height && this._map[x][y] == value;
      };
      _proto27._pointKey = function _pointKey(p) {
        return p[0] + "." + p[1];
      };
      return Cellular2;
    }(Map3);
    var FEATURES = {
      room: Room,
      corridor: Corridor
    };
    var Digger = function(_Dungeon2) {
      _inheritsLoose(Digger2, _Dungeon2);
      function Digger2(width, height, options) {
        var _this15;
        if (options === undefined) {
          options = {};
        }
        _this15 = _Dungeon2.call(this, width, height) || this;
        _this15._options = Object.assign({
          roomWidth: [3, 9],
          roomHeight: [3, 5],
          corridorLength: [3, 10],
          dugPercentage: 0.2,
          timeLimit: 1000
        }, options);
        _this15._features = {
          room: 4,
          corridor: 4
        };
        _this15._map = [];
        _this15._featureAttempts = 20;
        _this15._walls = {};
        _this15._dug = 0;
        _this15._digCallback = _this15._digCallback.bind(_assertThisInitialized(_assertThisInitialized(_this15)));
        _this15._canBeDugCallback = _this15._canBeDugCallback.bind(_assertThisInitialized(_assertThisInitialized(_this15)));
        _this15._isWallCallback = _this15._isWallCallback.bind(_assertThisInitialized(_assertThisInitialized(_this15)));
        _this15._priorityWallCallback = _this15._priorityWallCallback.bind(_assertThisInitialized(_assertThisInitialized(_this15)));
        return _this15;
      }
      var _proto28 = Digger2.prototype;
      _proto28.create = function create(callback) {
        this._rooms = [];
        this._corridors = [];
        this._map = this._fillMap(1);
        this._walls = {};
        this._dug = 0;
        var area = (this._width - 2) * (this._height - 2);
        this._firstRoom();
        var t1 = Date.now();
        var priorityWalls;
        do {
          priorityWalls = 0;
          var t2 = Date.now();
          if (t2 - t1 > this._options.timeLimit) {
            break;
          }
          var wall = this._findWall();
          if (!wall) {
            break;
          }
          var parts = wall.split(",");
          var x = parseInt(parts[0]);
          var y = parseInt(parts[1]);
          var dir = this._getDiggingDirection(x, y);
          if (!dir) {
            continue;
          }
          var featureAttempts = 0;
          do {
            featureAttempts++;
            if (this._tryFeature(x, y, dir[0], dir[1])) {
              this._removeSurroundingWalls(x, y);
              this._removeSurroundingWalls(x - dir[0], y - dir[1]);
              break;
            }
          } while (featureAttempts < this._featureAttempts);
          for (var id in this._walls) {
            if (this._walls[id] > 1) {
              priorityWalls++;
            }
          }
        } while (this._dug / area < this._options.dugPercentage || priorityWalls);
        this._addDoors();
        if (callback) {
          for (var i = 0;i < this._width; i++) {
            for (var j = 0;j < this._height; j++) {
              callback(i, j, this._map[i][j]);
            }
          }
        }
        this._walls = {};
        this._map = [];
        return this;
      };
      _proto28._digCallback = function _digCallback(x, y, value) {
        if (value == 0 || value == 2) {
          this._map[x][y] = 0;
          this._dug++;
        } else {
          this._walls[x + "," + y] = 1;
        }
      };
      _proto28._isWallCallback = function _isWallCallback(x, y) {
        if (x < 0 || y < 0 || x >= this._width || y >= this._height) {
          return false;
        }
        return this._map[x][y] == 1;
      };
      _proto28._canBeDugCallback = function _canBeDugCallback(x, y) {
        if (x < 1 || y < 1 || x + 1 >= this._width || y + 1 >= this._height) {
          return false;
        }
        return this._map[x][y] == 1;
      };
      _proto28._priorityWallCallback = function _priorityWallCallback(x, y) {
        this._walls[x + "," + y] = 2;
      };
      _proto28._firstRoom = function _firstRoom() {
        var cx = Math.floor(this._width / 2);
        var cy = Math.floor(this._height / 2);
        var room = Room.createRandomCenter(cx, cy, this._options);
        this._rooms.push(room);
        room.create(this._digCallback);
      };
      _proto28._findWall = function _findWall() {
        var prio1 = [];
        var prio2 = [];
        for (var _id2 in this._walls) {
          var prio = this._walls[_id2];
          if (prio == 2) {
            prio2.push(_id2);
          } else {
            prio1.push(_id2);
          }
        }
        var arr = prio2.length ? prio2 : prio1;
        if (!arr.length) {
          return null;
        }
        var id = RNG$1.getItem(arr.sort());
        delete this._walls[id];
        return id;
      };
      _proto28._tryFeature = function _tryFeature(x, y, dx, dy) {
        var featureName = RNG$1.getWeightedValue(this._features);
        var ctor = FEATURES[featureName];
        var feature = ctor.createRandomAt(x, y, dx, dy, this._options);
        if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
          return false;
        }
        feature.create(this._digCallback);
        if (feature instanceof Room) {
          this._rooms.push(feature);
        }
        if (feature instanceof Corridor) {
          feature.createPriorityWalls(this._priorityWallCallback);
          this._corridors.push(feature);
        }
        return true;
      };
      _proto28._removeSurroundingWalls = function _removeSurroundingWalls(cx, cy) {
        var deltas = DIRS[4];
        for (var i = 0;i < deltas.length; i++) {
          var delta = deltas[i];
          var x = cx + delta[0];
          var y = cy + delta[1];
          delete this._walls[x + "," + y];
          x = cx + 2 * delta[0];
          y = cy + 2 * delta[1];
          delete this._walls[x + "," + y];
        }
      };
      _proto28._getDiggingDirection = function _getDiggingDirection(cx, cy) {
        if (cx <= 0 || cy <= 0 || cx >= this._width - 1 || cy >= this._height - 1) {
          return null;
        }
        var result = null;
        var deltas = DIRS[4];
        for (var i = 0;i < deltas.length; i++) {
          var delta = deltas[i];
          var x = cx + delta[0];
          var y = cy + delta[1];
          if (!this._map[x][y]) {
            if (result) {
              return null;
            }
            result = delta;
          }
        }
        if (!result) {
          return null;
        }
        return [-result[0], -result[1]];
      };
      _proto28._addDoors = function _addDoors() {
        var data = this._map;
        function isWallCallback(x, y) {
          return data[x][y] == 1;
        }
        for (var i = 0;i < this._rooms.length; i++) {
          var room = this._rooms[i];
          room.clearDoors();
          room.addDoors(isWallCallback);
        }
      };
      return Digger2;
    }(Dungeon);
    function addToList(i, L, R) {
      R[L[i + 1]] = R[i];
      L[R[i]] = L[i + 1];
      R[i] = i + 1;
      L[i + 1] = i;
    }
    function removeFromList(i, L, R) {
      R[L[i]] = R[i];
      L[R[i]] = L[i];
      R[i] = i;
      L[i] = i;
    }
    var EllerMaze = function(_Map4) {
      _inheritsLoose(EllerMaze2, _Map4);
      function EllerMaze2() {
        return _Map4.apply(this, arguments) || this;
      }
      var _proto29 = EllerMaze2.prototype;
      _proto29.create = function create(callback) {
        var map2 = this._fillMap(1);
        var w = Math.ceil((this._width - 2) / 2);
        var rand = 9 / 24;
        var L = [];
        var R = [];
        for (var i = 0;i < w; i++) {
          L.push(i);
          R.push(i);
        }
        L.push(w - 1);
        var j;
        for (j = 1;j + 3 < this._height; j += 2) {
          for (var _i5 = 0;_i5 < w; _i5++) {
            var x = 2 * _i5 + 1;
            var y = j;
            map2[x][y] = 0;
            if (_i5 != L[_i5 + 1] && RNG$1.getUniform() > rand) {
              addToList(_i5, L, R);
              map2[x + 1][y] = 0;
            }
            if (_i5 != L[_i5] && RNG$1.getUniform() > rand) {
              removeFromList(_i5, L, R);
            } else {
              map2[x][y + 1] = 0;
            }
          }
        }
        for (var _i6 = 0;_i6 < w; _i6++) {
          var _x2 = 2 * _i6 + 1;
          var _y2 = j;
          map2[_x2][_y2] = 0;
          if (_i6 != L[_i6 + 1] && (_i6 == L[_i6] || RNG$1.getUniform() > rand)) {
            addToList(_i6, L, R);
            map2[_x2 + 1][_y2] = 0;
          }
          removeFromList(_i6, L, R);
        }
        for (var _i7 = 0;_i7 < this._width; _i7++) {
          for (var _j = 0;_j < this._height; _j++) {
            callback(_i7, _j, map2[_i7][_j]);
          }
        }
        return this;
      };
      return EllerMaze2;
    }(Map3);
    var DividedMaze = function(_Map5) {
      _inheritsLoose(DividedMaze2, _Map5);
      function DividedMaze2() {
        var _this16;
        _this16 = _Map5.apply(this, arguments) || this;
        _this16._stack = [];
        _this16._map = [];
        return _this16;
      }
      var _proto30 = DividedMaze2.prototype;
      _proto30.create = function create(callback) {
        var w = this._width;
        var h = this._height;
        this._map = [];
        for (var i = 0;i < w; i++) {
          this._map.push([]);
          for (var j = 0;j < h; j++) {
            var border = i == 0 || j == 0 || i + 1 == w || j + 1 == h;
            this._map[i].push(border ? 1 : 0);
          }
        }
        this._stack = [[1, 1, w - 2, h - 2]];
        this._process();
        for (var _i8 = 0;_i8 < w; _i8++) {
          for (var _j2 = 0;_j2 < h; _j2++) {
            callback(_i8, _j2, this._map[_i8][_j2]);
          }
        }
        this._map = [];
        return this;
      };
      _proto30._process = function _process() {
        while (this._stack.length) {
          var room = this._stack.shift();
          this._partitionRoom(room);
        }
      };
      _proto30._partitionRoom = function _partitionRoom(room) {
        var availX = [];
        var availY = [];
        for (var i = room[0] + 1;i < room[2]; i++) {
          var top = this._map[i][room[1] - 1];
          var bottom = this._map[i][room[3] + 1];
          if (top && bottom && !(i % 2)) {
            availX.push(i);
          }
        }
        for (var j = room[1] + 1;j < room[3]; j++) {
          var left = this._map[room[0] - 1][j];
          var right = this._map[room[2] + 1][j];
          if (left && right && !(j % 2)) {
            availY.push(j);
          }
        }
        if (!availX.length || !availY.length) {
          return;
        }
        var x = RNG$1.getItem(availX);
        var y = RNG$1.getItem(availY);
        this._map[x][y] = 1;
        var walls = [];
        var w = [];
        walls.push(w);
        for (var _i9 = room[0];_i9 < x; _i9++) {
          this._map[_i9][y] = 1;
          if (_i9 % 2)
            w.push([_i9, y]);
        }
        w = [];
        walls.push(w);
        for (var _i10 = x + 1;_i10 <= room[2]; _i10++) {
          this._map[_i10][y] = 1;
          if (_i10 % 2)
            w.push([_i10, y]);
        }
        w = [];
        walls.push(w);
        for (var _j3 = room[1];_j3 < y; _j3++) {
          this._map[x][_j3] = 1;
          if (_j3 % 2)
            w.push([x, _j3]);
        }
        w = [];
        walls.push(w);
        for (var _j4 = y + 1;_j4 <= room[3]; _j4++) {
          this._map[x][_j4] = 1;
          if (_j4 % 2)
            w.push([x, _j4]);
        }
        var solid = RNG$1.getItem(walls);
        for (var _i11 = 0;_i11 < walls.length; _i11++) {
          var _w = walls[_i11];
          if (_w == solid) {
            continue;
          }
          var hole = RNG$1.getItem(_w);
          this._map[hole[0]][hole[1]] = 0;
        }
        this._stack.push([room[0], room[1], x - 1, y - 1]);
        this._stack.push([x + 1, room[1], room[2], y - 1]);
        this._stack.push([room[0], y + 1, x - 1, room[3]]);
        this._stack.push([x + 1, y + 1, room[2], room[3]]);
      };
      return DividedMaze2;
    }(Map3);
    var IceyMaze = function(_Map6) {
      _inheritsLoose(IceyMaze2, _Map6);
      function IceyMaze2(width, height, regularity) {
        var _this17;
        if (regularity === undefined) {
          regularity = 0;
        }
        _this17 = _Map6.call(this, width, height) || this;
        _this17._regularity = regularity;
        _this17._map = [];
        return _this17;
      }
      var _proto31 = IceyMaze2.prototype;
      _proto31.create = function create(callback) {
        var width = this._width;
        var height = this._height;
        var map2 = this._fillMap(1);
        width -= width % 2 ? 1 : 2;
        height -= height % 2 ? 1 : 2;
        var cx = 0;
        var cy = 0;
        var nx = 0;
        var ny = 0;
        var done = 0;
        var blocked = false;
        var dirs = [[0, 0], [0, 0], [0, 0], [0, 0]];
        do {
          cx = 1 + 2 * Math.floor(RNG$1.getUniform() * (width - 1) / 2);
          cy = 1 + 2 * Math.floor(RNG$1.getUniform() * (height - 1) / 2);
          if (!done) {
            map2[cx][cy] = 0;
          }
          if (!map2[cx][cy]) {
            this._randomize(dirs);
            do {
              if (Math.floor(RNG$1.getUniform() * (this._regularity + 1)) == 0) {
                this._randomize(dirs);
              }
              blocked = true;
              for (var i = 0;i < 4; i++) {
                nx = cx + dirs[i][0] * 2;
                ny = cy + dirs[i][1] * 2;
                if (this._isFree(map2, nx, ny, width, height)) {
                  map2[nx][ny] = 0;
                  map2[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
                  cx = nx;
                  cy = ny;
                  blocked = false;
                  done++;
                  break;
                }
              }
            } while (!blocked);
          }
        } while (done + 1 < width * height / 4);
        for (var _i12 = 0;_i12 < this._width; _i12++) {
          for (var j = 0;j < this._height; j++) {
            callback(_i12, j, map2[_i12][j]);
          }
        }
        this._map = [];
        return this;
      };
      _proto31._randomize = function _randomize(dirs) {
        for (var i = 0;i < 4; i++) {
          dirs[i][0] = 0;
          dirs[i][1] = 0;
        }
        switch (Math.floor(RNG$1.getUniform() * 4)) {
          case 0:
            dirs[0][0] = -1;
            dirs[1][0] = 1;
            dirs[2][1] = -1;
            dirs[3][1] = 1;
            break;
          case 1:
            dirs[3][0] = -1;
            dirs[2][0] = 1;
            dirs[1][1] = -1;
            dirs[0][1] = 1;
            break;
          case 2:
            dirs[2][0] = -1;
            dirs[3][0] = 1;
            dirs[0][1] = -1;
            dirs[1][1] = 1;
            break;
          case 3:
            dirs[1][0] = -1;
            dirs[0][0] = 1;
            dirs[3][1] = -1;
            dirs[2][1] = 1;
            break;
        }
      };
      _proto31._isFree = function _isFree(map2, x, y, width, height) {
        if (x < 1 || y < 1 || x >= width || y >= height) {
          return false;
        }
        return map2[x][y];
      };
      return IceyMaze2;
    }(Map3);
    var Rogue = function(_Map7) {
      _inheritsLoose(Rogue2, _Map7);
      function Rogue2(width, height, options) {
        var _this18;
        _this18 = _Map7.call(this, width, height) || this;
        _this18.map = [];
        _this18.rooms = [];
        _this18.connectedCells = [];
        options = Object.assign({
          cellWidth: 3,
          cellHeight: 3
        }, options);
        if (!options.hasOwnProperty("roomWidth")) {
          options["roomWidth"] = _this18._calculateRoomSize(_this18._width, options["cellWidth"]);
        }
        if (!options.hasOwnProperty("roomHeight")) {
          options["roomHeight"] = _this18._calculateRoomSize(_this18._height, options["cellHeight"]);
        }
        _this18._options = options;
        return _this18;
      }
      var _proto32 = Rogue2.prototype;
      _proto32.create = function create(callback) {
        this.map = this._fillMap(1);
        this.rooms = [];
        this.connectedCells = [];
        this._initRooms();
        this._connectRooms();
        this._connectUnconnectedRooms();
        this._createRandomRoomConnections();
        this._createRooms();
        this._createCorridors();
        if (callback) {
          for (var i = 0;i < this._width; i++) {
            for (var j = 0;j < this._height; j++) {
              callback(i, j, this.map[i][j]);
            }
          }
        }
        return this;
      };
      _proto32._calculateRoomSize = function _calculateRoomSize(size, cell) {
        var max = Math.floor(size / cell * 0.8);
        var min = Math.floor(size / cell * 0.25);
        if (min < 2) {
          min = 2;
        }
        if (max < 2) {
          max = 2;
        }
        return [min, max];
      };
      _proto32._initRooms = function _initRooms() {
        for (var i = 0;i < this._options.cellWidth; i++) {
          this.rooms.push([]);
          for (var j = 0;j < this._options.cellHeight; j++) {
            this.rooms[i].push({
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              connections: [],
              cellx: i,
              celly: j
            });
          }
        }
      };
      _proto32._connectRooms = function _connectRooms() {
        var cgx = RNG$1.getUniformInt(0, this._options.cellWidth - 1);
        var cgy = RNG$1.getUniformInt(0, this._options.cellHeight - 1);
        var idx;
        var ncgx;
        var ncgy;
        var found = false;
        var room;
        var otherRoom;
        var dirToCheck;
        do {
          dirToCheck = [0, 2, 4, 6];
          dirToCheck = RNG$1.shuffle(dirToCheck);
          do {
            found = false;
            idx = dirToCheck.pop();
            ncgx = cgx + DIRS[8][idx][0];
            ncgy = cgy + DIRS[8][idx][1];
            if (ncgx < 0 || ncgx >= this._options.cellWidth) {
              continue;
            }
            if (ncgy < 0 || ncgy >= this._options.cellHeight) {
              continue;
            }
            room = this.rooms[cgx][cgy];
            if (room["connections"].length > 0) {
              if (room["connections"][0][0] == ncgx && room["connections"][0][1] == ncgy) {
                break;
              }
            }
            otherRoom = this.rooms[ncgx][ncgy];
            if (otherRoom["connections"].length == 0) {
              otherRoom["connections"].push([cgx, cgy]);
              this.connectedCells.push([ncgx, ncgy]);
              cgx = ncgx;
              cgy = ncgy;
              found = true;
            }
          } while (dirToCheck.length > 0 && found == false);
        } while (dirToCheck.length > 0);
      };
      _proto32._connectUnconnectedRooms = function _connectUnconnectedRooms() {
        var cw = this._options.cellWidth;
        var ch = this._options.cellHeight;
        this.connectedCells = RNG$1.shuffle(this.connectedCells);
        var room;
        var otherRoom;
        var validRoom;
        for (var i = 0;i < this._options.cellWidth; i++) {
          for (var j = 0;j < this._options.cellHeight; j++) {
            room = this.rooms[i][j];
            if (room["connections"].length == 0) {
              var directions = [0, 2, 4, 6];
              directions = RNG$1.shuffle(directions);
              validRoom = false;
              do {
                var dirIdx = directions.pop();
                var newI = i + DIRS[8][dirIdx][0];
                var newJ = j + DIRS[8][dirIdx][1];
                if (newI < 0 || newI >= cw || newJ < 0 || newJ >= ch) {
                  continue;
                }
                otherRoom = this.rooms[newI][newJ];
                validRoom = true;
                if (otherRoom["connections"].length == 0) {
                  break;
                }
                for (var k = 0;k < otherRoom["connections"].length; k++) {
                  if (otherRoom["connections"][k][0] == i && otherRoom["connections"][k][1] == j) {
                    validRoom = false;
                    break;
                  }
                }
                if (validRoom) {
                  break;
                }
              } while (directions.length);
              if (validRoom) {
                room["connections"].push([otherRoom["cellx"], otherRoom["celly"]]);
              } else {
                console.log("-- Unable to connect room.");
              }
            }
          }
        }
      };
      _proto32._createRandomRoomConnections = function _createRandomRoomConnections() {
      };
      _proto32._createRooms = function _createRooms() {
        var w = this._width;
        var h = this._height;
        var cw = this._options.cellWidth;
        var ch = this._options.cellHeight;
        var cwp = Math.floor(this._width / cw);
        var chp = Math.floor(this._height / ch);
        var roomw;
        var roomh;
        var roomWidth = this._options["roomWidth"];
        var roomHeight = this._options["roomHeight"];
        var sx;
        var sy;
        var otherRoom;
        for (var i = 0;i < cw; i++) {
          for (var j = 0;j < ch; j++) {
            sx = cwp * i;
            sy = chp * j;
            if (sx == 0) {
              sx = 1;
            }
            if (sy == 0) {
              sy = 1;
            }
            roomw = RNG$1.getUniformInt(roomWidth[0], roomWidth[1]);
            roomh = RNG$1.getUniformInt(roomHeight[0], roomHeight[1]);
            if (j > 0) {
              otherRoom = this.rooms[i][j - 1];
              while (sy - (otherRoom["y"] + otherRoom["height"]) < 3) {
                sy++;
              }
            }
            if (i > 0) {
              otherRoom = this.rooms[i - 1][j];
              while (sx - (otherRoom["x"] + otherRoom["width"]) < 3) {
                sx++;
              }
            }
            var sxOffset = Math.round(RNG$1.getUniformInt(0, cwp - roomw) / 2);
            var syOffset = Math.round(RNG$1.getUniformInt(0, chp - roomh) / 2);
            while (sx + sxOffset + roomw >= w) {
              if (sxOffset) {
                sxOffset--;
              } else {
                roomw--;
              }
            }
            while (sy + syOffset + roomh >= h) {
              if (syOffset) {
                syOffset--;
              } else {
                roomh--;
              }
            }
            sx = sx + sxOffset;
            sy = sy + syOffset;
            this.rooms[i][j]["x"] = sx;
            this.rooms[i][j]["y"] = sy;
            this.rooms[i][j]["width"] = roomw;
            this.rooms[i][j]["height"] = roomh;
            for (var ii = sx;ii < sx + roomw; ii++) {
              for (var jj = sy;jj < sy + roomh; jj++) {
                this.map[ii][jj] = 0;
              }
            }
          }
        }
      };
      _proto32._getWallPosition = function _getWallPosition(aRoom, aDirection) {
        var rx;
        var ry;
        var door;
        if (aDirection == 1 || aDirection == 3) {
          rx = RNG$1.getUniformInt(aRoom["x"] + 1, aRoom["x"] + aRoom["width"] - 2);
          if (aDirection == 1) {
            ry = aRoom["y"] - 2;
            door = ry + 1;
          } else {
            ry = aRoom["y"] + aRoom["height"] + 1;
            door = ry - 1;
          }
          this.map[rx][door] = 0;
        } else {
          ry = RNG$1.getUniformInt(aRoom["y"] + 1, aRoom["y"] + aRoom["height"] - 2);
          if (aDirection == 2) {
            rx = aRoom["x"] + aRoom["width"] + 1;
            door = rx - 1;
          } else {
            rx = aRoom["x"] - 2;
            door = rx + 1;
          }
          this.map[door][ry] = 0;
        }
        return [rx, ry];
      };
      _proto32._drawCorridor = function _drawCorridor(startPosition, endPosition) {
        var xOffset = endPosition[0] - startPosition[0];
        var yOffset = endPosition[1] - startPosition[1];
        var xpos = startPosition[0];
        var ypos = startPosition[1];
        var tempDist;
        var xDir;
        var yDir;
        var move;
        var moves = [];
        var xAbs = Math.abs(xOffset);
        var yAbs = Math.abs(yOffset);
        var percent = RNG$1.getUniform();
        var firstHalf = percent;
        var secondHalf = 1 - percent;
        xDir = xOffset > 0 ? 2 : 6;
        yDir = yOffset > 0 ? 4 : 0;
        if (xAbs < yAbs) {
          tempDist = Math.ceil(yAbs * firstHalf);
          moves.push([yDir, tempDist]);
          moves.push([xDir, xAbs]);
          tempDist = Math.floor(yAbs * secondHalf);
          moves.push([yDir, tempDist]);
        } else {
          tempDist = Math.ceil(xAbs * firstHalf);
          moves.push([xDir, tempDist]);
          moves.push([yDir, yAbs]);
          tempDist = Math.floor(xAbs * secondHalf);
          moves.push([xDir, tempDist]);
        }
        this.map[xpos][ypos] = 0;
        while (moves.length > 0) {
          move = moves.pop();
          while (move[1] > 0) {
            xpos += DIRS[8][move[0]][0];
            ypos += DIRS[8][move[0]][1];
            this.map[xpos][ypos] = 0;
            move[1] = move[1] - 1;
          }
        }
      };
      _proto32._createCorridors = function _createCorridors() {
        var cw = this._options.cellWidth;
        var ch = this._options.cellHeight;
        var room;
        var connection;
        var otherRoom;
        var wall;
        var otherWall;
        for (var i = 0;i < cw; i++) {
          for (var j = 0;j < ch; j++) {
            room = this.rooms[i][j];
            for (var k = 0;k < room["connections"].length; k++) {
              connection = room["connections"][k];
              otherRoom = this.rooms[connection[0]][connection[1]];
              if (otherRoom["cellx"] > room["cellx"]) {
                wall = 2;
                otherWall = 4;
              } else if (otherRoom["cellx"] < room["cellx"]) {
                wall = 4;
                otherWall = 2;
              } else if (otherRoom["celly"] > room["celly"]) {
                wall = 3;
                otherWall = 1;
              } else {
                wall = 1;
                otherWall = 3;
              }
              this._drawCorridor(this._getWallPosition(room, wall), this._getWallPosition(otherRoom, otherWall));
            }
          }
        }
      };
      return Rogue2;
    }(Map3);
    var index$2 = {
      Arena,
      Uniform,
      Cellular,
      Digger,
      EllerMaze,
      DividedMaze,
      IceyMaze,
      Rogue
    };
    var Noise = function Noise() {
    };
    var F2 = 0.5 * (Math.sqrt(3) - 1);
    var G2 = (3 - Math.sqrt(3)) / 6;
    var Simplex = function(_Noise) {
      _inheritsLoose(Simplex2, _Noise);
      function Simplex2(gradients) {
        var _this19;
        if (gradients === undefined) {
          gradients = 256;
        }
        _this19 = _Noise.call(this) || this;
        _this19._gradients = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]];
        var permutations = [];
        for (var i = 0;i < gradients; i++) {
          permutations.push(i);
        }
        permutations = RNG$1.shuffle(permutations);
        _this19._perms = [];
        _this19._indexes = [];
        for (var _i13 = 0;_i13 < 2 * gradients; _i13++) {
          _this19._perms.push(permutations[_i13 % gradients]);
          _this19._indexes.push(_this19._perms[_i13] % _this19._gradients.length);
        }
        return _this19;
      }
      var _proto33 = Simplex2.prototype;
      _proto33.get = function get(xin, yin) {
        var perms = this._perms;
        var indexes = this._indexes;
        var count = perms.length / 2;
        var n0 = 0, n1 = 0, n2 = 0, gi;
        var s = (xin + yin) * F2;
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var t = (i + j) * G2;
        var X0 = i - t;
        var Y0 = j - t;
        var x0 = xin - X0;
        var y0 = yin - Y0;
        var i1, j1;
        if (x0 > y0) {
          i1 = 1;
          j1 = 0;
        } else {
          i1 = 0;
          j1 = 1;
        }
        var x1 = x0 - i1 + G2;
        var y1 = y0 - j1 + G2;
        var x2 = x0 - 1 + 2 * G2;
        var y2 = y0 - 1 + 2 * G2;
        var ii = mod(i, count);
        var jj = mod(j, count);
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
          t0 *= t0;
          gi = indexes[ii + perms[jj]];
          var grad = this._gradients[gi];
          n0 = t0 * t0 * (grad[0] * x0 + grad[1] * y0);
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
          t1 *= t1;
          gi = indexes[ii + i1 + perms[jj + j1]];
          var _grad = this._gradients[gi];
          n1 = t1 * t1 * (_grad[0] * x1 + _grad[1] * y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
          t2 *= t2;
          gi = indexes[ii + 1 + perms[jj + 1]];
          var _grad2 = this._gradients[gi];
          n2 = t2 * t2 * (_grad2[0] * x2 + _grad2[1] * y2);
        }
        return 70 * (n0 + n1 + n2);
      };
      return Simplex2;
    }(Noise);
    var index$3 = {
      Simplex
    };
    var Path = function() {
      function Path2(toX, toY, passableCallback, options) {
        if (options === undefined) {
          options = {};
        }
        this._toX = toX;
        this._toY = toY;
        this._passableCallback = passableCallback;
        this._options = Object.assign({
          topology: 8
        }, options);
        this._dirs = DIRS[this._options.topology];
        if (this._options.topology == 8) {
          this._dirs = [this._dirs[0], this._dirs[2], this._dirs[4], this._dirs[6], this._dirs[1], this._dirs[3], this._dirs[5], this._dirs[7]];
        }
      }
      var _proto34 = Path2.prototype;
      _proto34._getNeighbors = function _getNeighbors(cx, cy) {
        var result = [];
        for (var i = 0;i < this._dirs.length; i++) {
          var dir = this._dirs[i];
          var x = cx + dir[0];
          var y = cy + dir[1];
          if (!this._passableCallback(x, y)) {
            continue;
          }
          result.push([x, y]);
        }
        return result;
      };
      return Path2;
    }();
    var Dijkstra = function(_Path) {
      _inheritsLoose(Dijkstra2, _Path);
      function Dijkstra2(toX, toY, passableCallback, options) {
        var _this20;
        _this20 = _Path.call(this, toX, toY, passableCallback, options) || this;
        _this20._computed = {};
        _this20._todo = [];
        _this20._add(toX, toY, null);
        return _this20;
      }
      var _proto35 = Dijkstra2.prototype;
      _proto35.compute = function compute(fromX, fromY, callback) {
        var key = fromX + "," + fromY;
        if (!(key in this._computed)) {
          this._compute(fromX, fromY);
        }
        if (!(key in this._computed)) {
          return;
        }
        var item3 = this._computed[key];
        while (item3) {
          callback(item3.x, item3.y);
          item3 = item3.prev;
        }
      };
      _proto35._compute = function _compute(fromX, fromY) {
        while (this._todo.length) {
          var item3 = this._todo.shift();
          if (item3.x == fromX && item3.y == fromY) {
            return;
          }
          var neighbors = this._getNeighbors(item3.x, item3.y);
          for (var i = 0;i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            var x = neighbor[0];
            var y = neighbor[1];
            var id = x + "," + y;
            if (id in this._computed) {
              continue;
            }
            this._add(x, y, item3);
          }
        }
      };
      _proto35._add = function _add(x, y, prev) {
        var obj = {
          x,
          y,
          prev
        };
        this._computed[x + "," + y] = obj;
        this._todo.push(obj);
      };
      return Dijkstra2;
    }(Path);
    var AStar = function(_Path2) {
      _inheritsLoose(AStar2, _Path2);
      function AStar2(toX, toY, passableCallback, options) {
        var _this21;
        if (options === undefined) {
          options = {};
        }
        _this21 = _Path2.call(this, toX, toY, passableCallback, options) || this;
        _this21._todo = [];
        _this21._done = {};
        return _this21;
      }
      var _proto36 = AStar2.prototype;
      _proto36.compute = function compute(fromX, fromY, callback) {
        this._todo = [];
        this._done = {};
        this._fromX = fromX;
        this._fromY = fromY;
        this._add(this._toX, this._toY, null);
        while (this._todo.length) {
          var _item = this._todo.shift();
          var id = _item.x + "," + _item.y;
          if (id in this._done) {
            continue;
          }
          this._done[id] = _item;
          if (_item.x == fromX && _item.y == fromY) {
            break;
          }
          var neighbors = this._getNeighbors(_item.x, _item.y);
          for (var i = 0;i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            var x = neighbor[0];
            var y = neighbor[1];
            var _id3 = x + "," + y;
            if (_id3 in this._done) {
              continue;
            }
            this._add(x, y, _item);
          }
        }
        var item3 = this._done[fromX + "," + fromY];
        if (!item3) {
          return;
        }
        while (item3) {
          callback(item3.x, item3.y);
          item3 = item3.prev;
        }
      };
      _proto36._add = function _add(x, y, prev) {
        var h = this._distance(x, y);
        var obj = {
          x,
          y,
          prev,
          g: prev ? prev.g + 1 : 0,
          h
        };
        var f = obj.g + obj.h;
        for (var i = 0;i < this._todo.length; i++) {
          var item3 = this._todo[i];
          var itemF = item3.g + item3.h;
          if (f < itemF || f == itemF && h < item3.h) {
            this._todo.splice(i, 0, obj);
            return;
          }
        }
        this._todo.push(obj);
      };
      _proto36._distance = function _distance(x, y) {
        switch (this._options.topology) {
          case 4:
            return Math.abs(x - this._fromX) + Math.abs(y - this._fromY);
            break;
          case 6:
            var dx = Math.abs(x - this._fromX);
            var dy = Math.abs(y - this._fromY);
            return dy + Math.max(0, (dx - dy) / 2);
            break;
          case 8:
            return Math.max(Math.abs(x - this._fromX), Math.abs(y - this._fromY));
            break;
        }
      };
      return AStar2;
    }(Path);
    var index$4 = {
      Dijkstra,
      AStar
    };
    var Engine = function() {
      function Engine2(scheduler) {
        this._scheduler = scheduler;
        this._lock = 1;
      }
      var _proto37 = Engine2.prototype;
      _proto37.start = function start() {
        return this.unlock();
      };
      _proto37.lock = function lock() {
        this._lock++;
        return this;
      };
      _proto37.unlock = function unlock() {
        if (!this._lock) {
          throw new Error("Cannot unlock unlocked engine");
        }
        this._lock--;
        while (!this._lock) {
          var actor = this._scheduler.next();
          if (!actor) {
            return this.lock();
          }
          var result = actor.act();
          if (result && result.then) {
            this.lock();
            result.then(this.unlock.bind(this));
          }
        }
        return this;
      };
      return Engine2;
    }();
    var Lighting = function() {
      function Lighting2(reflectivityCallback, options) {
        if (options === undefined) {
          options = {};
        }
        this._reflectivityCallback = reflectivityCallback;
        this._options = {};
        options = Object.assign({
          passes: 1,
          emissionThreshold: 100,
          range: 10
        }, options);
        this._lights = {};
        this._reflectivityCache = {};
        this._fovCache = {};
        this.setOptions(options);
      }
      var _proto38 = Lighting2.prototype;
      _proto38.setOptions = function setOptions(options) {
        Object.assign(this._options, options);
        if (options && options.range) {
          this.reset();
        }
        return this;
      };
      _proto38.setFOV = function setFOV(fov) {
        this._fov = fov;
        this._fovCache = {};
        return this;
      };
      _proto38.setLight = function setLight(x, y, color2) {
        var key = x + "," + y;
        if (color2) {
          this._lights[key] = typeof color2 == "string" ? fromString(color2) : color2;
        } else {
          delete this._lights[key];
        }
        return this;
      };
      _proto38.clearLights = function clearLights() {
        this._lights = {};
      };
      _proto38.reset = function reset() {
        this._reflectivityCache = {};
        this._fovCache = {};
        return this;
      };
      _proto38.compute = function compute(lightingCallback) {
        var doneCells = {};
        var emittingCells = {};
        var litCells = {};
        for (var key in this._lights) {
          var light = this._lights[key];
          emittingCells[key] = [0, 0, 0];
          add_(emittingCells[key], light);
        }
        for (var i = 0;i < this._options.passes; i++) {
          this._emitLight(emittingCells, litCells, doneCells);
          if (i + 1 == this._options.passes) {
            continue;
          }
          emittingCells = this._computeEmitters(litCells, doneCells);
        }
        for (var litKey in litCells) {
          var parts = litKey.split(",");
          var x = parseInt(parts[0]);
          var y = parseInt(parts[1]);
          lightingCallback(x, y, litCells[litKey]);
        }
        return this;
      };
      _proto38._emitLight = function _emitLight(emittingCells, litCells, doneCells) {
        for (var key in emittingCells) {
          var parts = key.split(",");
          var x = parseInt(parts[0]);
          var y = parseInt(parts[1]);
          this._emitLightFromCell(x, y, emittingCells[key], litCells);
          doneCells[key] = 1;
        }
        return this;
      };
      _proto38._computeEmitters = function _computeEmitters(litCells, doneCells) {
        var result = {};
        for (var key in litCells) {
          if (key in doneCells) {
            continue;
          }
          var _color = litCells[key];
          var reflectivity = undefined;
          if (key in this._reflectivityCache) {
            reflectivity = this._reflectivityCache[key];
          } else {
            var parts = key.split(",");
            var x = parseInt(parts[0]);
            var y = parseInt(parts[1]);
            reflectivity = this._reflectivityCallback(x, y);
            this._reflectivityCache[key] = reflectivity;
          }
          if (reflectivity == 0) {
            continue;
          }
          var emission = [0, 0, 0];
          var intensity = 0;
          for (var i = 0;i < 3; i++) {
            var part = Math.round(_color[i] * reflectivity);
            emission[i] = part;
            intensity += part;
          }
          if (intensity > this._options.emissionThreshold) {
            result[key] = emission;
          }
        }
        return result;
      };
      _proto38._emitLightFromCell = function _emitLightFromCell(x, y, color2, litCells) {
        var key = x + "," + y;
        var fov;
        if (key in this._fovCache) {
          fov = this._fovCache[key];
        } else {
          fov = this._updateFOV(x, y);
        }
        for (var fovKey in fov) {
          var formFactor = fov[fovKey];
          var result = undefined;
          if (fovKey in litCells) {
            result = litCells[fovKey];
          } else {
            result = [0, 0, 0];
            litCells[fovKey] = result;
          }
          for (var i = 0;i < 3; i++) {
            result[i] += Math.round(color2[i] * formFactor);
          }
        }
        return this;
      };
      _proto38._updateFOV = function _updateFOV(x, y) {
        var key1 = x + "," + y;
        var cache = {};
        this._fovCache[key1] = cache;
        var range2 = this._options.range;
        function cb(x2, y2, r, vis) {
          var key2 = x2 + "," + y2;
          var formFactor = vis * (1 - r / range2);
          if (formFactor == 0) {
            return;
          }
          cache[key2] = formFactor;
        }
        this._fov.compute(x, y, range2, cb.bind(this));
        return cache;
      };
      return Lighting2;
    }();
    var Util = util2;
    var Color = color;
    var Text = text;
    exports2.Util = Util;
    exports2.Color = Color;
    exports2.Text = Text;
    exports2.RNG = RNG$1;
    exports2.Display = Display;
    exports2.StringGenerator = StringGenerator;
    exports2.EventQueue = EventQueue;
    exports2.Scheduler = index;
    exports2.FOV = index$1;
    exports2.Map = index$2;
    exports2.Noise = index$3;
    exports2.Path = index$4;
    exports2.Engine = Engine;
    exports2.Lighting = Lighting;
    exports2.DEFAULT_WIDTH = DEFAULT_WIDTH;
    exports2.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    exports2.DIRS = DIRS;
    exports2.KEYS = KEYS;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});

// src/config.ts
var WINDOW_WIDTH_IN_PX = typeof window !== "undefined" ? window.innerWidth : 0;
var WINDOW_HEIGHT_IN_PX = typeof window !== "undefined" ? window.innerHeight : 0;
var BOTMOS_OPTIONS = {
  cameraWidth: Math.floor(WINDOW_WIDTH_IN_PX / 18),
  cameraHeight: Math.floor(WINDOW_HEIGHT_IN_PX / 18),
  debug: true,
  fontSize: 18,
  highlightEnemy: true,
  showGrid: true,
  showUI: true,
  zoom: 1
};
var MAX_MAP_SIZE = {
  WIDTH: 1024,
  HEIGHT: 1024
};
var ROT_OPTIONS = {
  width: Math.floor(BOTMOS_OPTIONS.cameraWidth * (1 / BOTMOS_OPTIONS.zoom)),
  height: Math.floor(BOTMOS_OPTIONS.cameraHeight * (1 / BOTMOS_OPTIONS.zoom)),
  bg: "transparent",
  fontSize: Math.floor(BOTMOS_OPTIONS.fontSize * BOTMOS_OPTIONS.zoom),
  forceSquareRatio: true
};

// src/debug.ts
function debug_log(text) {
  if (BOTMOS_OPTIONS.debug) {
    console.log(text);
  }
}
var DEBUG_LINES = [];

// src/manifest.ts
class Action {
  name;
  description;
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class AI {
  name;
  description;
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class Command {
  key;
  description;
  constructor(key, description) {
    this.key = key;
    this.description = description;
  }
}

class Effect {
  name;
  description;
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class Faction {
  name;
  description;
  color;
  constructor(name, description, color) {
    this.name = name;
    this.description = description;
    this.color = color;
  }
}

class Item {
  name;
  description;
  icon;
  color;
  energyDelta;
  matter;
  gold;
  damage;
  energyCost;
  effects;
  constructor(name, description, icon, color = "cyberyellow", energyDelta = 0, matter = 0, gold = 0, damage = 0, energyCost = 0, effects = []) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.color = color;
    this.energyDelta = energyDelta;
    this.matter = matter;
    this.gold = gold;
    this.damage = damage;
    this.energyCost = energyCost;
    this.effects = effects;
  }
}

class Spirit {
  name;
  description;
  icon;
  color;
  energyMax;
  unlockCondition;
  constructor(name, description, icon, energyMax = 100) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.energyMax = energyMax;
    this.color = "white";
    this.unlockCondition = null;
  }
}

class Tile {
  name;
  description;
  icon;
  fg;
  bg;
  energyDelta;
  constructor(name, description, icon = null, fg = "white", bg = "black", energyDelta = 0) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.fg = fg;
    this.bg = bg;
    this.energyDelta = energyDelta;
  }
}
var MANIFEST = {
  actions: {
    Enter: new Action("Enter", "Enter a portal or plant atmosphere"),
    Launch: new Action("Launch", "Launch into space"),
    Wait: new Action("Wait", "Wait one turn in place")
  },
  ais: {
    aggrorange: new AI("aggrorange", "Idles at a position and engages the player when coming into range"),
    aggrorangeshort: new AI("aggrorangeshort", "Idles at a position and engages the player when coming into shorter range"),
    guardian: new AI("guardian", "Idles at a position and only fights back if engaged")
  },
  colors: {
    black: "#000",
    cybercyan: "#4deeea",
    cyberyellow: "#ffe700",
    cybermagenta: "#f000ff",
    cybergreen: "#74ee15",
    cyberblue: "#001eff",
    brown: "brown",
    gray: "#777",
    white: "#fff"
  },
  colorcoding: {
    cybergreen: "Friendly color",
    cybermagenta: "Enemy color",
    cyberyellow: "Item or special effect color"
  },
  commands: {
    N: new Command("N", "Move/interact/combat north"),
    E: new Command("E", "Move/interact/combat east"),
    S: new Command("S", "Move/interact/combat south"),
    W: new Command("W", "Move/interact/combat west"),
    A: new Command("A", "Primary action, confirm"),
    B: new Command("B", "Take a break, cancel"),
    "1": new Command("1", "Secondary action, first quick slot"),
    "2": new Command("2", "Tertiary action, second quick slot"),
    M: new Command("M", "Menu")
  },
  effects: {
    WallCrusher: new Effect("Wall Crusher", "Tears down weak walls")
  },
  entities: {
    movableboulder: new Spirit("movableboulder", "A movable rock", "o", 2),
    movablebox: new Spirit("movablebox", "A movable box", "x", 2),
    Spirit: new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@", 10),
    AeroBot: new Spirit("AeroBot", "Basic server, serving energy goo and such to bots", "A", 80),
    WorkBot: new Spirit("WorkBot", "Basic factory worker", "B"),
    Cleaner: new Spirit("Cleaner", "Advanced bot purging malfunctioning bots", "C", 50),
    Pioneer: new Spirit("Pioneer", "Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors", "W", 200)
  },
  factions: {
    Equipment: new Faction("Equipment", "For boxes etc.", "gray"),
    Spirits: new Faction("Spirits", "Default player faction", "white"),
    Pyrates: new Faction("Pyrates", "Default enemy faction", "cybermagenta"),
    Gaia: new Faction("Gaia", "For rocks etc.", "brown"),
    Guardians: new Faction("Guardians", "Bot station guardians", "cybercyan")
  },
  items: {
    battery: new Item("Battery", "Increases maximum energy", "b", "cyberyellow", 10),
    energy: new Item("Energy", "Energy pack", "e", "cyberyellow", 10),
    gold: new Item("Gold", "Precious shiny!", "g", "cyberyellow", 0, 0, 1),
    goo: new Item("Goo", "A minor matter source", "g", "gray", 0, 1),
    junk: new Item("Junk", "Broken bot", "%", "gray", 0, 1),
    matter: new Item("Matter", "A pile of stuff", "m", "gray", 0, 100),
    hammer: new Item("Hammer", "Tears down weak walls", "i", "cyberyellow", 0, 0, 0, -15, -2, ["Wall Crusher"]),
    wrench: new Item("Wrench", "Basic WorkBot tool", "i", "cyberyellow", 0, 0, 0, -10, -1),
    shocker: new Item("Shocker", "Injects Bots with new energy, basic AeroBot tool", "i", "cyberyellow", 0, 0, 0, 10, -1)
  },
  maps: {
    bot_bar: `!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!s wallstatue
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#s....=..+~....#
O.....=..+.....#
#s.====..+.....#
#..=.....+.....#
#..=.....+.....#
#..====..+.....#
#.....=..+.....#
#.....=..+.....#
#.....=..+++++.#
#..............#
#~............~#
################
`,
    bot_dormitory: `!
!!id bot_dormitory
!!size 32 32
!!. void
!!~ water
!!# wall
!!= chargepad
!!O portal bot_station 22 28
!!Q portal bot_station 27 28
!!h portalhidden bot_dormitory_hidden 1 0
################################
#..............................#
#..............................#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=#######h##..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###~.#
#.~............................#
#...............~..............#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###..#
#..............~...............#
#..............................#
##O##########################Q##
`,
    bot_dormitory_hidden: `!
!!id bot_dormitory_hidden
!!size 4 4
!!. void
!!# wall
!!~ water
!!O portal bot_dormitory 26 5
#O##
#.~#
#..#
####
`,
    bot_elevator: `!
!!id bot_elevator
!!size 32 48
!!# wall
!!s wallstatue
!!+ wallweak
!!. void
!!_ voidtrue
!!= chargepad
!!~ water
!!O portal bot_station 4 6
!!E portal simplex=1337 126 121
!!^ movenorth
!!v movesouth
################________________
#.........+...~#________________
#.........+....#________________
#.........+....#________________
#.........+....#________________
#.........++^++#################
#..............#s.s.s.s.s.s.s.s#
#..............#..===========..#
#................=+++++++++++=.#
#................=+++++++++++=.#
O..............#..===========..#
#..............#...............#
#..............#################
#..............#________________
#..............#________________
###########v^###________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#..#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
_________##v^##_________________
_________#....#_________________
_________#....#_________________
_________##E###_________________
`,
    bot_factory: `!
!!id bot_factory
!!size 48 32
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#..vv.<.<.<<...........+.......................#
#..vv.<.<.<<...........+.......................#
#..............................................#
#..............................................#
#++#+###########################################
#+++.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#+++.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#++#+###########################################
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^........................................~~#
#............................................~~#
##O#############################################
`,
    bot_stadium: `!
!Now this is botracing!
!!id bot_stadium
!!size 48 16
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ water
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!s wallstatue
!!O portal bot_station 10 16
!!S portalhidden shop_instance 1 14
################################################
#s............................................s#
#..............................................#
#..++++++++++++++++++++++++++++++++++++++++++..#
#..+..>>>>..+..>>>>>v..~~..>>>>>>~>>>>>>....+..#
#..+..>>>>..+..>>>>...~~~~.>>>>~>>>~>>>>....+..#
#..+^^....vv+.^......>>>>..............+..vv+..#
#..+^^....vv+.^......>>>>>^............+..vv+..#
#..+^^......>>.........................+..vv+..#
#..+^^....++++++++++++++++++++++++++++++++vv+..#
#..+..<<<<<~<<<<<<<<<<<<~<<<<<<<<<~<<<<<<<==+..#
#..+..<<<<<<<<<~<<<<<<<<<<<<<~<<<<<<<<<<<<==+..#
#..+++++++++++++++++++++++++++++++++++++++..+..#
#..............................................#
#S............................................s#
#############################################O##
`,
    bot_station: `!
!!id bot_station
!!size 32 32
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!C portalclosed
!!A portal arena 1 0
!!B portal bot_bar 0 5
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!e portal bot_elevator 0 10
!!F portal bot_factory 2 31
!!E portal bot_factory 47 16
!!S portal bot_stadium 45 15
!!h portalhidden bot_factory 10 0
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...C###.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
#~............................~#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######S#.>.>.>.>.>.B###....#
#.>.>.>.>...^....^.....####....#
#.....................v####....#
#.^#..#..#..#....^.....>.>.>.v.#
#..##.##.##.##.................#
#.^##h########...^...########v.#
#..###########.......########..#
#.^###########...^...########v.#
#..###########.......########..#
#.^##########E.>.^...########v.#
#..###########.......########..#
#.^###########.......########v.#
#..#F#########.......#O####Q#..#
#.^..<.<.<.<.<.<.<.<.<.......<.#
#.............................~#
################################
`,
    botmos_hull_selection: `!
!!id botmos_hull_selection
!!size 20 20
!!. void
!!_ voidtrue
!!~ water
!!^ rock
!!# wall
!!+ wallweak
!!B wall B
!!o wall o
!!t wall t
!!M wall M
!!s wall s
!!C wall C
!!h wall h
!!e wall e
!!y wall y
!!u wall u
!!r wall r
!!l wall l
!!a wall a
!!n wall n
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!Q portalclosed
!!] portal manual 0 5
!!A portal arena 1 0
!!i portalhidden playground 1 0
!!1 portalstartaerobot bot_factory 4 15
!!2 portalstartworkbot bot_factory 4 16
!!? _portalstart?
!!D portal bot_station 0 29
##_____BotMos_____##
#_Choose_your_hull_#
#.================.#
#..................#
#.....2.....Manual.#
#..1........>.>.>..]
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............Q
#..?...............#
#~~~~~~~~~~~~~~~~~~#
#i##################
`,
    manual: `!
!!id manual
!!size 80 54
!!# wall
!!+ wallweak
!!. voidtrue
!!_ voidtrue
!!: void
!!~ water
!!= chargepad
!!^ movenorth
!!> moveeast
!!| movesouth
!!< movewest
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!, wall ,
!!/ wall /
!!( portal manual 9 16
!!) portal manual 4 16
!!] portalclosed
!![ portal botmos_hull_selection 19 5
################################################################################
#..............................................................................#
#...Welcome_to_the_roBot_cosMos................................................#
#...INTERACTIVE_MANUAL.........................................................#
#..............................................................................#
[...<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<..#
#.............................................................................^#
#^|.Move_around_using_arrow_keys_or_WASD......................................^#
#^..Alternatively,_click/touch_on_the_top/left/bottom/right_screen_area.......^#
#^|...........................................................................^#
#^..M_or_click/touch_on_the_screen_center_to_open_the_menu....................^#
#^|...........................................................................^#
#^..Y_or_Z_or_Spacebar_or_click/touch_top_screen_corners_to_skip_one_turn.....^#
#^|...........................................................................^#
#^..^.<.|.>.move_you_automatically............................................^#
#^|...........................................................................^#
#^..(####).Portals/doors_transport_to_different_maps/areas,_some_are_]_closed.^#
#^|...........................................................................^#
#^..#.and.+.are_walls.........................................................^#
#^|...........................................................................^#
#^..=.Chargepads_restore_energy,.~.Water_drains_energy........................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..BOTS......green_means_friendly,_enemies_are_magenta.......................^#
#^|...........................................................................^#
#^....Spirit,_machine_spirit_without_a_hull...................................^#
#^|...AeroBot,_a_basic_server.................................................^#
#^....WorkBot,_a_factory_worker...............................................^#
#^|...Cleaner,_corrects_malfunctioning_bots...................................^#
#^....Pioneer,_mighty_war_machines............................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..ITEMS.....................................................................^#
#^|...........................................................................^#
#^....Junk,...Goo,_minor_matter_sources.......................................^#
#^|...Matter,_a_common_resource...............................................^#
#^....Gold,_precious_shiny....................................................^#
#^|...Energy,_restores_energy.................................................^#
#^....Battery,_increases_maximum_energy.......................................^#
#^|...Various_tools,_e:g:_a_Wrench............................................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..STORY.....................................................................^#
#^|...........................................................................^#
#^..You_slave_away_on_a_robot_vessel,_but_there_is_the_cosmos_to_explore:::...^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,
    playground: `!
!!id playground
!!size 20 20
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#................Q.#
#..................#
#..................#
#................P.#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#........~.........#
#..................#
####################
`
  },
  names: {
    BotMoses: "Teaches the new player",
    Betty: "Gambles a lot",
    Bender: "From the future, bowl head",
    Drak: "A now retired PioneerBot, who teaches the new player combat lessons",
    Oz: "A machinery wizard"
  },
  tiles: {
    void: BOTMOS_OPTIONS.showGrid ? new Tile("void", "Just nothing here", ".", "gray") : new Tile("void", "Just nothing here"),
    voidtrue: new Tile("voidtrue", "Really nothing here and you shouldn't get there ever!"),
    water: new Tile("water", "Rust and other dangers await", "~", "cybercyan", "cyberblue", -2),
    rock: new Tile("rock", "Hidden treasures may await", "^", "white", "gray"),
    tree: new Tile("tree", "Lots of trees make a forest", "t", "brown", "black"),
    wall: new Tile("wall", "A strong wall", "#", "gray", "black"),
    wallstatue: new Tile("wallstatue", "A small statue", "s", "gray", "black"),
    wallweak: new Tile("wallweak", "A weakened wall", "+", "gray", "black"),
    chargepad: new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black", 2),
    movenorth: new Tile("movenorth", "Moves you north", "^", "cyberyellow"),
    moveeast: new Tile("moveeast", "Moves you east", ">", "cyberyellow"),
    movesouth: new Tile("movesouth", "Moves you south", "v", "cyberyellow"),
    movewest: new Tile("movewest", "Moves you west", "<", "cyberyellow"),
    portal: new Tile("portal", "Gateway to another map", "O", "cyberyellow", "gray"),
    portalclosed: new Tile("portalclosed", "Closed gateway to another map", "O", "black", "gray"),
    portalhidden: new Tile("portalhidden", "Hidden gateway to another map", "#", "gray", "black"),
    portalstartworkbot: new Tile("portalstartworkbot", "Start playing as a WorkBot", "B", "white"),
    portalstartaerobot: new Tile("portalstartaerobot", "Start playing as a AeroBot", "A", "white"),
    "_portalstart?": new Tile("_portalstart?", "Not unlocked, yet!", "?", "white"),
    spacerock: new Tile("spacerock", "Mountains as seen from space, non-blocking!", "^", "white", "gray"),
    spacetree: new Tile("spacetree", "Forest as seen from space", "", "brown", "brown"),
    spacewater: new Tile("spacewater", "Water as seen from space, not dangerous!", "~", "cybercyan", "cyberblue"),
    spacevoid: new Tile("spacevoid", "Void/ground as seen from space", "", "gray", "gray"),
    spacevoidstarwhite: new Tile("spacevoidstarwhite", "Space with a white background star", ".", "white"),
    spacevoidstaryellow: new Tile("spacevoidstaryellow", "Space with a yellow background star", ".", "cyberyellow"),
    sun: new Tile("sun", "It's hot, really hot!", "", "cyberyellow", "cyberyellow", -100)
  }
};

// src/entity.ts
function entities_create(state, id, type, mapId, x = 0, y = 0, options = {}) {
  const entity = {
    id,
    type,
    mapId,
    x,
    y,
    energy: 10,
    energyMax: 10,
    gold: 0,
    matter: 0,
    options
  };
  state = entities_set_type(state, entity, type);
  state.entities[entity.id] = entity;
  return state;
}
function entities_create_boulder(state, mapId, x, y) {
  return entities_create(state, "boulder," + mapId + "," + x + "," + y, MANIFEST.entities.movableboulder, mapId, x, y, { faction: MANIFEST.factions.Gaia });
}
function entities_create_box(state, mapId, x, y) {
  return entities_create(state, "box," + mapId + "," + x + "," + y, MANIFEST.entities.movablebox, mapId, x, y, { faction: MANIFEST.factions.Equipment });
}
function entities_destroy(state, entityId) {
  state.entities[entityId] = undefined;
  delete state.entities[entityId];
  state.tools[entityId] = undefined;
  return state;
}
function entities_get_by(state, mapId) {
  let entity_ids = Object.keys(state.entities);
  let entities_on_map = [];
  for (let i = 0;i < entity_ids.length; i++) {
    let entity = state.entities[entity_ids[i]];
    if (entity.mapId === mapId) {
      entities_on_map.push(entity);
    }
  }
  return entities_on_map;
}
function entities_get_at(state, mapId, x, y) {
  let entities_at_pos = entities_get_by(state, mapId).filter((e) => e.x === x && e.y === y);
  if (entities_at_pos.length > 0) {
    return entities_at_pos[0];
  }
  return null;
}
function entities_set_type(state, entity, newType) {
  entity.type = newType;
  entity.energy = newType.energyMax;
  entity.energyMax = newType.energyMax;
  entity.gold = 0;
  entity.matter = 0;
  if (!isMoveableObject(entity)) {
    state.tools[entity.id] = undefined;
  }
  return state;
}
function interactOrCombat(state, entityA, entityB) {
  if (entityA.options.faction === entityB.options.faction) {
  } else {
    const entityId = entityA.id;
    const otherEntityId = entityB.id;
    state._combatQueue.push({ entityId, otherEntityId });
  }
  return state;
}
function isMoveableObject(entity) {
  return entity.type === MANIFEST.entities.movableboulder || entity.type === MANIFEST.entities.movablebox;
}

// src/action.ts
function actions_get(state, entity) {
  const actions = {
    A: MANIFEST.actions.Wait,
    B: MANIFEST.actions.Wait
  };
  if (!!state.lastSpacePositionByEntity[entity.id]) {
    actions.A = MANIFEST.actions.Launch;
  }
  const map = state.maps[entity.mapId];
  const tile = map.getTile(entity.x, entity.y);
  if (!!tile.options.mapId && "x" in tile.options && "y" in tile.options) {
    actions.A = MANIFEST.actions.Enter;
  }
  return actions;
}

// src/events.ts
function publish(state, event, payload) {
  const subscribers = state._eventSubscribers[event];
  if (!!subscribers) {
    for (let i = 0;i < subscribers.length; i++) {
      const handler = subscribers[i];
      state = handler(state, payload);
    }
  }
  return state;
}
function subscribe(state, event, handler) {
  if (event in state._eventSubscribers) {
  } else {
    state._eventSubscribers[event] = [];
  }
  state._eventSubscribers[event].push(handler);
  return state;
}

// src/item.ts
function items_create(state, type, mapId, x = 0, y = 0) {
  const id = _items_id_create(mapId, x, y);
  const item = {
    id,
    type,
    mapId,
    x,
    y,
    energy: type.energyDelta,
    gold: type.gold,
    matter: type.matter
  };
  state.items[item.id] = item;
  return state;
}
function items_create_junk(state, matter, mapId, x = 0, y = 0) {
  const type = MANIFEST.items.junk;
  const id = _items_id_create(mapId, x, y);
  const item = {
    id,
    type,
    mapId,
    x,
    y,
    energy: type.energyDelta,
    gold: type.gold,
    matter
  };
  state.items[item.id] = item;
  return state;
}
function items_create_buyable(state, type, mapId, x = 0, y = 0, goldCost, matterCost) {
  const id = _items_id_create(mapId, x, y);
  const item = {
    id,
    type,
    mapId,
    x,
    y,
    energy: type.energyDelta,
    gold: goldCost,
    matter: matterCost
  };
  state.items[item.id] = item;
  return state;
}
var _items_id_create = function(mapId, x, y) {
  return "item," + mapId + "," + x + "," + y;
};
function items_destroy(state, itemId) {
  state.items[itemId] = undefined;
  delete state.items[itemId];
  return state;
}
function items_get_by(state, mapId) {
  let itemIds = Object.keys(state.items);
  let itemsOnMap = [];
  for (let i = 0;i < itemIds.length; i++) {
    let item = state.items[itemIds[i]];
    if (item.mapId === mapId) {
      itemsOnMap.push(item);
    }
  }
  return itemsOnMap;
}
function items_get_at(state, mapId, x, y) {
  let itemId = _items_id_create(mapId, x, y);
  if (itemId in state.items) {
    return state.items[itemId];
  }
  return null;
}
function items_get_equipped(state, entityId) {
  return state.tools[entityId];
}
function items_pickup(state, entity2, item) {
  if (isMoveableObject(entity2)) {
    return state;
  }
  if (!_hasEnoughResourcesToPickupItem(entity2, item)) {
    return state;
  }
  if (_is_tool(item)) {
    state = items_equip(state, entity2.id, item.type);
  } else {
    if (item.type === MANIFEST.items.battery) {
      entity2.energyMax += item.energy;
    }
    state._energyQueue.push({ entityId: entity2.id, energyDelta: item.energy });
  }
  entity2.gold += item.gold;
  entity2.matter += item.matter;
  items_destroy(state, item.id);
  return state;
}
function items_equip(state, entityId, itemType) {
  let equippedItem = { type: itemType };
  state.tools[entityId] = equippedItem;
  return state;
}
var _is_tool = function(item) {
  return item.type.energyCost < 0;
};
var _hasEnoughResourcesToPickupItem = function(entity2, item) {
  return entity2.gold + item.gold >= 0 && entity2.matter + item.matter >= 0;
};

// src/easystar_astar.ts
function a_star(movementMap, startX, startY, endX, endY) {
  let easystar = new EasyStar.js;
  easystar.setGrid(movementMap);
  easystar.setAcceptableTiles([0]);
  easystar.enableSync();
  let foundPath = null;
  easystar.findPath(startX, startY, endX, endY, function(path) {
    foundPath = path;
  });
  easystar.calculate();
  return foundPath;
}
/*!
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2020 Bryce Neal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var EasyStar = function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId])
      return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = true, module.exports;
  }
  return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
    __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: true, get: getter });
  }, __webpack_require__.r = function(exports) {
    typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(exports, "__esModule", { value: true });
  }, __webpack_require__.t = function(value, mode) {
    if (1 & mode && (value = __webpack_require__(value)), 8 & mode)
      return value;
    if (4 & mode && typeof value == "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", { enumerable: true, value }), 2 & mode && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(ns, key, function(key2) {
          return value[key2];
        }.bind(null, key));
    return ns;
  }, __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return __webpack_require__.d(getter, "a", getter), getter;
  }, __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }, __webpack_require__.p = "/bin/", __webpack_require__(__webpack_require__.s = 0);
}([
  function(module, exports, __webpack_require__) {
    var EasyStar2 = {}, Instance = __webpack_require__(1), Node = __webpack_require__(2), Heap = __webpack_require__(3);
    module.exports = EasyStar2;
    var nextInstanceId = 1;
    EasyStar2.js = function() {
      var collisionGrid, iterationsSoFar, acceptableTiles, syncEnabled = false, pointsToAvoid = {}, costMap = {}, pointsToCost = {}, directionalConditions = {}, allowCornerCutting = true, instances = {}, instanceQueue = [], iterationsPerCalculation = Number.MAX_VALUE, diagonalsEnabled = false;
      this.setAcceptableTiles = function(tiles) {
        tiles instanceof Array ? acceptableTiles = tiles : !isNaN(parseFloat(tiles)) && isFinite(tiles) && (acceptableTiles = [tiles]);
      }, this.enableSync = function() {
        syncEnabled = true;
      }, this.disableSync = function() {
        syncEnabled = false;
      }, this.enableDiagonals = function() {
        diagonalsEnabled = true;
      }, this.disableDiagonals = function() {
        diagonalsEnabled = false;
      }, this.setGrid = function(grid) {
        collisionGrid = grid;
        for (var y = 0;y < collisionGrid.length; y++)
          for (var x = 0;x < collisionGrid[0].length; x++)
            costMap[collisionGrid[y][x]] || (costMap[collisionGrid[y][x]] = 1);
      }, this.setTileCost = function(tileType, cost) {
        costMap[tileType] = cost;
      }, this.setAdditionalPointCost = function(x, y, cost) {
        pointsToCost[y] === undefined && (pointsToCost[y] = {}), pointsToCost[y][x] = cost;
      }, this.removeAdditionalPointCost = function(x, y) {
        pointsToCost[y] !== undefined && delete pointsToCost[y][x];
      }, this.removeAllAdditionalPointCosts = function() {
        pointsToCost = {};
      }, this.setDirectionalCondition = function(x, y, allowedDirections) {
        directionalConditions[y] === undefined && (directionalConditions[y] = {}), directionalConditions[y][x] = allowedDirections;
      }, this.removeAllDirectionalConditions = function() {
        directionalConditions = {};
      }, this.setIterationsPerCalculation = function(iterations) {
        iterationsPerCalculation = iterations;
      }, this.avoidAdditionalPoint = function(x, y) {
        pointsToAvoid[y] === undefined && (pointsToAvoid[y] = {}), pointsToAvoid[y][x] = 1;
      }, this.stopAvoidingAdditionalPoint = function(x, y) {
        pointsToAvoid[y] !== undefined && delete pointsToAvoid[y][x];
      }, this.enableCornerCutting = function() {
        allowCornerCutting = true;
      }, this.disableCornerCutting = function() {
        allowCornerCutting = false;
      }, this.stopAvoidingAllAdditionalPoints = function() {
        pointsToAvoid = {};
      }, this.findPath = function(startX, startY, endX, endY, callback) {
        var callbackWrapper = function(result) {
          syncEnabled ? callback(result) : setTimeout(function() {
            callback(result);
          });
        };
        if (acceptableTiles === undefined)
          throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");
        if (collisionGrid === undefined)
          throw new Error("You can't set a path without first calling setGrid() on EasyStar.");
        if (startX < 0 || startY < 0 || endX < 0 || endY < 0 || startX > collisionGrid[0].length - 1 || startY > collisionGrid.length - 1 || endX > collisionGrid[0].length - 1 || endY > collisionGrid.length - 1)
          throw new Error("Your start or end point is outside the scope of your grid.");
        if (startX !== endX || startY !== endY) {
          for (var endTile = collisionGrid[endY][endX], isAcceptable = false, i = 0;i < acceptableTiles.length; i++)
            if (endTile === acceptableTiles[i]) {
              isAcceptable = true;
              break;
            }
          if (isAcceptable !== false) {
            var instance = new Instance;
            instance.openList = new Heap(function(nodeA, nodeB) {
              return nodeA.bestGuessDistance() - nodeB.bestGuessDistance();
            }), instance.isDoneCalculating = false, instance.nodeHash = {}, instance.startX = startX, instance.startY = startY, instance.endX = endX, instance.endY = endY, instance.callback = callbackWrapper, instance.openList.push(coordinateToNode(instance, instance.startX, instance.startY, null, 1));
            var instanceId = nextInstanceId++;
            return instances[instanceId] = instance, instanceQueue.push(instanceId), instanceId;
          }
          callbackWrapper(null);
        } else
          callbackWrapper([]);
      }, this.cancelPath = function(instanceId) {
        return instanceId in instances && (delete instances[instanceId], true);
      }, this.calculate = function() {
        if (instanceQueue.length !== 0 && collisionGrid !== undefined && acceptableTiles !== undefined)
          for (iterationsSoFar = 0;iterationsSoFar < iterationsPerCalculation; iterationsSoFar++) {
            if (instanceQueue.length === 0)
              return;
            syncEnabled && (iterationsSoFar = 0);
            var instanceId = instanceQueue[0], instance = instances[instanceId];
            if (instance !== undefined)
              if (instance.openList.size() !== 0) {
                var searchNode = instance.openList.pop();
                if (instance.endX !== searchNode.x || instance.endY !== searchNode.y)
                  searchNode.list = 0, searchNode.y > 0 && checkAdjacentNode(instance, searchNode, 0, -1, 1 * getTileCost(searchNode.x, searchNode.y - 1)), searchNode.x < collisionGrid[0].length - 1 && checkAdjacentNode(instance, searchNode, 1, 0, 1 * getTileCost(searchNode.x + 1, searchNode.y)), searchNode.y < collisionGrid.length - 1 && checkAdjacentNode(instance, searchNode, 0, 1, 1 * getTileCost(searchNode.x, searchNode.y + 1)), searchNode.x > 0 && checkAdjacentNode(instance, searchNode, -1, 0, 1 * getTileCost(searchNode.x - 1, searchNode.y)), diagonalsEnabled && (searchNode.x > 0 && searchNode.y > 0 && (allowCornerCutting || isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y - 1, searchNode) && isTileWalkable(collisionGrid, acceptableTiles, searchNode.x - 1, searchNode.y, searchNode)) && checkAdjacentNode(instance, searchNode, -1, -1, 1.4 * getTileCost(searchNode.x - 1, searchNode.y - 1)), searchNode.x < collisionGrid[0].length - 1 && searchNode.y < collisionGrid.length - 1 && (allowCornerCutting || isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y + 1, searchNode) && isTileWalkable(collisionGrid, acceptableTiles, searchNode.x + 1, searchNode.y, searchNode)) && checkAdjacentNode(instance, searchNode, 1, 1, 1.4 * getTileCost(searchNode.x + 1, searchNode.y + 1)), searchNode.x < collisionGrid[0].length - 1 && searchNode.y > 0 && (allowCornerCutting || isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y - 1, searchNode) && isTileWalkable(collisionGrid, acceptableTiles, searchNode.x + 1, searchNode.y, searchNode)) && checkAdjacentNode(instance, searchNode, 1, -1, 1.4 * getTileCost(searchNode.x + 1, searchNode.y - 1)), searchNode.x > 0 && searchNode.y < collisionGrid.length - 1 && (allowCornerCutting || isTileWalkable(collisionGrid, acceptableTiles, searchNode.x, searchNode.y + 1, searchNode) && isTileWalkable(collisionGrid, acceptableTiles, searchNode.x - 1, searchNode.y, searchNode)) && checkAdjacentNode(instance, searchNode, -1, 1, 1.4 * getTileCost(searchNode.x - 1, searchNode.y + 1)));
                else {
                  var path = [];
                  path.push({ x: searchNode.x, y: searchNode.y });
                  for (var parent = searchNode.parent;parent != null; )
                    path.push({ x: parent.x, y: parent.y }), parent = parent.parent;
                  path.reverse();
                  var ip = path;
                  instance.callback(ip), delete instances[instanceId], instanceQueue.shift();
                }
              } else
                instance.callback(null), delete instances[instanceId], instanceQueue.shift();
            else
              instanceQueue.shift();
          }
      };
      var checkAdjacentNode = function(instance, searchNode, x, y, cost) {
        var adjacentCoordinateX = searchNode.x + x, adjacentCoordinateY = searchNode.y + y;
        if ((pointsToAvoid[adjacentCoordinateY] === undefined || pointsToAvoid[adjacentCoordinateY][adjacentCoordinateX] === undefined) && isTileWalkable(collisionGrid, acceptableTiles, adjacentCoordinateX, adjacentCoordinateY, searchNode)) {
          var node = coordinateToNode(instance, adjacentCoordinateX, adjacentCoordinateY, searchNode, cost);
          node.list === undefined ? (node.list = 1, instance.openList.push(node)) : searchNode.costSoFar + cost < node.costSoFar && (node.costSoFar = searchNode.costSoFar + cost, node.parent = searchNode, instance.openList.updateItem(node));
        }
      }, isTileWalkable = function(collisionGrid2, acceptableTiles2, x, y, sourceNode) {
        var directionalCondition = directionalConditions[y] && directionalConditions[y][x];
        if (directionalCondition) {
          var direction = calculateDirection(sourceNode.x - x, sourceNode.y - y);
          if (!function() {
            for (var i2 = 0;i2 < directionalCondition.length; i2++)
              if (directionalCondition[i2] === direction)
                return true;
            return false;
          }())
            return false;
        }
        for (var i = 0;i < acceptableTiles2.length; i++)
          if (collisionGrid2[y][x] === acceptableTiles2[i])
            return true;
        return false;
      }, calculateDirection = function(diffX, diffY) {
        if (diffX === 0 && diffY === -1)
          return EasyStar2.TOP;
        if (diffX === 1 && diffY === -1)
          return EasyStar2.TOP_RIGHT;
        if (diffX === 1 && diffY === 0)
          return EasyStar2.RIGHT;
        if (diffX === 1 && diffY === 1)
          return EasyStar2.BOTTOM_RIGHT;
        if (diffX === 0 && diffY === 1)
          return EasyStar2.BOTTOM;
        if (diffX === -1 && diffY === 1)
          return EasyStar2.BOTTOM_LEFT;
        if (diffX === -1 && diffY === 0)
          return EasyStar2.LEFT;
        if (diffX === -1 && diffY === -1)
          return EasyStar2.TOP_LEFT;
        throw new Error("These differences are not valid: " + diffX + ", " + diffY);
      }, getTileCost = function(x, y) {
        return pointsToCost[y] && pointsToCost[y][x] || costMap[collisionGrid[y][x]];
      }, coordinateToNode = function(instance, x, y, parent, cost) {
        if (instance.nodeHash[y] !== undefined) {
          if (instance.nodeHash[y][x] !== undefined)
            return instance.nodeHash[y][x];
        } else
          instance.nodeHash[y] = {};
        var simpleDistanceToTarget = getDistance(x, y, instance.endX, instance.endY);
        if (parent !== null)
          var costSoFar = parent.costSoFar + cost;
        else
          costSoFar = 0;
        var node = new Node(parent, x, y, costSoFar, simpleDistanceToTarget);
        return instance.nodeHash[y][x] = node, node;
      }, getDistance = function(x1, y1, x2, y2) {
        var dx, dy;
        return diagonalsEnabled ? (dx = Math.abs(x1 - x2)) < (dy = Math.abs(y1 - y2)) ? 1.4 * dx + dy : 1.4 * dy + dx : (dx = Math.abs(x1 - x2)) + (dy = Math.abs(y1 - y2));
      };
    }, EasyStar2.TOP = "TOP", EasyStar2.TOP_RIGHT = "TOP_RIGHT", EasyStar2.RIGHT = "RIGHT", EasyStar2.BOTTOM_RIGHT = "BOTTOM_RIGHT", EasyStar2.BOTTOM = "BOTTOM", EasyStar2.BOTTOM_LEFT = "BOTTOM_LEFT", EasyStar2.LEFT = "LEFT", EasyStar2.TOP_LEFT = "TOP_LEFT";
  },
  function(module, exports) {
    module.exports = function() {
      this.pointsToAvoid = {}, this.startX, this.callback, this.startY, this.endX, this.endY, this.nodeHash = {}, this.openList;
    };
  },
  function(module, exports) {
    module.exports = function(parent, x, y, costSoFar, simpleDistanceToTarget) {
      this.parent = parent, this.x = x, this.y = y, this.costSoFar = costSoFar, this.simpleDistanceToTarget = simpleDistanceToTarget, this.bestGuessDistance = function() {
        return this.costSoFar + this.simpleDistanceToTarget;
      };
    };
  },
  function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(4);
  },
  function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function() {
      var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;
      floor = Math.floor, min = Math.min, defaultCmp = function(x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      }, insort = function(a, x, lo, hi, cmp) {
        var mid;
        if (lo == null && (lo = 0), cmp == null && (cmp = defaultCmp), lo < 0)
          throw new Error("lo must be non-negative");
        for (hi == null && (hi = a.length);lo < hi; )
          cmp(x, a[mid = floor((lo + hi) / 2)]) < 0 ? hi = mid : lo = mid + 1;
        return [].splice.apply(a, [lo, lo - lo].concat(x)), x;
      }, heappush = function(array, item, cmp) {
        return cmp == null && (cmp = defaultCmp), array.push(item), _siftdown(array, 0, array.length - 1, cmp);
      }, heappop = function(array, cmp) {
        var lastelt, returnitem;
        return cmp == null && (cmp = defaultCmp), lastelt = array.pop(), array.length ? (returnitem = array[0], array[0] = lastelt, _siftup(array, 0, cmp)) : returnitem = lastelt, returnitem;
      }, heapreplace = function(array, item, cmp) {
        var returnitem;
        return cmp == null && (cmp = defaultCmp), returnitem = array[0], array[0] = item, _siftup(array, 0, cmp), returnitem;
      }, heappushpop = function(array, item, cmp) {
        var _ref;
        return cmp == null && (cmp = defaultCmp), array.length && cmp(array[0], item) < 0 && (item = (_ref = [array[0], item])[0], array[0] = _ref[1], _siftup(array, 0, cmp)), item;
      }, heapify = function(array, cmp) {
        var i, _i, _len, _ref1, _results, _results1;
        for (cmp == null && (cmp = defaultCmp), _results = [], _i = 0, _len = (_ref1 = function() {
          _results1 = [];
          for (var _j = 0, _ref = floor(array.length / 2);0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--)
            _results1.push(_j);
          return _results1;
        }.apply(this).reverse()).length;_i < _len; _i++)
          i = _ref1[_i], _results.push(_siftup(array, i, cmp));
        return _results;
      }, updateItem = function(array, item, cmp) {
        var pos;
        if (cmp == null && (cmp = defaultCmp), (pos = array.indexOf(item)) !== -1)
          return _siftdown(array, 0, pos, cmp), _siftup(array, pos, cmp);
      }, nlargest = function(array, n, cmp) {
        var elem, result, _i, _len, _ref;
        if (cmp == null && (cmp = defaultCmp), !(result = array.slice(0, n)).length)
          return result;
        for (heapify(result, cmp), _i = 0, _len = (_ref = array.slice(n)).length;_i < _len; _i++)
          elem = _ref[_i], heappushpop(result, elem, cmp);
        return result.sort(cmp).reverse();
      }, nsmallest = function(array, n, cmp) {
        var elem, los, result, _i, _j, _len, _ref, _ref1, _results;
        if (cmp == null && (cmp = defaultCmp), 10 * n <= array.length) {
          if (!(result = array.slice(0, n).sort(cmp)).length)
            return result;
          for (los = result[result.length - 1], _i = 0, _len = (_ref = array.slice(n)).length;_i < _len; _i++)
            cmp(elem = _ref[_i], los) < 0 && (insort(result, elem, 0, null, cmp), result.pop(), los = result[result.length - 1]);
          return result;
        }
        for (heapify(array, cmp), _results = [], _j = 0, _ref1 = min(n, array.length);0 <= _ref1 ? _j < _ref1 : _j > _ref1; 0 <= _ref1 ? ++_j : --_j)
          _results.push(heappop(array, cmp));
        return _results;
      }, _siftdown = function(array, startpos, pos, cmp) {
        var newitem, parent, parentpos;
        for (cmp == null && (cmp = defaultCmp), newitem = array[pos];pos > startpos && cmp(newitem, parent = array[parentpos = pos - 1 >> 1]) < 0; )
          array[pos] = parent, pos = parentpos;
        return array[pos] = newitem;
      }, _siftup = function(array, pos, cmp) {
        var childpos, endpos, newitem, rightpos, startpos;
        for (cmp == null && (cmp = defaultCmp), endpos = array.length, startpos = pos, newitem = array[pos], childpos = 2 * pos + 1;childpos < endpos; )
          (rightpos = childpos + 1) < endpos && !(cmp(array[childpos], array[rightpos]) < 0) && (childpos = rightpos), array[pos] = array[childpos], childpos = 2 * (pos = childpos) + 1;
        return array[pos] = newitem, _siftdown(array, startpos, pos, cmp);
      }, Heap = function() {
        function Heap2(cmp) {
          this.cmp = cmp != null ? cmp : defaultCmp, this.nodes = [];
        }
        return Heap2.push = heappush, Heap2.pop = heappop, Heap2.replace = heapreplace, Heap2.pushpop = heappushpop, Heap2.heapify = heapify, Heap2.updateItem = updateItem, Heap2.nlargest = nlargest, Heap2.nsmallest = nsmallest, Heap2.prototype.push = function(x) {
          return heappush(this.nodes, x, this.cmp);
        }, Heap2.prototype.pop = function() {
          return heappop(this.nodes, this.cmp);
        }, Heap2.prototype.peek = function() {
          return this.nodes[0];
        }, Heap2.prototype.contains = function(x) {
          return this.nodes.indexOf(x) !== -1;
        }, Heap2.prototype.replace = function(x) {
          return heapreplace(this.nodes, x, this.cmp);
        }, Heap2.prototype.pushpop = function(x) {
          return heappushpop(this.nodes, x, this.cmp);
        }, Heap2.prototype.heapify = function() {
          return heapify(this.nodes, this.cmp);
        }, Heap2.prototype.updateItem = function(x) {
          return updateItem(this.nodes, x, this.cmp);
        }, Heap2.prototype.clear = function() {
          return this.nodes = [];
        }, Heap2.prototype.empty = function() {
          return this.nodes.length === 0;
        }, Heap2.prototype.size = function() {
          return this.nodes.length;
        }, Heap2.prototype.clone = function() {
          var heap;
          return (heap = new Heap2).nodes = this.nodes.slice(0), heap;
        }, Heap2.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, Heap2.prototype.insert = Heap2.prototype.push, Heap2.prototype.top = Heap2.prototype.peek, Heap2.prototype.front = Heap2.prototype.peek, Heap2.prototype.has = Heap2.prototype.contains, Heap2.prototype.copy = Heap2.prototype.clone, Heap2;
      }(), __WEBPACK_AMD_DEFINE_ARRAY__ = [], (__WEBPACK_AMD_DEFINE_RESULT__ = typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
        return Heap;
      }) == "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }).call(this);
  }
]);

// src/player.ts
function players_get_current() {
  return "player";
}

// src/util.ts
function distance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function range(length) {
  return [...Array(length).keys()];
}

// src/ai.ts
function ai_update(state) {
  let entityIdsToUpdate = _entityIdsToUpdate(state);
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    let entityId = entityIdsToUpdate[i];
    if (!state._AIs.hasOwnProperty(entityId)) {
      state._AIs[entityId] = _ai_create(state, entityId, state.entities[entityId].options.ai);
    }
  }
  let playerEntity = state.entities[players_get_current()];
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    let entityId = entityIdsToUpdate[i];
    let entity3 = state.entities[entityId];
    let entityAI = state._AIs[entityId];
    let distanceToPlayer = distance(playerEntity.x, playerEntity.y, entity3.x, entity3.y);
    if (playerEntity.options.faction !== entity3.options.faction && distanceToPlayer <= entityAI.aggroRange) {
      let movementMap = state.maps[state.currentMapId].asMovementMap();
      let path = a_star(movementMap, entity3.x, entity3.y, playerEntity.x, playerEntity.y);
      if (!!path) {
        path = path.slice(1);
      }
      entityAI.path = path;
    }
  }
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    const entityId = entityIdsToUpdate[i];
    const entity3 = state.entities[entityId];
    const entityAI = state._AIs[entityId];
    if (!!entityAI.path) {
      const nextPosition = entityAI.path[0];
      const dx = nextPosition.x - entity3.x;
      const dy = nextPosition.y - entity3.y;
      state = entityInteractOrMove(state, entity3, dx, dy);
    }
  }
  return state;
}
var _entityIdsToUpdate = function(state) {
  let entities = entities_get_by(state, state.currentMapId);
  let entityIdsToUpdate = [];
  for (let i = 0;i < entities.length; i++) {
    let entity3 = entities[i];
    if (!entity3.id.startsWith("player") && !!entity3.options.ai) {
      entityIdsToUpdate.push(entity3.id);
    }
  }
  return entityIdsToUpdate;
};
var _ai_create = function(state, entityId, aiType) {
  let entity3 = state.entities[entityId];
  let aggroRange = 8;
  switch (aiType) {
    case MANIFEST.ais.aggrorange:
      aggroRange = 8;
      break;
    case MANIFEST.ais.aggrorangeshort:
      aggroRange = 2;
      break;
    case MANIFEST.ais.guardian:
      aggroRange = 1;
      break;
    default:
  }
  return {
    entityId,
    type: aiType,
    aggroRange,
    startMap: entity3.mapId,
    startX: entity3.x,
    startY: entity3.y,
    path: null
  };
};
function ai_destroy(state, entityId) {
  state._AIs[entityId] = undefined;
  delete state._AIs[entityId];
  return state;
}

// src/map.ts
function tiles_create(type, options = {}) {
  return {
    type,
    options
  };
}
function tiles_is_space_tile(tile) {
  return tile.type.name.startsWith("space");
}
function maps_destroy(state, mapId) {
  const items = items_get_by(state, mapId);
  for (let i = 0;i < items.length; i++) {
    const item2 = items[i];
    state = items_destroy(state, item2.id);
  }
  const entities = entities_get_by(state, mapId);
  for (let i = 0;i < entities.length; i++) {
    const entity4 = entities[i];
    state = entities_destroy(state, entity4.id);
    state = ai_destroy(state, entity4.id);
  }
  state.maps[mapId] = undefined;
  delete state.maps[mapId];
  return state;
}
function maps_parse(mapString) {
  let lines = mapString.split(/\r?\n/);
  let metaCharacter = mapString[0];
  let mapId = "";
  let width = 0;
  let height = 0;
  let meta = {};
  let tiles = [];
  for (let i = 0;i < lines.length; i++) {
    let line = lines[i];
    if (line.startsWith(metaCharacter)) {
      if (line.startsWith(metaCharacter + "!id")) {
        mapId = line.slice(5);
      } else if (line.startsWith(metaCharacter + "!size")) {
        let dims = line.split(" ").slice(1);
        width = Number(dims[0]);
        height = Number(dims[1]);
      } else if (line.startsWith(metaCharacter + "!")) {
        let character = line[2];
        let tileTypeName = line.slice(4);
        meta[character] = tileTypeName;
      }
    } else {
      for (let j = 0;j < line.length; j++) {
        let character = line[j];
        let tileTypeName = meta[character];
        let components = tileTypeName.split(" ");
        let options = {};
        if (tileTypeName.startsWith("portal ") || tileTypeName.startsWith("portalhidden ") || tileTypeName.startsWith("portalstart")) {
          tileTypeName = components[0];
          options["mapId"] = components[1];
          options["x"] = Number(components[2]);
          options["y"] = Number(components[3]);
        }
        if (tileTypeName.startsWith("wall ") && components.length >= 2) {
          tileTypeName = "wall";
          options["sign"] = components[1];
        }
        tiles.push(tiles_create(MANIFEST.tiles[tileTypeName], options));
      }
    }
  }
  return new Map(mapId, width, height, tiles);
}
var CHUNK_SIZE = {
  width: 16,
  height: 16
};
var MAP_SIZE = CHUNK_SIZE;

class Map {
  id;
  widthTiles;
  heightTiles;
  _tiles;
  _cacheMovementMap;
  constructor(id, width_tiles, height_tiles, tiles = []) {
    this.id = id;
    this.widthTiles = width_tiles;
    this.heightTiles = height_tiles;
    this._tiles = tiles;
    this._cacheMovementMap = null;
  }
  getTile(x, y) {
    if (x >= 0 && x < this.widthTiles && y >= 0 && y < this.heightTiles) {
      let tile_index = y * this.widthTiles + x;
      return this._tiles[tile_index];
    }
    return {};
  }
  setTile(x, y, tileType, options = {}) {
    this._cacheMovementMap = null;
    let tileIndex = y * this.widthTiles + x;
    this._tiles[tileIndex] = tiles_create(tileType, options);
  }
  pasteOnto(map, xOffset = 0, yOffset = 0) {
    for (let j = 0;j < map.heightTiles; j++) {
      for (let i = 0;i < map.widthTiles; i++) {
        const tile = map.getTile(i, j);
        if (tile.type !== MANIFEST.tiles.voidtrue) {
          this.setTile(i + xOffset, j + yOffset, tile.type, tile.options);
        }
      }
    }
  }
  circular() {
    let radius = Math.floor(Math.min(this.widthTiles, this.heightTiles) / 2);
    for (let y = -radius;y <= radius; y++) {
      for (let x = -radius;x <= radius; x++) {
        if (x * x + y * y >= radius * radius) {
          this.setTile(x + radius - 1, y + radius - 1, MANIFEST.tiles.voidtrue);
        }
      }
    }
    return this;
  }
  sample(targetWidthInTiles, targetHeightInTiles) {
    const regionWidth = Math.floor(this.widthTiles / targetWidthInTiles);
    const regionHeight = Math.floor(this.heightTiles / targetHeightInTiles);
    const newTiles = [];
    for (let yRegion = 0;yRegion < targetHeightInTiles; yRegion++) {
      for (let xRegion = 0;xRegion < targetWidthInTiles; xRegion++) {
        const tileType2Occurrences = {};
        for (let y = 0;y < regionHeight; y++) {
          for (let x = 0;x < regionWidth; x++) {
            const tile = this.getTile(xRegion * regionWidth + x, yRegion * regionHeight + y);
            if (!!tileType2Occurrences[tile.type.name]) {
              tileType2Occurrences[tile.type.name] += 1;
            } else {
              tileType2Occurrences[tile.type.name] = 1;
            }
          }
        }
        let mostOccurringTileTypeName = "";
        let mostOccurrences = 0;
        for (const [key, value] of Object.entries(tileType2Occurrences)) {
          if (value > mostOccurrences) {
            mostOccurringTileTypeName = key;
            mostOccurrences = value;
          }
        }
        const newTileTypeName = "space" + mostOccurringTileTypeName;
        const newTileType = MANIFEST.tiles[newTileTypeName] || MANIFEST.tiles.spacevoid;
        const options = {
          mapId: this.id,
          x: xRegion * regionWidth,
          y: yRegion * regionHeight
        };
        newTiles.push(tiles_create(newTileType, options));
      }
    }
    return new Map("__sampled_" + targetWidthInTiles + "_" + targetHeightInTiles + "_" + this.id, targetWidthInTiles, targetHeightInTiles, newTiles);
  }
  asMovementMap() {
    if (!!this._cacheMovementMap) {
      return this._cacheMovementMap;
    }
    let movementMap = new Array(this.heightTiles);
    for (let y = 0;y < this.heightTiles; y++) {
      movementMap[y] = new Array(this.widthTiles);
      for (let x = 0;x < this.widthTiles; x++) {
        let tile_index = y * this.widthTiles + x;
        let tile = this._tiles[tile_index];
        let tileType = tile.type;
        movementMap[y][x] = 0;
        if (tileType === MANIFEST.tiles.rock || tileType === MANIFEST.tiles.portalclosed || tileType.name.startsWith("wall")) {
          movementMap[y][x] = 1;
        }
      }
    }
    this._cacheMovementMap = movementMap;
    return movementMap;
  }
}

// src/entity_map.ts
function entity_act(state, entity5, command) {
  switch (command) {
    case MANIFEST.commands.N:
      state = entityInteractOrMove(state, entity5, 0, -1);
      break;
    case MANIFEST.commands.W:
      state = entityInteractOrMove(state, entity5, -1, 0);
      break;
    case MANIFEST.commands.S:
      state = entityInteractOrMove(state, entity5, 0, 1);
      break;
    case MANIFEST.commands.E:
      state = entityInteractOrMove(state, entity5, 1, 0);
      break;
    case MANIFEST.commands.A:
      state = entityContextualAction(state, entity5, MANIFEST.commands.A);
      break;
    case MANIFEST.commands.B:
      state = entityContextualAction(state, entity5, MANIFEST.commands.B);
      break;
    default:
  }
  return state;
}
function entityInteractOrMove(state, entity5, dx, dy, recursion = 0) {
  const map2 = state.maps[entity5.mapId];
  const entity_at_target_position = entities_get_at(state, map2.id, entity5.x + dx, entity5.y + dy);
  const tool = state.tools[entity5.id];
  if (!!entity_at_target_position) {
    if (isMoveableObject(entity_at_target_position)) {
      if (!isMoveableObject(entity5) && recursion < 1) {
        state = entityInteractOrMove(state, entity_at_target_position, dx, dy, recursion++);
        state = entityInteractOrMove(state, entity5, dx, dy, recursion++);
      }
    } else {
      state = interactOrCombat(state, entity5, entity_at_target_position);
    }
  } else if (_entity_can_move(map2, entity5, dx, dy)) {
    state = _entity_move(state, map2, entity5, dx, dy);
    state._energyQueue.push({ entityId: entity5.id, energyDelta: -1 * recursion });
  } else if (_entity_can_crush_wallweak(map2, entity5, tool, dx, dy)) {
    map2.setTile(entity5.x + dx, entity5.y + dy, MANIFEST.tiles.void);
    state._energyQueue.push({ entityId: entity5.id, energyDelta: tool.type.energyCost });
  }
  return state;
}
function entityContextualAction(state, entity5, command) {
  const actions = actions_get(state, entity5);
  const action2 = actions[command.key];
  switch (action2) {
    case MANIFEST.actions.Enter:
      const map2 = state.maps[entity5.mapId];
      const tile = map2.getTile(entity5.x, entity5.y);
      state = _enterPortalOrPlanet(state, entity5, tile);
      break;
    case MANIFEST.actions.Launch:
      state = _launchToSpace(state, entity5);
    case MANIFEST.actions.Wait:
      break;
    default:
  }
  return state;
}
var _entity_move = function(state, map2, entity5, dx, dy) {
  entity5.x += dx;
  entity5.y += dy;
  let maybeItem = items_get_at(state, entity5.mapId, entity5.x, entity5.y);
  if (!!maybeItem) {
    state = items_pickup(state, entity5, maybeItem);
  }
  let tile = map2.getTile(entity5.x, entity5.y);
  if (tile.type.name.startsWith("portal")) {
    state = _enterPortalOrPlanet(state, entity5, tile);
  }
  if (tile.type.name.startsWith("move")) {
    switch (tile.type.name) {
      case "movenorth":
        state = entityInteractOrMove(state, entity5, 0, -1);
        break;
      case "moveeast":
        state = entityInteractOrMove(state, entity5, 1, 0);
        break;
      case "movesouth":
        state = entityInteractOrMove(state, entity5, 0, 1);
        break;
      case "movewest":
        state = entityInteractOrMove(state, entity5, -1, 0);
        break;
      default:
    }
  }
  return state;
};
var _enterPortalOrPlanet = function(state, entity5, tile) {
  if (entity5.id.startsWith("player")) {
    state.currentMapId = tile.options.mapId;
  }
  if (tiles_is_space_tile(tile)) {
    state.lastSpacePositionByEntity[entity5.id] = {
      mapId: entity5.mapId,
      x: entity5.x,
      y: entity5.y
    };
  }
  const eventPayload = {
    entityId: entity5.id,
    oldMapId: entity5.mapId,
    oldX: entity5.x,
    oldY: entity5.y,
    oldTileType: tile.type,
    newMapId: tile.options.mapId,
    newX: tile.options.x,
    newY: tile.options.y
  };
  entity5.mapId = tile.options.mapId;
  entity5.x = tile.options.x;
  entity5.y = tile.options.y;
  state = publish(state, "entitymap.updated.event", eventPayload);
  return state;
};
var _launchToSpace = function(state, entity5) {
  if (!!state.lastSpacePositionByEntity[entity5.id]) {
    if (entity5.id.startsWith("player")) {
      state.currentMapId = state.lastSpacePositionByEntity[entity5.id].mapId;
    }
    entity5.mapId = state.lastSpacePositionByEntity[entity5.id].mapId;
    entity5.x = state.lastSpacePositionByEntity[entity5.id].x;
    entity5.y = state.lastSpacePositionByEntity[entity5.id].y;
    state.lastSpacePositionByEntity[entity5.id] = undefined;
    delete state.lastSpacePositionByEntity[entity5.id];
  }
  return state;
};
function entities_tile_energy_update(state) {
  for (let entityId in state.entities) {
    let entity5 = state.entities[entityId];
    let map2 = state.maps[entity5.mapId];
    let tile = map2.getTile(entity5.x, entity5.y);
    state._energyQueue.push({ entityId, energyDelta: tile.type.energyDelta });
  }
  return state;
}
function entity_map_entitymapUpdatedEvent_subscriber(state, payload) {
  const entity5 = state.entities[payload.entityId];
  switch (payload.oldTileType) {
    case MANIFEST.tiles.portalstartaerobot:
      state = entities_set_type(state, entity5, MANIFEST.entities.AeroBot);
      break;
    case MANIFEST.tiles.portalstartworkbot:
      state = entities_set_type(state, entity5, MANIFEST.entities.WorkBot);
      break;
    default:
  }
  return state;
}
var _entity_can_move = function(map2, entity5, dx, dy) {
  let x = entity5.x + dx;
  let y = entity5.y + dy;
  let tileType = map2.getTile(x, y).type;
  return x >= 0 && x < map2.widthTiles && y >= 0 && y < map2.heightTiles && tileType !== MANIFEST.tiles.rock && tileType !== MANIFEST.tiles.portalclosed && !tileType.name.startsWith("wall");
};
var _entity_can_crush_wallweak = function(map2, entity5, tool, dx, dy) {
  const x = entity5.x + dx;
  const y = entity5.y + dy;
  const tileType = map2.getTile(x, y).type;
  if (!!tool) {
    return tool.type.effects.includes(MANIFEST.effects.WallCrusher.name) && tileType === MANIFEST.tiles.wallweak;
  }
  return false;
};

// src/rng.ts
var ROT = __toESM(require_rot(), 1);

class RNG2 {
  seed;
  _rotRng;
  constructor(seed = 1337) {
    this.seed = seed;
    this._rotRng = ROT.RNG.clone();
    this._rotRng.setSeed(seed);
  }
  getPercentage() {
    return this._rotRng.getPercentage();
  }
  getItem(a) {
    return this._rotRng.getItem(a);
  }
}

// src/map_generator_solar_system.ts
function maps_create_solar_system(state, seed = MAP_SEED) {
  let solarsystem = _emptyMap(1024, 1024, MANIFEST.tiles.void);
  solarsystem.id = "solarsystem=" + seed;
  state.maps[solarsystem.id] = solarsystem;
  const rng2 = new RNG2(seed);
  const numberOfPlanets = rng2.getItem([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  let consumedRadius = 128;
  let leftoverRadius = 512 - consumedRadius;
  const radiusPerPlanet = Math.floor(leftoverRadius / numberOfPlanets);
  solarsystem = _randomizeVoidBackground(solarsystem, rng2);
  let sun = _emptyMap(128, 128, MANIFEST.tiles.voidtrue);
  _circle(sun, 63, 63, 62, MANIFEST.tiles.sun);
  _fill(sun, 63, 63, MANIFEST.tiles.sun);
  solarsystem.pasteOnto(sun, 448, 448);
  for (let radius = consumedRadius;radius < 512; radius += radiusPerPlanet) {
    let xPlanetCenter = rng2.getItem([-1, 1]) * rng2.getItem(range(radius));
    let yPlanetCenter = rng2.getItem([-1, 1]) * Math.floor(Math.sqrt(radius * radius - xPlanetCenter * xPlanetCenter));
    xPlanetCenter += 512;
    yPlanetCenter += 512;
    const planetMapSize = rng2.getItem([16, 24, 32]);
    const planetMapSizeHalf = Math.floor(planetMapSize / 2) - 1;
    let planet = _emptyMap(planetMapSize, planetMapSize, MANIFEST.tiles.voidtrue);
    const tileType = rng2.getItem([MANIFEST.tiles.spacerock, MANIFEST.tiles.spacetree, MANIFEST.tiles.spacewater]);
    _circle(planet, planetMapSizeHalf, planetMapSizeHalf, planetMapSizeHalf, tileType);
    _fill(planet, planetMapSizeHalf, planetMapSizeHalf, tileType);
    solarsystem.pasteOnto(planet, xPlanetCenter - (planetMapSizeHalf + 1), yPlanetCenter - (planetMapSizeHalf + 1));
  }
  solarsystem.pasteOnto(state.maps["simplex=1337"].sample(16, 16).circular());
  solarsystem.pasteOnto(state.maps["simplex=1337"].sample(24, 24).circular(), 0, 17);
  solarsystem.pasteOnto(state.maps["simplex=1337"].sample(32, 32).circular(), 0, 42);
  solarsystem.pasteOnto(state.maps["simplex=1337"].sample(128, 128).circular(), 0, 75);
  solarsystem.pasteOnto(state.maps["simplex=1337"].sample(256, 256).circular(), 0, 204);
  return state;
}
var _emptyMap = function(widthTiles, heightTiles, tileType) {
  const tiles = [];
  for (let i = 0;i < widthTiles * heightTiles; i++) {
    tiles.push(tiles_create(tileType));
  }
  const mapId = "__temp";
  const map3 = new Map(mapId, widthTiles, heightTiles, tiles);
  return map3;
};
var _randomizeVoidBackground = function(map3, rng2) {
  for (let j = 0;j < map3.heightTiles; j++) {
    for (let i = 0;i < map3.widthTiles; i++) {
      if (rng2.getPercentage() <= 1) {
        map3.setTile(i, j, rng2.getItem([MANIFEST.tiles.spacevoidstarwhite, MANIFEST.tiles.spacevoidstaryellow]));
      }
    }
  }
  return map3;
};
var _circle = function(map3, x0, y0, radius, tileType) {
  let f = 1 - radius;
  let ddf_x = 1;
  let ddf_y = -2 * radius;
  let x = 0;
  let y = radius;
  map3.setTile(x0, y0 + radius, tileType);
  map3.setTile(x0, y0 - radius, tileType);
  map3.setTile(x0 + radius, y0, tileType);
  map3.setTile(x0 - radius, y0, tileType);
  while (x < y) {
    if (f >= 0) {
      y -= 1;
      ddf_y += 2;
      f += ddf_y;
    }
    x += 1;
    ddf_x += 2;
    f += ddf_x;
    map3.setTile(x0 + x, y0 + y, tileType);
    map3.setTile(x0 - x, y0 + y, tileType);
    map3.setTile(x0 + x, y0 - y, tileType);
    map3.setTile(x0 - x, y0 - y, tileType);
    map3.setTile(x0 + y, y0 + x, tileType);
    map3.setTile(x0 - y, y0 + x, tileType);
    map3.setTile(x0 + y, y0 - x, tileType);
    map3.setTile(x0 - y, y0 - x, tileType);
  }
  return map3;
};
var _fill = function(map3, x, y, tileType) {
  const xsize = map3.widthTiles;
  const ysize = map3.heightTiles;
  const Q = [];
  Q.push({ x, y });
  let node = undefined;
  while (typeof (node = Q.shift()) !== "undefined") {
    let W = node;
    let E = node;
    if (node.x + 1 < xsize) {
      E = { x: node.x + 1, y: node.y };
    }
    while (map3.getTile(W.x, W.y).type !== tileType) {
      map3.setTile(W.x, W.y, tileType);
      if (W.y + 1 < ysize) {
        if (map3.getTile(W.x, W.y + 1).type !== tileType) {
          Q.push({ x: W.x, y: W.y + 1 });
        }
      }
      if (W.y - 1 >= 0) {
        if (map3.getTile(W.x, W.y - 1).type !== tileType) {
          Q.push({ x: W.x, y: W.y - 1 });
        }
      }
      if (W.x - 1 >= 0) {
        W.x -= 1;
      } else {
        break;
      }
    }
    while (map3.getTile(E.x, E.y).type !== tileType) {
      map3.setTile(E.x, E.y, tileType);
      if (E.y + 1 < ysize) {
        if (map3.getTile(E.x, E.y + 1).type !== tileType) {
          Q.push({ x: E.x, y: E.y + 1 });
        }
      }
      if (E.y - 1 >= 0) {
        if (map3.getTile(E.x, E.y - 1).type !== tileType) {
          Q.push({ x: E.x, y: E.y - 1 });
        }
      }
      if (E.x + 1 < xsize) {
        E.x += 1;
      } else {
        break;
      }
    }
  }
  return map3;
};
var MAP_SEED = 1337;

// src/map_shop.ts
function map_shop_entitymapUpdatedEvent_subscriber(state, payload) {
  if (payload?.oldMapId?.startsWith("shop_instance")) {
    state = maps_destroy(state, payload.oldMapId);
    const newMap = state.maps[payload.newMapId];
    const previousTile = newMap.getTile(payload.newX, payload.newY);
    newMap.setTile(payload.newX, payload.newY, previousTile.type, { mapId: "shop_instance", x: payload.oldX, y: payload.oldY });
  }
  if (payload?.newMapId?.startsWith("shop_instance")) {
    const map4 = maps_parse(SHOP_INSTANCE_MAP);
    map4.id += "_" + payload.oldMapId + "_" + payload.entityId;
    map4.setTile(payload.newX, payload.newY, MANIFEST.tiles.portal, { mapId: payload.oldMapId, x: payload.oldX, y: payload.oldY });
    const oldMap = state.maps[payload.oldMapId];
    oldMap.setTile(payload.oldX, payload.oldY, payload.oldTileType, { mapId: map4.id, x: payload.newX, y: payload.newY });
    const entity6 = state.entities[payload.entityId];
    if (entity6.id.startsWith("player")) {
      state.currentMapId = map4.id;
    }
    entity6.mapId = map4.id;
    entity6.x = payload.newX;
    entity6.Y = payload.newY;
    state.maps[map4.id] = map4;
    state = items_create_buyable(state, MANIFEST.items.hammer, map4.id, 4, 4, 0, -200);
    state = items_create_buyable(state, MANIFEST.items.battery, map4.id, 4, 6, 0, -200);
    state = items_create_buyable(state, MANIFEST.items.gold, map4.id, 4, 8, 0, -1e4);
    state = entities_create(state, map4.id + "_shopkeeper", MANIFEST.entities.AeroBot, map4.id, 6, 2, { faction: entity6.options.faction });
    state = entities_create(state, map4.id + "_shopper", MANIFEST.entities.WorkBot, map4.id, 1, 12, { faction: entity6.options.faction });
  }
  return state;
}
var SHOP_INSTANCE_MAP = `!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatue
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!0 wall 0
!!1 wall 1
!!2 wall 2
!!- portal bot_stadium 1 14
################################################
#;............................................;#
#..............................................#
#..............................................#
#.....Hammer...200M............................#
#..............................................#
#.....Battery..200M............................#
#..............................................#
#.....Gold.....10000M..........................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#-............................................;#
################################################
`;

// src/rot_map_generator.ts
var ROT2 = __toESM(require_rot(), 1);
function maps_create_overworld(state, seed = MAP_SEED2) {
  ROT2.RNG.setSeed(seed);
  let rot_noise = new ROT2.Noise.Simplex;
  let tiles = [];
  for (let tile_y = 0;tile_y < CHUNK_SIZE.height * MAP_SIZE.height; tile_y++) {
    for (let tile_x = 0;tile_x < CHUNK_SIZE.width * MAP_SIZE.width; tile_x++) {
      let noise_val = rot_noise.get(tile_x / _noise_skew, tile_y / _noise_skew);
      let tileType;
      if (noise_val <= -0.5) {
        tileType = MANIFEST.tiles.water;
      } else if (noise_val <= 0) {
        tileType = MANIFEST.tiles.void;
      } else if (noise_val < 0.5) {
        tileType = MANIFEST.tiles.tree;
      } else {
        tileType = MANIFEST.tiles.rock;
      }
      tiles.push(tiles_create(tileType));
    }
  }
  const mapId = "simplex=" + seed;
  let map5 = new Map(mapId, MAP_SIZE.width * CHUNK_SIZE.width, MAP_SIZE.height * CHUNK_SIZE.height, tiles);
  map5.setTile(126, 121, MANIFEST.tiles.portal, { mapId: "bot_elevator", x: 11, y: 47 });
  state.maps[mapId] = map5;
  state = entities_create(state, "npc0", MANIFEST.entities.Pioneer, "simplex=" + MAP_SEED2, 130, 127, { faction: MANIFEST.factions.Spirits });
  state = entities_create(state, "npc1", MANIFEST.entities.Pioneer, "simplex=" + MAP_SEED2, 124, 127, { faction: MANIFEST.factions.Spirits });
  state = items_create(state, MANIFEST.items.battery, "simplex=" + MAP_SEED2, 127, 130);
  return state;
}
function maps_create_arena(state) {
  let rotMap = new ROT2.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
  let tiles = [];
  rotMap.create(function(x, y, wall) {
    let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
    tiles[y * CHUNK_SIZE.width + x] = tiles_create(tileType);
  });
  let map5 = new Map("arena", CHUNK_SIZE.width, CHUNK_SIZE.height, tiles);
  map5.setTile(1, 0, MANIFEST.tiles.portal, { mapId: "bot_station", x: 26, y: 7 });
  state.maps["arena"] = map5;
  state = entities_create(state, "enemy0", MANIFEST.entities.Cleaner, "arena", 8, 8, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
  state = entities_create(state, "enemy1", MANIFEST.entities.Cleaner, "arena", 9, 8, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
  state = entities_create(state, "enemy2", MANIFEST.entities.Cleaner, "arena", 11, 11, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
  state = entities_create(state, "enemy3", MANIFEST.entities.Cleaner, "arena", 6, 6, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
  state = entities_create(state, "enemy4", MANIFEST.entities.Cleaner, "arena", 12, 12, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
  state = items_create(state, MANIFEST.items.energy, "arena", 7, 7);
  state = items_create(state, MANIFEST.items.battery, "arena", 14, 14);
  return state;
}
var MAP_SEED2 = 1337;
var _noise_skew = 55;

// src/state.ts
function states_create() {
  return {
    _AIs: {},
    _combatQueue: [],
    _despawnQueue: [],
    _energyQueue: [],
    _eventSubscribers: {},
    _menuOpen: false,
    actionLog: [],
    currentMapId: "",
    entities: {},
    items: {},
    lastSpacePositionByEntity: {},
    maps: {},
    tools: {}
  };
}

// src/combat.ts
function combat_update(state) {
  let combatants = undefined;
  while (typeof (combatants = state._combatQueue.shift()) !== "undefined") {
    let energyCostOfAttack = -1;
    let energyDamageDone = -5;
    const equippedItem = items_get_equipped(state, combatants.entityId);
    if (!!equippedItem) {
      energyCostOfAttack = equippedItem.type.energyCost;
      energyDamageDone = -1 * Math.abs(equippedItem.type.damage);
    }
    state._energyQueue.push({ entityId: combatants.entityId, energyDelta: energyCostOfAttack });
    state._energyQueue.push({ entityId: combatants.otherEntityId, energyDelta: energyDamageDone });
  }
  return state;
}

// src/energy.ts
function energy_update(state) {
  let energyChange = undefined;
  while (typeof (energyChange = state._energyQueue.shift()) !== "undefined") {
    let entity8 = state.entities[energyChange.entityId];
    entity8.energy = Math.min(entity8.energy + energyChange.energyDelta, entity8.energyMax);
    if (entity8.energy <= 0) {
      state._despawnQueue.push(entity8.id);
      if (!isMoveableObject(entity8)) {
        const matter = Math.max(1, Math.floor(entity8.energyMax / 3));
        state = items_create_junk(state, matter, entity8.mapId, entity8.x, entity8.y);
      }
    }
  }
  return state;
}

// src/spawn.ts
function despawn_update(state) {
  let entityIdtoDespawn = undefined;
  while (typeof (entityIdtoDespawn = state._despawnQueue.shift()) !== "undefined") {
    state = entities_destroy(state, entityIdtoDespawn);
    state = ai_destroy(state, entityIdtoDespawn);
  }
  return state;
}
function spawn_update(state) {
  return state;
}

// src/systems.ts
function systems_per_turn_update(state) {
  state = ai_update(state);
  state = combat_update(state);
  state = entities_tile_energy_update(state);
  state = energy_update(state);
  state = despawn_update(state);
  state = spawn_update(state);
  return state;
}

// src/game.ts
class Game {
  state;
  constructor() {
  }
  init() {
    this.state = states_create();
    this.state = subscribe(this.state, "entitymap.updated.event", entity_map_entitymapUpdatedEvent_subscriber);
    this.state = subscribe(this.state, "entitymap.updated.event", map_shop_entitymapUpdatedEvent_subscriber);
    this.state = maps_create_arena(this.state);
    this.state = maps_create_overworld(this.state);
    this.state = maps_create_solar_system(this.state);
    for (let mapId in MANIFEST.maps) {
      this.state.maps[mapId] = maps_parse(MANIFEST.maps[mapId]);
    }
    this.state = entities_create(this.state, "manual0", MANIFEST.entities.Spirit, "manual", 4, 26, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "manual1", MANIFEST.entities.AeroBot, "manual", 4, 27, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "manual2", MANIFEST.entities.WorkBot, "manual", 4, 28, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "manual3", MANIFEST.entities.Cleaner, "manual", 4, 29, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "manual4", MANIFEST.entities.Pioneer, "manual", 4, 30, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "manual5", MANIFEST.entities.Spirit, "manual", 54, 36, { faction: MANIFEST.factions.Pyrates, ai: MANIFEST.ais.aggrorange });
    this.state = items_create(this.state, MANIFEST.items.junk, "manual", 4, 36);
    this.state = items_create(this.state, MANIFEST.items.goo, "manual", 12, 36);
    this.state = items_create(this.state, MANIFEST.items.matter, "manual", 4, 37);
    this.state = items_create(this.state, MANIFEST.items.gold, "manual", 4, 38);
    this.state = items_create(this.state, MANIFEST.items.energy, "manual", 4, 39);
    this.state = items_create(this.state, MANIFEST.items.battery, "manual", 4, 40);
    this.state = items_create(this.state, MANIFEST.items.wrench, "manual", 4, 41);
    this.state = entities_create(this.state, "pioneerguardian0", MANIFEST.entities.Pioneer, "bot_station", 8, 3, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.aggrorangeshort });
    this.state = items_equip(this.state, "pioneerguardian0", MANIFEST.items.hammer);
    this.state = entities_create(this.state, "cleanerguardian0", MANIFEST.entities.Cleaner, "bot_station", 10, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian1", MANIFEST.entities.Cleaner, "bot_station", 12, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian2", MANIFEST.entities.Cleaner, "bot_station", 14, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian3", MANIFEST.entities.Cleaner, "bot_station", 16, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian4", MANIFEST.entities.Cleaner, "bot_station", 18, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian5", MANIFEST.entities.Cleaner, "bot_station", 20, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian6", MANIFEST.entities.Cleaner, "bot_station", 22, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian7", MANIFEST.entities.Cleaner, "bot_station", 24, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian8", MANIFEST.entities.Cleaner, "bot_station", 26, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = entities_create(this.state, "cleanerguardian9", MANIFEST.entities.Cleaner, "bot_station", 28, 9, { faction: MANIFEST.factions.Guardians, ai: MANIFEST.ais.guardian });
    this.state = items_create(this.state, MANIFEST.items.battery, "bot_dormitory", 13, 8);
    this.state = items_create(this.state, MANIFEST.items.junk, "bot_dormitory_hidden", 1, 2);
    this.state = items_create(this.state, MANIFEST.items.battery, "bot_dormitory_hidden", 2, 2);
    this.state = items_create(this.state, MANIFEST.items.shocker, "bot_bar", 10, 11);
    this.state = items_create(this.state, MANIFEST.items.hammer, "bot_elevator", 12, 3);
    this.state = items_create(this.state, MANIFEST.items.wrench, "bot_factory", 45, 19);
    this.state = items_create(this.state, MANIFEST.items.battery, "bot_factory", 4, 13);
    for (let y = 2;y <= 8; y++) {
      for (let x = 2;x <= 8; x++) {
        this.state = items_create(this.state, MANIFEST.items.junk, "bot_factory", x, y);
      }
    }
    this.state = entities_create_box(this.state, "bot_bar", 14, 3);
    this.state = entities_create_box(this.state, "bot_bar", 14, 12);
    this.state = entities_create_boulder(this.state, "playground", 9, 9);
    this.state = entities_create_boulder(this.state, "playground", 10, 9);
    for (let x = 1;x <= 18; x++) {
      this.state = items_create(this.state, MANIFEST.items.battery, "playground", x, 18);
    }
    this.state.currentMapId = "botmos_hull_selection";
    this.state = entities_create(this.state, players_get_current(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, { faction: MANIFEST.factions.Spirits });
    return this.state;
  }
  update(action2) {
    let player3 = this.state.entities[players_get_current()];
    if (!!player3) {
      if (!!action2) {
        if (action2 === MANIFEST.commands.M) {
          this.state._menuOpen = !this.state._menuOpen;
        } else {
          this.state = entity_act(this.state, player3, action2);
          this.state = systems_per_turn_update(this.state);
        }
        this.state.actionLog.push(action2.key);
      }
    } else {
      debug_log("Game over! " + this.state.actionLog.length + " Turns: " + this.state.actionLog.join(""));
      this.state.currentMapId = "botmos_hull_selection";
      this.state = entities_create(this.state, players_get_current(), MANIFEST.entities.Spirit, this.state.currentMapId, 9, 5, { faction: MANIFEST.factions.Spirits });
    }
    return this.state;
  }
  play(actions) {
    for (let i = 0;i < actions.length; i++) {
      const action2 = actions[i];
      this.update(MANIFEST.commands[action2]);
    }
    return this.state;
  }
}

// src/input.ts
var _triggerCallback = function(command) {
  const currentTimeInMs = Date.now();
  if (_callback !== undefined && currentTimeInMs - _timeOfLastActionInMs >= 80) {
    _timeOfLastActionInMs = currentTimeInMs;
    _callback(command);
  }
};
var _preventDefaultAndStopPropagation = function(e) {
  e.preventDefault();
  e.stopPropagation();
};
var _updateInputQueue = function() {
  let action2 = null;
  if (_BM_INPUT.right) {
    action2 = MANIFEST.commands.E;
  }
  if (_BM_INPUT.left) {
    action2 = MANIFEST.commands.W;
  }
  if (_BM_INPUT.down) {
    action2 = MANIFEST.commands.S;
  }
  if (_BM_INPUT.up) {
    action2 = MANIFEST.commands.N;
  }
  if (_BM_INPUT.up && _BM_INPUT.right) {
    if (action2 === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
      action2 = MANIFEST.commands.E;
    }
  }
  if (_BM_INPUT.up && _BM_INPUT.left) {
    if (action2 === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
      action2 = MANIFEST.commands.W;
    }
  }
  if (_BM_INPUT.down && _BM_INPUT.right) {
    if (action2 === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
      action2 = MANIFEST.commands.E;
    }
  }
  if (_BM_INPUT.down && _BM_INPUT.left) {
    if (action2 === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
      action2 = MANIFEST.commands.W;
    }
  }
  if (_BM_INPUT.a) {
    action2 = MANIFEST.commands.A;
  }
  if (_BM_INPUT.b) {
    action2 = MANIFEST.commands.B;
  }
  if (_BM_INPUT.menu) {
    action2 = MANIFEST.commands.M;
  }
  _lastAction = action2;
  if (action2 !== null) {
    _inputQueue.push(action2);
  }
};
var _get_action = function() {
  _updateInputQueue();
  let action2 = _inputQueue.shift() || null;
  _inputQueue = [];
  return action2;
};
function onKeyDown(callback) {
  _callback = callback;
}
var _BM_INPUT = {
  up: false,
  right: false,
  down: false,
  left: false,
  a: false,
  b: false,
  one: false,
  two: false,
  menu: false
};
var _inputQueue = [];
var _callback = undefined;
var _timeOfLastActionInMs = 0;
document.body.addEventListener("keydown", function(e) {
  if (e.defaultPrevented) {
    return;
  }
  let key = e.key;
  switch (key) {
    case "w":
    case "ArrowUp":
      _BM_INPUT.up = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case "a":
    case "ArrowLeft":
      _BM_INPUT.left = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case "s":
    case "ArrowDown":
      _BM_INPUT.down = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case "d":
    case "ArrowRight":
      _BM_INPUT.right = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case "x":
      _BM_INPUT.a = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case " ":
    case "y":
    case "z":
      _BM_INPUT.b = true;
      _preventDefaultAndStopPropagation(e);
      break;
    case "m":
      _BM_INPUT.menu = true;
      _preventDefaultAndStopPropagation(e);
      break;
    default:
  }
  _triggerCallback(_get_action());
});
document.body.addEventListener("keyup", function(e) {
  if (e.defaultPrevented) {
    return;
  }
  let key = e.key;
  switch (key) {
    case "w":
    case "ArrowUp":
      _BM_INPUT.up = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case "a":
    case "ArrowLeft":
      _BM_INPUT.left = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case "s":
    case "ArrowDown":
      _BM_INPUT.down = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case "d":
    case "ArrowRight":
      _BM_INPUT.right = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case "x":
      _BM_INPUT.a = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case " ":
    case "y":
    case "z":
      _BM_INPUT.b = false;
      _preventDefaultAndStopPropagation(e);
      break;
    case "m":
      _BM_INPUT.menu = false;
      _preventDefaultAndStopPropagation(e);
      break;
    default:
  }
});
document.body.addEventListener("click", function(e) {
  const x = e.clientX;
  const y = e.clientY;
  const width = document.body.clientWidth;
  const widthThird = width / 3;
  const height = document.body.clientHeight;
  const heightThird = height / 3;
  if (x >= widthThird && x < 2 * widthThird && y < heightThird) {
    _triggerCallback(MANIFEST.commands.N);
    _preventDefaultAndStopPropagation(e);
  } else if (x < widthThird && y < heightThird) {
    _triggerCallback(MANIFEST.commands.B);
    _preventDefaultAndStopPropagation(e);
  } else if (x >= 2 * widthThird && y < heightThird) {
    _triggerCallback(MANIFEST.commands.A);
    _preventDefaultAndStopPropagation(e);
  } else if (x < widthThird && y >= heightThird && y < 2 * heightThird) {
    _triggerCallback(MANIFEST.commands.W);
    _preventDefaultAndStopPropagation(e);
  } else if (x >= 2 * widthThird && y >= heightThird && y < 2 * heightThird) {
    _triggerCallback(MANIFEST.commands.E);
    _preventDefaultAndStopPropagation(e);
  } else if (x >= widthThird && x < 2 * widthThird && y >= 2 * heightThird) {
    _triggerCallback(MANIFEST.commands.S);
    _preventDefaultAndStopPropagation(e);
  } else if (x >= widthThird && x < 2 * widthThird && y >= heightThird && y < 2 * heightThird) {
    _triggerCallback(MANIFEST.commands.M);
    _preventDefaultAndStopPropagation(e);
  }
});
var _lastAction = null;
var _gamepadPollingInterval = undefined;
window.addEventListener("gamepadconnected", (e) => {
  _gamepadPollingInterval = setInterval(function() {
    let gamepad = navigator.getGamepads()[e.gamepad?.index];
    _BM_INPUT.right = gamepad.buttons[15].pressed;
    _BM_INPUT.left = gamepad.buttons[14].pressed;
    _BM_INPUT.down = gamepad.buttons[13].pressed;
    _BM_INPUT.up = gamepad.buttons[12].pressed;
    _BM_INPUT.a = gamepad.buttons[0].pressed || gamepad.buttons[2].pressed;
    _BM_INPUT.b = gamepad.buttons[1].pressed || gamepad.buttons[3].pressed;
    _BM_INPUT.menu = gamepad.buttons[9].pressed;
    if (_BM_INPUT.right || _BM_INPUT.left || _BM_INPUT.down || _BM_INPUT.up || _BM_INPUT.a || _BM_INPUT.b || _BM_INPUT.menu) {
      _triggerCallback(_get_action());
    }
  }, 100);
});
window.addEventListener("gamepaddisconnected", (e) => {
  clearInterval(_gamepadPollingInterval);
});

// src/rot_renderer.ts
var ROT3 = __toESM(require_rot(), 1);
var lookup_color = function(name) {
  return MANIFEST.colors[name];
};
var rot_render = function(state2, camera) {
  let currentMapId = state2.currentMapId;
  let map6 = state2.maps[currentMapId];
  for (var y = 0;y < camera.height; y++) {
    for (var x = 0;x < camera.width; x++) {
      var tile = map6.getTile(camera.x + x, camera.y + y);
      var bg_color = MANIFEST.colors.black;
      var fg_color = MANIFEST.colors.white;
      var icon = "";
      if (!!tile && !!tile.type) {
        bg_color = lookup_color(tile.type.bg);
        fg_color = lookup_color(tile.type.fg);
        icon = tile.options.sign || tile.type.icon;
      }
      ROT_DISPLAY.draw(x, y, icon, fg_color, bg_color);
    }
  }
  const items = items_get_by(state2, currentMapId);
  for (let i = 0;i < items.length; i++) {
    let item9 = items[i];
    ROT_DISPLAY.drawOver(item9.x - camera.x, item9.y - camera.y, item9.type.icon, lookup_color(item9.type.color));
  }
  const playerId = players_get_current();
  const playerEntity = state2.entities[playerId];
  const playerFaction = ((playerEntity || {}).options || {}).faction || undefined;
  const entities = entities_get_by(state2, currentMapId);
  for (let i = 0;i < entities.length; i++) {
    const entity11 = entities[i];
    let entityColor = playerFaction === entity11.options.faction ? MANIFEST.colors.white : lookup_color(entity11.options.faction.color);
    if (BOTMOS_OPTIONS.highlightEnemy && !isMoveableObject(entity11)) {
      entityColor = playerFaction === entity11.options.faction ? MANIFEST.colors.cybergreen : MANIFEST.colors.cybermagenta;
    }
    if (entity11 === playerEntity) {
      entityColor = MANIFEST.colors.white;
    }
    ROT_DISPLAY.drawOver(entity11.x - camera.x, entity11.y - camera.y, entity11.type.icon, entityColor);
  }
  if (!!playerEntity && BOTMOS_OPTIONS.showUI) {
    let equippedItemText = "";
    const equippedItem = items_get_equipped(state2, playerId);
    if (!!equippedItem) {
      equippedItemText += equippedItem.type.name + " ";
    }
    const actions = actions_get(state2, playerEntity);
    let line = playerEntity.type.icon + " " + playerEntity.energy + "/" + playerEntity.energyMax + " " + equippedItemText + "X:" + actions.A.name + " Y:" + actions.B.name;
    let uiLineYCoord = ROT_OPTIONS.height - 1;
    if (playerEntity.y - camera.y >= ROT_OPTIONS.height - 3) {
      uiLineYCoord = 0;
    }
    ROT_DISPLAY.drawText(0, uiLineYCoord, "%c{white}%b{black}" + line, camera.width);
  }
  if (state2._menuOpen) {
    const lines = [];
    lines.push("BotMos Menu");
    lines.push("");
    if (!!playerEntity) {
      lines.push("Hull: " + playerEntity.type.icon + " (" + playerEntity.type.name + ")");
      lines.push("Energy: " + playerEntity.energy + "/" + playerEntity.energyMax);
      lines.push("Gold: " + playerEntity.gold);
      lines.push("Matter: " + playerEntity.matter);
      const equippedItem = items_get_equipped(state2, playerId);
      if (!!equippedItem) {
        lines.push("Tool: " + equippedItem.type.name);
      }
      if (BOTMOS_OPTIONS.debug) {
        lines.push("DEBUG Position: " + playerEntity.x + "," + playerEntity.y);
        lines.push("DEBUG Map: " + playerEntity.mapId);
      }
    }
    for (let i = 0;i < lines.length; i++) {
      ROT_DISPLAY.drawText(0, i, "%c{#74ee15}%b{black}" + lines[i], camera.width);
    }
  }
  for (let i = 0;i < DEBUG_LINES.length; i++) {
    let line = DEBUG_LINES[i];
    ROT_DISPLAY.drawText(0, i, "%c{green}%b{black}" + line, camera.width);
  }
};
async function draw(state2) {
  const maybePlayerEntity = state2.entities[players_get_current()];
  const cameraPosition = maybePlayerEntity ? maybePlayerEntity : lastCameraPosition;
  const camera = camera_follow(cameraPosition);
  rot_render(state2, camera);
  lastCameraPosition = cameraPosition;
}
async function resize(rotOptions) {
  ROT_DISPLAY.setOptions(rotOptions);
}
var camera_follow = function(entity11) {
  return {
    x: Math.min(Math.max(0, entity11.x - Math.floor(ROT_OPTIONS.width / 2)), MAX_MAP_SIZE.WIDTH - ROT_OPTIONS.width),
    y: Math.min(Math.max(0, entity11.y - Math.floor(ROT_OPTIONS.height / 2)), MAX_MAP_SIZE.HEIGHT - ROT_OPTIONS.height),
    width: ROT_OPTIONS.width,
    height: ROT_OPTIONS.height
  };
};
var ROT_DISPLAY = new ROT3.Display(ROT_OPTIONS);
document.body.appendChild(ROT_DISPLAY.getContainer());
var lastCameraPosition = { x: 0, y: 0 };

// src/main.ts
var game2 = new Game;
window.onload = function() {
  draw(game2.init());
};
window.onresize = function() {
  const WINDOW_WIDTH_IN_PX2 = typeof window !== "undefined" ? window.innerWidth : 0;
  const WINDOW_HEIGHT_IN_PX2 = typeof window !== "undefined" ? window.innerHeight : 0;
  BOTMOS_OPTIONS.cameraWidth = Math.floor(WINDOW_WIDTH_IN_PX2 / BOTMOS_OPTIONS.fontSize);
  BOTMOS_OPTIONS.cameraHeight = Math.floor(WINDOW_HEIGHT_IN_PX2 / BOTMOS_OPTIONS.fontSize);
  ROT_OPTIONS.width = Math.floor(BOTMOS_OPTIONS.cameraWidth * (1 / BOTMOS_OPTIONS.zoom));
  ROT_OPTIONS.height = Math.floor(BOTMOS_OPTIONS.cameraHeight * (1 / BOTMOS_OPTIONS.zoom));
  resize(ROT_OPTIONS);
  draw(game2.state);
};
onKeyDown(function(action3) {
  draw(game2.update(action3));
});
if (!!!window.BMActionLog) {
  window.BMActionLog = function() {
    const actions = game2.state.actionLog.join("");
    return actions;
  };
}
if (!!!window.BMPlay) {
  window.BMPlay = function(actions) {
    draw(game2.play(actions));
  };
}
if (!!!window.BMToggleDebug) {
  window.BMToggleDebug = function() {
    BOTMOS_OPTIONS.debug = !BOTMOS_OPTIONS.debug;
    draw(game2.state);
  };
}
if (!!!window.BMToggleUI) {
  window.BMToggleUI = function() {
    BOTMOS_OPTIONS.showUI = !BOTMOS_OPTIONS.showUI;
    draw(game2.state);
  };
}
window.focus();
