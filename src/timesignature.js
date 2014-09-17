// Vex Flow Notation
// Implements time signatures glyphs for staffs
// See tables.js for the internal time signatures
// representation
//

/**
 * @param {string} timeSpec time signature, i.e. "4/4"
 * @param {number} [customPadding] custom padding when using multi-stave/multi-instrument setting
 * to align key/time signature (in pixels), optional
 * @constructor
 */
Vex.Flow.TimeSignature = (function() {
  function TimeSignature(timeSpec, customPadding) {
    if (arguments.length > 0) this.init(timeSpec, customPadding);
  }

  TimeSignature.glyphs = {
    "C": {
      glyph_name: "timeSigCommon",
      line: 2
    },
    "C|": {
      glyph_name: "timeSigCutCommon",
      line: 2
    }
  };

  Vex.Inherit(TimeSignature, Vex.Flow.StaveModifier, {
    init: function(timeSpec, customPadding) {
      TimeSignature.superclass.init();
       var padding = customPadding || 15;

      this.setPadding(padding);
      this.topLine = 2;
      this.bottomLine = 4;
      this.timeSig = this.parseTimeSpec(timeSpec);
    },

    parseTimeSpec: function(timeSpec) {
      if (timeSpec == "C" || timeSpec == "C|") {
        var glyphInfo = TimeSignature.glyphs[timeSpec];
        return {num: false, line: glyphInfo.line,
          glyph: new Vex.Flow.Glyph(glyphInfo.glyph_name)};
      }

      var topNums = [];
      var i, c;
      for (i = 0; i < timeSpec.length; ++i) {
        c = timeSpec.charAt(i);
        if (c == "/") {
          break;
        }
        else if (/[0-9]/.test(c)) {
          topNums.push(c);
        }
        else {
          throw new Vex.RERR("BadTimeSignature",
              "Invalid time spec: " + timeSpec);
        }
      }

      if (i === 0) {
        throw new Vex.RERR("BadTimeSignature",
              "Invalid time spec: " + timeSpec);
      }

      // skip the "/"
      ++i;

      if (i == timeSpec.length) {
        throw new Vex.RERR("BadTimeSignature",
              "Invalid time spec: " + timeSpec);
      }


      var botNums = [];
      for (; i < timeSpec.length; ++i) {
        c = timeSpec.charAt(i);
        if (/[0-9]/.test(c)) {
          botNums.push(c);
        }
        else {
          throw new Vex.RERR("BadTimeSignature",
              "Invalid time spec: " + timeSpec);
        }
      }


      return {num: true, glyph: this.makeTimeSignatureGlyph(topNums, botNums)};
    },

    makeTimeSignatureGlyph: function(topNums, botNums) {
      var glyph = new Vex.Flow.Glyph("timeSig0");
      glyph["topGlyphs"] = [];
      glyph["botGlyphs"] = [];

      var topWidth = 0;
      var i, num;
      var glyph_name
      for (i = 0; i < topNums.length; ++i) {
        num = topNums[i];

        glyph_name = "timeSig" + num;
        var topGlyph = new Vex.Flow.Glyph(glyph_name);

        glyph.topGlyphs.push(topGlyph);
        topWidth += topGlyph.getMetrics().width;
      }

      var botWidth = 0;
      for (i = 0; i < botNums.length; ++i) {
        num = botNums[i];
        glyph_name = "timeSig" + num;

        var botGlyph = new Vex.Flow.Glyph(glyph_name);

        glyph.botGlyphs.push(botGlyph);
        botWidth += botGlyph.getMetrics().width;
      }

      var width = (topWidth > botWidth ? topWidth : botWidth);
      var xMin = glyph.getMetrics().x_min;

      glyph.getMetrics = function() {
        return {
          x_min: xMin,
          x_max: xMin + width,
          width: width
        };
      };

      var topStartX = (width - topWidth) / 2.0;
      var botStartX = (width - botWidth) / 2.0;

      var that = this;
      glyph.renderToStave = function(x) {
        var start_x = x + topStartX;
        var i, g;
        for (i = 0; i < this.topGlyphs.length; ++i) {
          g = this.topGlyphs[i];
          g.render(this.context, start_x, this.stave.getYForLine(that.topLine) + (Vex.Flow.Font.Metrics[g.glyph_name].y_shift || 0));
          start_x += g.getMetrics().width;
        }

        start_x = x + botStartX;
        for (i = 0; i < this.botGlyphs.length; ++i) {
          g = this.botGlyphs[i];
          that.placeGlyphOnLine(g, this.stave, g.line);
          g.render(this.context, start_x, this.stave.getYForLine(that.bottomLine) + (Vex.Flow.Font.Metrics[g.glyph_name].y_shift || 0));
          start_x += g.getMetrics().width;
        }
      };

      return glyph;
    },

    getTimeSig: function() {
      return this.timeSig;
    },

    addModifier: function(stave) {
      if (!this.timeSig.num) {
        this.placeGlyphOnLine(this.timeSig.glyph, stave, this.timeSig.line);
      }
      stave.addGlyph(this.timeSig.glyph);
    },

    addEndModifier: function(stave) {
      if (!this.timeSig.num) {
        this.placeGlyphOnLine(this.timeSig.glyph, stave, this.timeSig.line);
      }
      stave.addEndGlyph(this.timeSig.glyph);
    }
  });

  return TimeSignature;
}());
