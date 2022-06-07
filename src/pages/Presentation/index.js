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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections

import Testimonials from "pages/Presentation/sections/Testimonials";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/conta.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Jaquinde & Asociados{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Nuestra visión es proveer de un servicio confidencial, ético, profesional, organizado,
              serio y con el mejor rendimiento, ofreciendo excelencia a un precio razonable.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="people"
                title=""
                description="SERVICIOS DE INCORPORACIÓN Y CONSTITUCIÓN DE PERSONAS MORALES"
                action={{
                  type: "external",
                  route: "/servicio/1",
                  label: "Lee mas",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="address_card"
                title=""
                description="PREPARACIÓN DE DECLARACIONES FISCALES EMPRESARIALES E INDIVIDUALES"
                action={{
                  type: "external",
                  route: "/servicio/2",
                  label: "Lee mas",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="check"
                title=""
                description="RESOLUCIÓN Y ASISTENCIA EN PROBLEMAS FISCALES"
                action={{
                  type: "external",
                  route: "/servicio/3",
                  label: "Lee mas",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="copy"
                title=""
                description="INTERMEDIACIÓN DE NÓMINAS"
                action={{
                  type: "external",
                  route: "/servicio/4",
                  label: "Lee mas",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="money"
                title=""
                description="SERVICIOS CONTABLES"
                action={{
                  type: "external",
                  route: "/servicio/5",
                  label: "Lee mas",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="dark"
                icon="badge"
                title=""
                description="TRAMITE DE LICENCIAS Y PERMISOS"
                action={{
                  type: "external",
                  route: "/servicio/6",
                  label: "Lee mas",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Grasias por confiar en nosotros
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Siempre ofrecemos los mejores servicios
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="tel:443-223-3568"
                  target=""
                  color="whatsapp"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-whatsapp" />
                  &nbsp;Contactanos
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/rafael.jacuindeguerrero.7"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Visítanos
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="mailto:gpasesoriaintegral@hotmail.com"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-google" />
                  &nbsp;Escribenos
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
