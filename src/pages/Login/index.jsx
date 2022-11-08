import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { schema } from "../../validators";
import { LoginContainer, LoginForm } from "./styles";
import { Contexts } from "../../contexts/provider";
import Logo from "../../assets/logo-no-background.svg";

function Login() {
  const [type, setType] = useState("password");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useContext(Contexts);
  return (
    <LoginContainer>
      <img src={Logo} alt="KenzieFy" />
      <div>
        <LoginForm onSubmit={handleSubmit(loginUser)}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <div className="container">
            <input
              type={type}
              placeholder="Senha"
              id="password"
              {...register("password")}
            />
            <div className="eye">
              {type === "password" ? (
                <EyeFilled onClick={() => setType("text")} />
              ) : (
                <EyeInvisibleFilled onClick={() => setType("password")} />
              )}
            </div>
          </div>
          {errors.password && <span>{errors.password.message}</span>}

          <button className="btnSingIn">Entrar</button>
          <p>
            Ainda não possui cadastro?
            <a href="/register" className="btnSingUp">
              <strong>Cadastre-se aqui!</strong>
            </a>
          </p>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}

export default Login;
