import About from "./About";
import logoTeal from "../assets/img/logo-teal.svg";

const Header = ({ data, isLoading }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="logo-container">
            <div>
              <img alt="Logo Deliveroo" src={logoTeal} />
            </div>
          </div>
        </div>
      </div>
      <About data={data} isLoading={isLoading} />
    </header>
  );
};

export default Header;
