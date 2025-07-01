import styles from "@/styles/HeroTransition.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react/";


const HeroTransition=()=>{
   
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src="/img1.png" className={styles.profileImage} alt=""/>
                <div>
                    <h2 className={styles.profileName}>Rowan Blake</h2>
                    <p className={styles.profileBio}>I write about LLMs. I garden when its not raining.</p>
                </div>

            </div>
            <div className={styles.images}>
                    <div className={styles.wrap}>
                        <img src="/img1.png" className={styles.type1} alt=""/>
                        <img src="/img1.png" className={styles.type2} alt=""/>
                        <img src="/img1.png" className={styles.type3} alt=""/>
                        <img src="/img1.png" className={styles.type4} alt=""/>
                   </div>
                   <img src="/img1.png" className={styles.type5} alt=""/>
                </div>
        </div>

        

    );
}
export default HeroTransition;