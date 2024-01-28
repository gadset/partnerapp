import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./Homebox.css";

const Typo = styled(Typography)`
  &:before {
    border: none !important;
  }
`;

const HomeBox = ({ boxname, count, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Grid
        item
        style={{
          color: "#B7B7B7",
          height: "100px",
          backgroundColor: "#F4F4F4",
          border: "1px solid #B7B7B7",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "15px",
          padding: "15px 10px 15px 20px",
          width: "100%",
          textDecoration: "none",
        }}
      >
        <Typography
          className="typo"
          style={{
            fontFamily: "Work Sans",
            fontSize: "40px",
            fontWeight: "300",
            color: "#000000",
            lineHeight: 1,
            "&:before": { border: "none !important" },
          }}
        >
          {count}
        </Typography>
        <Typography
          style={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: "500",
            color: "#333333",
            lineHeight: 1,
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
          }}
        >
          {boxname}
        </Typography>
      </Grid>
    </Link>
  );
};

export default HomeBox;
