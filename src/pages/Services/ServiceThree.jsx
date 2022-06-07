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
import bgImage from "assets/images/service3.png";

export default function ServiceThree() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
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
                RESOLUCIÓN Y ASISTENCIA EN PROBLEMAS FISCALES
              </MKTypography>
            </MKBox>
            <MKBox my={2} p={5}>
              <MKTypography item xs={12} lg={4} color="black">
                <p>
                  Nuestra firma te brindará el servicio para llevar el proceso con las autoridades
                  garantizando un correcto manejo de la situación. Contamos con experiencia y
                  habilidad, para representar a clientes antes agencias Federales, Estatales y
                  Locales, entre ellas, Hacienda Federal, Y Agencias diversas del Estado.
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
