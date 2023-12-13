import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
// import Responsive from '../../components/Responsive/Responsive';
// import FicheTitle from '../../components/FicheTitle/FicheTitle';
// import Tag from '../../components/Tag/Tag';
// import Description from '../../components/Description/Description';
// import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';

function Work() {
  const { id } = useParams();
  const selectedProject = projectsData.find((project) => project.id === id);
  // Vérifie si selectedProject existe avant de déstructurer ses propriétés
  if (!selectedProject) {
    // Gére le cas où selectedProject est indéfini ou nul
    return <Error />;
  }
  // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du projet sélectionné.
  const { title, cover, info, pictures } = selectedProject;

  return (
    <div className="main" key={id}>
      <h2>{title}</h2>
      <div className="gallery">
        <img src={cover} alt="" />
        <img src={pictures} alt="" />
      </div>
      <p>{info}</p>
    </div>
  );
}

export default Work;
