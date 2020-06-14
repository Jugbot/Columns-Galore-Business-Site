path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })
require = require("esm")(module/*, options*/)
module.exports = require("./index.js")