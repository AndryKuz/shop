import cl from '../../styles/Home.module.scss';
import bannerImg from '../../images/banner.png';


const Baner = () => {
  return (
    <section className={cl.banner}>
        <div className={cl.left}>
            <p className={cl.content}>New Year soon <span>Sale</span></p>
            <button className={cl.more}>See more</button>
        </div>
        <div className={cl.right} style={{backgroundImage: `url(${bannerImg})`}}>
            <p className={cl.discount}>save up to <span>50%</span> off</p>
        </div>
      
    </section>
  );
};

export default Baner;