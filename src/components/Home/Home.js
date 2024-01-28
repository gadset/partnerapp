import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HomeBox from "./HomeBox";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { IconButton } from "@mui/material";
import NewBid from "../AllBids/NewBid";
import ButtonSubmit from "../SubmitBox/submitBUtton";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import "./Home.css";
import axios from "axios";
import Failurebutton from "../SubmitBox/Failurebutton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setPartnerIdValue } from "../../reduxslice";
import { toast } from "react-toastify";
const Container = styled(Grid)`
    position: 'absolute',
    transform: 'translated(-50%, -50%)',
    bgcolor: 'background.paper'
`;

function Home() {
  const [winheight, setWinHeight] = useState(window.innerHeight);
  const [newBidClick, setNewBidClick] = useState(false);
  const [successButton, setSuccessButton] = useState(false);
  const [failureButton, setFailureButton] = useState(false);
  const [newBiddata, setNewBidData] = useState({});
  const [statenow, setstatenow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies([]);

  function handledWindowSizeChange() {
    setWinHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handledWindowSizeChange);
    return () => {
      window.addEventListener("resize", handledWindowSizeChange);
    };
  }, []);

  const partnerid = JSON.parse(localStorage.getItem("partnerid"));

  const bids = 10;
  const names = "pending";

  const open = Boolean(newBidClick);
  const id = open ? "simple-popover" : undefined;

  const [width, setWidth] = useState(window.innerWidth);

  function handledWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const isMobile = width <= 768;
  const [data1, setData1] = useState([
    { number: 0, names: "All Bids", link: "/allBids" },
    { number: 0, names: "Missed Bids", link: "/cancelledBids" },
    {
      number: 0,
      names: "Awaiting Conformation",
      link: "/awaitingConfirmation",
    },
    { number: 0, names: "Confirmed Orders", link: "/confirmedOrders" },
    { number: 0, names: "Pending/ Reparing", link: "/pendingOrders" },
    { number: 0, names: "Order Completed", link: "/ordersCompleted" },
    // { number: 7, names: "Delivery Pending" , link: '/confirmedBids'},
    { number: 0, names: "Delivered", link: "/deliveredBids" },
    // { number: 9, names: "Confirmed Payment", link: '/confirmedBids' },
    // { number: 10, names: "After Service Payments", link: '/confirmedBids' },
    // { number: 11, names: "Warranty Clame", link: '/confirmedBids' },
  ]);

  const handleOpenNewBid = (event) => {
    setNewBidClick(true);
  };

  const handleCloseNewBid = (e) => {
    setNewBidClick(false);
  };

  const handleSuccessSubmit = (e) => {
    setSuccessButton(true);
  };
  const handlefailureSubmit = (e) => {
    setFailureButton(true);
  };
  const handleCloseSubmit = (e) => {
    setSuccessButton(false);
    setFailureButton(false);
    setNewBidClick(false);
  };

  const handleNewBidData = async (data) => {
    // setNewBidData(data);
    console.log(data);
    const id = newBiddata._id;
    const { amount, warranty, service } = data;
    console.log({ id, partnerid, amount, warranty, service });
    try {
      const resp = await axios.post(process.env.REACT_APP_BACKEND + "users/submitquote", {
        id,
        partnerid,
        amount,
        warranty,
        service,
      });
      console.log(resp);
      handleSuccessSubmit();
    } catch (err) {
      console.error(err);
      handlefailureSubmit();
    }
  };

  const customScrollbarStyle = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    overflow: "hidden",
  };
  const [count, setCount] = useState([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!localStorage.getItem('token')) {
        history.push("/login");
      }
    };
    verifyCookie();
  }, []);

  useEffect(()=> {
	 const start = async () => {
		if(localStorage.getItem('token')){
			 try {
        const bidsdata = await axios.get(
          process.env.REACT_APP_BACKEND +
            `partner/getpartnerdata?partnerid=${partnerid}`,
          {
            headers: {
              "x-token": localStorage.getItem('token'),
            },
          }
        );
        console.log(bidsdata.data);
        setNewBidData(bidsdata.data.newestBid);
        setData1([
          { number: bidsdata.data.all, names: "All bids", link: "/allBids" },
          // {number: bidsdata.data.missed,names: "Missed Bids",link: '/cancelledBids',},
          // {number: bidsdata.data.awaiting,names: "Awaiting Confirmation",link: '/awaitingConfirmation',},
          {
            number: bidsdata.data.confirmed,
            names: "Confirmed Orders",
            link: "/confirmedOrders",
          },
          {
            number: bidsdata.data.repairing,
            names: "Pending/Repairing",
            link: "/pendingOrders",
          },
          {
            number: bidsdata.data.ordercompleted,
            names: "Order Completed",
            link: "/ordersCompleted",
          },
          {
            number: bidsdata.data.delivered,
            names: "Delivered",
            link: "/delivery",
          },
        ]);
		setstatenow(true);
      } catch (err) {
        console.log(err);
      }

		}
    };
	start();
  }, []);


  useEffect(() => {
    async function getId() {
	if(localStorage.getItem('token')){
try{
		const resi = await axios.get(
        process.env.REACT_APP_BACKEND + "partner/getId",
        {
          headers: {
            "x-token": localStorage.getItem('token'),
          },
        }
      );
      dispatch(setPartnerIdValue(resi?.id));
      localStorage.setItem("partnerid", resi?.id);
	}
	catch(error){
		console.log(error);
		toast.error("Error in getting details");
	}
	}
	
    }

    getId();
  }, []);

  return (
    <Grid
      container
      sx={{
        ...customScrollbarStyle,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "0px auto",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          overflowX: "hidden",
          width: "90%",
          margin: "30px auto",
          opacity: 1,
        }}
      >
        {/* <Grid item style={{width:'100%', border: '1px solid #B7B7B7', borderRadius: '5px', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: '5px' }}>
                    <Grid container style={{display: 'flex', flexDirection: 'column', width: '80%', justifyContent: 'center', alignItems: 'flex-start', padding: '10px 10px 10px 20px' }}>
                        <Typography style={{fontWeight: '500', fontSize: '24px', color: '#333333', fontFamily: 'Work Sans', lineHeight: '1'}} >
                            New Bid Arrived
                        </Typography>
                        <Typography  onClick={handleOpenNewBid} style={{fontWeight: 300, fontSize: '21px', color: '#333333', fontFamily: 'Work sans', lineHeight: '1', cursor: 'pointer'}}>
                            Click here to view
                        </Typography>
                    </Grid>
                    <Grid style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%'}}>
                        <IconButton
                            size='large'
                        >
                            <NotificationsActiveOutlinedIcon  style={{height: '40px', width: '40px'}} />
                        </IconButton>
                    </Grid>
                </Grid> */}
      </Grid>
      {statenow === true ? (
        <Grid
          container
          columnSpacing={2}
          columns={12.5}
          rowSpacing={2}
          sx={{
            width: "100%",
            margin: "5px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data1.map((bids, index) => (
            <Grid key={index} item style={{ padding: "0px" }} xs={6}>
              <HomeBox
                count={bids.number}
                boxname={bids.names}
                link={bids.link}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>
			Loading ... 
		</Typography>
      )}

      <Modal open={newBidClick} onClose={handleCloseNewBid}>
        <Grid
          sx={{
            padding: "0",
            width: isMobile ? "90%" : "370px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "0px",
            position: "absolute",
            bottom: "60px",
            right: "0",
            left: "0",
            border: "1px solid #FFFFFF",
            borderRadius: "5px",
          }}
        >
          <NewBid sendDatatoParent={handleNewBidData} biddata={newBiddata} />
        </Grid>
      </Modal>
      <Modal open={successButton} onClose={handleCloseSubmit}>
        <Grid
          sx={{
            padding: "0",
            width: isMobile ? "90%" : "370px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "0px",
            position: "absolute",
            bottom: "42%",
            right: "0",
            left: "0",
            border: "1px solid #FFFFFF",
            borderRadius: "5px",
          }}
        >
          <ButtonSubmit buttonClick={handleCloseSubmit} link={"/"} />
        </Grid>
      </Modal>
      <Modal open={failureButton} onClose={handleCloseSubmit}>
        <Grid
          sx={{
            padding: "0",
            width: isMobile ? "90%" : "370px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "0px",
            position: "absolute",
            bottom: "42%",
            right: "0",
            left: "0",
            border: "1px solid #FFFFFF",
            borderRadius: "5px",
          }}
        >
          <Failurebutton buttonClick={handleCloseSubmit} link={"/"} />
        </Grid>
      </Modal>
    </Grid>
  );
}

export default Home;
