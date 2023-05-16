/**
 * @fileoverview eslint plugin
 * @author Cem Alpoğuz
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
    nttConfig: {
        rules: {
            "nttdata-mii/check-comments": ["warn", "FIXME"],
            "nttdata-mii/check-firstMethod": "error",
        },
    },
    someCustomConfigs: { rules: {} },
};
