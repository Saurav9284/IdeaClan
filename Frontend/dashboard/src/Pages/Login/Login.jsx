import { FormControl, Input, Button, Checkbox, FormLabel, HStack } from '@chakra-ui/react';
import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import { useNavigate} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  return (
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '10vh']}
        mx='auto'
        backgroundColor={"white"}
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
      >
        <VStack spacing={4} align='flex-start' w='full'>
          <VStack spacing={1} align={['flex-start', 'center']} w='full'>
            <Heading mb={5} size='lg'>Login</Heading>
            <Text>Enter your e-mail and password to login</Text>
          </VStack>
          <FormControl id="email">
            <FormLabel >E-mail</FormLabel>
            <Input type="email" placeholder="user@gmail.com" />
          </FormControl>
          <FormControl>
            <FormLabel >Password</FormLabel>
            <Input rounded='none' variant='filled' type='password' placeholder="min 8 characters" />
          </FormControl>
          <HStack w='full' justify='space-between'>
            <Checkbox>Remember me</Checkbox>
            <Button variant='link' colorScheme='blue'>
              Forgot Password?
            </Button>
          </HStack>
          <Button rounded='none'colorScheme='green' w ='full'>
            Login
          </Button>
            <Button variant='link' colorScheme='blue' onClick={()=>navigate('/signup/step-1')}>
              Don't have an account? Signup
            </Button>
        </VStack>
      </Box>
  );
}

export default Login;
