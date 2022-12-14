import {
  RegisterContainer,
  RegisterForm,
} from "../../pages/Register/styles.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useContext, useState } from "react";
import { schema } from "../../validators/register.js";
import { Contexts } from "../../contexts/provider.jsx";
import Logo from "../../assets/logo-no-background.svg";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [type, setType] = useState("password");

  const { registerUser } = useContext(Contexts);

  return (
    <RegisterContainer>
      <img src={Logo} alt="KenzieFy" />
      <div>
        <RegisterForm onSubmit={handleSubmit(registerUser)}>
          {/* <a href="/login" className="btnCloseRegister">
            X
          </a> */}
          <h2>Cadastre-se</h2>
          <input
            type="text"
            placeholder="Nome"
            id="name"
            {...register("name")}
          />
          {errors.name && <span>{errors.name?.message}</span>}

          <input
            type="text"
            placeholder="E-mail"
            id="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}

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
          {errors.password && <span>{errors.password?.message}</span>}

          <input
            type="password"
            placeholder="Confirmação da senha"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm?.message}</span>
          )}
          <input
            type="text"
            placeholder="Apelido"
            id="nickname"
            {...register("nickname")}
          />
          {errors.contact && <span>{errors.contact?.message}</span>}
          <input
            type="date"
            placeholder="Data de nascimento"
            id="birth_date"
            {...register("birth_date")}
          />
          {errors.contact && <span>{errors.contact?.message}</span>}

          <input
            type="text"
            placeholder="Link de imagem do perfil"
            id="img"
            {...register("img")}
          />
          {errors.img && <span>{errors.img?.message}</span>}

          <button type="submit" className="btnRegister">
            Cadastrar
          </button>
        </RegisterForm>
      </div>
      <p>
        Já possui cadastro?
        <a href="/login" className="btnCloseRegister">
          <strong>Voltar para login</strong>
        </a>
      </p>
    </RegisterContainer>
  );
}

export default Register;
