import { useState } from "react";
import styles from "./Signup.module.css";
import InputWrapper from "../../Components/InputWrapper";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import Header from "../../Components/Header";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const res = await AuthService.registration(
        email,
        password,
        firstName,
        secondName
      );

      localStorage.setItem("token", res.data.token);
      navigate("/projects");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <Header text="Регистрация" />
        <br />
        <br />
        <div className={styles.nameAndSecondName}>
          <InputWrapper label="Имя" width="190px">
            <InputText
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrapper>
          <div style={{ width: "20px" }}></div>

          <InputWrapper label="Фамилия" width="190px">
            <InputText
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </InputWrapper>
        </div>

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
          <p>Уже есть аккаунт?</p>
          <a href="/signin" className={styles.link}>
            <Button link label="Войти"></Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
