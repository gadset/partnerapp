import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, FormControlLabel, FormControl, FormLabel, RadioGroup, IconButton, Divider, InputBase, Button, Radio } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import styled from "@emotion/styled";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Container,
} from '@mui/material';

import "../style.css";

const SubmitButtom = styled(Button)`
  text-transform: none;
  background-color: #505050;
  color: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  font-family: Work Sans;
`;
function NewBid({ sendDatatoParent, biddata }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [serviceType, setServiceType] = useState("");
  const [warranty, setWarranty] = useState("");
  const [bidAmount, setBidAmount] = useState("");
//   const [finalAmount, setFinalAmount] = useState(0);
  const [data, setData] = useState({});

const { control, handleSubmit, register } = useForm({
    defaultValues: {
      qualities: [{ quality: '', amount: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'qualities',
  });


  function handledWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handledWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handledWindowSizeChange);
    };
  }, []);

  const handleAmountChange = (e) => {
    const newBidAmount = e.target.value;
    const newFinalAmount =
      parseFloat(e.target.value) + parseFloat(e.target.value / 10);
    setBidAmount(newBidAmount);
    // setFinalAmount(isNaN(newFinalAmount) ? 0 : newFinalAmount);
  };

  const onSubmit = (values) => {
	console.log("values", values);
    // console.log(serviceType, warranty, qualities);
    const data = {
      service: values?.serviceType,
    //   warranty: values?.warranty,
      qualities: values?.qualities,
    };
    setData(data);
    sendDatatoParent(data);
  };

  const isMobile = width <= 768;

  return (
    <Box
      container
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: isMobile ? "100%" : "400px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Grid
        container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "12px 16px",
        }}
      >
        {/* <Grid
          item
          style={{
            padding: "5px 0",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            style={{
              fontWeight: 300,
              fontSize: "16px",
              color: "#333333",
              fontFamily: "Work sans",
              lineHeight: "1",
            }}
          >
            New Bid
          </Typography>
        </Grid> */}
        <Grid
          item
          style={{
            padding: "6px 0",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            style={{
              fontWeight: 400,
              fontSize: "24px",
              color: "#000000",
              fontFamily: "Work sans",
              lineHeight: "1",
              cursor: "pointer",
            }}
          >
            {biddata.device}
          </Typography>
        </Grid>
		<Grid container
>
	{
		biddata?.image && (
				<img src={biddata?.image}  style={{width : '200px', height : '200px'}} alt="device image" />
		)
	}
	<Typography> {biddata?.description} </Typography>
	</Grid>        {/* <Grid container style={{}}>
          <Grid
            xs={2}
            item
            style={{
              padding: "5px 0",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              style={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#000000",
                fontFamily: "Work sans",
                lineHeight: "1.25",
              }}
            >
              Issue :
            </Typography>
          </Grid>
          <Grid
            xs={10}
            item
            style={{
              padding: "5px 0",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              {biddata.issu.map((issue, index) => (
                <Typography
                  key={index}
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#000000",
                    fontFamily: "Work sans",
                    lineHeight: "1.25",
                    textAlign: "left",
                  }}
                >
                  {issue}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
        {/* <Grid
          container
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <FormControl style={{ width: "100%" }}>
            <FormLabel
              id="service-offer-radio-buttons"
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                fontFamily: "Work Sans",
                lineHeight: "1.25",
                textAlign: "left",
              }}
            >
              Type of Service you offer
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="service-offer-radio-buttons"
              name="row-radio-button-grp"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <Grid container>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  item
                  xs={7}
                >
                  <FormControlLabel
                    value="Door Step Service"
                    style={{
                      padding: "0",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Work sans",
                    }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#CFCFCF",
                          "&.Mui-checked": { color: "#000000" },
                        }}
                      />
                    }
                    label="Doorstep Service"
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  item
                  xs={5}
                >
                  <FormControlLabel
                    value="Visit Store"
                    style={{
                      padding: "0",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Work sans",
                    }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#CFCFCF",
                          "&.Mui-checked": { color: "#000000" },
                        }}
                      />
                    }
                    label="Visit Store"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container>
          <FormControl style={{ width: "100%" }}>
            <FormLabel
              id="warranty-radio-button-grp"
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                fontFamily: "Work Sans",
                lineHeight: "1.25",
                textAlign: "left",
              }}
            >
              Warranty that you offer
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="warranty-radio-button-grp"
              name="row-radio-button-grp"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            >
              <Grid container>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  item
                  xs={7}
                >
                  <FormControlLabel
                    value="6 Month Warranty"
                    style={{
                      padding: "0",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Work sans",
                    }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#CFCFCF",
                          "&.Mui-checked": { color: "#000000" },
                        }}
                      />
                    }
                    label="6 Months warranty"
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  item
                  xs={5}
                >
                  <FormControlLabel
                    value="No Warranty"
                    style={{
                      padding: "0",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Work sans",
                    }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#CFCFCF",
                          "&.Mui-checked": { color: "#000000" },
                        }}
                      />
                    }
                    label="No warranty"
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", justifyContent: "flex-start" }}
                  item
                  xs={7}
                >
                  <FormControlLabel
                    value="3 Month Warranty"
                    style={{
                      padding: "0",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      fontFamily: "Work sans",
                    }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: "#CFCFCF",
                          "&.Mui-checked": { color: "#000000" },
                        }}
                      />
                    }
                    label="3 Months warranty"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid> */}
        {/* <Grid
          item
          style={{
            padding: "5px 0",
            display: "flex",
            justifyContent: "flex-start",
            margin: "5px 0",
          }}
        >
          <Typography
            style={{
              fontWeight: 500,
              fontSize: "16px",
              color: "#000000",
              fontFamily: "Work sans",
              lineHeight: "1",
            }}
          >
            Enter bid amount
          </Typography>
        </Grid> */}
        {/* <Grid
          form
          sx={{
            display: "flex",
            alignItems: "center",
            height: 34,
            border: "1px solid #B7B7B7",
            borderRadius: "5px",
            backgroundColor: "#F0EFEF",
          }}
        >
          <IconButton size="large" color="#333333" fontWeight="400">
            <CurrencyRupeeOutlinedIcon sx={{ color: "#000000" }} />
          </IconButton>
          <Divider
            sx={{ height: 28, m: 0.5, color: "#B7B7B7" }}
            orientation="vertical"
          />
          <InputBase
            sx={{
              m: 1,
              flex: 1,
              color: "#000000",
              fontWeight: "500",
              fontSize: "16px",
              fontFamily: "Work sans",
            }}
            inputProps={{ "area-label": "Enter amount" }}
            value={bidAmount}
            onChange={handleAmountChange}
          />
        </Grid> */}

      <form onSubmit={handleSubmit(onSubmit)}>
		<Grid container style={{ display: "flex", justifyContent: "flex-start", marginTop : '8px' }}>
          <FormControl style={{ width: "100%" }}>
            <FormLabel
              id="service-offer-radio-buttons"
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                fontFamily: "Work Sans",
                lineHeight: "1.25",
                textAlign: "left",
              }}
            >
              Type of Service you offer
            </FormLabel>
            <Controller
              control={control}
              name="serviceType"
              render={({ field }) => (
                <RadioGroup
                  row
                  aria-labelledby="service-offer-radio-buttons"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <Grid container>
                    <Grid style={{ display: "flex", flexDirection : 'column' , justifyContent: "flex-start" }} item xs={7}>
                      <FormControlLabel
                        value="Door Step Service"
                        style={{
                          padding: "0",
                          fontWeight: 400,
                          fontSize: "16px",
                          color: "#000000",
                          fontFamily: "Work sans",
                        }}
                        control={<Radio size="small" sx={{ color: "#CFCFCF", "&.Mui-checked": { color: "#000000" } }} />}
                        label="Doorstep Service"
                      />
                    </Grid>
                    <Grid style={{ display: "flex", justifyContent: "flex-start" }} item xs={5}>
                      <FormControlLabel
                        value="Visit Store"
                        style={{
                          padding: "0",
                          fontWeight: 400,
                          fontSize: "16px",
                          color: "#000000",
                          fontFamily: "Work sans",
                        }}
                        control={<Radio size="small" sx={{ color: "#CFCFCF", "&.Mui-checked": { color: "#000000" } }} />}
                        label="Visit Store"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
          </FormControl>
        </Grid>

					<Grid sx={{marginTop : '8px'}}>


		<Typography    style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
                fontFamily: "Work Sans",
                lineHeight: "1.25",
                textAlign: "left",
              }}>Add Bid details</Typography>		
        {fields.map((field, index) => (
          <div key={field.id} style={{display :'flex', alignItems : 'center', justifyContent : 'space-between', marginTop : '16px'}}>
            <FormControl sx={{width :'30%'}} margin="8px">
              <InputLabel>Quality</InputLabel>
              <Controller
                render={({ field }) => (
                  <Select {...field} sx={{ width: '100%' }}>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                  </Select>
                )}
                control={control}
                name={`qualities[${index}].quality`}
              />
            </FormControl>

            <TextField
              sx={{width : '30%'}}
              label="Amount"
              margin="8px"
              {...register(`qualities.${index}.amount`)}
            />

            <FormControl sx={{width : '25%'}}  margin="8px">
              <InputLabel>Warranty</InputLabel>
              <Controller
                render={({ field }) => (
                  <Select {...field} sx={{ width: '100%' }}>
                    <MenuItem value="6 Month Warranty">6 Months Warranty</MenuItem>
                    <MenuItem value="No Warranty">No Warranty</MenuItem>
                    <MenuItem value="3 Month Warranty">3 Months Warranty</MenuItem>
                  </Select>
                )}
                control={control}
                name={`qualities[${index}].warranty`}
              />
            </FormControl>

            <IconButton type="button" fontSize= "large" onClick={() => remove(index)}>
              <DeleteIcon/>
            </IconButton>
          </div>
        ))}

        <Button type="button" sx={{marginTop :'8px', justifySelf : 'flex-end'}}   onClick={() => append({ quality: '', amount: '' })}>
          Add
        </Button>

</Grid>
		<SubmitButtom
          type="submit"
          variant="contained"
		  fullWidth
          sx={{
            backgroundColor: "#505050",
            borderRadius: 5,
            border: "1px solid #C5C5C5",
			margin : '8px',
            fontSize: 16,
            "&:hover": { backgroundColor: "#505050" },
          }}
        >
          Submit
        </SubmitButtom>
      </form>

        {/* <Typography
          style={{
            textAlign: "left",
            fontWeight: "500",
            fontSize: "11px",
            color: "#000000",
            fontFamily: "Work sans",
          }}
        >
          Tamboola commission : ₹{bidAmount / 10}
        </Typography> */}
        {/* <Grid
          item
          style={{
            padding: "5px 0",
            display: "flex",
            justifyContent: "flex-start",
            margin: "5px 0",
          }}
        >
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#000000",
              fontFamily: "Work sans",
              lineHeight: "1",
            }}
          >
            Final bid Amount : ₹{B}
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default NewBid;
