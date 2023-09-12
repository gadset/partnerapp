import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotificationCount from './components/NotificationCount';
import Home from './components/Home';
import { Grid } from '@mui/material';
import NewBid from './components/NewBid';
import submitButton from './components/SubmitBox/submitBUtton';
import awaitingConformation from './components/awaitingConformation';
import Footer from './components/Footer';
import ConfirmationBox from './components/confirmationBox';
import otherBidding from './components/otherBidding';
import OtherBiddingBox from './components/OtherBiddingBox';
import PersonOtherBid from './components/personOtherBid';
import ConfirmedBids from './components/ConfirmedBids';
import PendingOrders from './components/PendingOrders';
import CancelledBids from './components/CancelledBids';
import OrdersCompleted from './components/OrdersCompleted';
import AwaitingConformation2 from './components/AwaitingConfirmation2';
import OrderEntry from './components/OrderEntry';
import ChangeBidAwaiting from './components/ChangeBidAwaiting';
import CancelBidAwaiting from './components/CancelBidAwaiting';
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
import { ToastContainer } from 'react-toastify';
import Orders from './Orders/Orders';
import Allbids from './components/Allbids';
//import Footer from './Navbar/Footer';
import Deliveryform from './components/Deliveryform';
import OrderForm from './Orders/OrderNew';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  function handledWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(()=> {
    window.addEventListener('resize', handledWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handledWindowSizeChange);
    }
  }, [])

  const isMobile = width <= 768;

  return (
    <Router>
        <Switch>
    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', width : isMobile ? '100%' : '400px', marginBottom : '100px'}}>
  
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
      <OrderForm/>
    </Route>
    {/* akarsh kinks */}
    <Route path='/allbids'>
      <Allbids/>
    </Route>
    {/* <Route path='/deliveryform'>
      <Deliveryform/>
    </Route> */}

       <Route exact path='/home' component = {Home} />
              <Route exact path='/navbar' component={Navbar} />
              <Route exact path='/newBid' component={NewBid} />
              <Route exact path='/submitButton' component={submitButton} />
              <Route exact path='/awaitingConfirmation' component={awaitingConformation} />
              <Route exact path='/otherBidding' component={otherBidding} />
              <Route path='/personOtherBid' component={PersonOtherBid} />
              <Route path='/ConfirmedOrders' exact component={ConfirmedBids} />
              <Route path='/pendingorders' exact component={PendingOrders} />
              <Route path='/cancelledBids' exact component={CancelledBids} />
              <Route path='/ordersCompleted' component={OrdersCompleted} />
              <Route path='/awaitingconformation2' component={AwaitingConformation2} />
              {/* <Route path='/' component={OrderEntry} /> */}
              <Route path='/changeBidAwaiting' component={ChangeBidAwaiting} /> 
              <Route path='/cancelBidAwaiting' component={CancelBidAwaiting} />

    </div>
    </Switch>
       {/* akarsh-footer */}
           <Footer />
    </Router>
  );
}

export default App;
