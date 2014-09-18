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

    getCenterWidth: function(){
      return this.width / 2;
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

      Glyph.renderOutline(ctx, outline, scale, x_pos, y_pos);


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

      Glyph.renderOutline(this.context, outline, scale, x_pos, y_pos);

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

  return Glyph;
}());
