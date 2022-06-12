import Footer from "../footer";
import NavBar from "../nav";

const PageStrecture = ({children,title}) => {
      return (
            <div>

                  <NavBar/>
                  <div className="container">
                        <div className="pt-[70px]">{children}</div>
                  </div>
                  <Footer/>
            </div>
      );
}

export default PageStrecture;