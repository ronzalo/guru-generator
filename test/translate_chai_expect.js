var expect = require("chai").expect;
var translator = require("../lib/translator");

describe("Translator tests using EXPECT interface from CHAI module: ", function() {
  describe("Check toGuru function: ", function() {
    it("Check the returned value equals to guru speech: ", function() {
      result = translator.toGuru("pajaro culiao");
      expect(result).to.equal("cajacgggo cugiao");
    });
  });
});
