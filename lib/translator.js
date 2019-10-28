// Adaptado desde https://github.com/devschile/huemul/blob/master/scripts/guruguru.js
// Basado en https://github.com/dokshor/guru_guru

module.exports = {
  toGuru: function(msg) {
    var i, len, letter, letters, ref, str;
    letters = {
      a: "a",
      b: "g",
      c: "c",
      d: "g",
      e: "e",
      f: "j",
      g: "g",
      h: "h",
      i: "i",
      j: "j",
      k: "k",
      l: "g",
      m: "ñ",
      n: "gn",
      ñ: "ggni",
      o: "o",
      p: "c",
      q: "q",
      r: "cggg",
      s: "j",
      t: "c",
      u: "u",
      v: "g",
      w: "w",
      x: "kj",
      y: "y",
      z: "j"
    };

    str = [];
    ref = msg.toLowerCase().split("");
    for (i = 0, len = ref.length; i < len; i++) {
      letter = ref[i];
      if (letters[letter] != null) {
        str.push(letters[letter]);
      } else {
        str.push(letter);
      }
    }
    return str.join("");
  }
};
