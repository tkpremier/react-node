onmessage = function(e) {
  const results = [1, 2, 4, 5, 8];
  // results.forEach((num) => {
  //   postMessage(`posting for result ${num * Math.random() * 12} received!`);
  // })
  postMessage(`posting for all results${results.map(num => num * Math.random() * 1234)}!`);
}