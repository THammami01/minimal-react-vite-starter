import _styles from './App.module.scss';

const App = () => {
  return <div>Hello, {import.meta.env.VITE_SECRET}!</div>;
};

export default App;
