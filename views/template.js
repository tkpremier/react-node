"use strict";

function template(_ref) {
  var title = _ref.title,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'react' : _ref$type;
  var scripts = '';

  if (type === 'canvas') {
    scripts = ' <script src="./assets/canvas.js"> </script> ';
  } else if (type === 'web-worker') {
    scripts = "<script src=\"./assets/webWorkers.worker.js\"></script><script src=\"./assets/webWorkers.main.js\"></script>";
  } else if (content) {
    scripts = " <script>\n                  window.__STATE__ = ".concat(JSON.stringify(initialState), "\n              </script>\n              <script src=\"./assets/client.js\"></script>\n              ");
  } else {
    scripts = ' <script src="./assets/bundle.js"> </script> ';
  }

  var page = "<!DOCTYPE html>\n          <html lang=\"en\">\n          <head>\n            <meta charset=\"utf-8\">\n            <title> ".concat(title, " </title>\n          </head>\n          <body>").concat(type === 'canvas' ? "<canvas id=\"app\" class=\"wrap-inner\"></canvas>" : "<div id=\"app\">".concat(content, "</div>"), "\n            ").concat(scripts, "\n          </body>\n          </html>\n          ");
  return page;
}

module.exports = template;