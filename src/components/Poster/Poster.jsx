import cl from "../../styles/Home.module.scss";

import bgImg from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={cl.home}>
      <div className={cl.title}>big sale 99%</div>
      <div className={cl.product}></div>
      <div className={cl.text}>
        <div className={cl.subtitle}>The topchik</div>
        <h1 className={cl.head}>Compucter from 2023</h1>
        <button className={cl.button}>By now</button>
        <div className={cl.image}>
          <img src={bgImg} alt="bigSale" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
