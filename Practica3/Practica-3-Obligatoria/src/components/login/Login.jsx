import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);

    // Comprobar si contiene la letra 'o' o 'O'
    if (inputValue.toLowerCase().includes("o")) {
      alert("Ingresar nombres de usuario sin la letra o");
    }
  };

  const handleRegister = () => {
    // Comprobar si el nombre de usuario está vacío o contiene 'o'/'O'
    if (!username || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <h4>Registre un usuario:</h4>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>Usuario ingresado: {username}</p>
    </div>
  );
};

export default Login;
