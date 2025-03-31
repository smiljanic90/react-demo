import AboutCard from './components/AboutCard';
import './about.style.css';

const About = () => {
  let cards = [
    {
      id: 1,
      icon: '😀',
      title: 'Here is a pokok',
      description: 'Lorem ipsum dolores sit ammet',
    },
    {
      id: 2,
      icon: '🤩',
      title: 'Here is a heart',
      description: 'Lorem ipsum dolores sit ammet',
    },
    {
      id: 3,
      icon: '🤢',
      title: 'Waterfall maybe?',
      description: 'Lorem ipsum dolores sit ammet',
    },
  ];

  return (
    <div className="about">
      <h1>About</h1>
      <span>Lorem ipsum dolores sit</span>
      <div className="about-cards">
        {cards.map((card) => (
          <AboutCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
