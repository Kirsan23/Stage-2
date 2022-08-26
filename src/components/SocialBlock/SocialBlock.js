import './SocialBlock.scss';

export const SocialBlock = (props) => {
  // Can we pass 'direction' prop here to determine - vertical or horizontal? Instead of className
  // So component will be more flexible
  const { className = '' } = props;

  return (
    <div className={className ? `${className}` : 'social-block'}>
      {/* Use array objects to print social icons please */}
      <span className='icon-facebook-fill social-block-icon'></span>
      <span className='icon-instagram-fill social-block-icon'></span>
      <span className='icon-twitter-fill social-block-icon'></span>
      <span className='icon-skype-fill social-block-icon'></span>
    </div>
  );
};
