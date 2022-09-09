import { useContext } from 'react';
import { DarkModeContext } from '../../../../components/Context';
import './Map.scss';

export const Map = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`map ${darkMode ? `dark-theme` : `light-theme`}`}
    >
      {/* <iframe
        className='map'
        title='map'
        loading='lazy'
        allowfullscreen
      ></iframe> */}
      <div className='map-wrapper'>
        <img className='map-img' src={require(`../../../../img/Map.png`)} alt='Oh...' />
        <div className='additional_block'>
          <img className='additional_block-img' src={require(`../../../../img/GlutenFree.png`)} alt='Oh...' />
          <img className='additional_block-img' src={require(`../../../../img/Butchery.png`)} alt='Oh...' />
          <img className='additional_block-img' src={require(`../../../../img/OrganicProduct.png`)} alt='Oh...' />
          <img className='additional_block-img' src={require(`../../../../img/Restaurant.png`)} alt='Oh...' />
        </div>
      </div>
    </section>
  );
};
