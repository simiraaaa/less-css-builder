var lessBuilder = require('less-css-builder');
lessBuilder.watch({
  target: 'less',
  entry: 'less/main.less',
  output: 'dst/style',
});
