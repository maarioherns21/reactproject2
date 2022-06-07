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
// import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <Grid
            item
            xs={12}
            lg={20}
            position="relative"
            px={0}
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { rgba, linearGradient } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                <MKTypography variant="h3" color="white" mb={1}>
                  Contacta Nuestro Equipo
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                  Envíenos un mensaje y nuestro Equipo le respondera dentro de 24 horas.
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    <div>
                      (443) 181 7313 <br />
                      (443) 223 3568
                    </div>
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    gpasesoriaintegral@hotmail.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Morelia, Mich
                  </MKTypography>
                </MKBox>
                <MKBox mt={3}>
                  <MKButton variant="text" href="" color="white" size="large">
                    <i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" href="" color="white" size="large">
                    <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" href="" color="white" size="large">
                    <i className="fab fa-dribbble" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" href="" color="white" size="large">
                    <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
