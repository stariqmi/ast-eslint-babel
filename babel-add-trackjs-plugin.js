/* Base template
export default function (babel) {
    const { types: t } = babel;

    return {
        name: "ast-transform", // not required
        visitor: {
            Identifier(path) {
                path.node.name = path.node.name.split('').reverse().join('');
            }
        }
    };
}
*/

function isCatchFunctionArgument(path) {
    return path.parent &&
            path.parent.callee &&
            path.parent.callee.property &&
            path.parent.callee.property.name === 'catch';
}

export default function (babel) {
  const { types: t } = babel;
  
  return {
    name: "ast-transform", // not required
    visitor: {
      ArrowFunctionExpression(path) {
        if (isCatchFunctionArgument(path)) {
            path.replaceWithSourceString(`logToTrackJS`);
        }
      }
    }
  };
}

