import { Link } from "react-router-dom";
import cl from "../../styles/Categories.module.scss";



const Categories = ({ title, cat = [], amount }) => {
  const listCat = cat.filter((_, i) => i < amount);
   
  return (
    <section className={cl.section}>
      <h2>{title}</h2>
      <div className={cl.list}>
        {listCat.map(({ id, image, name }) => (
          <Link to={`/categories/${id}`} key={id} className={cl.item}>
            <div
              className={cl.image}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <h3 className={cl.title}>{name}</h3>
          </Link>
        ))}
        
      </div>
    </section>
  );
};

export default Categories;




 // const catArr = [
    //     {cat: 'Phone', id: 1, image:`https://images.1a.ee/display/aikido/store/3f556b757f97cf13dd35443b44fe87ad.jpeg`},
    //     {cat: 'Flower', id: 2, image:`https://content1.rozetka.com.ua/goods/images/big/327310330.jpg`},
    //     {cat: 'Car', id: 3, image:`https://ireland.apollo.olxcdn.com/v1/files/muqdx1cu3o462-UA/image;s=1000x700`},
    //     {cat: 'Shoes', id: 4, image:`https://static.reserved.com/media/catalog/product/1/5/1571V-99X-010-1-734033_3.jpg`},
    //     {cat: 'Clothes', id: 5, image:`https://ireland.apollo.olxcdn.com/v1/files/69n1329dgnid2-UA/image;s=1000x700`},
    // ]


    //   const uniqueCategories = [...new Set(list.map((item) => item.category))];
//   function categoryGener() {                    // функция замыкания - нужна что с массивом ['Phone', 'Flower', 'Car', 'Shoes', 'Clothes'] каждый раз при итерации индекс менялся на + 1
//     let index = 0;                          // в итоге внутри {listCat.map при вызове getNext() каждая итерация будет давать новую категорию

//     return function getNext() {
//       const cat = uniqueCategories[index];
//       index = (index + 1) % uniqueCategories.length;
//       return cat;
//     };
//   }
//   const getNext = categoryGener();



/* {catArr.map(({ id, image, cat }) => (
          <Link to={`/categories/${id}`} key={id} className={cl.item}>
            <div
              className={cl.image}
            //   style={{ backgroundImage: `url(${image})` }}
            ><img src={image} alt="category" /></div>
            <h3 className={cl.title}>{cat}</h3>
          </Link>
        ))} */