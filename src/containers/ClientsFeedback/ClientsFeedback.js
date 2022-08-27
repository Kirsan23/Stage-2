import { InfoBlock } from '../../components/InfoBlock';
// import { Typography } from '../../components/Typography';
import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './ClientsFeedback.scss';

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
