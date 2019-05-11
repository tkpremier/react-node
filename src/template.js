function template({ title, initialState = {}, content = '', type = 'react' }) {
  let scripts = '';
  switch(type) {
    case 'canvas':
      scripts = ' <script src="./assets/canvas.js"> </script> ';
      break;
    case 'web-worker':
      scripts = '<script src="./assets/webWorkers.worker.js"></script><script src="./assets/webWorkers.main.js"></script>'
      break;
    default:
      scripts = content
        ? `<script>window.__STATE__ = ${JSON.stringify(initialState)}</script><script src="./assets/client.js"></script>`
        :  '<script src="./assets/bundle.js"> </script> ';
  }
  
  const page = `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title> ${title} </title>
          </head>
          <body>${(type === 'canvas') ? `<canvas id="app" class="wrap-inner"></canvas>` : `<div id="app">${content}</div>`}
            ${scripts}
          </body>
          </html>
          `;
  return page;
}

module.exports = template;
