//Using SMuFL naming
//
Vex.Flow.Font.Gonville.Metrics = {
  // STAFF BRACKETS AND DIVIDERS
  "bracketTop": {
    y_shift: -3
  },
  "bracketBottom": {
    y_shift: 3
  },

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
    point: 36
  },
  "fClefChange": {
    point: 36
  },
  "cClefChange": {
    point: 36
  },
  "unpitchedPercussionClef1": {
    point: 40
  },
  "6stringTabClef": {},
  "clef8": {
    default_point: 20,
    small_point: 18,
    "8va": {
      "gClef": {
        "default" : {
          line: -1.2,
          x_shift: 11
        },
        "small": {
          line: -0.4,
          x_shift: 8
        }
      }
    },
    "8vb": {
      "gClef": {
        "default": {
          line: 6.3,
          x_shift: 10
        },
        "small": {
          line: 5.8,
          x_shift: 6,
        }
      },
      "fClef": {
        "default": {
          line: 4,
          x_shift: 1
        },
        "small": {
          line: 3.5,
          x_shift: 0.5
        }
      }
    }
  },

  // TIME SIGNATURES
  "timeSig0": {
    size: 40
  },
  "timeSig1": {
    size: 40
  },
  "timeSig2": {
    size: 40
  },
  "timeSig3": {
    size: 40
  },
  "timeSig4": {
    size: 40
  },
  "timeSig5": {
    size: 40
  },
  "timeSig6": {
    size: 40
  },
  "timeSig7": {
    size: 40
  },
  "timeSig8": {
    size: 40
  },
  "timeSig9": {
    size: 40
  },
  "timeSigCommon": {
    size: 40
  },
  "timeSigCutCommon": {
    size: 40
  },
  
  // TUPLETS
  "tuplet0": {
    size: 28
  },
  "tuplet1": {
    size: 28
  },
  "tuplet2": {
    size: 28
  },
  "tuplet3": {
    size: 28
  },
  "tuplet4": {
    size: 28
  },
  "tuplet5": {
    size: 28
  },
  "tuplet6": {
    size: 28
  },
  "tuplet7": {
    size: 28
  },
  "tuplet8": {
    size: 28
  },
  "tuplet9": {
    size: 28
  },

  //NOTEHEADS
  //Normal
  "noteheadDoubleWhole": {
    width: 22,
    stem_offset: 0,
    size: 35
  },
  "noteheadWhole": {
    width: 16,
    stem_offset: 0,
    size: 35
  },
  "noteheadHalf": {
    width: 10,
    stem_offset: 0,
    size: 35
  },
  "noteheadBlack": {
    width: 10,
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
    stem_offset: 0,
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
    up_x_shift: 1,
    up_y_shift: -2,
    size: 35
  },
  "flag8thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_x_shift: 1,
    down_y_shift: 2,
    size: 35
  },
  "flag16thUp": {
    stem_up_extension: 4,
    gracenote_stem_up_extension: 0,
    tabnote_stem_up_extension: 0,
    up_x_shift: 1,
    up_y_shift: -2,
    size: 35
  },
  "flag16thDown": {
    stem_down_extension: 0,
    gracenote_stem_down_extension: 0,
    tabnote_stem_down_extension: 0,
    down_x_shift: 1,
    down_y_shift: 2,
    size: 35
  },
  "flag32ndUp": {
    stem_up_extension: 13,
    gracenote_stem_up_extension: 2,
    tabnote_stem_up_extension: 9,
    up_x_shift: 1,
    up_y_shift: -2,
    size: 35
  },
  "flag32ndDown": {
    stem_down_extension: 9,
    gracenote_stem_down_extension: 2,
    tabnote_stem_down_extension: 5,
    down_x_shift: 1,
    down_y_shift: 2,
    size: 35
  },
  "flag64thUp": {
    stem_up_extension: 17,
    gracenote_stem_up_extension: 4,
    tabnote_stem_up_extension: 13,
    up_x_shift: 1,
    up_y_shift: -2,
    size: 35
  },
  "flag64thDown": {
    stem_down_extension: 13,
    gracenote_stem_down_extension: 4,
    tabnote_stem_down_extension: 9,
    down_x_shift: 1,
    down_y_shift: 2,
    size: 35
  },
  "flag128thUp": {
    stem_up_extension: 26,
    gracenote_stem_up_extension: 6,
    tabnote_stem_up_extension: 22,
    up_x_shift: 1,
    up_y_shift: -2,
    size: 35
  },
  "flag128thDown": {
    stem_down_extension: 22,
    gracenote_stem_down_extension: 6,
    tabnote_stem_down_extension: 18,
    down_x_shift: 1,
    down_y_shift: 2,
    size: 35
  },

  // ORNAMENTS
  "ornamentMordent": {
    origin: "center",
    shift_up: 0,
    shift_down: 5,
    size: 38
  },
  "ornamentMordentInverted": {
    origin: "center",
    shift_up: 0,
    shift_down: 5,
    size: 38
  },
  "ornamentTurn": {
    origin: "center",
    shift_up: 0,
    shift_down: 5,
    size: 38
  },
  "ornamentTurnSlash": {
    origin: "center",
    shift_up: 0,
    shift_down: 6,
    size: 38
  },
  "ornamentTrill": {
    origin: "center",
    shift_up: 5,
    shift_down: 15,
    size: 38
  },
  "ornamentPrecompSlideTrillDAnglebert": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompMordentUpperPrefix": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompTrillSuffixDandrieu": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompTrillLowerSuffix": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompPortDeVoixMordent": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompInvertedMordentUpperPrefix": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentPrecompAppoggTrill": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "ornamentTremblement": {
    origin: "center",
    shift_up: -3,
    shift_down: 6,
    size: 38
  },
  "graceNoteSlashStemUp":{},

  // ACCIDENTALS
  "accidentalSharp": {
    width: 10,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalDoubleSharp": {
    width: 13,
    gracenote_width: 6,
    x_shift: -1,
    shift_down: 0,
    size: 38
  },
  "accidentalFlat": {
    width: 8,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalDoubleFlat": {
    width: 14,
    gracenote_width: 8,
    x_shift: -3,
    shift_down: 0,
    size: 38
  },
  "accidentalNatural": {
    width: 8,
    gracenote_width: 4.5,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalParensLeft": {   // Left paren for cautionary accidentals
    width: 5,
    x_shift: 2,
    shift_down: 0,
    size: 38
  },
  "accidentalParensRight": {   // Right paren for cautionary accidentals
    width: 5,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalThreeQuarterTonesFlatZimmermann": {
    width: 16,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalQuarterToneFlatStein": {
    width: 10,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalThreeQuarterTonesSharpStein": {
    width: 13,
    x_shift: 0,
    shift_down: 0,
    size: 38
  },
  "accidentalQuarterToneSharpStein": {
    width: 8,
    x_shift: 0,
    shift_down: 0,
    size: 38
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
    origin: "center",
    shift_up: 8,
    shift_down: 0,
    size: 38
  },
  "articStaccatissimoAbove": {   // Staccatissimo
    origin: "center",
    shift_up: 11,
    shift_down: 5,
    size: 38
  },
  "articAccentAbove": {   // Accent
    origin: "right",
    shift_up: 8,
    shift_down: 1,
    size: 38
  },
  "articTenutoAbove": {   // Tenuto
    origin: "center",
    shift_up: 17,
    shift_down: 10,
    size: 38
  },
  "articMarcatoAbove": {   // Marcato
    origin: "center",
    shift_up: -4,
    shift_down: -2,
    size: 38
  },
  "articMarcatoBelow": {   // Marcato
    origin: "center",
    shift_up: -4,
    shift_down: -2,
    size: 38
  },
  "stringsHarmonic": {   // Natural harmonic or open note
    shift_up: -4,
    shift_down: 4,
    size: 38
  },

  // STRING TECHNIQUES
  "stringsUpBow": {   // Bow up - up stroke
    origin: "center",
    shift_up: 8,
    shift_down: 10,
    size: 38
  },
  "stringsDownBow": {   // Bow down - down stroke
    origin: "center",
    shift_up: 10,
    shift_down: 12,
    size: 38
  },

  // PLUCKED TECHNIQUES
  "pluckedLeftHandPizzicato": {   // Left hand pizzicato
    origin: "center",
    shift_up: 12,
    shift_down: 12,
    size: 38
  },
  "pluckedSnapPizzicatoAbove": {   // Snap pizzicato
    origin: "center",
    shift_up: -4,
    shift_down: 6,
    size: 38
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
    shift_down: 4
  },
  "breathMarkTick": {
    point:50,
    x_shift:0,
    y_shift:0,
    width: 10
  },
  "fermataAbove": {   // Fermata above staff
    origin: "center",
    shift_up: 8,
    shift_down: 10,
    size: 38
  },
  "fermataBelow": {   // Fermata below staff
    origin: "center",
    shift_up: 0,
    shift_down: -4,
    size: 38
  },

  // PIANO TECHNIQUES
  "keyboardPedalPed": {
    x_shift:-10,
    y_shift:0,
    size: 40
  },
  "keyboardPedalUp": {
    x_shift:-2,
    y_shift:3,
    size: 40
  },

  // DYNAMICS
  "dynamicForte": {
    width: 12,
    size: 40
  },
  "dynamicPiano": {
    width: 14,
    size: 40
  },
  "dynamicMezzo": {
    width: 17,
    size: 40
  },
  "dynamicSforzando": {
    width: 10,
    size: 40
  },
  "dynamicZ": {
    width: 12,
    size: 40
  },
  "dynamicRinforzando": {
    width: 12,
    size: 40
  },

  // REPEATS
  "coda": {
    size: 40
  },
  "segno":{
    size: 40
  },

  //MULTI-LINE SEGMENTS
  "wiggleArpeggiatoDown":{},
  "wiggleArpeggiatoDownArrow":{},
  "wiggleArpeggiatoUpArrow":{},

  //ARROWS AND ARROWHEADS
  "arrowheadBlackUp": {},
  "arrowheadBlackDown": {}
};