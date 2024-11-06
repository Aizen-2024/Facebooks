import { Route, Routes } from "react-router-dom";
import {NavBar} from "./Components/Navbar";
import {Friends_page} from "./Components/Pages/Friends";
import Profile from "./Components/Pages/Profile";
import Home from "./Components/Pages/Home"; 
import { Notification } from "./Components/Pages/Notification";
import { Notification_data } from "./Components/Pages/Friends";
import { Messenger } from "./Components/Pages/Messenger";
import { Messenger_data } from "./Components/Pages/Friends";
import MarketplacePage from "./Components/Pages/Marketplace";
import ErrorBoundary from './Hooks/ErrorBoundary'
import ErrorMessage from './Hooks/ErrorMessage'

function App() {
  return (
    <div className="App">
      <ErrorBoundary Fallback={ErrorMessage}>
      <Messenger_data>
      <Notification_data>
      <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/friends_page" element={<Friends_page/>}/>
        <Route path="/profile_page" element={<Profile/>}/>
        <Route path="/notification_page" element={<Notification/>}/>
        <Route path="/messenger_page" element={<Messenger/>}/>
        <Route path="/marketplace_page" element={<MarketplacePage/>}/>
        </Route>
      </Routes>
      </Notification_data>
      </Messenger_data>
    </ErrorBoundary>
      
    </div>
  );
}

export default App;