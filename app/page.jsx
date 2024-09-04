import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
function MyApp() {
  return (
    <ChakraProvider>
      <Login/>
    </ChakraProvider>
  );
}

export default MyApp;
