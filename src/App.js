import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotificationCount from './components/NotificationCount';
import Home from './components/Home';
import { Grid } from '@mui/material';
import NewBid from './components/NewBid';
import submitButton from './SubmitBox/submitButton';
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
      <center>
        <Grid className='App' style={{justifyContent: 'center', display: 'flex', flexDirection:'column', width: isMobile ? '100%' : '400px'}}>
          <Grid style={{width: '100%', position: 'sticky' , top: '0', zIndex: '0'}}>
            <Navbar />
            <Switch>
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
              <Route path='/' component={OrderEntry} />
              <Route path='/changeBidAwaiting' component={ChangeBidAwaiting} /> 
              <Route path='/cancelBidAwaiting' component={CancelBidAwaiting} />
            </Switch>
            {/* <Grid style={{position: 'sticky' , bottom: '0'}}>
              <Footer />
            </Grid> */}
          </Grid>
        </Grid>
      </center>
    </Router>
  );
}

export default App;
