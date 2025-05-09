import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { drug } from "../assets"; // Replace with your image path

const HeroWrapper = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding: 0 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Headline = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;

  span {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subheadline = styled.p`
  font-size: 20px;
  color: #8892b0;
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.2s;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform: translateX(30px);
  opacity: 0;
  animation: fadeInRight 1s ease forwards 0.4s;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #64ffda20, transparent);
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.6s;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 32px;
    color: #64ffda;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #8892b0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const CtaButton = styled.button`
  background: #64ffda;
  color: #0a192f;
  padding: 16px 40px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.8s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background: #52e0c4;
    box-shadow: 0 10px 30px rgba(100, 255, 218, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Custom hook for count animation
const useCount = (target, duration) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

const Hero = () => {
  const membersCount = useCount(500, 2000);
  const eventsCount = useCount(100, 2000);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <HeroWrapper>
        <ContentContainer>
          <TextContent>
            <Headline>
              Empowering <span>Future Leaders</span> of Tomorrow
            </Headline>
            <Subheadline>
              At Parshallnagar Youth Club, we cultivate innovation, leadership,
              and community through transformative programs and initiatives.
            </Subheadline>

            <StatsContainer>
              <StatItem>
                <h3>{membersCount}+</h3>
                <p>Members</p>
              </StatItem>
              <StatItem>
                <h3>{eventsCount}+</h3>
                <p>Events</p>
              </StatItem>
            </StatsContainer>
          </TextContent>

          <ImageContainer>
            <img src={drug} alt="Youth Club Members" />
          </ImageContainer>
        </ContentContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
