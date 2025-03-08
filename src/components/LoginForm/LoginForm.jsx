import { useState } from "react";
import { useUser } from "../../context/useUser";
import * as F from "./Login.styles";

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useUser();

  //   const validateEmail = (email) => {
  //     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     return pattern.test(email) ? '' : 'Некорректный email';
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg("");

    if (!password.trim() || !email.trim()) {
      setErrorMsg("Заполните все поля");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/jwt/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(
          `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
        ),
      });
      const data = await response.json();
      if (data.detail === "LOGIN_BAD_CREDENTIALS") {
        setErrorMsg("Ошибка логина или пароля");
      } else {
        setToken(data.access_token);
        onSuccess();
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Ошибка сервера");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <F.FormContainer onSubmit={handleSubmit}>
      <F.FormGroup>
        <F.Label>Email</F.Label>
        <F.Input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </F.FormGroup>

      <F.FormGroup>
        <F.Label>Пароль</F.Label>
        <F.Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errorMsg && <F.ErrorMessage>{errorMsg}</F.ErrorMessage>}
      </F.FormGroup>

      <F.SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? "Входим..." : "Войти"}
      </F.SubmitButton>
    </F.FormContainer>
  );
};

export default LoginForm;
