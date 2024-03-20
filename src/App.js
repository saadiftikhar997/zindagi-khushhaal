import logo from './Zindagi_Khushhaal_Logo_Transparent.png';
import './App.css';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
  <IconButton
    aria-label="Facebook"
    onClick={() => window.open('https://www.facebook.com/zindagikhushhaal')}
  >
    <FacebookIcon style={{ color: "black" }}/>
  </IconButton>

  {/* <IconButton
    aria-label="Twitter"
    onClick={() => window.open('https://twitter.com/yourhandle')}
  >
    <TwitterIcon style={{ color: "black" }}/>
  </IconButton> */}

  <IconButton
    size="large"
    aria-label="Instagram"
    onClick={() => window.open('https://www.instagram.com/zindagikhushhaal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')}
  >
    <InstagramIcon style={{ color: "black" }} size="large"/>
  </IconButton>
</div>

      </header>
    </div>
  );
}

export default App;
