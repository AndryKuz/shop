import { NavLink } from "react-router-dom";
import cl from "../../styles/Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({categories}) => categories);

  const uniqCat = [...new Set(list.map(item => JSON.stringify(item.category)))].map(item => JSON.parse(item));
  
  
  

  return (
    <section className={cl.sidebar}>
      <div className={cl.title}>Categories</div>
      <nav>
        <ul className={cl.menu}>
          {uniqCat.map((item, index) => (
            <li key={index} >
              <NavLink className={({isActive}) => `${cl.link} ${isActive ? cl.active : ''}`} to={`categories/${index + 1}`}>{item}</NavLink>
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
