import SectionTitle from "../section-title";
import Item from "./item";

const AskMe = () => {
  const QandA = [
    {
      question: "What is your work dicipline?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    },
    {
      question: "How often can we communicate?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    },
    {
      question: "What is your location & timezone?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    },
    {
      question: "What is your  hourly rate?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
    },
  ];
  return (
    <section className="mt-[100px] relative z-10">
      <div className="container">
        <div className="text-center">
          <SectionTitle>
            A few things 🙄
            <br />
            clients normally ask me:
          </SectionTitle>
        </div>
        <div className="pt-8 space-y-8">
          {QandA.map((item,index) => <Item key={index} question={item.question} answer={item.answer} />)}
        </div>
      </div>
    </section>
  );
};

export default AskMe;
