import { useDispatch, useSelector } from "react-redux";

import cl from "../../styles/User.module.scss";

import UserSignupForm from "./UserSignupForm";
import { toggleForm, toggleFormType } from "../App/user/userSlice";
import UserLoginForm from "./UserLoginForm";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (                     
    <>
      <div className={cl.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignupForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
      {/* сравниваем что бы выбрать изначальный компонент(в моем случае модалку формы для регистрации) 
      так как в initialState formType: "signup" то отрабоате сразу компонент UserSignupForm
      в UserSignupForm передаем toggleCurrentFormType, он нужен что бы внутри компонента UserSignupForm.jsx при клике на слово - I already have an account мы
      поменяли значение toggleCurrentFormType на 'login'. Что в свою очередь в userForm.jsx в toggleCurrentFormType передаем новый type уже login , а не как то этого был "signup"
      поэтому запускаеться dispatch(toggleFormType в который теперь перадем 'login'.
      toggleFormType - это reducer который меняет значение в initialState formType: "login". А теперь сценарий меняеться вот тут - {formType === "signup"
      Так как условие не сработало сработает else(:) и запуститься компонент UserLoginForm.
      
      */}
    </>
  ) : (
    <></>
  );
};

export default UserForm;

//fekal@gmail.com
//123456789
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m_Mo2hzhnR24DjBY71gh09Iz4d9AVmQa0Vj4s0FPhe2G-w5PZ31w1FhwhT9uQNCsipw&usqp=CAU
