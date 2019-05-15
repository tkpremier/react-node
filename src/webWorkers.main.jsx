const React = require('react');
const ReactDOM = require('react-dom');

const { render } = ReactDOM;

const Button = (props) => {
  const { workerUrl } = props;
  const worker = new Worker(workerUrl);
  if (props.pending) {
    // showSpinner
  } else {
    // showData
  }
  worker.onmessage = function (e) {
    console.log('testworker onmessage:  ', e.data);
    // if (e.data.indexOf('worker for') === 0) {
    //   console.log('what data do you have?: ', e.data);
    //   worker.terminate();
    // }
  }
  return (
    <button
      type="button"
      onClick={(e) => {
        worker.postMessage(`This button's name is ${props.name}`);
      }}
    >{props.name}</button>
  );
}

window.onload = () => {
  const app = document.querySelector('#app');
  if (window.Worker) {
    render((
      <form>
        <Button
          name="Filter"
          workerUrl="./assets/webWorkers.worker.js"
        />
        <Button
          name="Sort"
          workerUrl="./assets/webWorkers.worker.js"
        />
      </form>
    ), app);
    // const button1 = document.createElement('button');
    // const button2 = document.createElement('button');

    // [button1, button2].forEach((btn) => {
    //   app.append(btn);
    // });
  }
}