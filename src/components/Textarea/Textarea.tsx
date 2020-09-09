import React from 'react';

import * as Types from './Textarea.types';
import * as Styles from './Textarea.styles';

const Textarea: React.FunctionComponent<Types.TextareaProps> = (props) => {
  return (
    <Styles.Container>
      <Styles.Label>{props.label}</Styles.Label>
      <Styles.Textarea
        value={props.value}
        readOnly={props.readOnly}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Styles.Container>
  );
};

export default Textarea;
