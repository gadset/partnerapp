import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import NotificationCount from './components/NotificationCount';
import Home from './components/Home';
import { Grid } from '@mui/material';
import NewBid from './components/NewBid';
import submitButton from './components/SubmitBox/submitButton';
import awaitingConformation from './components/awaitingConformation';
import otherBidding from './components/otherBidding';
import PersonOtherBid from './components/personOtherBid';
import ConfirmedBids from './components/ConfirmedBids';
import PendingOrders from './components/PendingOrders';
import CancelledBids from './components/CancelledBids';
import OrdersCompleted from './components/OrdersCompleted';
import AwaitingConformation2 from './components/AwaitingConfirmation2';
import OrderEntry from './components/OrderEntry';
import ChangeBidAwaiting from './components/ChangeBidAwaiting';
import CancelBidAwaiting from './components/CancelBidAwaiting';
import EntryInspection from './components/EntryInspection';
import theme from './theme';
import ExitInspection from './components/ExitInspection';

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
        <ThemeProvider theme={theme}>
          <Grid className='App' style={{justifyContent: 'center', display: 'flex', flexDirection:'column', width: isMobile ? '100%' : '400px'}}>
            <Grid style={{width: '100%', position: 'sticky' , top: '0', zIndex: '0'}}>
              <Navbar />
              <Switch>
                <Route exact path='/' component = {Home} />
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
                <Route path='/OrderEntry' component={OrderEntry} />
                <Route path='/changeBidAwaiting' component={ChangeBidAwaiting} /> 
                <Route path='/cancelBidAwaiting' component={CancelBidAwaiting} />
                <Route path='/entryInspection' component={EntryInspection} />
                <Route path='/exitInspection' exact component={ExitInspection} />
              </Switch>
              {/* <Grid style={{position: 'sticky' , bottom: '0'}}>
                <Footer />
              </Grid> */}
            </Grid>
          </Grid>
        </ThemeProvider>
      </center>
    </Router>
  );
}

export default App;




  