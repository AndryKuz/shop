import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "../App/user/userSlice";

import cl from "../../styles/User.module.scss";


const UserLoginForm = ({closeForm, toggleCurrentFormType}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

const handleSubmit = (e) => {           // отправка данных с формы
  e.preventDefault();

  const isNotEmptyForm = Object.values(values).every(value => value);    // проверка заполнены ли все поля в инпуте

  if(!isNotEmptyForm) return;

  dispatch(loginUser(values));
  closeForm();
}
  return (
    <div className={cl.wrapper}>
      <div className={cl.close}>
        <svg
          onClick={closeForm}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
        >
          <g id="cross_copy">
            <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" />
          </g>
        </svg>
      </div>

      <div className={cl.title}>Login</div>

      <form className={cl.form} onSubmit={handleSubmit}>
        <div className={cl.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={cl.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>


        <div className={cl.link} onClick={() => toggleCurrentFormType('signup')}>
          Create an account
        </div>

        <button type="submit" className={cl.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;