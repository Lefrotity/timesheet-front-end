import { useState } from "react";
import styles from "./Signin.module.css";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Header from "../../Components/Header";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const res = await AuthService.login(email, password);

    localStorage.setItem("token", res.data.token);
    navigate("/projects");
  };

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <Header text="Вход" />
        <br />
        <br />

        <InputWrapper label="Почта">
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputWrapper>

        <div className={styles.gape}></div>

        <InputWrapper label="Пароль">
          <Password
            inputStyle={{ width: "100%" }}
            toggleMask
            promptLabel="Начните вводить пароль"
            weakLabel="Слабый"
            mediumLabel="Средний"
            strongLabel="Отличный"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <br />
        <Button label="Подтвердить" onClick={onSubmit} />
        <br />
        <br />
        <div className={styles.linkAndText}>
          <p>Нет аккаунта?</p>
          <a href="/signup" className={styles.link}>
            <Button link label="Создать"></Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
