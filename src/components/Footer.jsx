import React from 'react'
import { Link } from "react-router-dom";
import '../style.css'
import '../footer.css'
function Footer() {

  const scrollTocomponet = (id) => {
    const aboutSection = document.getElementById(id);
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='Footer'>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Info</h4>
            <ul>
              <li><Link onClick={function() { scrollTocomponet('about')}}>about Me</Link></li>
              <li><Link onClick={function() { scrollTocomponet('Services')}}>our services</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a rel="noreferrer"  target='_blank' href='https://www.google.com/search?q=who+is+a+front+end+developer&sca_esv=595535496&sxsrf=AM9HkKlj6xmnMnSY-XnG-fGjh4A2J1tJ2Q%3A1704333406549&ei=XhCWZaSeIcPE4-EP76KtKA&oq=who+is+a++developer&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3dobyBpcyBhICBkZXZlbG9wZXIqAggEMgYQABgHGB4yBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkjATFCyJFjpMnABeAGQAQCYAY8BoAH3CKoBBDAuMTC4AQPIAQD4AQHCAgoQABhHGNYEGLADwgITEC4YgAQYigUYQxjHARjRAxiwA8ICDRAAGIAEGIoFGEMYsAPCAgcQIxiwAhgnwgIHEAAYgAQYDcICCxAAGIAEGIoFGIYD4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp'>Frontend Development</a></li>
              <li><a rel="noreferrer"  target='_blank' href='https://www.google.com/search?q=who+is+a+back+end+developer&sca_esv=595535496&sxsrf=AM9HkKmDSo5RB-egKeADKaRoTp7Ru83wZg%3A1704333420421&ei=bBCWZeitGcCc4-EPtv2PuAQ&oq=who+is+a++end+developer&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3dobyBpcyBhICBlbmQgZGV2ZWxvcGVyKgIIATIGEAAYBxgeMgYQABgHGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNI2ClQixNY0xtwAXgBkAEAmAGAAaABsQSqAQMwLjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICBxAjGLACGCfiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp' >Backend Development</a></li>
              <li><a rel="noreferrer"  target='_blank' href='https://www.google.com/search?q=who+is+a+full+stack+developer&sca_esv=595535496&sxsrf=AM9HkKmFXYfEPHiJVjTSWgVeHKqO_LAzUA%3A1704333354687&ei=KhCWZfDFKYL34-EP9Muh-AI&oq=who+full+stack+developer&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHdobyBmdWxsIHN0YWNrIGRldmVsb3BlcioCCAAyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAgYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSIcaUPMHWIkOcAF4AZABAJgBhQGgAeIDqgEDMC40uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAgcQIxiwAhgnwgINEAAYgAQYDRixAxixA8ICBxAAGIAEGA3CAg0QABiABBgNGLEDGIMBwgIIEAAYCBgHGB7iAwQYACBBiAYBkAYK&sclient=gws-wiz-serp'>Full Stack Development</a></li>
              <li><a rel="noreferrer"  target='_blank' href='https://www.google.com/search?q=who+is+a+ui+ux+developer&sca_esv=595535496&sxsrf=AM9HkKmm7x68aDg75Gqe-LkvGghkDFGpjA%3A1704333456882&ei=kBCWZYy7Nb6b4-EPjoCKoAw&ved=0ahUKEwiMw5ry0MKDAxW-zTgGHQ6AAsQQ4dUDCBA&uact=5&oq=who+is+a+ui+ux+developer&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHdobyBpcyBhIHVpIHV4IGRldmVsb3BlcjIEEAAYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSOomUOcFWOohcAF4AZABAJgBiQGgAa8LqgEEMy4xMLgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgcQABiABBgNwgIHECMYsAIYJ8ICBhAAGAcYHsICCBAAGAgYHhgNwgIIEAAYCBgHGB7CAgsQABiABBiKBRiRAsICBRAAGIAE4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp'>UI/UX Designing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="tel:7025620935">PH : 7025620935</a></li>
              <li><a href="mailto:ajinvr44@gmail.com" >Email : ajinvr44@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href='/notfound'><i className="fab fa-facebook-f"></i></a>
              <a rel="noreferrer"  target='_blank' href="https://www.instagram.com/ajin_vr_?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i></a>
              <a rel="noreferrer"  target='_blank' href="https://www.linkedin.com/in/ajin-vr"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer