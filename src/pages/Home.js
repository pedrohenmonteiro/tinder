import React from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";

const Home = () => {
  const [modal, setModal] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(true);

  const authToken = false;

  function handleClick() {
    setModal(true);
    setIsSignUp(true);
  }

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setModal={setModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="text-container">
        <h1>Deslize para a direita</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sair" : "Criar uma conta"}
        </button>

        {modal && (
          <AuthModal
            setModal={setModal}
            setIsSignUp={setIsSignUp}
            isSignUp={isSignUp}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
