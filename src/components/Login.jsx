import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full", "96"]}
          margin={'auto'}
          my={'16'}
        >
          <Heading>Welcome back</Heading>
          <Input
            type={'email'}
            required
            placeholder={'Email'}
            focusBorderColor={'purple.500'}
          />

          <Input
            type={'password'}
            required
            placeholder={'Passsword'}
            focusBorderColor={'purple.500'}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forgot Password</Link>
          </Button>

          <Button colorScheme={'purple'} type="submit">
            Log In
          </Button>

          <Text textAlign={'right'}>
            New here?{" "}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'} colorScheme={'purple'}>
                Sign Up
              </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
