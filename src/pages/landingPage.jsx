import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { Navigate, useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { color } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Google from '../asserts/plays.svg'
import Apple from '../asserts/apple.svg'
import '../components/landingPage.css'
import Card from '@mui/material/Card';


const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const moveSlide = setInterval(() => {
      if (slideIndex === dataSlider.length) setSlideIndex(1);
      else setSlideIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
    }, 4000);

    return () => clearInterval(moveSlide);
  }, [dataSlider.length]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CARS24
            </Typography>

            <Button color="inherit">
              <Link to="/login" id='lon' >
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <div className="container-slider">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  src={process.env.PUBLIC_URL + `/Imgs1/img${index + 1}.jpg`}
                />
              </div>
            );
          })}
          {/*<BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>*/}

          <div className="container-dots">
            {Array.from({ length: 5 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </div>
     
        <form id='for'>
          <div>
            <h1 id='krv'><b>Welcome To CARS24</b></h1>
          </div>
        </form>
      </Box>
    <div  className="card-hotel">
        <Stack direction="row" spacing={2}>
          <Box>
            <CardActionArea sx={{ maxWidth: 375 }} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image="https://assets.cars24.com/production/c2b-website/230524162458/js/05fa29738dae540689da4b0c6347a602.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Easy Financing Options
                </Typography>
              
                <Typography variant="body2" color="text.secondary">
                Planning for any big monetary expenditure takes a lot of consideration. Buy it up front or on loan? Short-term EMI or long-term? To make it simpler for you, CARS24 offers flexible finance options so you can buy your next car your way. You can opt for up to 6 year loan tenure, with zero down payment for eligible customers and lowest EMI options. So don’t pass on your dream car for a lack of immediate funds.
                </Typography>
              </CardContent>
            
            </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 375 }} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image="https://assets.cars24.com/production/c2b-website/230524162458/js/88440a417a25b2afa28eaf1fe1be3d94.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                12-Month Warranty
                </Typography>
               
                <Typography variant="body2" color="text.secondary">
                We strive to ensure that you have a stress-free ownership experience when you buy a car from CARS24. To achieve this, we refurbish each vehicle after conducting a thorough 140-point inspection to ensure they are ready for the road. In addition to this, we provide a 12-month warranty on each car we sell so you don’t need to worry about any unforeseen maintenance or repair costs.
                </Typography>
              </CardContent>
              
            </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 375 }}  >
              <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image="https://assets.cars24.com/production/c2b-website/230524162458/js/d829037c21069055d7cc0afc1a6fdfde.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                7-Day Return
                </Typography>
               
                <Typography variant="body2" color="text.secondary">
                Buying a car is always an exciting decision, but we understand that sometimes things don’t work out. We ensure every car we sell goes through a thorough inspection, refurbishment and service, but you may still feel like the car you bought is not for you. Although we hope that never happens, we offer easy 7-day returns (as long as the car has run less than 500 km) in case the car is not right for you.
                </Typography>
              </CardContent>
           
            </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 375 }} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image="https://assets.cars24.com/production/c2b-website/230524162458/js/afe81fe1521e66f42716262bcf10ff93.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                140-Quality Checks
                </Typography>
             
                <Typography variant="body2" color="text.secondary">
                At CARS24, we ensure that every car we procure undergoes a thorough inspection across 140 parameters. Each car is then given a full service and is refurbished to as good as new by CARS24 experts at our Mega Refurbishment Labs (MRL), where any defects are corrected. This ensures your car is ready to hit the road and you can drive with peace of mind without worrying about breakdowns.
                </Typography>
              </CardContent>
            
            </CardActionArea>
          </Box>
            </Stack>
            
            </div>
            <div class="" >
  <div class="card-box">
  
    <div class="">
      <div class="war">
        <h1 class=""><b>Why CARS24?</b></h1><br></br>
        <Typography variant="body2" color="text.secondary">
          <h3> We provide the best experience for car buyers by offering a wide assortment of certified cars that are home delivered in a click of a button while sellers get the best price of their vehicles in less than 1 hour.We've brought together cutting-edge technology with country-wide partners and more importantly, deep understanding of what buyers and sellers need. </h3>
              </Typography>
      
      </div>
    </div>
    <div class="flex-img">
      <img src="https://assets.cars24.com/production/c2b-website/230525210612/js/281d2157126e4b58778fb27d76a6cc3f.jpg" class="photo" />
    </div>
  </div>
 </div>
 <form id='hat'>
  <div>
    <h1><b>Exclusive Brands</b></h1>
  </div>
 </form>
 <div class="card-hotel">
 <Stack direction="row" spacing={2}>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://c4.wallpaperflare.com/wallpaper/762/50/535/cars-ford-wallpaper-preview.jpg"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://seeklogo.com/images/T/toyota-logo-BABAD47941-seeklogo.com.png"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://vectorseek.com/wp-content/uploads/2020/12/Honda-Logo-Vector-scaled.jpg"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://www.carlogos.org/logo/Hyundai-logo-silver-2560x1440.png"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/kininb6m4imxda6ppnxu"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://logos-world.net/wp-content/uploads/2021/04/Renault-Logo-2015-2021.png"
              />
              </CardActionArea>
          </Box>
          <Box>
            <CardActionArea sx={{ maxWidth: 240}} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://www.logolynx.com/images/logolynx/65/658310d2ca10995259e3e9048211292e.jpeg"
              />
              </CardActionArea>
          </Box>
  </Stack>
 </div>
 <div class="foot">
  <Stack direction="row" spacing={2}>
  <Box id='ve'>
  <CardContent>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                KEEP IN TOUCH
                </Typography>
                <Typography gutterBottom variant="h6" color={"white"} component="div" >
                <FacebookIcon /><TwitterIcon id='ap'/><YouTubeIcon id='ap'/><LinkedInIcon id='ap'/><InstagramIcon id='ap'/>
                </Typography>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                EXPERIENCE CARS24 APP ON MOBILE
                {/*<img src={Google} />*/}
                </Typography>
              
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                POWERED BY CARS24
                </Typography>
             
                
              </CardContent>
          </Box>
          <Box>
         <CardContent>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                USEFUL LINKS
                </Typography>
                <Typography variant="body2" color="WHITE">
                  About Us | Security | Motor insurance |About Us |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Privacy Policy | Terms and Conditions | FAQ |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Testimonials | Blog | Branches | We' re Hiring! |  
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Become Our Partner | Need a Loan |   
                </Typography>
                <Typography variant="body2" color="WHITE">
                  RC Transfer Status | CARS24 Finance | Investors 
                </Typography>
               
              
             </CardContent>
          </Box>
  <Box>
         <CardContent>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                TOP CITIES
                </Typography>
                <Typography variant="body2" color="WHITE">
                  New Delhi | Mumbai | Bangalore |Hyderabad |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Ahmedabad | Gurgaan | Chennai | Pune | Noida |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Ghaziabad | Lucknow | Jaipur | Kolkata | Kochi |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Indore 
                </Typography><br></br>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                OTHER GEOGRAPHIES
                </Typography>
                <Typography variant="body2" color="WHITE">
                  UAE | Thailand | Australia 
                </Typography>
             </CardContent>
          </Box>
  <Box>
         <CardContent>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                POPULAR SEARCHES
                </Typography>
                <Typography variant="body2" color="WHITE">
                  CARS24 Pricing | Sell Used Car |
                </Typography>
                <Typography variant="body2" color="WHITE">
                  Vehicle Ownership Transfer | Used Car Valuation 
                </Typography>
                <Typography variant="body2" color="WHITE">
                  New Launches | Electric Cars |Hybrid EVs 
                </Typography>
              
             
             </CardContent>
          </Box>
  <Box>
         <CardContent>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                 CONTACT US
                </Typography>
                <Typography variant="body2" color="WHITE">
                 <CallIcon/> 7685830340
                </Typography><br></br>
                <Typography gutterBottom variant="h6" color={"white"} component="div">
                 EMAIL ID
                </Typography>
                <Typography variant="body2" color="WHITE">
                 <EmailIcon/> Cars24@gmail.com
                 
                </Typography>
               
              
             
             </CardContent>
          </Box>
        
          </Stack>
 </div>
     
            
      </>
  );
};
export default Home;
