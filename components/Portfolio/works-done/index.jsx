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
        
        <div className="grid sm:grid-cols-2 gap-x-10 space-y-10">
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
              title={"TO-do Chrom Extention"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"to_do_chrom_1.jpg"}
            />
             <Item
              link={"#"}
              title={"Jadoo tailwind Template"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"travell_tailwind-2.png"}
            />
          </div>
          <div className="sm:pt-40 flex flex-col gap-10">
            <Item
              link={"#"}
              title={"Doob Template"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"doob-hero.png"}
            />
            <Item
              link={"#"}
              title={"Pomodoro PWA with Vue"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"pomodoro_vue_app-1.webp"}
            />
             <Item
              link={"#"}
              title={"Type BlogTemplate"}
              desc={
                "Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!"
              }
              imgName={"type-3.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksDone;
