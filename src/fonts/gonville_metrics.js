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
    size: 40
  },
  "fClef": {
    size: 40
  },
  "cClef": {
    size: 40
  },
  "gClefChange": {
    size: 36
  },
  "fClefChange": {
    size: 36
  },
  "cClefChange": {
    size: 36
  },
  "unpitchedPercussionClef1": {
    size: 40
  },
  "6stringTabClef": {},
  "clef8": {
    default_size: 20,
    small_size: 18,
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
    stem_offset: 0,
    size: 35
  },
  "noteheadWhole": {
    stem_offset: 0,
    size: 35
  },
  "noteheadHalf": {
    stem_offset: 0,
    size: 35
  },
  "noteheadBlack": {
    stem_offset: 0,
    size: 35
  },

  // Diamond
  "noteheadDiamondDoubleWhole": {
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondWhole": {
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondHalf": {
    stem_offset: 0,
    size: 35
  },
  "noteheadDiamondBlack": {
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
    stem_offset: 0,
    size: 35
  },
  "noteheadXWhole": {
    stem_offset: -3,
    size: 35,
  },
  "noteheadXHalf": {
    stem_offset: -3,
    size: 35,
  },
  "noteheadXBlack": {
    stem_offset: -3,
    size: 35
  },
  "noteheadXOrnate": {
    stem_offset: 0,
    size: 35
  },
  "noteheadCircleX": {},
  
  // Slash
  "noteheadSlashDoubleWhole": { // Doesn't exist in SMuFL
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashWhiteWhole": {
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashWhiteHalf": {
    stem_offset: 0,
    size: 35
  },
  "noteheadSlashHorizontalEnds": {
    stem_offset: 0,
    size: 35
  },

  // RESTS
  "restDoubleWhole": {
    size: 35
  },
  "restWhole" : {
    size: 35
  },
  "restHalf" : {
    size: 35
  },
  "restQuarter" : {
    size: 35
  },
  "rest8th": {
    size: 35
  },
  "rest16th": {
    size: 35
  },
  "rest32nd": {
    size: 35
  },
  "rest64th": {
    size: 35
  },
  "rest128th": {
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
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalDoubleSharp": {
    x_shift: -1,
    y_shift: 0,
    size: 38
  },
  "accidentalFlat": {
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalDoubleFlat": {
    x_shift: -3,
    y_shift: 0,
    size: 38
  },
  "accidentalNatural": {
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalParensLeft": {   // Left paren for cautionary accidentals
    x_shift: 2,
    y_shift: 0,
    size: 38
  },
  "accidentalParensRight": {   // Right paren for cautionary accidentals
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalThreeQuarterTonesFlatZimmermann": {
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalQuarterToneFlatStein": {
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalThreeQuarterTonesSharpStein": {
    x_shift: 0,
    y_shift: 0,
    size: 38
  },
  "accidentalQuarterToneSharpStein": {
    x_shift: 0,
    y_shift: 0,
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
    size:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "caesuraCurved": {
    size:40,
    x_shift:0,
    y_shift:2,
    width: 15
  },
  "breathMarkComma": {
    size:40,
    x_shift:0,
    y_shift:0,
    width: 10,
    x_shift: 8,
    shift_up: -4,
    shift_down: 4
  },
  "breathMarkTick": {
    size:50,
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
  "arrowheadBlackUp": {
    origin: "left"
  },
  "arrowheadBlackDown": {
    origin: "center"
  }
};