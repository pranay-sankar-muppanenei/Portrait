import styles from '@/styles/ConnectSection.module.css';
import {
  FaNotion,
  FaSpotify,
  FaGithub,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaFigma,
  FaTiktok,
  FaXTwitter,
  FaMedium,
} from 'react-icons/fa6';
import {
  SiSubstack,
  SiTwitch,
  SiBlur,
  SiLenster,
  SiFarcaster,
  SiWarpcast,
  SiArc,
} from 'react-icons/si';

const icons = [
  { icon: <FaNotion />, style: { top: '5%', left: '18%' } },
  { icon: <SiSubstack />, style: { top: '12%', left: '10%' } },
  { icon: <SiTwitch />, style: { top: '20%', left: '14%' } },
  { icon: <FaSpotify />, style: { top: '35%', left: '7%' } },
  { icon: <SiBlur />, style: { top: '50%', left: '12%' } },
  { icon: <SiArc />, style: { bottom: '10%', left: '22%' } },
  { icon: <SiLenster />, style: { bottom: '15%', left: '30%' } },
  { icon: <FaFigma />, style: { bottom: '10%', left: '42%' } },
  { icon: <SiFarcaster />, style: { bottom: '10%', right: '42%' } },
  { icon: <SiWarpcast />, style: { bottom: '15%', right: '30%' } },
  { icon: <FaMedium />, style: { bottom: '12%', right: '18%' } },
  { icon: <FaXTwitter />, style: { bottom: '10%', right: '10%' } },
  { icon: <FaGithub />, style: { top: '35%', right: '8%' } },
  { icon: <FaYoutube />, style: { top: '50%', right: '12%' } },
  { icon: <FaPinterest />, style: { top: '20%', right: '14%' } },
  { icon: <FaInstagram />, style: { top: '12%', right: '10%' } },
  { icon: <FaTiktok />, style: { top: '5%', right: '18%' } },
];

export default function ConnectSection() {
  return (
    <div className={styles.container}>
      <div className={styles.radar}>
        {icons.map((item, index) => (
          <div
            key={index}
            className={styles.iconWrapper}
            style={item.style}
          >
            {item.icon}
          </div>
        ))}

        <div className={styles.textContent}>
          <p className={styles.subtext}>Showcase what matters to you most</p>
          <h2 className={styles.heading}>
            Bring it all together in <br />
            <span className={styles.gradientText}>one simple link.</span>
          </h2>
          <button className={styles.button}>Create your Portrait</button>
        </div>
      </div>
    </div>
  );
}
