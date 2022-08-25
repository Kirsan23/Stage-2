import './SocialBlock.scss'

export const SocialBlock = (props) => {
  const { className = '' } = props;

  return (
    <div className={ className ? `${className}` : 'social-block' }>
      <span className='icon-facebook-fill social-block-icon'></span>
      <span className='icon-instagram-fill social-block-icon'></span>
      <span className='icon-twitter-fill social-block-icon'></span>
      <span className='icon-skype-fill social-block-icon'></span>
    </div>
  );
};
