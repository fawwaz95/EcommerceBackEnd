const path = require('path');
const fs = require('fs');

const template = ({ body, title }) => {
    const stylesPath = path.join(__dirname, 'ssr.css');
    const styles = fs.readFileSync(stylesPath, 'utf8');

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            ${styles}
          </style>
          </head>
        <body>
          <div id="root">${body}</div>
        </body>
      </html>
    `;
  };

export default template;