import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>Portrait</div>
        <div className={styles.linksGroup}>
          <div>
            <h4>Resources</h4>
            <a href="#">Open Internet Protocol</a>
            <a href="#">Brand Kit</a>
          </div>
          <div>
            <h4>Downloads</h4>
            <a href="#">Portrait for Mac</a>
            <a href="#">Portrait for Windows</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">Report abuse</a>
            <a href="#">Report bug</a>
          </div>
          <div>
            <h4>Developers</h4>
            <a href="#">GitHub</a>
            <a href="#">Docs</a>
            <a href="#">Smart Contracts</a>
          </div>
          <div>
            <h4>Socials</h4>
            <a href="#">X.com</a>
            <a href="#">Farcaster</a>
            <a href="#">Bluesky</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© Portrait Technology Inc. 2025</span>
        <div>
          <span className={styles.statusDot}></span> System status
          <span className={styles.separator}>|</span>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
