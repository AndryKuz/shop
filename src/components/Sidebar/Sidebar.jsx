import { NavLink } from "react-router-dom";
import cl from "../../styles/Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const list = useSelector((state) => state.categories.list); // масив обьектов в которыйх дубликат каждого id по 5шт

  //1 - способ
  // const listCategory = {};                                    //  пустой массив нужен для того что бы заинуть id уникальный( но только флажок)
  // const uniqueArray = list.reduce((result, item) => {         // убираем дубликаты Id и оставляем уникальные( то есть по одному id ( id1,id2,id3...))
  //   if(!listCategory[item.id]) {
  //     listCategory[item.id] = true;
  //     result.push(item);
  //   }
  //   return result;
  // }, [])
  // const listName = uniqueArray.map(item => item.name);        // вытаскиваем имя категории из массива

  // 2-й способ
  const listName = [
    ...new Set(
      list.map((item) => JSON.stringify({ name: item.name, id: item.id }))
    ),
  ].map((str) => JSON.parse(str));
  // конструктор new Set превращает в обьект list с уникальными значениями( но так как возвращает он обьект, нужно сразу превратить в массив - с помощью квадратных скобок [] и
  // спрет оператора ..., ). JSON.stringify - нужен что бы сначала преобразовать ссылку в строку(без этого new Set Не сработает так как ссылки будут все разные не смотря на то что в обьекте будут
  //одни и те же элементы). В конечном итоге мы обратно с помощью Map возвращаем строки в ссылки - map(str => JSON.parse(str)) чтобы работать с ними в js(без этого никак)

  // заметка - useSelector(({ categories}) => categories)
  
  const idsToRemove = [5, 9, 11];     // id которое уберем из listName(NewCa)
  const categories = listName.filter(item => !idsToRemove.includes(item.id)); // фильтруем только нужные категории
  

  return (
    <section className={cl.sidebar}>
      <div className={cl.title}>Categories</div>
      <nav>
        <ul className={cl.menu}>
          {categories.map((item) => (
            <li key={item.id} >
              <NavLink className={({isActive}) => `${cl.link} ${isActive ? cl.active : ''}`} to={`categories/${item.id}`}>{item.name}</NavLink>
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
