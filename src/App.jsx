
import styled from 'styled-components';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import { MyRoutes } from './routers/routers';

function App() {
  return (
   <>
   <AuthContextProvider>  
    <Container>
     <MyRoutes/>
    </Container>  
      
   </AuthContextProvider>
   </>
  )
}

const Container  =styled.div`

`

export default App
