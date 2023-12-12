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
      var map = format.map;
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
        var method = map[name.toLowerCase()];
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
      _proto13.add = function add(item4, repeat) {
        if (repeat) {
          this._repeat.push(item4);
        }
        return this;
      };
      _proto13.getTimeOf = function getTimeOf(item4) {
        return this._queue.getEventTime(item4);
      };
      _proto13.clear = function clear() {
        this._queue.clear();
        this._repeat = [];
        this._current = null;
        return this;
      };
      _proto13.remove = function remove(item4) {
        var result = this._queue.remove(item4);
        var index2 = this._repeat.indexOf(item4);
        if (index2 != -1) {
          this._repeat.splice(index2, 1);
        }
        if (this._current == item4) {
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
      _proto14.add = function add(item4, repeat) {
        this._queue.add(item4, 0);
        return _Scheduler.prototype.add.call(this, item4, repeat);
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
      _proto15.add = function add(item4, repeat, time) {
        this._queue.add(item4, time !== undefined ? time : 1 / item4.getSpeed());
        return _Scheduler2.prototype.add.call(this, item4, repeat);
      };
      _proto15.next = function next() {
        if (this._current && this._repeat.indexOf(this._current) != -1) {
          this._queue.add(this._current, 1 / this._current.getSpeed());
        }
        return _Scheduler2.prototype.next.call(this);
      };
      return Speed2;
    }(Scheduler);
    var Action = function(_Scheduler3) {
      _inheritsLoose(Action2, _Scheduler3);
      function Action2() {
        var _this9;
        _this9 = _Scheduler3.call(this) || this;
        _this9._defaultDuration = 1;
        _this9._duration = _this9._defaultDuration;
        return _this9;
      }
      var _proto16 = Action2.prototype;
      _proto16.add = function add(item4, repeat, time) {
        this._queue.add(item4, time || this._defaultDuration);
        return _Scheduler3.prototype.add.call(this, item4, repeat);
      };
      _proto16.clear = function clear() {
        this._duration = this._defaultDuration;
        return _Scheduler3.prototype.clear.call(this);
      };
      _proto16.remove = function remove(item4) {
        if (item4 == this._current) {
          this._duration = this._defaultDuration;
        }
        return _Scheduler3.prototype.remove.call(this, item4);
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
      return Action2;
    }(Scheduler);
    var index = {
      Simple,
      Speed,
      Action
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
    var Map2 = function() {
      function Map3(width, height) {
        if (width === undefined) {
          width = DEFAULT_WIDTH;
        }
        if (height === undefined) {
          height = DEFAULT_HEIGHT;
        }
        this._width = width;
        this._height = height;
      }
      var _proto21 = Map3.prototype;
      _proto21._fillMap = function _fillMap(value) {
        var map = [];
        for (var i = 0;i < this._width; i++) {
          map.push([]);
          for (var j = 0;j < this._height; j++) {
            map[i].push(value);
          }
        }
        return map;
      };
      return Map3;
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
    }(Map2);
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
    }(Map2);
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
    }(Map2);
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
        var map = this._fillMap(1);
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
            map[x][y] = 0;
            if (_i5 != L[_i5 + 1] && RNG$1.getUniform() > rand) {
              addToList(_i5, L, R);
              map[x + 1][y] = 0;
            }
            if (_i5 != L[_i5] && RNG$1.getUniform() > rand) {
              removeFromList(_i5, L, R);
            } else {
              map[x][y + 1] = 0;
            }
          }
        }
        for (var _i6 = 0;_i6 < w; _i6++) {
          var _x2 = 2 * _i6 + 1;
          var _y2 = j;
          map[_x2][_y2] = 0;
          if (_i6 != L[_i6 + 1] && (_i6 == L[_i6] || RNG$1.getUniform() > rand)) {
            addToList(_i6, L, R);
            map[_x2 + 1][_y2] = 0;
          }
          removeFromList(_i6, L, R);
        }
        for (var _i7 = 0;_i7 < this._width; _i7++) {
          for (var _j = 0;_j < this._height; _j++) {
            callback(_i7, _j, map[_i7][_j]);
          }
        }
        return this;
      };
      return EllerMaze2;
    }(Map2);
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
    }(Map2);
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
        var map = this._fillMap(1);
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
            map[cx][cy] = 0;
          }
          if (!map[cx][cy]) {
            this._randomize(dirs);
            do {
              if (Math.floor(RNG$1.getUniform() * (this._regularity + 1)) == 0) {
                this._randomize(dirs);
              }
              blocked = true;
              for (var i = 0;i < 4; i++) {
                nx = cx + dirs[i][0] * 2;
                ny = cy + dirs[i][1] * 2;
                if (this._isFree(map, nx, ny, width, height)) {
                  map[nx][ny] = 0;
                  map[cx + dirs[i][0]][cy + dirs[i][1]] = 0;
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
            callback(_i12, j, map[_i12][j]);
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
      _proto31._isFree = function _isFree(map, x, y, width, height) {
        if (x < 1 || y < 1 || x >= width || y >= height) {
          return false;
        }
        return map[x][y];
      };
      return IceyMaze2;
    }(Map2);
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
    }(Map2);
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
        var item4 = this._computed[key];
        while (item4) {
          callback(item4.x, item4.y);
          item4 = item4.prev;
        }
      };
      _proto35._compute = function _compute(fromX, fromY) {
        while (this._todo.length) {
          var item4 = this._todo.shift();
          if (item4.x == fromX && item4.y == fromY) {
            return;
          }
          var neighbors = this._getNeighbors(item4.x, item4.y);
          for (var i = 0;i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            var x = neighbor[0];
            var y = neighbor[1];
            var id = x + "," + y;
            if (id in this._computed) {
              continue;
            }
            this._add(x, y, item4);
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
        var item4 = this._done[fromX + "," + fromY];
        if (!item4) {
          return;
        }
        while (item4) {
          callback(item4.x, item4.y);
          item4 = item4.prev;
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
          var item4 = this._todo[i];
          var itemF = item4.g + item4.h;
          if (f < itemF || f == itemF && h < item4.h) {
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
        var range = this._options.range;
        function cb(x2, y2, r, vis) {
          var key2 = x2 + "," + y2;
          var formFactor = vis * (1 - r / range);
          if (formFactor == 0) {
            return;
          }
          cache[key2] = formFactor;
        }
        this._fov.compute(x, y, range, cb.bind(this));
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

// src/debug.ts
function debug_log(text) {
  console.log(text);
}
var DEBUG_LINES = [];

// src/item.ts
function items_create(type, mapId, x = 0, y = 0) {
  let id = _items_id_create(mapId, x, y);
  return {
    id,
    type,
    mapId,
    x,
    y,
    energy: type.energyDelta
  };
}
var _items_id_create = function(mapId, x, y) {
  return "item" + mapId + x + y;
};
function items_destroy(itemId) {
  _STATE.items[itemId] = undefined;
  delete _STATE.items[itemId];
}
function items_store(item) {
  _STATE.items[item.id] = item;
}
function items_get_by(mapId) {
  let itemIds = Object.keys(_STATE.items);
  let itemsOnMap = [];
  for (let i = 0;i < itemIds.length; i++) {
    let item = _STATE.items[itemIds[i]];
    if (item.mapId === mapId) {
      itemsOnMap.push(item);
    }
  }
  return itemsOnMap;
}
function items_get_at(mapId, x, y) {
  let itemId = _items_id_create(mapId, x, y);
  if (itemId in _STATE.items) {
    return _STATE.items[itemId];
  }
  return null;
}
function items_pickup(entity, item) {
  debug_log("Pickup item " + item.id + " by " + entity.id);
  energy_queue(entity.id, item.energy);
  items_destroy(item.id);
}
var _STATE = {
  items: {}
};

// src/config.ts
var ZOOM = 1;
var SHOW_GRID = true;
var WINDOW_WIDTH_IN_PX = typeof window !== "undefined" ? window.innerWidth : 0;
var WINDOW_HEIGHT_IN_PX = typeof window !== "undefined" ? window.innerHeight : 0;
var FONT_SIZE = 18;
var CAMERA_PADDING = 1;
var CAMERA_SIZE = [
  Math.floor(WINDOW_WIDTH_IN_PX / FONT_SIZE) - CAMERA_PADDING,
  Math.floor(WINDOW_HEIGHT_IN_PX / FONT_SIZE) - CAMERA_PADDING
];
var MAX_MAP_SIZE = {
  WIDTH: 256,
  HEIGHT: 256
};
var ROT_OPTIONS = {
  width: ~~(CAMERA_SIZE[0] * (1 / ZOOM)),
  height: ~~(CAMERA_SIZE[1] * (1 / ZOOM)),
  bg: "transparent",
  fontSize: ~~(FONT_SIZE * ZOOM),
  forceSquareRatio: true
};

// src/manifest.ts
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
  constructor(name, description, icon, color = "cyberyellow", energyDelta = 0) {
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.color = color;
    this.energyDelta = energyDelta;
  }
}

class Spirit {
  name;
  description;
  icon;
  color;
  unlockCondition;
  constructor(name, description, icon) {
    this.name = name;
    this.description = description;
    this.icon = icon;
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
  ais: {
    aggrorange: new AI("AggroRange", "Idles at a position and engages the player when coming into range")
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
    cybermagenta: "Enemy color"
  },
  commands: {
    N: new Command("N", "Move/interact north"),
    E: new Command("E", "Move/interact east"),
    S: new Command("S", "Move/interact south"),
    W: new Command("W", "Move/interact west"),
    A: new Command("A", "Interact, primary action"),
    B: new Command("B", "Take a break, cancel"),
    X: new Command("X", "Secondary action"),
    Y: new Command("Y", "Tertiary action")
  },
  factions: {
    Spirits: new Faction("Spirits", "Default player faction", "white"),
    Pyrates: new Faction("Pyrates", "Default enemy faction", "cybermagenta")
  },
  items: {
    junk: new Item("Junk", "Broken bot", "%", "cyberyellow", 1),
    energy: new Item("Energy", "Energy pack", "e", "cyberyellow", 10)
  },
  maps: {
    bot_bar: `!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!+ weakwall
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#.....=..+.....#
O.....=..+.....#
#..====..+.....#
#..=...........#
#..=.....+.....#
#..====..+.....#
#.....=..+.....#
#.....=..+.....#
#.....=..+++++.#
#..............#
#..............#
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
################################
#..............................#
#..............................#
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
    bot_station: `!
!!id bot_station
!!size 32 32
!!. void
!!~ water
!!# wall
!!+ weakwall
!!= chargepad
!!C portalclosed
!!P portal preloader 15 13
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!B portal bot_bar 0 5
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...C###.++..............####..#
#...C###.++..............####..#
#...####.++..............#C##..#
#........++....................#
#+++++++++.....................#
#++++++++......................#
#..............................#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######C#...........B###....#
#......................####....#
#......................####....#
#..#..#..#..#..................#
#..##.##.##.##.................#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..###########.......########..#
#..#C#########.......#O####Q#..#
P..............................#
#..............................#
################################
`,
    preloader: `!
!!id preloader
!!size 16 16
!!. void
!!~ water
!!^ rock
!!t tree
!!# wall
!!+ weakwall
!!= chargepad
!!C portalclosed
!!O portal simplex=1337 126 121
!!A portal arena 1 0
!!D portal bot_station 0 29
################
#.============.#
O..............A
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
C..............D
#.~~~~~~~~~~~~.#
################
`
  },
  names: {
    BotMoses: "Teaches the new player",
    Betty: "Gambles a lot",
    Bender: "From the future, bowl head",
    Drak: "A now retired PioneerBot, who teaches the new player combat lessons",
    Oz: "A machinery wizard"
  },
  spirits: {
    Spirit: new Spirit("Spirit", "You are back in the machine mind, pick a new hull!", "@"),
    WorkBot: new Spirit("WorkBot", "Basic pawn", "B"),
    AeroBot: new Spirit("AeroBot", "Basic server, serving energy goo and such to bots", "A")
  },
  tiles: {
    void: SHOW_GRID ? new Tile("void", "Just nothing here", ".", "gray") : new Tile("void", "Just nothing here"),
    water: new Tile("water", "Rust and other dangers await", "~", "cybercyan", "cyberblue", -2),
    rock: new Tile("rock", "Hidden treasures may await", "^", "white", "gray"),
    tree: new Tile("tree", "Lots of trees make a forest", "t", "brown", "cybergreen"),
    wall: new Tile("wall", "A strong wall", "#", "gray", "black"),
    weakwall: new Tile("weakwall", "A weakened wall", "+", "gray", "black"),
    chargepad: new Tile("chargepad", "Recharges energy and health", "=", "cyberyellow", "black", 2),
    portal: new Tile("portal", "Gateway to another map", "O", "cyberyellow", "gray"),
    portalclosed: new Tile("portalclosed", "Closed gateway to another map", "O", "black", "gray")
  }
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

// src/entity_map.ts
function entity_act(state, entity2, action) {
  switch (action) {
    case MANIFEST.commands.N:
      state = entityInteractOrMove(state, entity2, 0, -1);
      break;
    case MANIFEST.commands.W:
      state = entityInteractOrMove(state, entity2, -1, 0);
      break;
    case MANIFEST.commands.S:
      state = entityInteractOrMove(state, entity2, 0, 1);
      break;
    case MANIFEST.commands.E:
      state = entityInteractOrMove(state, entity2, 1, 0);
      break;
    default:
  }
  return state;
}
function entityInteractOrMove(state, entity2, dx, dy) {
  let map = state.maps[entity2.mapId];
  let entity_at_target_position = entities_get_at(state, map.id, entity2.x + dx, entity2.y + dy);
  if (entity_at_target_position !== null) {
    interactOrCombat(entity2, entity_at_target_position);
  } else if (entity_can_move(map, entity2, dx, dy)) {
    entity2.x += dx;
    entity2.y += dy;
    let maybeItem = items_get_at(entity2.mapId, entity2.x, entity2.y);
    if (maybeItem) {
      items_pickup(entity2, maybeItem);
    }
    let tile = map.getTile(entity2.x, entity2.y);
    if (tile.type === MANIFEST.tiles.portal) {
      state.currentMapId = tile.options.mapId;
      entity2.x = tile.options.x;
      entity2.y = tile.options.y;
      entity2.mapId = tile.options.mapId;
    }
  }
  return state;
}
function entities_tile_energy_update(state) {
  for (let entityId in state.entities) {
    let entity2 = state.entities[entityId];
    let map = state.maps[entity2.mapId];
    let tile = map.getTile(entity2.x, entity2.y);
    energy_queue(entityId, tile.type.energyDelta);
  }
  return state;
}
var entity_can_move = function(map, entity2, dx, dy) {
  let x = entity2.x + dx;
  let y = entity2.y + dy;
  let tileType = map.getTile(x, y).type;
  return x >= 0 && x < map.widthTiles && y >= 0 && y < map.heightTiles && tileType !== MANIFEST.tiles.rock && tileType !== MANIFEST.tiles.portalclosed && tileType !== MANIFEST.tiles.wall && tileType !== MANIFEST.tiles.weakwall;
};

// src/player.ts
function players_get_current() {
  return "player";
}

// src/util.ts
function distance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// src/ai.ts
function ai_update(state) {
  let entityIdsToUpdate = _entityIdsToUpdate(state);
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    let entityId = entityIdsToUpdate[i];
    if (!_AIs.hasOwnProperty(entityId)) {
      _AIs[entityId] = ai_create(state, entityId, MANIFEST.ais.aggrorange);
    }
  }
  let playerEntity = state.entities[players_get_current()];
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    let entityId = entityIdsToUpdate[i];
    let entity3 = state.entities[entityId];
    let entityAI = _AIs[entityId];
    let distanceToPlayer = distance(playerEntity.x, playerEntity.y, entity3.x, entity3.y);
    if (playerEntity.options.faction !== entity3.options.faction && distanceToPlayer <= entityAI.aggroRange) {
      let movementMap = state.maps[state.currentMapId].asMovementMap();
      let path = a_star(movementMap, entity3.x, entity3.y, playerEntity.x, playerEntity.y);
      if (path !== null) {
        path = path.slice(1);
      }
      entityAI.path = path;
    }
  }
  for (let i = 0;i < entityIdsToUpdate.length; i++) {
    const entityId = entityIdsToUpdate[i];
    const entity3 = state.entities[entityId];
    const entityAI = _AIs[entityId];
    if (entityAI.path !== null) {
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
    if (!entity3.id.startsWith("player")) {
      entityIdsToUpdate.push(entity3.id);
    }
  }
  return entityIdsToUpdate;
};
var ai_create = function(state, entityId, aiType) {
  let entity3 = state.entities[entityId];
  return {
    entityId,
    type: aiType,
    aggroRange: 8,
    startMap: entity3.mapId,
    startX: entity3.x,
    startY: entity3.y,
    path: null
  };
};
function ai_destroy(entityId) {
  _AIs[entityId] = undefined;
  delete _AIs[entityId];
}
var _AIs = {};

// src/spawn.ts
function despawn_queue(entityId) {
  _despawnQueue.push(entityId);
}
function spawn_item_queue(item3) {
  _itemSpawnQueue.push(item3);
}
function despawn_update(state) {
  let entityIdtoDespawn = undefined;
  while (typeof (entityIdtoDespawn = _despawnQueue.shift()) !== "undefined") {
    state = entities_destroy(state, entityIdtoDespawn);
    ai_destroy(entityIdtoDespawn);
  }
  return state;
}
function spawn_update() {
  let itemToSpawn = undefined;
  while (typeof (itemToSpawn = _itemSpawnQueue.shift()) !== "undefined") {
    items_store(itemToSpawn);
  }
}
var _despawnQueue = [];
var _itemSpawnQueue = [];

// src/energy.ts
function energy_queue(entityId, energyDelta) {
  _energyQueue.push({ entityId, energyDelta });
}
function energy_update(state) {
  let energyChange = undefined;
  while (typeof (energyChange = _energyQueue.shift()) !== "undefined") {
    let entity4 = state.entities[energyChange.entityId];
    entity4.energy = Math.min(entity4.energy + energyChange.energyDelta, entity4.energyMax);
    if (entity4.energy <= 0) {
      despawn_queue(entity4.id);
      spawn_item_queue(items_create(MANIFEST.items.junk, entity4.mapId, entity4.x, entity4.y));
    }
  }
  return state;
}
var _energyQueue = [];

// src/combat.ts
function combat_queue(entityId, otherEntityId) {
  _combatQueue.push({ entityId, otherEntityId });
}
function combat_update() {
  let combatants = undefined;
  while (typeof (combatants = _combatQueue.shift()) !== "undefined") {
    energy_queue(combatants.entityId, -1);
    energy_queue(combatants.otherEntityId, -10);
  }
}
var _combatQueue = [];

// src/entity.ts
function entities_create(state, id, type, mapId, x = 0, y = 0, options = {}) {
  let energy4 = 10;
  let energyMax = 10;
  if (id.startsWith("player")) {
    energy4 = 100;
    energyMax = 100;
  }
  const entity4 = {
    id,
    type,
    mapId,
    x,
    y,
    energy: energy4,
    energyMax,
    options
  };
  state.entities[entity4.id] = entity4;
  return state;
}
function entities_destroy(state, entityId) {
  state.entities[entityId] = undefined;
  delete state.entities[entityId];
  return state;
}
function entities_get_by(state, mapId) {
  let entity_ids = Object.keys(state.entities);
  let entities_on_map = [];
  for (let i = 0;i < entity_ids.length; i++) {
    let entity4 = state.entities[entity_ids[i]];
    if (entity4.mapId === mapId) {
      entities_on_map.push(entity4);
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
function interactOrCombat(entityA, entityB) {
  if (entityA.options.faction === entityB.options.faction) {
    debug_log("Interaction!");
  } else {
    debug_log("COMBAT!");
    combat_queue(entityA.id, entityB.id);
  }
}

// src/map.ts
function tiles_create(type, options = {}) {
  return {
    type,
    options
  };
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
        let options = {};
        if (tileTypeName.startsWith("portal ")) {
          let portalComponents = tileTypeName.split(" ");
          tileTypeName = "portal";
          options["mapId"] = portalComponents[1];
          options["x"] = Number(portalComponents[2]);
          options["y"] = Number(portalComponents[3]);
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
        if (tileType === MANIFEST.tiles.rock || tileType === MANIFEST.tiles.wall || tileType === MANIFEST.tiles.weakwall) {
          movementMap[y][x] = 1;
        }
      }
    }
    this._cacheMovementMap = movementMap;
    return movementMap;
  }
}

// src/rot_map_generator.ts
var ROT = __toESM(require_rot(), 1);
function maps_create_overworld(state, seed = MAP_SEED) {
  ROT.RNG.setSeed(seed);
  let rot_noise = new ROT.Noise.Simplex;
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
  let map2 = new Map(mapId, MAP_SIZE.width * CHUNK_SIZE.width, MAP_SIZE.height * CHUNK_SIZE.height, tiles);
  map2.setTile(126, 121, MANIFEST.tiles.portal, { mapId: "preloader", x: 0, y: 2 });
  state.maps[mapId] = map2;
  return state;
}
function maps_create_arena(state) {
  let rotMap = new ROT.Map.Arena(CHUNK_SIZE.width, CHUNK_SIZE.height);
  let tiles = [];
  rotMap.create(function(x, y, wall) {
    let tileType = wall ? MANIFEST.tiles.wall : MANIFEST.tiles.void;
    tiles[y * CHUNK_SIZE.width + x] = tiles_create(tileType);
  });
  let map2 = new Map("arena", CHUNK_SIZE.width, CHUNK_SIZE.height, tiles);
  map2.setTile(1, 0, MANIFEST.tiles.portal, { mapId: "preloader", x: 15, y: 2 });
  state.maps["arena"] = map2;
  return state;
}
var MAP_SEED = 1337;
var _noise_skew = 55;

// src/state.ts
function states_create() {
  return {
    currentMapId: "",
    entities: {},
    maps: {}
  };
}

// src/systems.ts
function systems_per_turn_update(state) {
  state = ai_update(state);
  combat_update();
  state = entities_tile_energy_update(state);
  state = energy_update(state);
  state = despawn_update(state);
  spawn_update();
  return state;
}

// src/game.ts
class Game {
  turns;
  state;
  constructor() {
    this.turns = 0;
    this.state = states_create();
  }
  init() {
    this.state = maps_create_arena(this.state);
    this.state = maps_create_overworld(this.state);
    for (let mapId in MANIFEST.maps) {
      this.state.maps[mapId] = maps_parse(MANIFEST.maps[mapId]);
    }
    this.state = entities_create(this.state, "npc0", MANIFEST.spirits.AeroBot, "simplex=" + MAP_SEED, 130, 127, { faction: MANIFEST.factions.Spirits });
    this.state = entities_create(this.state, "npc1", MANIFEST.spirits.WorkBot, "simplex=" + MAP_SEED, 124, 127, { faction: MANIFEST.factions.Spirits });
    items_store(items_create(MANIFEST.items.energy, "simplex=" + MAP_SEED, 127, 130));
    this.state = entities_create(this.state, "enemy0", MANIFEST.spirits.WorkBot, "arena", 8, 8, { faction: MANIFEST.factions.Pyrates });
    this.state = entities_create(this.state, "enemy1", MANIFEST.spirits.WorkBot, "arena", 9, 8, { faction: MANIFEST.factions.Pyrates });
    this.state = entities_create(this.state, "enemy2", MANIFEST.spirits.WorkBot, "arena", 11, 11, { faction: MANIFEST.factions.Pyrates });
    this.state = entities_create(this.state, "enemy3", MANIFEST.spirits.WorkBot, "arena", 6, 6, { faction: MANIFEST.factions.Pyrates });
    this.state = entities_create(this.state, "enemy4", MANIFEST.spirits.WorkBot, "arena", 12, 12, { faction: MANIFEST.factions.Pyrates });
    items_store(items_create(MANIFEST.items.energy, "arena", 7, 7));
    items_store(items_create(MANIFEST.items.energy, "arena", 14, 14));
    this.state.currentMapId = "preloader";
    this.state = entities_create(this.state, players_get_current(), MANIFEST.spirits.Spirit, this.state.currentMapId, 7, 7, { faction: MANIFEST.factions.Spirits });
    return this.state;
  }
  update(action) {
    let player3 = this.state.entities[players_get_current()];
    if (!!player3) {
      if (!!action) {
        this.state = entity_act(this.state, player3, action);
        this.state = systems_per_turn_update(this.state);
        this.turns += 1;
        debug_log("Trn: " + this.turns + ", act: " + action.key + ", plr: (" + player3.energy + "/" + player3.energyMax + " | " + player3.x + "," + player3.y + ")");
      }
    } else {
      this.state.currentMapId = "preloader";
      this.state = entities_create(this.state, players_get_current(), MANIFEST.spirits.Spirit, this.state.currentMapId, 7, 7, { faction: MANIFEST.factions.Spirits });
    }
    return this.state;
  }
}

// src/input.ts
var _preventDefaultAndStopPropagation = function(e) {
  e.preventDefault();
  e.stopPropagation();
};
var _updateInputQueue = function() {
  let action = null;
  if (_BM_INPUT.right) {
    action = MANIFEST.commands.E;
  }
  if (_BM_INPUT.left) {
    action = MANIFEST.commands.W;
  }
  if (_BM_INPUT.down) {
    action = MANIFEST.commands.S;
  }
  if (_BM_INPUT.up) {
    action = MANIFEST.commands.N;
  }
  if (_BM_INPUT.up && _BM_INPUT.right) {
    if (action === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
      action = MANIFEST.commands.E;
    }
  }
  if (_BM_INPUT.up && _BM_INPUT.left) {
    if (action === MANIFEST.commands.N && _lastAction === MANIFEST.commands.N) {
      action = MANIFEST.commands.W;
    }
  }
  if (_BM_INPUT.down && _BM_INPUT.right) {
    if (action === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
      action = MANIFEST.commands.E;
    }
  }
  if (_BM_INPUT.down && _BM_INPUT.left) {
    if (action === MANIFEST.commands.S && _lastAction === MANIFEST.commands.S) {
      action = MANIFEST.commands.W;
    }
  }
  if (_BM_INPUT.b) {
    action = MANIFEST.commands.B;
  }
  _lastAction = action;
  if (action !== null) {
    _inputQueue.push(action);
  }
};
function onKeyDown(callback) {
  _callback = callback;
}
function get_action() {
  _updateInputQueue();
  let action = _inputQueue.shift() || null;
  _inputQueue = [];
  return action;
}
var _BM_INPUT = {
  up: false,
  right: false,
  down: false,
  left: false,
  a: false,
  b: false,
  c: false,
  d: false,
  menu: false
};
var _inputQueue = [];
var _callback = undefined;
var timeOfLastActionInMs = 0;
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
    case " ":
      _BM_INPUT.b = true;
      _preventDefaultAndStopPropagation(e);
      break;
    default:
  }
  const currentTimeInMs = Date.now();
  if (_callback !== undefined && currentTimeInMs - timeOfLastActionInMs >= 80) {
    timeOfLastActionInMs = currentTimeInMs;
    _callback(get_action());
  }
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
    case " ":
      _BM_INPUT.b = false;
      _preventDefaultAndStopPropagation(e);
      break;
    default:
  }
});
var _lastAction = null;

// src/rot_renderer.ts
var ROT2 = __toESM(require_rot(), 1);
var lookup_color = function(name) {
  return MANIFEST.colors[name];
};
var rot_render = function(state2, camera) {
  let currentMapId = state2.currentMapId;
  let map3 = state2.maps[currentMapId];
  for (var y = 0;y < camera.height; y++) {
    for (var x = 0;x < camera.width; x++) {
      var tile = map3.getTile(camera.x + x, camera.y + y);
      var bg_color = MANIFEST.colors.black;
      var fg_color = MANIFEST.colors.white;
      var icon = "";
      if (tile != null && tile.type != null) {
        bg_color = lookup_color(tile.type.bg);
        fg_color = lookup_color(tile.type.fg);
        icon = tile.type.icon;
      }
      ROT_DISPLAY.draw(x, y, icon, fg_color, bg_color);
    }
  }
  let items = items_get_by(currentMapId);
  for (let i = 0;i < items.length; i++) {
    let item6 = items[i];
    ROT_DISPLAY.drawOver(item6.x - camera.x, item6.y - camera.y, item6.type.icon, lookup_color(item6.type.color));
  }
  let playerFaction = ((state2.entities[players_get_current()] || {}).options || {}).faction || undefined;
  let entities = entities_get_by(state2, currentMapId);
  for (let i = 0;i < entities.length; i++) {
    let entity6 = entities[i];
    let entityColor = playerFaction === entity6.options.faction ? MANIFEST.colors.white : MANIFEST.colors.cybermagenta;
    ROT_DISPLAY.drawOver(entity6.x - camera.x, entity6.y - camera.y, entity6.type.icon, entityColor);
  }
  for (let i = 0;i < DEBUG_LINES.length; i++) {
    let line = DEBUG_LINES[i];
    ROT_DISPLAY.drawText(0, i, "%c{green}%b{black}" + line, CAMERA_SIZE[0]);
  }
};
async function draw(state2) {
  let playerEntity = state2.entities[players_get_current()];
  let camera = camera_follow(playerEntity);
  rot_render(state2, camera);
}
var camera_follow = function(entity6) {
  return {
    x: Math.min(Math.max(0, entity6.x - Math.floor(ROT_OPTIONS.width / 2)), MAX_MAP_SIZE.WIDTH - ROT_OPTIONS.width),
    y: Math.min(Math.max(0, entity6.y - Math.floor(ROT_OPTIONS.height / 2)), MAX_MAP_SIZE.HEIGHT - ROT_OPTIONS.height),
    width: ROT_OPTIONS.width,
    height: ROT_OPTIONS.height
  };
};
var ROT_DISPLAY = new ROT2.Display(ROT_OPTIONS);
document.body.appendChild(ROT_DISPLAY.getContainer());

// src/main.ts
var game2 = new Game;
window.onload = function() {
  draw(game2.init());
};
onKeyDown(function(action) {
  draw(game2.update(action));
});
window.focus();
