import '../about.style.css';

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="about-card">
      <span>{icon}</span>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );
};

export default AboutCard;
