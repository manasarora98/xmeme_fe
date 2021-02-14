import Grid from "@material-ui/core/Grid";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/xlogo.svg";
import DarkModeToggle from "./DarkModeToggle";

/*
* HeaderComponent is to display navigation bar on the home page along with Brand title and logo, contains the Dark Mode toggle option as well.
*/

export default function HeaderComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Grid xs={2}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Memes
        </Navbar.Brand>
      </Grid>
      <Grid xs={8}></Grid>
      <Grid xs={7}></Grid>
      <Grid xs={2}>
        <DarkModeToggle />
      </Grid>
    </Navbar>
  );
}
