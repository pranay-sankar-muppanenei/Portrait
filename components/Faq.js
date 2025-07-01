import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import styles from "@/styles/Faq.module.css";

const faqsData = [
  { question: "What is Portrait?", answer: "Portrait is a new kind of personal site—fully yours, decentralized, and designed for self-expression. Think of it as your own corner of the internet that no platform can take away." },
  { question: "Is this a social network?", answer: "No, Portrait is not a social network. It is a personal site platform." },
  { question: "Do I need to know crypto or blockchains to use Portrait?", answer: "No, you do not need to know crypto or blockchains to use Portrait." },
  { question: "How do I get started?", answer: "Sign up, create your profile, and personalize it to your liking." },
  { question: "How much does it cost?", answer: "It depends on the plan, but basic use is affordable." },
  { question: "Why does it cost $10 to create a Portrait?", answer: "This covers infrastructure costs and ensures a sustainable ecosystem." },
  { question: "Where is my Portrait stored?", answer: "Your Portrait is stored on decentralized storage systems." },
  { question: "How do I host someone?", answer: "You can host using the available hosting partners or self-host." },
  { question: "Is my Portrait really mine?", answer: "Yes, you fully own your Portrait and control your data." },
  { question: "Can I use Portrait for my business or as a creator?", answer: "Yes, Portrait supports creators and businesses." },
  { question: "Is Portrait censorship-resistant?", answer: "Yes, it is designed to be censorship-resistant." },
  { question: "What is the Open Internet Protocol?", answer: "It is the protocol Portrait is built on, enabling decentralization." },
  { question: "Is this open source?", answer: "Yes, Portrait is open source." },
  { question: "Will there be a token?", answer: "There are currently no plans for a token." },
  { question: "Where is Portrait deployed?", answer: "It is deployed on decentralized networks globally." },
  { question: "When is mainnet launch?", answer: "Mainnet launch is scheduled soon. Stay tuned for updates." },
  { question: "When do rewards start?", answer: "Rewards will start after the mainnet launch." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqsWrapper}>
      <h2 className={styles.heading}>Frequently asked questions</h2>
      <div className={styles.faqsGrid}>
        {faqsData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              <span className={styles.questionText}>{faq.question}</span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openIndex === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
            <div className={styles.faqDashedLine}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
