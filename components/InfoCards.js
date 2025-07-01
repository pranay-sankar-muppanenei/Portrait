import { useState } from 'react';
import styles from '@/styles/InfoCards.module.css';
import { FiX, FiPlus,FiChevronRight } from 'react-icons/fi';

const cardData = [
  {
    id: 1,
    title: 'Unbreakable, truly yours.',
    text: 'Your Portrait is cryptographically signed with your Ethereum key—verifiable, tamper-proof, and portable. Even if platforms vanish, your presence remains intact and publicly provable.',
    collapsedText: 'Unbreakable, truly yours.',
    bgImage: '/img10.jpg',
    colorOverlay: 'linear-gradient(to bottom right, rgba(247,138,31,0.85), rgba(247,183,51,0.85))',
  },
  {
    id: 2,
    title: 'Lightweight, by design.',
    text: 'Portrait runs on lightweight edge nodes—browsers, apps, and devices you already use. Hosting is distributed, efficient, and forgiving, making the network accessible to anyone, anywhere.',
    collapsedText: 'Lightweight, by design.',
    bgImage: '/img9.jpg',
    colorOverlay: 'linear-gradient(to bottom right, rgba(15,116,249,0.85), rgba(0,198,251,0.85))',
  },
  {
    id: 3,
    title: 'Built on protocols, not platforms.',
    text: 'Open source, open standards. No vendor lock-in. Open Internet Protocol.',
    collapsedText: 'Built on protocols, not platforms.',
    bgImage: '/img8.jpg',
    colorOverlay: 'linear-gradient(to bottom right, rgba(95,114,190,0.85), rgba(155,35,234,0.85))',
  },
];

export default function InfoCards() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
     <div className={styles.heroWrapper}>
        <h1 className={styles.heroHeading}>
          Designed for anyone. <br />
          Open to the <span className={styles.gradientWord}>world.</span>
        </h1>

        <div className={styles.cardsWrapper}>
      {cardData.map((card) => {
        const isExpanded = expandedCards[card.id];
        return (
          <div
            key={card.id}
            className={styles.card}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div
              className={styles.cardOverlay}
             style={{
  background: isExpanded
    ? `${card.colorOverlay}, rgba(0, 0, 0, 0.4)`
    : 'rgba(0,0,0,0.4)',
  backdropFilter: 'brightness(0.9)',
}}
            >
              <h3>{isExpanded ? card.title : card.collapsedText}</h3>
              {isExpanded && <p className={styles.te}>{card.text}</p>}
              <span className={styles.icon} onClick={() => toggleCard(card.id)}>
                {isExpanded ? <FiX /> : <FiPlus />}
              </span>
            </div>
          </div>
        );
      })}
    </div>

        <p className={styles.description}>
          Portrait is built on top of the Open Internet Protocol (OIP),<br />
          a decentralized protocol designed for social applications.
        </p>

        <div className={styles.learnMoreBtn}>
          Learn more about the Open Internet Protocol
          <FiChevronRight className={styles.chevron} />
        </div>
      </div>
    
  );
}
