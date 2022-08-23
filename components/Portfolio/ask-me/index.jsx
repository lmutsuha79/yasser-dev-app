import SectionTitle from "../section-title";
import Item from "./item";

const AskMe = () => {
  const QandA = [
    // {
    //   question: "What is your work dicipline?",
    //   answer:
    //     "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    // },
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
    <section className="mt-[100px] relative z-10">
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
            <Item key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskMe;
