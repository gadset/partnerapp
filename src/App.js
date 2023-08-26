import logo from './logo.svg';
import './App.css';
import { PostAdd } from '@mui/icons-material';
import Postbid from './components/postbidding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LoginForm from './components/signinpage';
import Demo from './components/getlocation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc ,getDocs} from "firebase/firestore"; 
import { firestoredb } from '.';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Orders from './Orders/Orders';
import Allbids from '../../src/Components/Allbids';
import Footer from '../../src/Components/Footer';

function App() {
  const auth= getAuth();
  var user;
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(()=>{
    user = auth.currentUser;
  //  console.log(auth['currentUser']);
    if(user) {
      const uid = user.uid;
      console.log("hello");  
    }
  }, [])

  useEffect(() => {
    //  subscribe();
    
          window.addEventListener('resize', handleWindowSizeChange);
          return () => {
              window.removeEventListener('resize', handleWindowSizeChange);
          }
      }, []);
      const isMobile = width <= 768;
  return (
    <Router>
        <Switch>
    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', width : isMobile ? '100%' : '400px'}}>
  
      <ToastContainer/>
    <Route path='/addbid'>
<Postbid/>
    </Route>
    <Route exact path='/'>
      <LoginForm/>
    </Route>
    <Route path='/location'>
      <Demo/>
    </Route>

    {/* venkatesh links */}
    <Route path='/orders'>
      <Orders/>
    </Route>
    {/* akarsh kinks */}
    <Route path='/Allbids'>
      <Allbids/>
    </Route>
    </div>
    </Switch>
    {/* akarsh kinks */}
    <Footer />
    </Router>
  );
}

export default App;
