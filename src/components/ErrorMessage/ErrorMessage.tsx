import React from 'react';

import * as Types from './ErrorMessage.types';
import * as Styles from './ErrorMessage.styles';

const ErrorMessage: React.FunctionComponent<Types.ErrorMessageProps> = (props) => {
  return (
    <Styles.Container>
      <Styles.Text>{props.message}</Styles.Text>
    </Styles.Container>
  );
};

export default ErrorMessage;
