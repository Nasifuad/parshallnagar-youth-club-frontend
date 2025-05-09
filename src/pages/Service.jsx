import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FiUsers,
  FiBook,
  FiActivity,
  FiAward,
  FiHeart,
  FiSmile,
} from "react-icons/fi";

const ServicesWrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(to bottom right, #0a192f 0%, #172a45 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #64ffda;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #8892b0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(100, 255, 218, 0.05);
  border-radius: 1rem;
  padding: 2.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  cursor: default;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #64ffda;
  font-size: 1.75rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
`;

const services = [
  {
    icon: <FiUsers />,
    title: "Leadership Programs",
    description:
      "Develop essential leadership skills through our comprehensive training and mentorship programs.",
  },
  {
    icon: <FiBook />,
    title: "Educational Workshops",
    description:
      "Interactive sessions on technology, arts, and professional development.",
  },
  {
    icon: <FiActivity />,
    title: "Skill Development",
    description:
      "Hands-on training in digital literacy, communication, and technical skills.",
  },
  {
    icon: <FiAward />,
    title: "Achievement Recognition",
    description:
      "Celebrating youth accomplishments through awards and public recognition.",
  },
  {
    icon: <FiHeart />,
    title: "Community Service",
    description:
      "Organizing local initiatives for social welfare and environmental conservation.",
  },
  {
    icon: <FiSmile />,
    title: "Recreational Activities",
    description:
      "Sports, arts, and cultural programs for holistic development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <ServicesWrapper>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <SectionTitle variants={itemVariants}>Our Core Services</SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Empowering youth through comprehensive programs that foster growth,
            leadership, and community engagement.
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;
