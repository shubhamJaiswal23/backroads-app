import Title from './Title';
import { sectionData } from '../data';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {sectionData.map(({ id, subHeading, para, icon }) => {
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{subHeading}</h4>
                <p className="service-text">{para}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
