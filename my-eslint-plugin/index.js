module.exports.rules = {
  'no-window-config': (context) => ({
    MemberExpression: function (node) {
      if (node.object.name === 'window' && node.property.name === 'config') {
        context.report(node, "Don't use window.config");
      }
    },
  }),
  // "no-angular-isDefined": context =>
  //     ({ MemberExpression: function(node) {
  //         if (node.object.name === "angular") {
  //             if(node.property.name === "isDefined") {
  //                 context.report(node, "Don't use angular.isDefined. Use vanilla JS.");
  //             } else if (node.property.name === "isUndefined") {
  //                 context.report(node, "Don't use angular.isUndefined. Use vanilla JS");
  //             }
  //         }
  //     }
  // })
};
