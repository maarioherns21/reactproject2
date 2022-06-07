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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import Jaquinde from "assets/images/Jaquinde.jpg";
import Jaquinde2 from "assets/images/Jaquinde2.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              El Equipo Ejecutivo
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              SOMOS ESPECIALISTAS EN TEMAS DE IMPUESTOS. TODA TU CONTABILIDAD
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Jaquinde2}
                name="Rafael Jacuinde Guerrero"
                position={{ color: "info", label: "CP Director" }}
                description="Cuenta con más de tres decadas de experiencia, asistiendo a contribuyentes con servicios contables, preparación de declaraciones fiscales, estructuración de negocios, resolución de problemas y representación con autoridades, entre otros."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={Jaquinde}
                name="Rafael Jacuinde Martinez"
                position={{ color: "info", label: "CP Sub director" }}
                description="Cuenta con una decada de experiencia, asistiendo a contribuyentes con servicios contables, preparación de declaraciones fiscales, estructuración de negocios, resolución de problemas y representación con autoridades, entre otros"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
