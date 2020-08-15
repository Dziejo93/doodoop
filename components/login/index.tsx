import { useMutation } from '@apollo/react-hooks';
import { BaseSyntheticEvent, FC, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import styled from 'styled-components';

import LoginForm from '@/components/forms/login';
import loginMutation from '@/lib/apollo/mutations/loginMutation.graphql';

type Inputs = {
  password: string;
  email: string;
  isSavePassword: boolean;
};
type OnSubmit<Data extends FieldValues> = (
  data: Data,
  e?: BaseSyntheticEvent<object, undefined, undefined> | undefined,
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
  const [userMutation] = useMutation(loginMutation);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { register, errors, handleSubmit } = useForm<Inputs>({});

  const onSubmit: OnSubmit<Inputs> = async (data, event) => {
    event?.preventDefault();
    const { email, password } = data;
    console.log(email, password);

    const response = await userMutation({
      variables: { email, password },
    });
    console.log(response); //@todo implement when backend is rdy
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
