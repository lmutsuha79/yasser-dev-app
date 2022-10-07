import SectionTitle from "../section-title";
import Item from "./item";
import { motion } from "framer-motion";
import { heroVariant, itemVariant } from "../onScrollSectionAnimation";

const AskMe = () => {
  const QandA = [
    {
      question: "how many hours can you work in a week?",
      answer:
        "currently I'm a full-time freelancer so I can work up to 40 hours a week.",
    },
    {
      question: "How often can we communicate?",
      answer:
        "We can do it for as long as the business needs to get to you in the best possible way",
    },
    {
      question: "What is your location & timezone?",
      answer:
        "I am based in Algeria which is in Central European Standard Time (GMT+1).",
    },
    {
      question: "What is your  hourly rate?",
      answer:
        "usually, I work for 15 to 20 dollars per hour it depends on the time zone that I will work in it.",
    },
  ];
  return (
    <motion.section
      variants={heroVariant}
      initial="hidden"
      whileInView={"show"}
      className="mt-[100px] relative z-10"
    >
      <div className="container">
        <div className="text-center ">
          <SectionTitle>
            A few things 🙄
            <br />
            clients normally ask me:
          </SectionTitle>
        </div>
        <div className="pt-8 space-y-8 ">
          {QandA.map((item, index) => (
            <motion.div variants={itemVariant} key={index}>
              <Item key={index} question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AskMe;
