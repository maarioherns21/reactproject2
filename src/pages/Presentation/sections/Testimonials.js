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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={18}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">
            Con la experiencia de mas de{" "}
          </MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            30 años sirviendo
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Somos especialistas en temas contables y fiscales, con experiencia
            en diversas cuestiones tanto personales como de negocio.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Favian Reyes"
              date="1 dia atras"
              review="Exelente servicio de contaduría , muy buena atención y eficaces a la hora de hacer su trabajo."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Carlos Gutierrez"
              date="1 semana atras"
              review="Un excelente servicio, gracias por el trato tan amable y profesionalismo"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Paola Vasquez"
              date="3 semanas atras"
              review="Ampliamente recomendados!!"
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
