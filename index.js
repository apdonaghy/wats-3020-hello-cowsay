const cowsay = require("cowsay");
const getargs = require("./modules/get-args")

// get first string from command line
let textArg = getargs.getStringArg()

// if use entered a string cowsay it with
// default eyes and tail
if (textArg != null) {
  console.log(cowsay.say({
    text: textArg,
    e: "oO",
    T: "U "
  }));
}