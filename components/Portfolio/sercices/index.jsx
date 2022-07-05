import Item from "./item";
import Style from "./style.module.css";
import mainStyle from '../style.module.css'

const Services = () => {
  return (
    <section>
      <div className="container relative">
        {/* bg  */}

        {/* services items */}

        <div
          className={
            Style.bgDiv + " " + " bg-[#f5f5fd] py-16 w-[min(80%,1024px)] mx-auto relative"
          }
        >
          <div className="w-[120%] transform translate-x-[-10%]">
            <h2 className={mainStyle.sectionTitle+" "+"text-center"}>
              Services
            </h2>
            <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-x-2 gap-y-8 md:gap-4 lg:gap-8">
              <Item
                title={"Strategy & Direction"}
                icon={"/portfolio/phone.png"}
                desc={
                  "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project."
                }
              />

              <Item
                title={"Strategy & Direction"}
                icon={"/portfolio/phone.png"}
                desc={
                  "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project."
                }
              />

              <Item
                title={"Strategy & Direction"}
                icon={"/portfolio/phone.png"}
                desc={
                  "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project."
                }
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Services;
