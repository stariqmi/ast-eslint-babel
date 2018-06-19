function isCatchCall(node) {
  return node.parent.callee.type === 'MemberExpression' &&
    node.parent.callee.property.name === 'catch';
}

function isConsoleLog(node) {
    var callee = node.expression.callee;
    return callee.object.name === 'console' &&
      callee.property.name === 'log';
}

function isEmptyBody(body) {
  return body.length === 0
}

module.exports = {
  meta: {
    docs: {
      description: 'Disallow empty catch',
      category: 'Best Practices | TrackJS',
      recommended: true,
    },
  },
  create(context) {
    return {
      FunctionExpression(node) {
        if (isCatchCall(node)) {
            if (isEmptyBody(node.body.body)) {
                context.report({
                    node: node,
                    message: 'Empty catch function body',
                });
            }
          
            else if (isConsoleLog(node.body.body[0])) {
                context.report({
                    node: node,
                    message: 'Call to console.log instead of trackjs.track',
                });
            }
        }
      }
      
    }
  },
}
