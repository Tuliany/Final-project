import React from 'react'
import '../Style/Footer.css'

export const Footer =()=> {
  return (
    <footer class="grid">
    <div class="branding">
      <h11>W club official</h11>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       <p>Copyright &copy; 2020 W club official</p>
    </div>
    
    <div class="social">
      <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
      <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
      <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
      <a href="#"><i class="fa fa-pinterest fa-2x"></i></a>
      <a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
    </div>
    
    <div class="contact">
      <p><i class="fa fa-phone fa-2x"></i> 55 555-5555</p>
      <p><i class="fa fa-envelope fa-2x"></i> mail@mail.mail</p>
    </div>
  </footer>
  
  );
}
