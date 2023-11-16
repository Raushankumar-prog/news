import './App.css';
import  Home from './Components/Home';
import World_news from './Components/World_news';
import Big_industry from './Components/Big_industry';
import Finance from './Components/Finance';
import Space_news from './Components/Space_news';
import War from './Components/War';
import Entertainment from './Components/Entertainment';
import Sports from './Components/Sports';
import Infrastructure from './Components/Infrastructure';
import  Natural_beauty from './Components/Natural_beauty';
import  Technology from './Components/Technology';
import  Market from './Components/Market';
import  Politics  from './Components/Politics';
import Putin from './Components/Putin';
import ISROFUTURE from './page/isrofuture';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { Routes, Route, Link } from 'react-router-dom';
import {Box,Typography,ButtonGroup,Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
function App() {
  
      
         const dropdownonclick=()=>{
         const dropdownnavvar=document.getElementById('drop-down-box');
         const computedStyle=window.getComputedStyle(dropdownnavvar);
         const displayStyle=computedStyle.getPropertyValue('display');

         if(displayStyle==='none'){
            dropdownnavvar.style.display='flex';
         }
         else{
         dropdownnavvar.style.display='none';
          
         }
 };
 

  return (
    <>
     <div className="topheader">
    
       <ButtonGroup sx={{width:'100%'}} >
         <Button  variant='text' onClick={dropdownonclick} sx={{fontSize:'20px',color:'white',borderRadius:'20px',
         width:'3%',marginLeft:'10%'}} className='logo_button'aria-label="it is logo button"  disableRipple>
       
         <div className='logo_button'><DensitySmallIcon/></div></Button>
         <Button  variant='text' size='small' sx={{marginLeft:'11%'}}>
         <Typography className='unique' sx={{fontFamily:'cursive',fontSize:'2.5vw',paddingLeft:'4px'}}>UNIQUE</Typography>
         <Typography  sx={ {transform:'rotateZ(90deg)', color:'yellow', fontFamily:'cursive',fontSize:'1.5vw'}}>sea</Typography>
         <Typography sx={{fontFamily:'cursive',fontSize:'1.5vw'}}>.com</Typography></Button>
         <div className='icon'  >
          <ButtonGroup>
        <Button variant='text'  sx={{color:' #E4405F',marginLeft:'50%'}} href="https://instagram.com/___.raushan__?igshid=MzNlNGNkZWQ4Mg==">
          <InstagramIcon  fontSize="large"  disableRipple >
          </InstagramIcon></Button> 
          <Button variant='text' fontSize="large"><YouTubeIcon/></Button>
           <Button variant='text' fontSize="large"><TwitterIcon/></Button>
           <Button variant='text' fontSize="large"><TelegramIcon/></Button>
           </ButtonGroup>
           </div>
      </ButtonGroup>
     
      </div>
    
     

       <div className="header">
        
        <nav id="heading">
       
         <Link to="/news" className='remove'><HomeIcon color='alert' size='medium' ></HomeIcon><span className="separator"></span></Link>
         <Link to="/World_news" className='remove'>world_news<span className="separator"></span></Link>
         <Link to="/big_industry" className="remove">big_industry<span className="separator"></span></Link>
      
         <Link to="/Finance" className="remove">Finance<span className="separator"></span></Link>
         <Link to="/space_news" className="remove">space_news<span className="separator"></span></Link>
          
         <Link to="/wars" className="remove">wars<span className="separator"></span></Link>
         <Link to="/entertainment" className="remove">entertainment<span className="separator"></span></Link>
         <Link to="/sports" className="remove">sports<span className="separator"></span></Link>
         <Link to="/infrastructure" className="remove">Infrastructure<span className="separator"></span></Link>
           
         <Link to="/Natural_beauty" className="remove">Natural_beauty<span className="separator"></span></Link>
         <Link to="/technology" className="remove">technology<span className="separator"></span></Link>
         <Link to="/market" className="remove">market<span className="separator"></span></Link>
         <Link to="/politics" className="remove">politics<span className="separator"></span></Link>
      </nav>
      </div>

 <Box sx={{width:'100%',height:'80%',border:'3px solid red',float:'left',backgroundColor:'black',display:'none'}}  id="drop-down-box" >
          <ButtonGroup orientation="vertical" className="navboss" >
            <Button variant='text' id="navbutton"  href="/news">home</Button>
             <Button variant='text'  id="navbutton" href="/World_news" disableRipple>World_news</Button>
              <Button variant='text'  id="navbutton" href="/big_industry"disableRipple>Big_industry</Button>
               <Button  variant='text'  id="navbutton"href="/Finance"disableRipple>Finance</Button>
                <Button variant='text'  id="navbutton" href="/space_news"disableRipple>Space_news</Button>
                 <Button variant='text' id="navbutton"href="/wars"disableRipple>Wars</Button>
                  <Button variant='text'  id="navbutton" href="/entertainment"disableRipple>Entertainment</Button>
                   <Button variant='text'  id="navbutton" href="/sports"disableRipple>Sports</Button>
                    <Button variant='text'  id="navbutton" href="/infrastructure"disableRipple>Infrastructure</Button>
                     <Button variant='text' id="navbutton" href="/natural_beauty"disableRipple>Natural_beauty</Button>
                     
                      <Button variant='text' id="navbutton" href="/technology "disableRipple>technology</Button>
                       <Button variant='text'  id="navbutton"href="/market" disableRipple>market</Button>
                        <Button  variant='text'id="navbutton" href="/politics" disableRipple>politics</Button>
          
</ButtonGroup>
  </Box>
      <Routes>
        <Route path="/news" element={<Home/>}/>
        
        <Route path="Home/ISROFUTURE" element={<ISROFUTURE/>}/>
        <Route path="Home/Putin" element={<Putin/>}/>
        <Route path="World_news" element={<World_news/>} />
        <Route path="big_industry" element={<Big_industry/>} />
        <Route path="Finance" element={<Finance/>} />
        <Route path="space_news" element={<Space_news/>} />
        <Route path="wars" element={<War/>} />
        <Route path="entertainment" element={<Entertainment/>} />
        <Route path="sports" element={<Sports/>} />
        <Route path="infrastructure" element={<Infrastructure/>} />
        <Route path="Natural_beauty" element={<Natural_beauty/>} />
        <Route path="technology" element={<Technology/>} /> 
        <Route path="market" element={<Market/>} />
        <Route path="politics" element={<Politics/>} />
        
      </Routes>
      
      <div className="footer" >
         <div id="using">you can see about us and our privacy policy in the footer section.</div>
         <hr className="footer_hr"></hr>
          <nav className='footer_navigation'>
       
         <Link to="" className='foot_remove'>About_us</Link>
         <Link to="/World_news" className='foot_remove'>Terms_and_condition</Link>
         <Link to="/big_industry" className="foot_remove">Privacy_policy</Link>
      
         <Link to="/finance" className="foot_remove">Cookies_policy</Link>
         <Link to="/space_news" className="foot_remove">Advertise_with_us</Link>

        </nav>
        <hr className="footer_hr" ></hr>
      </div>
     
    </>

  );
}

export default App;