import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import NotificationCount from './components/NotificationCount';
import Home from './components/Home';
import { Grid } from '@mui/material';
import NewBid from './components/NewBid';
import submitButton from './components/SubmitBox/submitBUtton';
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
// import { PostAdd } from '@mui/icons-material';
import Postbid from './components/postbidding';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import LoginForm from './components/signinpage';
// import Demo from './components/getlocation';
// import { ToastContainer } from 'react-toastify';
// import Orders from './Orders/Orders';
import Allbids from './components/Allbids';
import Deliveryform from './components/Deliveryform';
import EntryInspection from './components/EntryInspection';
import theme from './theme';
import ExitInspection from './components/ExitInspection';
import DeliveredBid from './components/DeliveredBid';
import Footer from './components/Footer';
import Delivery from './components/Delivery';

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
    <BrowserRouter>
      <center>
        <ThemeProvider theme={theme}>
          <Grid className='App' style={{justifyContent: 'center', display: 'flex', flexDirection:'column', width: isMobile ? '100%' : '400px'}}>
            <Grid style={{width: '100%', top: '0', zIndex: '0'}}>
              <Navbar />
              <Routes>
                {/* <ToastContainer /> */}
				      <div style={{overflowY : 'hidden',marginBottom:'40px'}}>
                <Route path='/addbid'>
                    <Postbid/>
                </Route>
                <Route path='/login'>
                  <LoginForm/>
                </Route>
                {/* <Route path='/location'>
                  <Demo/>
                </Route> */}
                <Route exact path='/' element = {<Home/>} />
                <Route  path='/navbar' element={<Navbar/>} />
                <Route  path='/newBid' element={<NewBid/>} />
                <Route  path='/submitButton' element={<submitButton/>} />
                <Route  path='/awaitingConfirmation' element={<awaitingConformation/>} />
                <Route  path='/otherBidding' element={<otherBidding/>} />
                <Route path='/personOtherBid' element={<PersonOtherBid/>} />
                <Route path='/ConfirmedOrders'  element={<ConfirmedBids/>} />
                <Route path='/pendingorders'  element={<PendingOrders/>} />
                <Route path='/cancelledBids'  element={<CancelledBids/>} />
                <Route path='/ordersCompleted' element={<OrdersCompleted/>} />
                <Route path='/awaitingconformation2' element={<AwaitingConformation2/>} />
                <Route path='/OrderEntry' element={<OrderEntry/>} />
                <Route path='/changeBidAwaiting' element={<ChangeBidAwaiting/>} /> 
                <Route path='/cancelBidAwaiting' element={<CancelBidAwaiting/>} />
                <Route path='/entryInspection' element={<EntryInspection/>} />
                <Route path='/exitInspection'  element={<ExitInspection/>} />
                <Route path='/delivery'  element={<Delivery/>} />

                {/* venkatesh links */}
                {/* <Route path='/orders'>
                  <Orders/>
                </Route> */}


                {/* akarsh kinks */}
                <Route path='/allbids'>
                  <Allbids/>
                </Route>
                <Route path='/deliveryform'>
                  <Deliveryform/>
                </Route>   
				      </div>
              </Routes>
			        <div sx={{position:'sticky', bottom: '0', display: 'flex', justifyContent: 'center'}}>
                <Footer />
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </center>
    </BrowserRouter>
  );
}

export default App;

