import './Section.sass';
import { Link } from 'react-router-dom';

function Section({ id }) {
  return (
    <Link to={`/${id}`} className="section">
      <img src="src\assets\image-banner-1.jpg" className="section__image"></img>
    </Link>
  );
}

export default Section;
