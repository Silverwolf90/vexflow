Vex.Flow.FontLoader = {
  setFont: function(font){
    Vex.Flow.Font = font;

    if (Vex.Flow.Font.Map) {
      this.buildReverseMap();
    }
  },
  buildReverseMap: function(){
    Vex.Flow.Font.reverseMap = Object.keys(Vex.Flow.Font.Map).reduce(function(reverseMap, glyphName){
      reverseMap[Vex.Flow.Font.Map[glyphName]] = glyphName;
      return reverseMap;
    }, {});
  },
  getGlyphData: function(glyph_name){
    // If the Font has an alternate naming format than SMuFL, then it should have a 
    // map object that maps SMuFL names to the alternate name
    if (Vex.Flow.Font.Map && Vex.Flow.Font.Map[glyph_name]){
      glyph_name = Vex.Flow.Font.Map[glyph_name];
    }

    return Vex.Flow.Font.glyphs[glyph_name];
  },
  getFontSize: function(glyph_name){
    var metrics = Vex.Flow.Font.Metrics[glyph_name];
    if (metrics && metrics.size){
      return metrics.size;
    }
    return 40;
  },
  getHorizontalOriginPosition: function(glyph_name){
    var metrics = Vex.Flow.Font.Metrics[glyph_name];
    return metrics ? metrics.origin : "left";
  },
  loadGlyphMetrics: function(glyph_name, cache) {
    var glyph = Vex.Flow.FontLoader.getGlyphData(glyph_name);

    if (!glyph) throw new Vex.RuntimeError("BadGlyph", "Glyph " + glyph_name +
        " does not exist in font.");

    var x_min = typeof glyph.x_min === 'number' ? glyph.x_min : glyph.xMin;
    var x_max = typeof glyph.x_max === 'number' ? glyph.x_max : glyph.xMax;
    var ha = glyph.ha || (glyph.yMax - glyph.yMin);

    var outline;

    if (glyph.o) {
      if (cache) {
        if (glyph.cached_outline) {
          outline = glyph.cached_outline;
        } else {
          outline = glyph.o.split(' ');
          glyph.cached_outline = outline;
        }
      } else {
        if (glyph.cached_outline) delete glyph.cached_outline;
        outline = glyph.o.split(' ');
      }

      return {
        x_min: x_min,
        x_max: x_max,
        advanceWidth: glyph.advanceWidth || null,
        ha: ha,
        outline: outline
      };
    } else {
      throw new Vex.RuntimeError("BadGlyph", "Glyph " + glyph_name +
          " has no outline or path defined.");
    }
  }
};

