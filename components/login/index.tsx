import { BaseSyntheticEvent, FC, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import LoginForm from '@/components/forms/login';

type Inputs = {
  password: string;
  email: string;
  isSavePassword: boolean;
};
type OnSubmit<Data extends FieldValues> = (
  data: Data,
  e?: BaseSyntheticEvent<object, any, any> | undefined,
) => void | Promise<void>;

const PaperWrapper = styled.div`
  margin-top: -210px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DoodoopLogo = styled.img`
  width: 283px;
  height: 148px;
  color: red;
`;

const LoginComponent: FC = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { register, errors, handleSubmit } = useForm<Inputs>({});

  const onSubmit: OnSubmit<Inputs> = (data) => {
    console.log(data, errors, 1); //@todo implement when backend is rdy
  };

  return (
    <PaperWrapper>
      <DoodoopLogo src={'/doodoop.svg'} alt={'logo'} />
      <LoginForm
        isPasswordHidden={isPasswordHidden}
        setIsPasswordHidden={setIsPasswordHidden}
        register={register}
        errors={errors}
        submitForm={handleSubmit(onSubmit)}
      />
    </PaperWrapper>
  );
};

export default LoginComponent;
