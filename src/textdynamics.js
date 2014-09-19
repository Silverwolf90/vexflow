// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
//
// ## Description
//
// This file implements the `TextDynamics` which renders traditional
// text dynamics markings, **ie: p, f, sfz, rfz, ppp**
//
// You can render any dynamics string that contains a combination of
// the following letters:  P, M, F, Z, R, S
Vex.Flow.TextDynamics = (function(){
  function TextDynamics(text_struct) {
    if (arguments.length > 0) this.init(text_struct);
  }

  // To enable logging for this class. Set `Vex.Flow.TextDynamics.DEBUG` to `true`.
  function L() { if (TextDynamics.DEBUG) Vex.L("Vex.Flow.TextDynamics", arguments); }

  // The glyph data for each dynamics letter
  TextDynamics.GLYPHS = {
    "f": "dynamicForte",
    "p": "dynamicPiano",
    "m": "dynamicMezzo",
    "s": "dynamicSforzando",
    "z": "dynamicZ",
    "r": "dynamicRinforzando"
  };

  // ## Prototype Methods
  //
  // A `TextDynamics` object inherits from `Note` so that it can be formatted
  // within a `Voice`.
  Vex.Inherit(TextDynamics, Vex.Flow.Note, {
    // Create the dynamics marking. `text_struct` is an object
    // that contains a `duration` property and a `sequence` of
    // letters that represents the letters to render
    init: function(text_struct) {
      TextDynamics.superclass.init.call(this, text_struct);

      this.sequence = text_struct.text.toLowerCase();
      this.line = text_struct.line || 0;
      this.glyphs = [];

      Vex.Merge(this.render_options, {});

      L("New Dynamics Text: ", this.sequence);
    },

    // Set the Stave line on which the note should be placed
    setLine: function(line) { this.line = line;  return this; },

    // Preformat the dynamics text
    preFormat: function() {
      var total_width = 0;
      // Iterate through each letter
      this.sequence.split('').forEach(function(letter) {
        // Get the glyph data for the letter
        var smuflName = TextDynamics.GLYPHS[letter];
        var glyph_data = Vex.Flow.Font.Metrics[smuflName];
        if (!glyph_data) throw new Vex.RERR("Invalid dynamics character: " + letter);

        var glyph = new Vex.Flow.Glyph(smuflName);

        // Add the glyph
        this.glyphs.push(glyph);
        total_width += glyph.getWidth() * (glyph_data.kerning || 1.0);
      }, this);

      // Store the width of the text
      this.setWidth(total_width);
      this.preFormatted = true;
      return this;
    },

    // Draw the dynamics text on the rendering context
    draw: function() {
      var x = this.getAbsoluteX();
      var y = this.stave.getYForLine(this.line + (-3));

      L("Rendering Dynamics: ", this.sequence);

      var letter_x = x;
      this.glyphs.forEach(function(glyph, index) {
        var current_letter = this.sequence[index];
        glyph.render(this.context, letter_x, y);
        var smuflName = TextDynamics.GLYPHS[current_letter];
        var glyph_data = Vex.Flow.Font.Metrics[smuflName];

        letter_x += glyph.getWidth() * (glyph_data.kerning || 1.0);
      }, this);
    }
  });

  return TextDynamics;
})();