import { FC } from 'react';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../hooks/store-hooks';
import { setTestValue } from '../../../store/actions/action-creators';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { t } = useTranslation();
  const testValue = useAppSelector((store) => store.global.testValue);
  const dispatch = useAppDispatch();

  console.log(testValue);

  useEffect(() => {
    handleChangeTestValue('TEST 02');
  }, []);

  const handleChangeTestValue = (testValue: string) =>
    dispatch(setTestValue(testValue));

  return (
    <div>
      {t('Hello')}, {import.meta.env.VITE_SECRET}!
    </div>
  );
};

export default Home;
