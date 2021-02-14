import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";

/*
* FooterComponent is to display additional footer component and social media handles of the creator.
*/

export default function FooterComponent() {
  return (
    <footer id="footer">
      <center>
        Made with ❤️ by Manas Arora ©️ 2021
        <br />
        <a href="https://www.linkedin.com/in/manasarora98/">
          <img src={Linkedin} height="30px" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/manasarora98">
          <img src={Instagram} height="30px" />
        </a>
      </center>
    </footer>
  );
}
