import React from "react";

const AuthModal = ({ setModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confirmPassword, setConfirmPassword] = React.useState(null);
  const [error, setError] = React.useState(null);

  console.log(email, password, confirmPassword);

  function handleClick() {
    setModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("As senhas não coincidem");
      }
      console.log("make a post request to our database");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="auth-modal-container"
      onClick={(e) => {
        if (e.target.classList.contains("auth-modal-container")) {
          handleClick();
        }
      }}
    >
      <div className="auth-modal">
        <div className="close-icon" onClick={handleClick}>
          ⓧ
        </div>
        <h2>{isSignUp ? "Criar uma conta" : "Entre"}</h2>
        <p>
          Ao clicar em Entre, você concorda com os nossos Termos. Saiba como
          processamos seus dados em nossa Política de Privacidade e Política de
          Cookies
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="senha"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp && (
            <input
              type="password"
              id="password-check"
              name="password-check"
              placeholder="confirmar senha"
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <button className="secondary-button">Enviar</button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
