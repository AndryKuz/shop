import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import cl from "../../styles/Sidebar.module.scss";


const Sidebar = () => {
  const  listCat = useSelector(state => state.categories.list);

  return (
    <section className={cl.sidebar}>
      <div className={cl.title}>Categories</div>
      <nav>
        <ul className={cl.menu}>
          {listCat.map(({ id, name}) => (
            <li key={id} >
              <NavLink className={({isActive}) => `${cl.link} ${isActive ? cl.active : ''}`} to={`categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={cl.footer}>
        <a href="/help" target="_blank" className={cl.link}>
          HELP
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
