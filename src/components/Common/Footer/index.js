import React from 'react'
import './style.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return (
//    <section>Footer Example 4</section>;
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Karan<span>Megha</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Compare</a>
				
					<a href="#">WatchList</a>
				
					<a href="#">Dashboard</a>
					
					{/* <a href="#">Faq</a>
					
					<a href="#">Contact</a> */}
				</p>

				<p class="footer-company-name">Copyright Karan @ 2023</p>
			</div>

			<div class="footer-center">

				{/* <div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div> */}

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9265569875</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">karanmegha99@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
  )
}

export default Footer;