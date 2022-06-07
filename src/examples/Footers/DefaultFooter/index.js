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

function DefaultFooter() {
  return (
    <MKBox component="footer">
      <Container>
        <Grid container my={10} spacing={3}>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <MKTypography variant="button" fontWeight="regular">
              All rights reserved. Copyright &copy; 2022 By{" "}
              <MKTypography
                component="a"
                href="https://mariohernandez.herokuapp.com/mains"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
              >
                Mario Hernandez
              </MKTypography>
              .
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DefaultFooter;
