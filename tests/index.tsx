import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const App = () => {
  const [count, setCount] = createSignal(0);
  const inc = (by = 1) => setCount(count() + by);

  return (
    <button onClick={[inc, 1]} type="button">
      {count()}
    </button>
  );
};

// biome-ignore lint/style/noNonNullAssertion: We are sure the element exists.
render(App, document.getElementById('app')!);
