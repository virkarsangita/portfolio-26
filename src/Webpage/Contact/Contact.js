
import './Contact.css';
import backgroundImage from '../../Asscets/Img/background.jpg';

function Contact() {
  return <>
      
    <div className="contact-section" id="contact"
    style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
  }}
    >
  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-info">
      <h5 className="contact-subtitle">Get In Touch</h5>
      <h2>Let's Connect</h2>

      <p>
        I'm always open to new opportunities, collaborations, or just a chat.
        Feel free to reach out anytime!
      </p>

      <div className="info-details">

        <div className="info-item">
          <span>📧</span>
          <div>
            <h4>Email</h4>
            <p>sangitavirkar2205@gmail.com</p>
          </div>
        </div>

        <div className="info-item">
          <span>💼</span>
          <div>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/sangita-virkar-6865a93b7" target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>

        <div className="info-item">
          <span>💻</span>
          <div>
            <h4>GitHub</h4>
            <a href="https://github.com/virkarsangita" target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="contact-form-container">
      <form className="contact-form">

        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit" className="send-btn">
          Send Message 🚀
        </button>

      </form>
    </div>

  </div>
</div>
    </>
  
}

export default Contact;