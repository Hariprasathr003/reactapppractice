import "../cssstyle/HomeContent/Home.css";
import Imagehero from "../assets/Herosection/hero1.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Build My First Modern React Website</p>
        <button className="hero-btn" onClick={() => navigate("/about")}>
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src={Imagehero} alt="Hero" />
      </div>
    </section>
  );
}
