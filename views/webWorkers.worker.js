"use strict";

onmessage = function onmessage(e) {
  var results = [1, 2, 4, 5, 8]; // results.forEach((num) => {
  //   postMessage(`posting for result ${num * Math.random() * 12} received!`);
  // })

  postMessage("posting for all results".concat(results.map(function (num) {
    return num * Math.random() * 1234;
  }), "!"));
};