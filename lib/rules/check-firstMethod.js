module.exports = {
    meta: {
        fixable: "code",
    },
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === "firstMethod") {
                    context.report({
                        node,
                        message:
                            "firstMethod can not useable, please use secondMethod",
                        fix: function (fixer) {
                            return fixer.replaceText(
                                node.callee,
                                "secondMethod"
                            );
                        },
                    });
                }
            },
        };
    },
};
