import React from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import * as Types from './ErrorList.types';
import * as Styles from './ErrorList.styles';

const ErrorList: React.FunctionComponent<Types.ErrorListProps> = (props) => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Heading>Error messages</Styles.Heading>
      </Styles.Header>
      {props.errors.length === 0 && <ErrorMessage message="Keep going, you haven't made any mistake yet!" />}

      {props.errors.map((error) => (
        <ErrorMessage key={error} message={error} />
      ))}
    </Styles.Container>
  );
};

export default ErrorList;
