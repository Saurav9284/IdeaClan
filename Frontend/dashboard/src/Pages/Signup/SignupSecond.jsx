import { FormControl, Input, Button, FormLabel, VStack, HStack, Select, Box, Heading } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/progress';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SignupSecond = () => {
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
      <ArrowBackIcon w={5} h={8} mb={5} onClick={()=>navigate('/signup/step-1')} cursor='pointer'/>
      <Progress hasStripe value={66.66} size='sm'/>
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading mt={4} size='md'>Step - 2</Heading>
        </VStack>
        <FormControl id="role">
          <FormLabel >Choose your role</FormLabel>
          <Select placeholder="Select your role">
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>
          </Select>
        </FormControl>
        <HStack w='full' justify='space-between'>
        </HStack>
        <Button rounded='none' colorScheme='blue' w='full' onClick={() => navigate('/signup')}>
          Next
        </Button>
      </VStack>
    </Box>
  );
}

export default SignupSecond;
