import Title from './Title';
import aboutImg from '../images/about.jpeg';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Embark on extraordinary journeys, discovering unique moments that
            redefine travel and forge lasting memories beyond the ordinary with
            the unparalleled experiences offered by Backroads.
          </p>
          <p>
            Step into a world where each adventure weaves a captivating tale,
            beckoning you to explore the profound difference that Backroads
            promises. Uncover stories in every step.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
