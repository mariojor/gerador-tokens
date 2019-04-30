const jwt = require("jsonwebtoken");

let payload = {
    iss: "omundoedos.net",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(120),
    name: "Thiago Adriano",
    email: "tadriano.net@gmail.com"
};

var token = jwt.sign(payload, "Batman Batman Batman");

console.log(token);