import { FormControl, Input, Button, FormLabel, VStack, HStack } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const SignupFirst = () => {

  const navigate = useNavigate()

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
       <Progress hasStripe value={33.33} size='sm' />
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading mt={4} size='md'>Step - 1</Heading>
        </VStack>
        <FormControl id="name">
          <FormLabel >Name</FormLabel>
          <Input type="name" placeholder="Enter your name" />
        </FormControl>
        <FormControl id="city">
          <FormLabel >City</FormLabel>
          <Input type="text" placeholder="Enter city name" />
        </FormControl>
        <FormControl id="email">
          <FormLabel >E-mail</FormLabel>
          <Input type="email" placeholder="user@gmail.com" />
        </FormControl>
        <FormControl>
            <FormLabel >Password</FormLabel>
            <Input rounded='none' variant='filled' type='password' placeholder="min 8 characters" />
          </FormControl>
        <HStack w='full' justify='space-between'>
        </HStack>
        <Button rounded='none' colorScheme='blue' w='full' onClick={()=>navigate('/signup/step-2')}>
          Next
        </Button>
      </VStack>
    </Box>
  );
}

export default SignupFirst;
