import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import cl from "../../styles/Profile.module.scss";

import { updateUser } from "../App/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(({ user }) => user)
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmptyForm = Object.values(values).every((val) => val);

    if (!isNotEmptyForm) return;

    dispatch(updateUser(values));
  };

  useEffect(() => {
    if(!currentUser) return;

    setValues(currentUser);
  }, [currentUser])

  return (
    <section className={cl.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
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
              type="name"
              placeholder="Your name"
              name="name"
              value={values.name}
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

          <div className={cl.group}>
            <input
              type="avatar"
              placeholder="Your avatar"
              name="avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={cl.submit}>Update account</button>
        </form>
      )}
    </section>
  );
};

export default Profile;
