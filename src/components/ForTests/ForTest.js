import { Button } from '../Button';
import './'

export const ForTest = (props) => {
    const { title, heading, paragraph, component = 'h2' } = props;
    const Tag = component;
    return (
        <div>
            <h6>{title}</h6>
            <Tag>{heading}</Tag>
            <p>{paragraph}</p>
            <Button />
        </div>
    );
};