import { server } from './App/Root';

export default function render(initialState) {
  // Model the initial state
  const { content, preloadedState } = server(initialState);
  return { content, preloadedState };
};
