import React from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";
import { logo } from "../assets";

const FooterWrapper = styled.footer`
  background: #0a192f;
  color: #8892b0;
  position: relative;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: #64ffda;
    font-family: "Playfair Display", serif;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #64ffda;
  }

  span {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  a {
    color: #8892b0;
    transition: color 0.3s ease;
    font-size: 1.5rem;

    &:hover {
      color: #64ffda;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  input {
    flex: 1;
    padding: 0.75rem;
    background: rgba(100, 255, 218, 0.05);
    border: 1px solid rgba(100, 255, 218, 0.1);
    color: #fff;
    border-radius: 4px;

    &::placeholder {
      color: #8892b0;
    }
  }

  button {
    background: #64ffda;
    color: #0a192f;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
    }
  }
`;

const FooterBottom = styled.div`
  background: rgba(100, 255, 218, 0.05);
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />

      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoContainer>
            <img src={logo} alt="Parshallnagar Youth Club" />
            <span>PYC</span>
          </LogoContainer>
          <p>
            Empowering youth through innovation, leadership, and community
            service.
          </p>
          <SocialIcons>
            <a href="#">
              <FiFacebook />
            </a>
            <a href="#">
              <FiTwitter />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#">
              <FiLinkedin />
            </a>
          </SocialIcons>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/programs">Our Programs</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Contact Info</h3>
          <p>
            Parshallnagar Poschim Para
            <br />
            Parshallnagar, Lohagora, Narail
          </p>
          <p>Email: contact@parshallyouth.com</p>
          <p>Phone: +880 1953-726489</p>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Newsletter</h3>
          <NewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
          <p>Get updates about our latest programs and events</p>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Parshallnagar Youth Club. All rights
          reserved.
          <div className="mt-2">
            <a href="/privacy" className="mx-2 hover:text-#64ffda">
              Privacy Policy
            </a>
            <a href="/terms" className="mx-2 hover:text-#64ffda">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
