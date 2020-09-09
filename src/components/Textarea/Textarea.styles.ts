import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
`;

export const Label = styled.label`
  display: block;
  color: #000000;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  height: 256px;
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 6px;
  border-color: #d9d9d9;

  &:read-only {
    cursor: not-allowed;

    &:focus,
    &:active {
      outline: none;
      border-color: #d9d9d9;
    }
  }

  &:focus,
  &:active {
    outline: none;
    border-color: #2f54eb;
  }
`;
