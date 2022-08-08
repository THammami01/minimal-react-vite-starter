import { FC } from 'react';

import _styles from './App.module.scss';
import Router from './Router';
import { LangSelector } from './components/common';

const App: FC = () => {
  return (
    <>
      <LangSelector />
      <Router />
    </>
  );
};

export default App;
