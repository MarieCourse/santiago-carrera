import './Section.sass';
import { Link } from 'react-router-dom';

function Section({ id, cover, title }) {
  return (
    <Link to={`/${id}`} className="section" key={id}>
      <img
        src={cover}
        key={id}
        alt={`Cover for ${title}`}
        className="section__image"
      ></img>
    </Link>
  );
}

export default Section;
