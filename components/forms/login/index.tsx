import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Dispatch, FC, FormEvent, MouseEvent, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { CustomTextInput } from '@/components/form';
import validationOptions from '@/components/forms/login/validations';
import { getColor } from '@/styles/theme';

type Props = {
  isPasswordHidden: boolean;
  setIsPasswordHidden: Dispatch<SetStateAction<boolean>>;
  register: ReturnType<typeof useForm>['register'];
  submitForm: (event: FormEvent<HTMLFormElement>) => void;
  errors: ReturnType<typeof useForm>['errors'];
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:first-child {
    display: none;
  }
`;
const ButtonWrapper = styled(Grid)`
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;
const StyledButton = styled(Button)`
  && {
    width: 90px;
    height: 36px;
    border-radius: 4px;
    background-color: ${getColor('carolinaBlue')};
    border: ${getColor('carolinaBlue')};

    &:hover {
      background-color: ${getColor('carolinaBlue')};
      border: ${getColor('carolinaBlue')};
      opacity: 0.7;
    }
  }

  .MuiButton-label {
    width: 52px;
    height: 16px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 1.25px;
    color: ${getColor('cateSkillWhite')};
  }
`;
const StyledCheckbox = styled(FormControlLabel)`
  .MuiTypography-body1 {
    width: 83px;
    height: 16px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    color: ${getColor('materialGray')};
  }
  .MuiCheckbox-colorPrimary.Mui-checked {
    color: ${getColor('carolinaBlue')};
  }
`;
const NameWithLoader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CustomLoader = styled(CircularProgress)`
  &&.MuiCircularProgress-root {
    color: ${getColor('black')};
    display: flex;
  }
`;

const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

const LoginForm: FC<Props> = ({ isPasswordHidden, setIsPasswordHidden, register, submitForm, errors }) => {
  const handleSetIsPasswordHidden = () => setIsPasswordHidden(!isPasswordHidden);

  const visibilityIcon = () => (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleSetIsPasswordHidden}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {isPasswordHidden ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <StyledForm noValidate onSubmit={submitForm}>
      <CustomTextInput
        variant="outlined"
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) && errors.email?.message}
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
        inputRef={register(validationOptions.email)}
      />
      <Box mt={6}>
        <CustomTextInput
          variant="outlined"
          name="password"
          label="Password"
          inputRef={register(validationOptions.password)}
          error={Boolean(errors.password)}
          helperText={Boolean(errors.password) && errors.password?.message}
          type={isPasswordHidden ? 'password' : 'text'}
          autoComplete="current-password"
          InputProps={{
            endAdornment: visibilityIcon(),
          }}
        />
      </Box>
      <ButtonWrapper container>
        <StyledCheckbox
          control={
            <Checkbox
              inputRef={register(validationOptions.isSavePassword)}
              value="isSavePassword"
              name="checkbox"
              color="primary"
            />
          }
          label="Remember me"
        />
        <StyledButton type="submit" variant="outlined" color="primary">
          <NameWithLoader>
            Log In
            <CustomLoader size={20} />
          </NameWithLoader>
        </StyledButton>
      </ButtonWrapper>
    </StyledForm>
  );
};

export default LoginForm;
