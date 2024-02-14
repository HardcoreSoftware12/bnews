import React from 'react'

function Footer() {
  return (
  <>
  
  <footer class="footer-distributed">
  
        <div class="footer-left">
  
          <h3>Bharat<span>News</span></h3>
  
          <p class="footer-links" className='font-semibold flex justify-start gap-3'>
            <a href="/" class="link-1">Home</a>
            
            <a href="">Blog</a>
          
            <a href="#">Pricing</a>
          
            <a href="#">About</a>
            
            <a href="#">Faq</a>
            
            <a href="">Contact</a>
          </p>
  
          <p class="footer-company-name" className='font-semibold mt-2'>Bharat News © 2015</p>
        </div>
  
        <div class="footer-center">
  
          <div >
            <i class="fa fa-map-marker"></i>
            <p><span>Somewhere on planet earth</span> some street name</p>
          </div>
  
          <div>
          <i class="fa fa-phone"></i>
            <p>+918310688615</p>
          </div>
  
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
          </div>
  
        </div>
  
        <div class="footer-right">
  
          <p class="footer-company-about" >
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
  
          <div class="footer-icons">
  
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
  
          </div>
  
        </div>
  
      </footer>
      </>
  )
}

export default Footer