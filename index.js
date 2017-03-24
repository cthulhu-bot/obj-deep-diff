var jsc = require("jsverify");

var boolFnAppliedThrice = jsc.forall("bool -> bool", "bool" function(f, b) {
    return f(f(f(b))) === f(b);
});

jsc.assert(boolFnAppliedThrice);
