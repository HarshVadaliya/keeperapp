import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
	  <div>
		<p>Copyright ⓒ {year} Harsh Vadaliya</p>
        <p>Made with <i class="fas fa-heart colored"></i> in Rajkot.</p>
        <a style={{ textDecoration: 'none' }} href="https://harshvadaliya.herokuapp.com/" class="text-dark link"><p>www <i class="fas fa-dice-d6"></i> Harsh <i class="fas fa-dice-d6"></i> com</p></a>
      </div>		
    </footer>
  );
}

export default Footer;
