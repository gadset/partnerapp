import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Container, FormControlLabel, Switch } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

const OrderForm = () => {
  const { control, handleSubmit } = useForm();
  const signatureRef = React.useRef();
   const imageInputRef = React.useRef();

  const onSubmit = (data) => {
    // Handle form submission here
	const signatureData = signatureRef.current.toDataURL();

    // Capture the selected image file
    const imageFile = imageInputRef.current.files[0];

    // Combine the form data, signature data, and image file
    const formData = {
      ...data,
      signatureData,
      imageFile,
    };
    console.log(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="orderNumber">Order Number</InputLabel>
              <Controller
                name="orderNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    label="Order Number"
                    {...field}
                  >
                    <MenuItem value="123">123</MenuItem>
                    <MenuItem value="456">456</MenuItem>
                    <MenuItem value="789">789</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="phoneCondition">Phone Condition</InputLabel>
              <Controller
                name="phoneCondition"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    label="Phone Condition"
                    {...field}
                  >
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Fair">Fair</MenuItem>
                    <MenuItem value="Poor">Poor</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
         <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="powerButton"
                  control={control}
                  defaultValue={false} // Set the default value to false
                  render={({ field }) => (
                    <Switch
                      {...field}
                      color="primary"
                    />
                  )}
                />
              }
              label="Power Button Working"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Controller
                  name="network"
                  control={control}
                  defaultValue={false} // Set the default value to false
                  render={({ field }) => (
                    <Switch
                      {...field}
                      color="primary"
                    />
                  )}
                />
              }
              label="Network Working"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
			  
            >
              Upload Image File
              <input
                type="file"
                style={{ display: 'none' }}
				  ref={imageInputRef}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <SignatureCanvas
              ref={signatureRef}
              penColor="black"
              canvasProps={{ width: 400, height: 200 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                signatureRef.current.clear();
              }}
            >
              Clear Signature
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default OrderForm;
