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
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import CancelledBids from './components/CancelledBids';
import awaitingConformation from './components/awaitingConformation';
import ConfirmedBids from './components/ConfirmedBids';
import NewBid from './NewBid/NewBid';
import otherBidding from './components/otherBidding';
import PendingOrders from './components/PendingOrders';
import OrderEntry from './components/OrderEntry';

function App() {
  const auth= getAuth();
  var user;
  useEffect(()=>{
    user = auth.currentUser;
  //  console.log(auth['currentUser']);
    if(user) {
      const uid = user.uid;
      console.log("hello");  
    }
  }, [])

  return (
    <Router>

      <Switch>
        <div className="App">
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

          {/* Praveen links */}

          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/newbid' component={NewBid} />
          <Route path='/navbar' component={Navbar} />
          <Route path='/cancelledBids' component={CancelledBids} />
          <Route path='/awaitingConformation' component={awaitingConformation} />
          <Route path='/confirmedbids' component={ConfirmedBids} />
          <Route path='/otherbidding' component={otherBidding} />
          <Route path='/pendingorders' component={PendingOrders} />
          <Route path='/OrderEntry' component={OrderEntry} />

          {/* Link ends */}
      
        </div>
      </Switch>
    </Router>
  );
}

export default App;
