/*require('@babel/register');
require('@babel/preset-env');
require('@babel/preset-react');

require('./server/server.js');*/

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-transform-runtime']
}; 
  
  