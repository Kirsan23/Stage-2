import { useContext } from 'react';
import { DarkModeContext } from '../../components/Context';
import './Map.scss';

export const Map = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`map_wrapper ${darkMode ? `dark-theme` : `light-theme`}`}>
      {/* <iframe
        className='map'
        title='map'
        loading='lazy'
        allowfullscreen
      ></iframe> */}
    </section>
  );
};
