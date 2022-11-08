import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #141414;

  img {
    width: 200px;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  p {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Hind";
    font-size: 16px;
  }

  strong {
    margin-top: 5px;
    font-family: "Hind";
    font-size: 16px;
    color: #0080ff;
  }

  strong:hover {
    color: #8dbdff;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(255, 255, 255, 0.4); */
  padding: 20px;
  border-radius: 20px;
  width: 310px;

  h2 {
    font-family: "Hind";
    display: flex;
    justify-content: center;
    padding: 20px;
    color: white;
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
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
    outline: none;
    margin: 10px;
  }

  span {
    font-family: "Hind";
    color: red;
    margin: 1px;
    font-size: 16px;
    align-items: center;
    font-weight: bolder;
  }

  .btnRegister {
    margin: 10px;
    font-family: "Hind";
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 50%;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #0080ff;
    color: rgba(255, 255, 255, 1);
    font-weight: bold;
    font-size: 16px;
  }

  .btnRegister:hover {
    background-color: #8dbdff;
  }

  .btnCloseRegister {
    color: #FFFFFF;
    font-family: "Hind";
    display: flex;
    margin-left: 290px;
    border: none;
    background-color: white;
    color: white;
    font-size: larger;
    font-weight: bolder;
    cursor: pointer;
  }
  .btnCloseRegister:hover {
    color: #8dbdff;
  }
`;
