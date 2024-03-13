import React, { ChangeEvent, useEffect, useState } from "react";
import {
  auth,
  setPersistence,
  inMemoryPersistence,
  signInWithEmailAndPassword,
} from "../firebase/firebaseConfig";
import "../styles/LoginPage.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isEmail, setIsEmail] = useState("");
  const [isPwd, setIsPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setPersistence란?
    // 인증 상태 지속성 설정
    // browserLocalPersistence: 브라우저가 닫히더라도 사용자 정보를 저장
    // browserSessionPersistence: 탭이 열려있는 동안에는 사용자 정보를 기억
    // inMemoryPersistence: 사용자 정보를 기억하지 않는다. 새로고침 시 로그아웃
    const data = await setPersistence(auth, inMemoryPersistence)
      .then(() => {
        /* main으로 navigate */
        navigate("/");
        return signInWithEmailAndPassword(auth, isEmail, isPwd);
      })
      .catch((error: any) => {
        console.log(error.code);

        switch (error.code) {
          case "auth/invalid-credential":
            setErrorMsg("이메일 혹은 비밀번호가 일치하지 않습니다.");
            setIsPwd("");
            break;
        }
      });

    /* 로그인 되었는지 확인 */
    console.log(auth.currentUser);

    /* 유저 정보 저장*/
    /* firebase를 사용하므로 생략한다 */
    // dispatch(saveUserInfo({ state: true, token: data.user.acessToken }));
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEmail(e.target.value);
  };
  const handlePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPwd(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div className="login-container">
      <div className="login-container-form">
        <form onSubmit={login}>
          <span>로그인</span>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={isEmail}
            onChange={handleEmail}
          />
          <input
            type="text"
            name="pwd"
            placeholder="password"
            value={isPwd}
            onChange={handlePwd}
          />
          <div className="error-messege-container">
            <span style={{ color: "red" }}>{errorMsg}</span>
          </div>
          <button type="submit">로그인</button>
        </form>
        <NavStyle style={{ textDecoration: "none" }} to="/register">
          Go to SignIn
        </NavStyle>
      </div>
    </div>
  );
};

const NavStyle = styled(Link)`
  margin: 10px;

  font-size: 15px;

  border: 0px;
  border-bottom: 1px solid;

  color: blue;
  background-color: white;

  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
`;

export default LoginPage;
