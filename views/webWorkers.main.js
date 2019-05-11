"use strict";

var React = require('react');

var ReactDOM = require('react-dom');

var render = ReactDOM.render;

var Button = function Button(props) {
  var workerUrl = props.workerUrl;
  var worker = new Worker(workerUrl);

  worker.onmessage = function (e) {
    console.log('testworker onmessage:  ', e.data); // if (e.data.indexOf('worker for') === 0) {
    //   console.log('what data do you have?: ', e.data);
    //   worker.terminate();
    // }
  };

  return React.createElement("button", {
    type: "button",
    onClick: function onClick(e) {
      worker.postMessage("This button's name is ".concat(props.name));
    }
  }, props.name);
};

window.onload = function () {
  var app = document.querySelector('#app');

  if (window.Worker) {
    render(React.createElement("form", null, React.createElement(Button, {
      name: "Filter",
      workerUrl: "./assets/webWorkers.worker.js"
    }), React.createElement(Button, {
      name: "Sort",
      workerUrl: "./assets/webWorkers.worker.js"
    })), app); // const button1 = document.createElement('button');
    // const button2 = document.createElement('button');
    // [button1, button2].forEach((btn) => {
    //   app.append(btn);
    // });
  }
};