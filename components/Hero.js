import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "@/styles/Hero.module.css";
import { FaPlay } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const usernames = ["andrea", "carlos", "emma", "maria", "jack", "leo", "sandra"];

const Hero = () => {
  const sliderRef = useRef();
  const tl = useRef();
  const [editing, setEditing] = useState(false);
  const [customName, setCustomName] = useState("");
  const inputRef = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline({ repeat: -1, paused: false });

    for (let i = 0; i < usernames.length; i++) {
      tl.current.to(sliderRef.current, {
        y: `-=${30}`,
        duration: 0.6,
        delay: 1.5,
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleFocus = () => {
    setEditing(true);
    tl.current.pause();
    setTimeout(() => inputRef.current?.focus(), 50); // ensure it gets focus
  };

  const handleBlur = () => {
    setEditing(false);
    tl.current.resume();
  };

  return (
    <section className={styles.hero}>
      <div className={styles.btnGroup}>
        <button className={styles.lightBtn}>Portrait launches Public Testnet <MdOutlineArrowOutward/></button>
        <button className={styles.lightBtn}><FaPlay/> Discover Portrait in 90s</button>
      </div>

      <h1 className={styles.heading}>
        Your <span className={styles.forever}>forever</span> space for everything you are.
      </h1>

      <p className={styles.subtext}>
        More than a link—a decentralized canvas to share your story, your work, and your life—in minutes.
      </p>

      <div className={styles.inputWrap}>
        <span className={styles.inputLabel}>portrait.so/</span>

        {editing ? (
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            onBlur={handleBlur}
            placeholder="yourname"
          />
        ) : (
          <div className={styles.slider} onClick={handleFocus}>
            <div ref={sliderRef} className={styles.sliderInner}>
              {usernames.concat(usernames[0]).map((name, i) => (
                <div key={i} className={styles.slide}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.signupBtnWrapper}>
            <button className={styles.signupBtn}>Sign up</button>
        </div>

      </div>

      <p className={styles.loginText}>
        Already have a Portrait? <a href="#">Login</a>
      </p>
    </section>
  );
};

export default Hero;
