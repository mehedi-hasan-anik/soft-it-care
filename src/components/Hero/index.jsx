import "./Hero.styles.css";

const Hero = () => {
  return (
    <div className="hero-wrapper d-flex align-items-center">
      <div className="container">
        <h1 className="text-center text-center">My Account</h1>
        <h4>
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          <span>My Account</span>
        </h4>
      </div>
    </div>
  );
};

export default Hero;
