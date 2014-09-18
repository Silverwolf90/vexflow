// VexFlow - Music Engraving for HTML5
// Copyright Mohit Muthanna 2010
// Author Radosaw Eichler 2012
// Implements tempo marker.

/**
 * @constructor
 * @param {Object} tempo Tempo parameters: { name, duration, dots, bpm }
 */
Vex.Flow.StaveTempo = (function() {
  function StaveTempo(tempo, x, shift_y) {
    if (arguments.length > 0) this.init(tempo, x, shift_y);
  }

  Vex.Inherit(StaveTempo, Vex.Flow.StaveModifier, {
    init: function(tempo, x, shift_y) {
      StaveTempo.superclass.init.call(this);

      this.tempo = tempo;
      this.position = Vex.Flow.Modifier.Position.ABOVE;
      this.x = x;
      this.shift_x = 10;
      this.shift_y = shift_y;
      this.font = {
        family: "times",
        size: 14,
        weight: "bold"
      };
      this.render_options = {
        glyph_scale: 0.8 
      };
    },

    getCategory: function() { return "stavetempo"; },
    setTempo: function(tempo) { this.tempo = tempo; return this; },
    setShiftX: function(x) { this.shift_x = x; return this; },
    setShiftY: function(y) { this.shift_y = y; return this; },

    draw: function(stave, shift_x) {
      if (!stave.context) throw new Vex.RERR("NoContext",
        "Can't draw stave tempo without a context.");

      var options = this.render_options;
      var scale = options.glyph_scale;
      var name = this.tempo.name;
      var duration = this.tempo.duration;
      var dots = this.tempo.dots;
      var bpm = this.tempo.bpm;
      var font = this.font;
      var ctx = stave.context;
      var x = this.x + this.shift_x + shift_x;
      var y = stave.getYForTopText(1) + this.shift_y;

      ctx.save();

      if (name) {
        ctx.setFont(font.family, font.size, font.weight);
        ctx.fillText(name, x, y);
        x += ctx.measureText(name).width;
      }

      if (duration && bpm) {
        ctx.setFont(font.family, font.size, 'normal');

        if (name) {
          x += ctx.measureText(" ").width;
          ctx.fillText("(", x, y);
          x += ctx.measureText("(").width;
        }

        var duration_data = Vex.Flow.durationToGlyph(duration);

        x += 3 * scale;

        var glyph = new Vex.Flow.Glyph(duration_data.glyph_name, options.glyph_scale);
        glyph.render(ctx, x, y);

        x += glyph.getWidth();

        // Draw stem and flags
        if (duration_data.stem) {
          var stem_height = 30;

          if (duration_data.beam_count) stem_height += 3 * (duration_data.beam_count - 1);

          stem_height *= scale;

          var y_top = y - stem_height;
          var stem_width = Vex.Flow.Stem.WIDTH;
          var stem_x = x - stem_width;
          ctx.fillRect(stem_x, y_top, stem_width, stem_height);

          if (duration_data.flag) {
            Vex.Flow.renderGlyph(ctx, stem_x, y_top, options.glyph_scale,
                                 duration_data.glyph_name_flag_up);

            if (!dots) x += 6 * scale;
          }
        }

        // Draw dot
        for (var i = 0; i < dots; i++) {
          x += 6 * scale;
          ctx.beginPath();
          ctx.arc(x, y + 2 * scale, 2 * scale, 0, Math.PI * 2, false);
          ctx.fill();
        }

        ctx.fillText(" = " + bpm + (name ? ")" : ""), x + 3 * scale, y);
      }

      ctx.restore();
      return this;
    }
  });

  return StaveTempo;
}());
