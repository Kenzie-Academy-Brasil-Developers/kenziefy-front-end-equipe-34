import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #141414;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  padding: 20px;
  border-radius: 20px;
  width: 310px;

  h2 {
    font-family: "Hind";
    display: flex;
    justify-content: center;
    padding: 20px;
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 97%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    margin: 10px;
  }
  .container > input {
    width: 90%;
    margin: 0;
    height: 100%;
  }

  .eye {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4% 0 0 0;
  }

  .eye > span {
    height: 100%;
    color: black;
  }

  input {
    font-family: "Hind";
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #ffffff;
    color: rgba(0, 0, 0, 1);
    outline: none;
    margin: 10px;
  }

  span {
    font-family: "Hind";
    color: darkred;
    margin: 1px;
    font-size: 12px;
    font-weight: medium;
  }

  .btnSingIn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #0080ff;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
  }

  .btnSingIn:hover {
    background-color: #8dbdff;
  }

  .btnSingUp {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: bolder;
    text-decoration: underline #0080ff;
    color: #141414;
  }

  p {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Hind";
    font-size: 14px;
  }

  strong {
    margin-top: 5px;
    font-family: "Hind";
    font-size: 14px;
    color: #0080ff;
  }

  strong:hover {
    color: #8dbdff;
  }
`;
