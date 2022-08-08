import { FC, useState } from 'react';

import moment from 'moment';

import i18n from '../../translations/i18n';
import styles from './common.module.scss';

interface LangSelectorProps {}

const LangSelector: FC<LangSelectorProps> = () => {
  const [currentLang, setCurrLang] = useState(i18n.language);

  const handleChange = (e: any) => {
    const lang = e.target.value;

    setCurrLang(lang);
    moment.locale(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.langSelector}>
      <select value={currentLang} onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LangSelector;
