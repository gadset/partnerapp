import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import NotificationCount from './components/NotificationCount';
import Home from './components/Home/Home';
import { Grid } from '@mui/material';
import NewBid from './components/NewBid';
import submitButton from './components/SubmitBox/submitBUtton';
import awaitingConformation from './components/AwaitingConfirmation/awaitingConformation';
import otherBidding from './components/otherBidding';
import PersonOtherBid from './components/personOtherBid';
import ConfirmedBids from './components/Confirmed/ConfirmedBids';
import PendingOrders from './components/PendingOrders/PendingOrders';
import CancelledBids from './components/CancelledBids';
import OrdersCompleted from './components/Completed/OrdersCompleted';
import AwaitingConformation2 from './components/AwaitingConfirmation/AwaitingConfirmation2';
import OrderEntry from './components/OrderEntry/OrderEntry';
import ChangeBidAwaiting from './components/ChangeBidAwaiting';
import CancelBidAwaiting from './components/CancelBidAwaiting';
// import { PostAdd } from '@mui/icons-material';
import Postbid from './components/postbidding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LoginForm from './Login/signinpage';
// import Demo from './components/getlocation';
// import { ToastContainer } from 'react-toastify';
// import Orders from './Orders/Orders';
import Allbids from './components/AllBids/Allbids';
import Deliveryform from './components/DeliveryForm/Deliveryform';
import EntryInspection from './components/InspectionForms/EntryInspection';
import theme from './theme';
import ExitInspection from './components/InspectionForms/ExitInspection';
import DeliveredBid from './components/DeliveredBid';
import Footer from './components/Footer';
import Delivery from './components/Delivered/Delivery';

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
            <Grid style={{width: '100%', top: '0', zIndex: '0'}}>
              <Navbar />
			  <div style={{overflowY : 'hidden',marginBottom:'40px'}}>
              <Switch>
                {/* <ToastContainer /> */}
				      
                <Route exact path='/addbid'>
                    <Postbid/>
                </Route>

                <Route exact path='/login'>
                  <LoginForm/>
                </Route>

				<Route exact path='/home'> <Home/></Route>
				<Route exact path='/newBid'>
  <NewBid />
</Route>

 <Route path='/allbids'>
                  <Allbids/>
				  </Route>

<Route exact path='/ConfirmedOrders'>
  <ConfirmedBids />
</Route>

<Route exact path='/pendingorders'>
  <PendingOrders />
</Route>

<Route exact path='/entryInspection'>
  <EntryInspection />
</Route>
<Route exact path='/exitInspection'>
  <ExitInspection />
</Route>

<Route exact path='/ordersCompleted'>
  <OrdersCompleted />
</Route>

 <Route path='/deliveryform'>
                  <Deliveryform/>
                </Route> 

<Route exact path='/delivery'>
  <Delivery />
</Route>

                {/* <Route path='/location'>
                  <Demo/>
                </Route> */}
                

<Route exact path='/submitButton'>
  <submitButton />
</Route>
<Route exact path='/awaitingConfirmation'>
  <awaitingConformation />
</Route>
<Route exact path='/otherBidding'>
  <otherBidding />
</Route>
<Route exact path='/personOtherBid'>
  <PersonOtherBid />
</Route>

<Route exact path='/cancelledBids'>
  <CancelledBids />
</Route>

<Route exact path='/awaitingconformation2'>
  <AwaitingConformation2 />
</Route>
<Route exact path='/OrderEntry'>
  <OrderEntry />
</Route>
<Route exact path='/changeBidAwaiting'>
  <ChangeBidAwaiting />
</Route>
<Route exact path='/cancelBidAwaiting'>
  <CancelBidAwaiting />
</Route>


                {/* venkatesh links */}
                {/* <Route path='/orders'>
                  <Orders/>
                </Route> */}


                {/* akarsh kinks */}
               
               

				

				  <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />  
				   
              </Switch>
			     </div>
			        <div sx={{position:'sticky', bottom: '0', display: 'flex', justifyContent: 'center', width: isMobile ? '100%' : '400px'}}>
                <Footer />
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </center>
    </Router>
  );
}

export default App;

