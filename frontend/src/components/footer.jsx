import { Grid, Link, Typography } from "@mui/material";
import "./FooterStyle.css";
function Footer() {
  return (
    <div>
      <Grid container className="footer">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" align="center"> About us</Typography>
          <Typography>We provide quality education to all kinds of students. </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" align="center"> Careers</Typography>
          <Typography align="center">career@teacherspot.online</Typography>
        </Grid>
    
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" align="center"> Contact Us</Typography>
          <Typography align='center'>       <Link align='justify' underline="hover" href='https://www.linkedin.com/in/shibu-a-554708116/' color="inherit">Linkedin</Link></Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Footer;
