/**
 * Create a new tuplet from the specified notes. The notes must
 * be part of the same line, and have the same duration (in ticks).
 *
 * @constructor
 * @param {Array.<Vex.Flow.StaveNote>} A set of notes.
 */
Vex.Flow.Tuplet = (function() {
  function Tuplet(notes, options) {
    if (arguments.length > 0) this.init(notes, options);
  }

  Tuplet.LOCATION_TOP = 1;
  Tuplet.LOCATION_BOTTOM = -1;

  Tuplet.prototype = {
    init: function(notes, options) {
      if (!notes || notes == []) {
        throw new Vex.RuntimeError("BadArguments", "No notes provided for tuplet.");
      }

      if (notes.length == 1) {
        throw new Vex.RuntimeError("BadArguments", "Too few notes for tuplet.");
      }

      this.options = Vex.Merge({}, options);
      this.notes = notes;
      this.num_notes = 'num_notes' in this.options ?
        this.options.num_notes : notes.length;
      this.beats_occupied = 'beats_occupied' in this.options ?
        this.options.beats_occupied : 2;
      this.bracketed = (notes[0].beam == null);
      this.ratioed = false;
      this.point = Vex.Flow.FontLoader.getFontSize('tuplet0');
      this.y_pos = 20;
      this.x_pos = 100;
      this.width = 200;
      this.location = Tuplet.LOCATION_TOP;

      Vex.Flow.Formatter.AlignRestsToNotes(notes, true, true);
      this.resolveGlyphs();
      this.attach();
    },

    attach: function () {
      for (var i = 0; i < this.notes.length; i++) {
        var note = this.notes[i];
        note.setTuplet(this);
      }
    },

    detach: function () {
      for (var i = 0; i < this.notes.length; i++) {
        var note = this.notes[i];
        note.setTuplet(null);
      }
    },

    setContext: function(context) {
      this.context = context;
      return this;
    },

    /**
     * Set whether or not the bracket is drawn.
     */
    setBracketed: function(bracketed) {
      this.bracketed = bracketed ? true : false;
      return this;
    },

    /**
     * Set whether or not the ratio is shown.
     */
    setRatioed: function(ratioed) {
      this.ratioed = ratioed ? true : false;
      return this;
    },

    /**
     * Set the tuplet to be displayed either on the top or bottom of the stave
     */
    setTupletLocation: function(location) {
      if (!location) location = Tuplet.LOCATION_TOP;
      else if (location != Tuplet.LOCATION_TOP &&
          location != Tuplet.LOCATION_BOTTOM) {
        throw new Vex.RERR("BadArgument", "Invalid tuplet location: " + location);
      }

      this.location = location;
      return this;
    },

    getNotes: function() {
      return this.notes;
    },

    getNoteCount: function() {
      return this.num_notes;
    },

    getBeatsOccupied: function() {
      return this.beats_occupied;
    },

    setBeatsOccupied: function(beats) {
      this.detach();
      this.beats_occupied = beats;
      this.resolveGlyphs();
      this.attach();
    },

    resolveGlyphs: function() {
      this.num_glyphs = [];
      var n = this.num_notes;
      while (n >= 1) {
        this.num_glyphs.push(new Vex.Flow.Glyph("tuplet" + (n % 10)));
        n = parseInt(n / 10, 10);
      }

      this.denom_glyphs = [];
      n = this.beats_occupied;
      while (n >= 1) {
        this.denom_glyphs.push(new Vex.Flow.Glyph("tuplet" + (n % 10)));
        n = parseInt(n / 10, 10);
      }

      var metrics = Vex.Flow.Font.Metrics["tupletColon"];
      if (!metrics.glyph_missing) {
        this.colon_glyph = new Vex.Flow.Glyph('tupletColon');
      }
    },

    draw: function() {
      if (!this.context) throw new Vex.RERR("NoCanvasContext",
          "Can't draw without a canvas context.");

      // determine x value of left bound of tuplet
      var first_note = this.notes[0];
      var last_note = this.notes[this.notes.length - 1];

      if (!this.bracketed) {
        this.x_pos = first_note.getStemX();
        this.width = last_note.getStemX() - this.x_pos;
      }
      else {
        this.x_pos = first_note.getTieLeftX() - 5;
        this.width = last_note.getTieRightX() - this.x_pos + 5;
      }

      // determine y value for tuplet
      var i;
      if (this.location == Tuplet.LOCATION_TOP) {
        this.y_pos = first_note.getStave().getYForLine(0) - 25;

        for (i=0; i<this.notes.length; ++i) {
          var top_y = this.notes[i].getStemExtents().topY - 10;
          if (top_y < this.y_pos)
            this.y_pos = top_y;
        }
      }
      else {
        this.y_pos = first_note.getStave().getYForLine(4) + 15;

        for (i=0; i<this.notes.length; ++i) {
          var bottom_y = this.notes[i].getStemExtents().topY + 10;
          if (bottom_y > this.y_pos)
            this.y_pos = bottom_y;
        }
      }

      // calculate total width of tuplet notation
      var width = 0;
      var glyph;
      for (glyph in this.num_glyphs) {
        width += this.num_glyphs[glyph].getMetrics().width;
      }
      if (this.ratioed) {
        for (glyph in this.denom_glyphs) {
          width += this.denom_glyphs[glyph].getMetrics().width;
        }
        width += this.point * 0.32;
      }

      var notation_center_x = this.x_pos + (this.width/2);
      var notation_start_x = notation_center_x - (width/2);

      // draw bracket if the tuplet is not beamed
      if (this.bracketed) {
        var line_width = this.width/2 - width/2 - 5;

        // only draw the bracket if it has positive length
        if (line_width > 0) {
          this.context.fillRect(this.x_pos, this.y_pos,line_width, 1);
          this.context.fillRect(this.x_pos + this.width / 2 + width / 2 + 5,
                                this.y_pos,line_width, 1);
          this.context.fillRect(this.x_pos,
              this.y_pos + (this.location == Tuplet.LOCATION_BOTTOM),
              1, this.location * 10);
          this.context.fillRect(this.x_pos + this.width,
              this.y_pos + (this.location == Tuplet.LOCATION_BOTTOM),
              1, this.location * 10);
        }
      }

      // draw numerator glyphs
      var x_offset = 0;
      var size = this.num_glyphs.length;
      for (glyph in this.num_glyphs) {
        var numerator_glyph =this.num_glyphs[size-glyph-1];
        numerator_glyph.render(
            this.context, notation_start_x + x_offset,
            this.y_pos + 8);
        x_offset += this.num_glyphs[size-glyph-1].getWidth();
      }

      // display colon and denominator if the ratio is to be shown
      if (this.ratioed) {
        if (!this.colon_glyph) {
          drawColon(this.context, this.point, notation_start_x, this.y_pos, x_offset);
        } else {
          this.colon_glyph.render(this.context, notation_start_x + x_offset + 3, this.y_pos + 8);
        }

        x_offset += this.point*0.32;
        size = this.denom_glyphs.length;
        for (glyph in this.denom_glyphs) {
          this.denom_glyphs[size-glyph-1].render(
              this.context, notation_start_x + x_offset,
              this.y_pos + 8);
          x_offset += this.denom_glyphs[size-glyph-1].getWidth();
        }
      }
    }
  };

  function drawColon(context, point, x_pos, y_pos, x_offset) {
    var colon_x = x_pos + x_offset + point*0.16;
    var colon_radius = point * 0.06;
    context.beginPath();
    context.arc(colon_x, y_pos - point*0.08,
                     colon_radius, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(colon_x, y_pos + point*0.12,
                     colon_radius, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }

  return Tuplet;
}());
