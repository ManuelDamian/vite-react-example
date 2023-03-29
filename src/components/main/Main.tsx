import { Container, Box, Card, CardContent } from "@mui/material";
import React from "react";
import SedansPart from "../sedans/Sedans";
import SuvsPart from "../suvs/Suvs";
import LuxaryPart from "../luxary/Luxary";
import "./Main.css";

const main = () => {
  // <Card className="PartsConteiner">
  //     <CardContent className="content">
  //         <SedansPart/>
  //         <SuvsPart/>
  //         <LuxaryPart/>
  //     </CardContent>
  // </Card>

  return (
    <Container className="main-content">
      <Box className="card-container"> 
        <Card className="card-item">
          1
        </Card>
        <Card className="card-item">
          2
        </Card>
        <Card className="card-item">
          3
        </Card>
      </Box>
    </Container>
  );
};

export default main;
