import { FormControl, Input, Button, FormLabel, VStack, HStack, Select } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons'
const Signup = () => {
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
      <ArrowBackIcon w={5} h={8} mb={5} onClick={()=>navigate('/signup/step-2')} cursor='pointer'/>
      <Progress hasStripe value={100} size='sm'/>
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading mt={4} size='md'>Step - 3</Heading>
        </VStack>
        <FormControl id="role">
          <FormLabel >Choose your course</FormLabel>
          <Select placeholder="Select your role">
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="full stackweb development">Full stack web development</option>
            <option value="android developer">Android Development</option>
            <option value="data analytics">Data Analytics</option>
          </Select>
        </FormControl>
        <HStack w='full' justify='space-between'>
        </HStack>
        <Button rounded='none' colorScheme='green' w='full'>
          Signup
        </Button>
        <Button variant='link' colorScheme='blue' onClick={()=>navigate('/login')}>
              Already have an account? Login
            </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
