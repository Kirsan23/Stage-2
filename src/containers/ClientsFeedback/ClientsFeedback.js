import { InfoBlock } from '../../components/InfoBlock';
import './ClientsFeedback.scss';
import { Typography } from '../../components/Typography';
import { ImgPaste } from '../../components/ImgPaste';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';

export function ClientsFeedback() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`clients-feedback ${darkMode ? `dark-theme` : `light-theme`}`}>
      <div className='clients-feedback-block'>
      <InfoBlock
          title='Clients Feedback'
          heading={'Some Great Words From Our Clients'}
          highlight={'Great Words'}
          button='none'
        ></InfoBlock>
      </div>
    </section>
  );
}
