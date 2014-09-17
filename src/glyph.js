// Vex Flow
// Mohit Muthanna <mohit@muthanna.com>
//
// Copyright Mohit Muthanna 2010
//
// Requires a glyph font to be loaded and Vex.Flow.Font to be set.

/**
 * A quick and dirty static glyph renderer. Renders glyphs from the default
 * font defined in Vex.Flow.Font.
 *
 * @param {!Object} ctx The canvas context.
 * @param {number} x_pos X coordinate.
 * @param {number} y_pos Y coordinate.
 * @param {number} point The point size to use.
 * @param {string} val The glyph name in Vex.Flow.Font.
 * @param {boolean} nocache If set, disables caching of font outline.
 */
Vex.Flow.renderGlyph = function(ctx, x_pos, y_pos, scale, val, nocache) {
  if (typeof scale !== 'number') {
    nocache = val;
    val = scale;
    scale = null;
  }
  var glyph = new Vex.Flow.Glyph(val, scale);
  glyph.render(ctx, x_pos, y_pos);
};

/**
 * @constructor
 */
Vex.Flow.Glyph = (function() {
  function Glyph(glyph_name, scale, options) {
    this.glyph_name = glyph_name;
    debugger;
    this.point = Vex.Flow.FontLoader.getFontSize(glyph_name) * (scale || 1);
    this.context = null;
    this.options = {
      cache: true,
      font: Vex.Flow.Font
    };

    this.width = null;
    this.metrics = null;
    this.x_shift = 0;
    this.y_shift = 0;

    if (options) this.setOptions(options); else this.reset();
  }

  Glyph.DEBUG = false;

  function L() { if (Glyph.DEBUG) Vex.L("Vex.Flow.Glyph", arguments); }

  Glyph.prototype = {
    setOptions: function(options) {
      Vex.Merge(this.options, options);
      this.reset();
    },

    setStave: function(stave) { this.stave = stave; return this; },
    setXShift: function(x_shift) {
      this.x_shift = x_shift; 
      return this; 
    },
    setYShift: function(y_shift) { this.y_shift = y_shift; return this; },
    setContext: function(context) { this.context = context; return this; },
    getContext: function() { return this.context; },

    reset: function() {
      this.metrics = Vex.Flow.FontLoader.loadGlyphMetrics(this.glyph_name, this.options.cache);

      if (this.metrics.advanceWidth){
        this.scale = 1 / this.options.font.resolution * this.point;
        this.setWidth(this.metrics.advanceWidth * this.scale);
      } else {
        this.scale = this.point * 72 / (this.options.font.resolution * 100);
        this.setWidth((this.metrics.x_max - this.metrics.x_min) * this.scale);
      }
    },

    setWidth: function(width) {
      this.width =  width;
      return this;
    },

    getWidth: function(){
      return this.width;
    },

    getMetrics: function() {
      if (!this.metrics) throw new Vex.RuntimeError("BadGlyph", "Glyph " +
          this.glyph_name + " is not initialized.");
        
      return {
        x_min: this.metrics.x_min * this.scale,
        x_max: this.metrics.x_max * this.scale,
        width: this.width,
        height: this.metrics.ha * this.scale
      };
    },

    hasCenterOrigin: function(){
      return Vex.Flow.FontLoader.getHorizontalOriginPosition(this.glyph_name) === "center";
    },

    hasRightOrigin: function(){
      return Vex.Flow.FontLoader.getHorizontalOriginPosition(this.glyph_name) === "right";
    },

    render: function(ctx, x_pos, y_pos) {
      if (!this.metrics) throw new Vex.RuntimeError("BadGlyph", "Glyph " +
          this.glyph_name + " is not initialized.");

      var outline = this.metrics.outline;
      var scale = this.scale;

      // Translate as if origin was to the left side of the glyph
      if (this.hasCenterOrigin()){
        x_pos += this.width/2;
      } else if (this.hasRightOrigin()){
        x_pos += this.width;
      }

      if (this.metrics.path) {
        Glyph.drawOTFGlyph(ctx, this.metrics, x_pos, y_pos, this.point);
      } else if (this.metrics.outline) {
        Glyph.renderOutline(ctx, outline, scale, x_pos, y_pos);
      }

      if (Glyph.DEBUG){
        Vex.drawCross(ctx, x_pos, y_pos);
      }
    },

    renderToStave: function(x) {
      if (!this.metrics) throw new Vex.RuntimeError("BadGlyph", "Glyph " +
          this.glyph_name + " is not initialized.");
      if (!this.stave) throw new Vex.RuntimeError("GlyphError", "No valid stave");
      if (!this.context) throw new Vex.RERR("GlyphError", "No valid context");

      var outline = this.metrics.outline;
      var scale = this.scale;
      var x_pos = x + this.x_shift;
      var y_pos = this.stave.getYForGlyphs() + this.y_shift;

      if (this.metrics.path) {
        Glyph.drawOTFGlyph(this.context, this.metrics, x_pos, y_pos, this.point);
      } else if (this.metrics.outline){
        Glyph.renderOutline(this.context, outline, scale, x_pos, y_pos);
      }

      if (Glyph.DEBUG){
        Vex.drawCross(this.context, x_pos, y_pos);      
      }
    }
  };

  Glyph.renderOutline = function(ctx, outline, scale, x_pos, y_pos) {
    var outlineLength = outline.length;

    ctx.beginPath();

    ctx.moveTo(x_pos, y_pos);

    for (var i = 0; i < outlineLength; ) {
      var action = outline[i++];

      switch(action) {
        case 'm':
          ctx.moveTo(x_pos + outline[i++] * scale,
                     y_pos + outline[i++] * -scale);
          break;
        case 'l':
          ctx.lineTo(x_pos + outline[i++] * scale,
                     y_pos + outline[i++] * -scale);
          break;

        case 'q':
          var cpx = x_pos + outline[i++] * scale;
          var cpy = y_pos + outline[i++] * -scale;

          ctx.quadraticCurveTo(
              x_pos + outline[i++] * scale,
              y_pos + outline[i++] * -scale, cpx, cpy);
          break;

        case 'b':
          var x = x_pos + outline[i++] * scale;
          var y = y_pos + outline[i++] * -scale;

          ctx.bezierCurveTo(
              x_pos + outline[i++] * scale, y_pos + outline[i++] * -scale,
              x_pos + outline[i++] * scale, y_pos + outline[i++] * -scale,
              x, y);
          break;
      }
    }
    ctx.fill();
  };

  Glyph.drawOTFGlyph = function (ctx, glyph, x, y, fontSize) {
    Glyph.getOTFPath(glyph, x, y, fontSize).draw(ctx);
  };

  Glyph.getOTFPath = function (glyph, x , y, fontSize) {
    var scale, p, commands, cmd;
    x = x !== undefined ? x : 0;
    y = y !== undefined ? y : 0;
    fontSize = fontSize !== undefined ? fontSize : 72;
    scale = 1 / glyph.font.unitsPerEm * fontSize;
    p = new Path();
    commands = glyph.path.commands;
    for (var i = 0; i < commands.length; i += 1) {
      cmd = commands[i];
      if (cmd.type === 'M') {
        p.moveTo(x + (cmd.x * scale), y + (cmd.y * scale));
      } else if (cmd.type === 'L') {
        p.lineTo(x + (cmd.x * scale), y + (cmd.y * scale));
      } else if (cmd.type === 'Q') {
        p.quadraticCurveTo(x + (cmd.x1 * scale), y + (cmd.y1 * scale),
                           x + (cmd.x * scale), y + (cmd.y * scale));
      } else if (cmd.type === 'C') {
        p.curveTo(x + (cmd.x1 * scale), y + (cmd.y1 * scale),
                  x + (cmd.x2 * scale), y + (cmd.y2 * scale),
                  x + (cmd.x * scale), y + (cmd.y * scale));
      } else if (cmd.type === 'Z') {
        p.closePath();
      }
    }
    return p;
  };

  function Path() {
    this.commands = [];
    this.fill = 'black';
    this.stroke = null;
    this.strokeWidth = 1;
  }

  Path.prototype.moveTo = function (x, y) {
      this.commands.push({type: 'M', x: x, y: y});
  };

  Path.prototype.lineTo = function (x, y) {
      this.commands.push({type: 'L', x: x, y: y});
  };

  Path.prototype.curveTo = Path.prototype.bezierCurveTo = function (x1, y1, x2, y2, x, y) {
      this.commands.push({type: 'C', x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y});
  };

  Path.prototype.quadTo = Path.prototype.quadraticCurveTo = function (x1, y1, x, y) {
      this.commands.push({type: 'Q', x1: x1, y1: y1, x: x, y: y});
  };

  Path.prototype.close = Path.prototype.closePath = function () {
      this.commands.push({type: 'Z'});
  };

  // Add the given path or list of commands to the commands of this path.
  Path.prototype.extend = function (pathOrCommands) {
      if (pathOrCommands.commands) {
          pathOrCommands = pathOrCommands.commands;
      }
      Array.prototype.push.apply(this.commands, pathOrCommands);
  };

  // Draw the path to a 2D context.
  Path.prototype.draw = function (ctx) {
      var i, cmd;
      ctx.beginPath();
      for (i = 0; i < this.commands.length; i += 1) {
          cmd = this.commands[i];
          if (cmd.type === 'M') {
              ctx.moveTo(cmd.x, cmd.y);
          } else if (cmd.type === 'L') {
              ctx.lineTo(cmd.x, cmd.y);
          } else if (cmd.type === 'C') {
              ctx.bezierCurveTo(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
          } else if (cmd.type === 'Q') {
              ctx.quadraticCurveTo(cmd.x1, cmd.y1, cmd.x, cmd.y);
          } else if (cmd.type === 'Z') {
              ctx.closePath();
          }
      }
      if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
      }
      if (this.stroke) {
          ctx.strokeStyle = this.stroke;
          ctx.lineWidth = this.strokeWidth;
          ctx.stroke();
      }
  };

  return Glyph;
}());
