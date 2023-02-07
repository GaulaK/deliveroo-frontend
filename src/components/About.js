import placeholder from "../assets/img/placeholder.svg";

const About = ({ data, isLoading }) => {
  return (
    <div className="about-restaurant">
      <div className="container">
        <div className="about-restaurant-text">
          <h1>{!isLoading && data.restaurant.name}</h1>
          <p>{!isLoading && data.restaurant.description}</p>
        </div>
        <div className="image-container">
          <img
            alt="restaurant cover"
            src={!isLoading ? data.restaurant.picture : placeholder}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
