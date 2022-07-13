import SectionTitle from "../section-title";
import UnderLine from "../Under-line";
import Item from "./item";

const WorksDone = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <SectionTitle>
          The work I do, and{" "}
          <UnderLine imgName={"orange.svg"}>business</UnderLine> I help.
        </SectionTitle>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-10">
            <Item
              link={"#"}
              title={"Magicoon"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"magicoon-hero.png"}
            />
            <Item
              link={"#"}
              title={"Magicoon"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"doob-hero.png"}
            />
          </div>
          <div className="pt-40 flex flex-col gap-10">
            <Item
              link={"#"}
              title={"Magicoon"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"doob-hero.png"}
            />
            <Item
              link={"#"}
              title={"Magicoon"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"magicoon-hero.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksDone;
