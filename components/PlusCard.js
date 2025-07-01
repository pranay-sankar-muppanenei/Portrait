import React from 'react';
import { FaStar, FaLink, FaEarlybirds, FaComments, FaCheckCircle } from 'react-icons/fa';
import { PiStarFourFill } from "react-icons/pi";
import styles from '@/styles/PlusCard.module.css';

const PlusCard = () => {
  return (
    <div className={styles.plusWrapper}>
      <div className={styles.plusCard}>
        <div className={styles.starIconWrapper}>
          <FaStar className={styles.animatedStar} />
        </div>
        <h2 className={styles.title}>
          Get Plus <PiStarFourFill/>
        </h2>
        <p className={styles.subtitle}>
          With Plus, you are helping build a more free, more open internet. Get early access to new features,
          unlock customization perks, and be part of the future of digital identity.
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={`${styles.iconBox} ${styles.blue}`}><FaLink /></div>
            <div className={styles.Center}>
              <h4>Link your domain</h4>
              <p>Use your own custom domain to point directly to your Portal... You own it instead of portals.so/you.</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.iconBox} ${styles.orange}`}><FaCheckCircle /></div>
            <div className={styles.Center}>
              <h4>Plus badge</h4>
              <p>Show on your portal with a badge on your profile. Subtle, timeless, and adds extra trust in minutes.</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.iconBox} ${styles.green}`}><FaEarlybirds /></div>
            <div className={styles.Center}>
              <h4>Early access</h4>
              <p>Be the first to try new features, design updates, and experimental tools — before they are public.</p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={`${styles.iconBox} ${styles.pink}`}><FaComments /></div>
            <div className={styles.Center}>
              <h4>Chat with Founders</h4>
              <p>Get feedback on features, ask questions, share ideas — and help shape what comes next.</p>
            </div>
          </div>
        </div>

        <p className={styles.price}>$I0 <span>/ month</span></p>
        <button className={styles.ctaButton}>Get Plus  <span className={styles.white}><PiStarFourFill/></span></button>
      </div>
    </div>
  );
};

export default PlusCard;
