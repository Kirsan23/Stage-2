// 1. Why do you need this component?
// I think it's redundant. Can we remove it?

// 2. Can we import static images outside of component/function? Why it's better to use require inside function?

// 3. Can you pass children inside image? Can we close img tag in another way?
export const ImgPaste = (props) => {
  const { sectionName, name } = props;
  return (
    <img
      className={`${sectionName}-img`}
      src={require(`../../img/${name}.png`)}
      alt='Oh...'
    ></img>
  );
};
