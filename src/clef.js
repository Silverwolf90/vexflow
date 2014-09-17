// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna Cheppudira 2013.
// Co-author: Benjamin W. Bohl
//
// ## Description
//
// This file implements various types of clefs that can be rendered on a stave.
//
// See `tests/clef_tests.js` for usage examples.

Vex.Flow.Clef = (function() {
  function Clef(clef, size, annotation) {
    if (arguments.length > 0) this.init(clef, size, annotation);
  }

  // To enable logging for this class, set `Vex.Flow.Clef.DEBUG` to `true`.
  function L() { if (Vex.Flow.Clef.DEBUG) Vex.L("Vex.Flow.Clef", arguments); }

  // Every clef name is associated with a glyph glyph_name from the font file
  // and a default stave line number.
  Clef.types = {
    "treble": {
      glyph_name: "gClef",
      line: 3
    },
    "bass": {
      glyph_name: "fClef",
      line: 1
    },
    "alto": {
      glyph_name: "cClef",
      line: 2
    },
    "tenor": {
      glyph_name: "cClef",
      line: 1
    },
    "percussion": {
      glyph_name: "unpitchedPercussionClef1",
      line: 2
    },
    "soprano": {
      glyph_name: "cClef",
      line: 4
    },
    "mezzo-soprano": {
      glyph_name: "cClef",
      line: 3
    },
    "baritone-c": {
      glyph_name: "cClef",
      line: 0
    },
    "baritone-f": {
      glyph_name: "fClef",
      line: 2
    },
    "subbass": {
      glyph_name: "fClef",
      line: 0
    },
    "french": {
      glyph_name: "gClef",
      line: 4
    },
  };
  
  // Annotations attach to clefs -- such as "8" for octave up or down.
  Clef.annotations = {
    "8va": {
      glyph_name: "clef8"
    },
    "8vb": {
      glyph_name: "clef8"
    },
  };

  // ## Prototype Methods
  Vex.Inherit(Clef, Vex.Flow.StaveModifier, {
    // Create a new clef. The parameter `clef` must be a key from
    // `Clef.types`.
    init: function(clef, size, annotation) {
      var superclass = Vex.Flow.Clef.superclass;
      superclass.init.call(this);
      
      this.clef = Vex.Flow.Clef.types[clef];
      if (size === undefined) {
        this.size = "default";
      } else {
        this.size = size;
      }

      
      // If an annotation, such as 8va, is specified, add it to the Clef object.
      if (annotation !== undefined) {
        this.annotation = annotation;
        var anno_dict = Vex.Flow.Clef.annotations[annotation];
        
        var metrics = this.getAnnotationMetrics();

        this.annotation = {
          glyph_name: anno_dict.glyph_name,
          line: metrics.line,
          x_shift: metrics.x_shift
        };
      }
      L("Creating clef:", clef);
    },

    getAnnotationMetrics: function(){
      var annotationGlyphName = Clef.annotations[this.annotation].glyph_name;
      var metrics = Vex.Flow.Font.Metrics[annotationGlyphName];
      var pointType = this.isSmall() ? "small_point" : "default_point";
      
      var metricsForClef =  metrics[this.annotation][this.clef.glyph_name][this.getSize()];

      return metricsForClef;
    },

    isSmall: function(){
      return this.size === "small";
    },

    getSize: function(){
      return this.size;
    },

    getGlyphName: function(){
      // No change glyph for percussion in SMuFL
      if (this.clef.glyph_name === "unpitchedPercussionClef1"){
        return this.clef.glyph_name;
      }
      // If the size is small, we must convert the generic glyph name to *ClefChange (ie: gClefChange)
      return this.isSmall() ? this.clef.glyph_name + "Change" : 
          this.clef.glyph_name;
    },

    // Add this clef to the start of the given `stave`.
    addModifier: function(stave) {
      var glyph_name = this.getGlyphName();

      var glyph = new Vex.Flow.Glyph(glyph_name);
      this.placeGlyphOnLine(glyph, stave, this.clef.line);
      if (this.annotation !== undefined) {
        var attachment = new Vex.Flow.Glyph(this.annotation.glyph_name);
        attachment.metrics.x_max = 0;
        attachment.setXShift(this.annotation.x_shift);
        this.placeGlyphOnLine(attachment, stave, this.annotation.line);
        stave.addGlyph(attachment);
      }
      stave.addGlyph(glyph);
    },

    // Add this clef to the end of the given `stave`.
    addEndModifier: function(stave) {
      var glyph_name = this.getGlyphName();

      var glyph = new Vex.Flow.Glyph(glyph_name);
      this.placeGlyphOnLine(glyph, stave, this.clef.line);
      stave.addEndGlyph(glyph);
      if (this.annotation !== undefined) {
        var attachment = new Vex.Flow.Glyph(this.annotation.glyph_name);
        attachment.metrics.x_max = 0;
        attachment.setXShift(this.annotation.x_shift);
        this.placeGlyphOnLine(attachment, stave, this.annotation.line);
        stave.addEndGlyph(attachment);
      }
    }
  });

  return Clef;
}());
