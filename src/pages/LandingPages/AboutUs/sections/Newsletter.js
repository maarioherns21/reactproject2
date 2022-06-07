/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import macbook from "assets/images/Historia.jpg";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sm={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h2">Nuestra Historia</MKTypography>
            <MKTypography variant="body1" color="text" mb={2} my={2}>
              Nuestra visión es proveer de un servicio confidencial, ético, profesional, organizado,
              serio y con el mejor rendimiento, ofreciendo excelencia a un precio razonable. Cuenta
              con más de una decada de experiencia, asistiendo a contribuyentes con servicios
              contables, preparación de declaraciones fiscales, estructuración de negocios,
              resolución de problemas y representación con autoridades, entre otros.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="70%" height="60%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
