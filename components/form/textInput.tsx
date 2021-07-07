import { BaseTextFieldProps, InputBaseProps, TextField } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';

import { getColor } from '@/styles/theme';

interface TextInput extends BaseTextFieldProps {
  InputProps?: InputBaseProps;
}

const StyledTextField = styled(TextField)<TextInput>`
  .MuiOutlinedInput-root {
    width: 328px;
    height: 56px;

    &.Mui-error {
      color: ${getColor('errorRed')};
      margin-bottom: 0;

      .MuiOutlinedInput-notchedOutline {
        color: ${getColor('errorRed')};
        border-color: ${getColor('materialGray')};
      }
    }
  }

  .MuiInputLabel {
    &-notchedOutline {
      border-color: ${getColor('materialGray')};
    }

    &-outlined {
      position: absolute;
      &.MuiFormLabel-root.Mui-error {
        color: ${getColor('errorRed')};
      }

      &.MuiInputLabel-shrink {
        background-color: ${getColor('white')};
        top: 2px;
        padding: 0 5px;
        height: 15px;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.4px;
        color: ${getColor('materialGray')};
      }
    }
  }

  .MuiFormHelperText-root.Mui-error {
    position: absolute;
    top: 56px;
    color: ${getColor('errorRed')};
  }
`;

const TextInput: FC<TextInput> = ({ ...rest }) => <StyledTextField {...rest} />;

export default TextInput;
