// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/service1.png";

export default function ServiceOne() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" height="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="sm"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="dark"
              coloredShadow="dark"
              borderRadius="sm"
              p={2}
              mx={2}
              mt={1}
            >
              <MKTypography item variant="h3" color="white">
                SERVICIOS DE INCORPORACIÓN Y CONSTITUCIÓN DE PERSONAS MORALES
              </MKTypography>
            </MKBox>
            <MKBox my={2} p={5}>
              <MKTypography item xs={12} lg={4} color="black">
                <p>
                  Al momento de finalizar la constitución de la persona moral,
                  es necesario dar de alta la empresa, con autoridades de nivel
                  federal, estatal, ciudad y en ciertas ocasiones condado.
                  También primordial será elegir el régimen tributario general,
                  con o sin fines de lucro. Una vez establecido el régimen
                  general, se registra a la empresa con Hacienda Federal,
                  conocido como Servicio Interno de Recaudación de Estado
                  Agencias Estatales.
                </p>
                <p>
                  Ofrecemos servicios de incorporación y constitución de
                  personas Morales, de diversos tipos, entre ellos: Corporación
                  “C”, Corporación “S”, Sociedades Civiles, Régimen de Persona Física Organización sin Fines
                  de Lucro, y trabajamos en colaboracion con abogados para
                  manejar el aspecto fiscal de cualquier Fidecomiso.
                </p>
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
