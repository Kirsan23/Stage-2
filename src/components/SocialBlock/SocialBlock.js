import PropTypes from 'prop-types';
import './SocialBlock.scss';

export const SocialBlock = (props) => {
  const { className = '', direction = 'vertical' } = props;
  const socialIcons = [
    { id: 1, icon: 'icon-facebook-fill', link: 'https://www.facebook.com/' },
    { id: 2, icon: 'icon-instagram-fill', link: 'https://www.instagram.com/' },
    { id: 3, icon: 'icon-twitter-fill', link: 'https://twitter.com/' },
    { id: 4, icon: 'icon-skype-fill', link: 'https://www.skype.com/' },
  ];

  return (
    <div
      className={`${className ? `${className}` : 'social_block'} ${direction}`}
    >
      {socialIcons.map(({ id, icon, link }) => (
        <a key={id} href={link} className={`icon ${direction}`}>
          <span className={`${icon}`}/>
        </a>
      ))}
    </div>
  );
};

SocialBlock.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
};
