import { Heading } from '../../components/Heading';
import { Typography } from '../../components/Typography';

export function TextBlock (props) {
    const {title, typography} = props;
    return (
        <div>
            <Heading>{title}</Heading>
            <Typography>{typography}</Typography>
        </div>
    );
};