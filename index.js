var crypto = require("crypto");
module.exports = passhash;
module.exports.passhashSync = passhashSync;
var iterations = 10000;
var keylen = 64;

function passhash(password, salt, cb) {
  salt = ensureBuffer(salt)
  crypto.pbkdf2(password, salt, iterations, keylen, function (err, hash) {
    if (err) return cb(err);

    cb(null, hash.toString("base64"))
  });
}

function passhashSync(password, salt) {
  salt = ensureBuffer(salt)
  return crypto.pbkdf2Sync(password, salt, iterations, keylen);
}

function ensureBuffer(b) {
  if (!(b instanceof Buffer)) {
    return new Buffer(b, "base64");
  }
  return b;
}
