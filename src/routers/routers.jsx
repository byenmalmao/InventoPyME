import { Routes,Route} from  'react-router-dom';
import Home from '../pages/Home';

export function MyRoutes(){
    return(
        
        <Routes>
            <Route  path='/' element={<Home/>}/>
        </Routes>
    )
}