import hot from "../assets/hot.jpg";
import cold from "../assets/cold.jpg";

function Background({ temperature }) {
  fetchData();
  const defaultImage = { hot };

  const coldImage = { cold };

  const image = temperature > 25 ? defaultImage : coldImage;

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    ></div>
  );
}

export default Background;
