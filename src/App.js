import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Helloworld from './Components/1 Hello World/helloworld.js';
import Ccard from './Components/2 Congrats Cards/ccard.js';
import SoL from './Components/3 Super Over League/sol.js';
import SocialB from './Components/4 Social Buttons/socialb.js';
import NotApp from './Components/5 Notification Application/notapp';
import Memberlogin from './Components/6 Member Login/memberlogin.js';
import Techcards from './Components/7 Technology Cards/techcards.js';
import Menu from './Components/8 Nav Bar/menu.js';
import Counter from './Components/9 Hooks Assignment/counter.js';
import FruitsCounter from './Components/10 Fruits Counter/fruitscounter';
import Feedback from './Components/11 Feedback App/feedback.js';
import Thanks from './Components/11 Feedback App/thanks.js';
import DateFunc from './Components/12 DateFunction/datefun';
import { Gamedetails } from './Components/13 Json Assignment/gamedetails';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/hello' element={[<Menu/>,<Helloworld/>]}/>
      <Route path='/congratscard' element={[<Menu/>,<Ccard/>]}/>
      <Route path='/sol' element={[<Menu/>,<SoL/>]}/>
      <Route path='/socialb' element={[<Menu/>,<SocialB/>]}/>
      <Route path='/notapp' element={[<Menu/>,<NotApp/>]}/>
      <Route path='/memberlogin' element={[<Menu/>,<Memberlogin/>]}/>
      <Route path='/techcards' element={[<Menu/>,<Techcards/>]}/>
      <Route path='/Counter' element={[<Menu/>,<Counter/>]}/>
      <Route path='/fruitscounter' element={[<Menu/>,<FruitsCounter/>]}/>
      <Route path='/feedback' element={[<Menu/>,<Feedback/>]}/>
      <Route path='/thanks' element={[<Menu/>,<Thanks/>]}/>
      <Route path='/dateFunc' element={[<Menu/>,<DateFunc/>]}/>
      <Route path='/gamingworld' element={[<Menu/>,<Gamedetails/>]}/>
      </Routes>
      </BrowserRouter>
      

    </>
  );
}
export default App;
