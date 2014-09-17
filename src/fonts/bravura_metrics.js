//Using SMuFL naming
Vex.Flow.Font.Bravura.Metrics = {
  // STAFF BRACKETS AND DIVIDERS
  "bracketTop": {},
  "bracketBottom": {},

  // CLEFS
  "gClef": {
    point: 40
  },
  "fClef": {
    point: 40
  },
  "cClef": {
    point: 40
  },
  "gClefChange": {
    point: 40
  },
  "fClefChange": {
    point: 40
  },
  "cClefChange": {
    point: 40
  },
  "unpitchedPercussionClef1": {
    point: 40
  },
  "6stringTabClef": {},
  "clef8": {
    default_point: 40,
    small_point: 36,
    "8va": {
      "gClef": {
        "default" : {
          line: -1.3,
          x_shift: 21
        },
        "small": {
          line: 0.1,
          x_shift: 13
        }
      }
    },
    "8vb": {
      "gClef": {
        "default": {
          line: 6.5,
          x_shift: 15
        },
        "small": {
          line: 5.6,
          x_shift: 10,
        }
      },
      "fClef": {
        "default": {
          line: 4,
          x_shift: 15
        },
        "small": {
          line: 3.3,
          x_shift: 10
        }
      }
    }
  },

  // TIME SIGNATURES
  "timeSig0": {
    y_shift: -9,
    size: 35
  },
  "timeSig1": {
    y_shift: -9,
    size: 35
  },
  "timeSig2": {
    y_shift: -9,
    size: 35
  },
  "timeSig3": {
    y_shift: -9,
    size: 35
  },
  "timeSig4": {
    y_shift: -9,
    size: 35
  },
  "timeSig5": {
    y_shift: -9,
    size: 35
  },
  "timeSig6": {
    y_shift: -9,
    size: 35
  },
  "timeSig7": {
    y_shift: -9,
    size: 35
  },
  "timeSig8": {
    y_shift: -9,
    size: 35
  },
  "timeSig9": {
    y_shift: -9,
    size: 35
  },
  "timeSigCommon": {
    size: 35
  },
  "timeSigCutCommon": {
    size: 35
  },

  // Tuplets
  "tuplet0": {
    size: 35
  },
  "tuplet1": {
    size: 35
  },
  "tuplet2": {
    size: 35
  },
  "tuplet3": {
    size: 35
  },
  "tuplet4": {
    size: 35
  },
  "tuplet5": {
    size: 35
  },
  "tuplet6": {
    size: 35
  },
  "tuplet7": {
    size: 35
  },
  "tuplet8": {
    size: 35
  },
  "tuplet9": {
    size: 35
  },

  //NOTEHEADS
  //Normal
  "noteheadDoubleWhole": {
    width: 25,
    stem_offset: 0,
    size: 35
  },
  "noteheadWhole": {
    width: 16,
    stem_offset: 0,
    size: 35
  },
  "noteheadHalf": {
    width: 11,
    stem_offset: 0,
    size: 35
  },
  "noteheadBlack": {
    width: 11,
    stem_offset: 0,
    size: 35
  },

  // Diamond
  "noteheadDiamondDoubleWhole": {
    width: 22,
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondWhole": {
    width: 16,
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondHalf": {
    width: 10,
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondBlack": {
    width: 10,
    stem_offset: 2,
    size: 35
  },

  //TRIANGLE
  "noteheadTriangleUpWhole":{
    stem_offset: 0,
    size: 35
  },
  "noteheadTriangleUpHalf":{
    stem_offset: 0,
    size: 35
  },
  "noteheadTriangleUpBlack": {
    stem_offset: 0,
    size: 35
  },

  // X
  "noteheadXDoubleWhole": {
    width: 22,
    stem_offset: 0,
    size: 35
  },
  "noteheadXWhole": {
    stem_offset: -3,
    size: 35,
    width: 16
  },
  "noteheadXHalf": {
    stem_offset: -3,
    size: 35,
    width: 10
  },
  "noteheadXBlack": {
    width: 10,
    stem_offset: -3,
    size: 35
  },
  "noteheadXOrnate": {
    width: 10,
    stem_offset: 0,
    size: 35
  },
  "noteheadCircleX": {},
  
  // Slash
  "noteheadSlashDoubleWhole": { // Doesn't exist in SMuFL
    width: 15,
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashWhiteWhole": {
    width: 15,
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashWhiteHalf": {
    width: 15,
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashHorizontalEnds": {
    width: 15,
    stem_offset: 0,
    size: 35
  },

  // RESTS
  "restDoubleWhole": {
    width: 24,
    size: 35
  },
  "restWhole" : {
    width: 12,
    size: 35
  },
  "restHalf" : {
    width: 12,
    size: 35
  },
  "restQuarter" : {
    width: 8,
    size: 35
  },
  "rest8th": {
    width: 8,
    size: 35
  },
  "rest16th": {
    width: 13,
    size: 35
  },
  "rest32nd": {
    width: 16,
    size: 35
  },
  "rest64th": {
    width: 18,
    size: 35
  },
  "rest128th": {
    width: 20,
    size: 35
  },

  // FLAGS
  "flag8thUp": {
    stem_up_extension: 0,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    up_y_shift: -3,
    size: 35
  },
  "flag8thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_y_shift: 3,
    size: 35
  },
  "flag16thUp": {
    stem_up_extension: 2,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    up_y_shift: -3,
    size: 35
  },
  "flag16thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_y_shift: 4,
    size: 35
  },
  "flag32ndUp": {
    stem_up_extension: 3,
    gracenote_stem_up_extension: 2,
    tabnote_stem_up_extension: 9,
    up_y_shift: 3,
    size: 35
  },
  "flag32ndDown": {
    stem_down_extension: 5,
    gracenote_stem_down_extension: 2,
    tabnote_stem_down_extension: 5,
    down_y_shift: -5,
    size: 35
  },
  "flag64thUp": {
    stem_up_extension: 10,
    gracenote_stem_up_extension: 4,
    tabnote_stem_up_extension: 10,
    up_y_shift: 10,
    size: 35
  },
  "flag64thDown": {
    stem_down_extension: 10,
    gracenote_stem_down_extension: 4,
    tabnote_stem_down_extension: 9,
    down_y_shift: -10,
    size: 35
  },
  "flag128thUp": {
    stem_up_extension: 16,
    gracenote_stem_up_extension: 6,
    tabnote_stem_up_extension: 22,
    up_y_shift: 17,
    size: 35
  },
  "flag128thDown": {
    stem_down_extension: 15,
    gracenote_stem_down_extension: 6,
    tabnote_stem_down_extension: 18,
    down_y_shift: -16,
    down_x_shift: 0,
    size: 35
  },

  // ORNAMENTS
  "ornamentMordent": {
    shift_up: 0,
    shift_down: 5,
    size: 35
  },
  "ornamentMordentInverted": {
    shift_up: 0,
    shift_down: 5,
    size: 35
  },
  "ornamentTurn": {
    shift_up: 0,
    shift_down: 5,
    size: 40
  },
  "ornamentTurnSlash": {
    shift_up: 0,
    shift_down: 6,
    size: 40
  },
  "ornamentTrill": {
    shift_up: 5,
    shift_down: 15,
    size: 35
  },
  "ornamentPrecompSlideTrillDAnglebert": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompMordentUpperPrefix": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompTrillSuffixDandrieu": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompTrillLowerSuffix": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompPortDeVoixMordent": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompInvertedMordentUpperPrefix": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentPrecompAppoggTrill": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "ornamentTremblement": {
    shift_up: -3,
    shift_down: 6,
    size: 35
  },
  "graceNoteSlashStemUp":{},

  // ACCIDENTALS
  "accidentalSharp": {
    width: 10,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalDoubleSharp": {
    width: 13,
    gracenote_width: 6,
    x_shift: -1,
    shift_down: 0,
    size: 35
  },
  "accidentalFlat": {
    width: 8,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalDoubleFlat": {
    width: 14,
    gracenote_width: 8,
    x_shift: -3,
    shift_down: 0,
    size: 35
  },
  "accidentalNatural": {
    width: 8,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalParensLeft": {
    width: 5,
    x_shift: 2,
    shift_down: 0,
    size: 35
  },
  "accidentalParensRight": {
    width: 5,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalThreeQuarterTonesFlatZimmermann": {
    width: 16,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalQuarterToneFlatStein": {
    width: 10,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalThreeQuarterTonesSharpStein": {
    width: 13,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },
  "accidentalQuarterToneSharpStein": {
    width: 8,
    x_shift: 0,
    shift_down: 0,
    size: 35
  },

  // NO EQUIVALENT IN SMUFL?
  "bbs": { //double flat slashed
    width: 13,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },

  // ARTICULATIONS
  "articStaccatoAbove": {   // Staccato
    shift_up: -5,
    shift_down: 2,
    size: 35
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    shift_up: 2,
    shift_down: 5,
    size: 30
  },
  "articAccentAbove": {   // Accent
    shift_up: 0,
    shift_down: 4,
    size: 30
  },
  "articTenutoAbove": {   // Tenuto
    shift_up: -3,
    shift_down: 1,
    size: 35
  },
  "articMarcatoAbove": {   // Marcato
    shift_up: 6,
    shift_down: 6,
    size: 35
  },
  "articMarcatoBelow": {   // Marcato
    shift_up: 5,
    shift_down: -2,
    size: 35
  },
  "stringsHarmonic": {   // Natural harmonic or open note
    shift_up: -4,
    shift_down: 4,
    size: 35
  },

  // STRING TECHNIQUES
  "stringsUpBow": {   // Bow up - up stroke
    shift_up: 8,
    shift_down: 14,
    size: 35
  },
  "stringsDownBow": {   // Bow down - down stroke
    shift_up: 10,
    shift_down: 12,
    size: 35
  },

  // PLUCKED TECHNIQUES
  "pluckedLeftHandPizzicato": {   // Left hand pizzicato
    shift_up: 5,
    shift_down: 10,
    size: 35
  },
  "pluckedSnapPizzicatoAbove": {   // Snap pizzicato
    shift_up: 4,
    shift_down: 10,
    size: 35
  },


  // HOLDS AND PAUSES
  "caesura": {
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "caesuraCurved": {
    point:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "breathMarkComma": {
    point:40,
    x_shift:0,
    y_shift:0,
    width: 10,
    x_shift: 8,
    shift_up: -4,
    shift_down: 4,
    size: 35
  },
  "breathMarkTick": {
    point:50,
    x_shift:0,
    y_shift:0,
    width: 10
  },
  "fermataAbove": {   // Fermata above staff
    shift_up: 8,
    shift_down: 10,
    size: 35
  },
  "fermataBelow": {   // Fermata below staff
    shift_up: 0,
    shift_down: 0,
    size: 35
  },

  // PIANO TECHNIQUES
  "keyboardPedalPed": {
    x_shift:-10,
    y_shift:0,
    size: 35
  },
  "keyboardPedalUp": {
    x_shift:-2,
    y_shift:3,
    size: 35
  },

  // DYNAMICS
  "dynamicForte": {
    width: 12,
    size: 35
  },
  "dynamicPiano": {
    width: 14,
    size: 35
  },
  "dynamicMezzo": {
    width: 17,
    size: 35
  },
  "dynamicSforzando": {
    width: 10,
    size: 35
  },
  "dynamicZ": {
    width: 12,
    size: 35
  },
  "dynamicRinforzando": {
    width: 12,
    size: 35
  },

  // REPEATS
  "coda": {
    size: 23
  },
  "segno":{
    size: 30
  },

  //MULTI-LINE SEGMENTS
  "wiggleArpeggiatoDown":{
    size: 35
  },
  "wiggleArpeggiatoDownArrow":{
    size: 35
  },
  "wiggleArpeggiatoUpArrow":{
    size: 35
  },

  //ARROWS AND ARROWHEADS
  "arrowheadBlackUp": {
    size: 35
  },
  "arrowheadBlackDown": {
    size: 35
  }
};