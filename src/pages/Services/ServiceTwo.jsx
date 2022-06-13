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
import bgImage from "assets/images/service2.jpg";

export default function ServiceTwo() {
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
                PREPARACIÓN DE DECLARACIONES FISCALES EMPRESARIALES E
                INDIVIDUALES
              </MKTypography>
            </MKBox>
            <MKBox my={2} p={5}>
              <MKTypography item xs={12} lg={4} color="black">
                <p>
                  Hacer una declaración de impuestos puede tornarse una tarea
                  compleja, y sofisticada que requiere la asistencia de un
                  profesional.
                </p>
                <p>
                  Una Declaración Fiscal, Es un reporte,
                  típicamente, anual, que deben presentar todas las personas
                  físicas y morales a institutos gubernamentales típicamente hacienda del estado,
                  para informarle cuestiones relevantes a lo que son los
                  ingresos, gastos, utilidades, y demás información financiera,
                  cuando el gobierno requiere.
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
