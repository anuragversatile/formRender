

var renderingValue = require("../src/utils");
var assert = require("assert");
const fetch = require("node-fetch")




  describe("renderValue", function() {
    const props = {
      emailValue: "emailValue",
      telephone: 1234
    };
    it("should return  props.telephone when type is telephone", function() {
      assert.equal(renderingValue(null, "telephone", props), "telephone");
    });

    it("should return props.emailValue when type is email", function() {
      assert.equal(renderingValue("email", null, props), "emailValue");
    });
    describe('Get json data', () => {
      it('should get email as type pf first label', async () => {
          await    fetch("https://ansible-template-engine.herokuapp.com/form")
          .then((res) => {
              return res.json()
          })
              .then((res) => {
                  console.log(res);
                  assert.equal(res[0].type, "email")
              })
      })
  })
  });

