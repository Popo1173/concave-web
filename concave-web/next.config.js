const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    optimizeFonts: true,
  }
};

//sass
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//   cssModules: true
// })