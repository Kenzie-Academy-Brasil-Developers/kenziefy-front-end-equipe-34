import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  accountCreated,
  fail,
  wellcome,
} from "../components/Toastify/toastify.styles";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const [user, setUser] = useState(null);

  async function loginUser(data) {

    const response = await api.post("/login", data).catch(function (error) {
      fail();
    });
    const { token } = response.data;
  
    api.defaults.headers.authorization = `Bearer ${token}`;

    const toNavigate = location.state?.from?.pathname || `/dashboard/`;

    if (token !== null) {
      localStorage.setItem("@KENZIEFY:token", token);

      console.log(token)

      navigate(toNavigate, { replace: true });
      wellcome();
      
    }
  }
  function logOut() {
    setUser(false);
    localStorage.clear();
    navigate("/login");
  }

  async function registerUser(data) {
    await api.post("/users", data).catch(function (error) {
      fail();
    });
    navigate("/login", { replace: true });
    return accountCreated();
  }

  return (
    <Contexts.Provider
      value={{
        user,
        loginUser,
        registerUser,
        logOut,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
