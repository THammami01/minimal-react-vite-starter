import { FC } from 'react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { setTestValue } from '../../../store/actions/action-creators';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const testValue = useAppSelector((store) => store.global.testValue);
  const dispatch = useAppDispatch();

  console.log(testValue);

  useEffect(() => {
    handleChangeTestValue('TEST 02');
  }, []);

  const handleChangeTestValue = (testValue: string) =>
    dispatch(setTestValue(testValue));

  return <div>Hello, {import.meta.env.VITE_SECRET}!</div>;
};

export default Home;
