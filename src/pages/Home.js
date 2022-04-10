import Nav from "../components/Nav";

const Home = () => {
  const authToken = false;

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div className="overlay">
      <Nav minimal={false} authToken={authToken} />
      <div className="text-container">
        <h1>Deslize para a direita</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sair" : "Criar uma conta"}
        </button>
      </div>
    </div>
  );
};

export default Home;
