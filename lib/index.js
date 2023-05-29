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
        extends: ["eslint:recommended"],
        globals: {
            sap: "readonly",
            $: "readonly",
        },
        rules: {
            "nttdata-mii/check-comments": ["warn", "FIXME"],
            "nttdata-mii/check-firstMethod": "error",
            indent: ["error", 4],
            "no-undef": "error",
            "no-unused-vars": "warn",
            "no-case-declarations": "warn",
            "switch-colon-spacing": "warn",
            "no-empty": "warn",
            "no-redeclare": "warn",
            "no-extra-boolean-cast": "warn",
            "no-unexpected-multiline": "warn",
            "no-dupe-keys": "warn",
            "no-useless-escape": "warn",
            "no-unreachable": "warn",
            "no-debugger": "warn",
            "no-constant-condition": "warn",
            "require-jsdoc": "warn",
            // camelcase: "warn",
        },
    },
    // someCustomConfigs: { rules: {} },
};
