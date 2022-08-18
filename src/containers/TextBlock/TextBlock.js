import React from 'react';
import { Typography } from '../../components/Typography';

export function TextBlock(props) {
  const { title, typography } = props;
  return (
    <div>
      <Typography>{title}</Typography>
      <Typography>{typography}</Typography>
    </div>
  );
}
