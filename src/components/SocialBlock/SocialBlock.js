import PropTypes from 'prop-types';
import './SocialBlock.scss';

export const SocialBlock = (props) => {
  const { className = '', direction = 'vertical' } = props;
  const socialIcons = [
    { id: 1, icon: 'icon-facebook-fill' },
    { id: 2, icon: 'icon-instagram-fill' },
    { id: 3, icon: 'icon-twitter-fill' },
    { id: 4, icon: 'icon-skype-fill' },
  ];

  return (
    <div
      className={`${className ? `${className}` : 'social-block'} ${
        { direction } === 'horizontal' ? 'horizontal' : 'vertical'
      }`}
    >
      {socialIcons.map(({ id, icon }) => (
        <div key={id} className='social-block-icon'>
          <span className={`${icon} 'social-block-icon'`}></span>
        </div>
      ))}
    </div>
  );
};

SocialBlock.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
};
