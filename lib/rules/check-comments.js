module.exports = {
    meta: { messages: "asdads", type: "problem" },
    create(context) {
        function findComments(comment) {
            try {
                for (const option of context.options) {
                    if (
                        comment.value
                            .trim()
                            .toUpperCase()
                            .indexOf(option.toUpperCase()) == 0
                    ) {
                        context.report(
                            comment,
                            `Comment is not allowed what start with "${option.toUpperCase()}", please make sure all problems are done.`
                        );
                    }
                }
            } catch (error) {
                console.log(
                    "🚀 ~ file: check-comments.js:11 ~ findComments ~ error:",
                    error
                );
            }
        }
        return {
            Program(node) {
                let sourceCode = context.getSourceCode();
                let comments = sourceCode.getAllComments();
                for (const comment of comments) {
                    findComments(comment);
                }
            },
        };
    },
};
