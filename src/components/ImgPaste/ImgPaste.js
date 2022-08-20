export const ImgPaste = (props) => {
  const { sectionName, name } = props;
  return <img className={`${sectionName}-img`} src={require(`../../img/${name}.png`)} alt="Oh..."></img>;
};