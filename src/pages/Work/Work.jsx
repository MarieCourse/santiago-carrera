import './Work.sass';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';
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
  const { title, info, pictures } = selectedProject;

  return (
    <div className="main" key={id}>
      {/* <div className="section"> */}
      <h2>{title}</h2>
      <div className="gallery">
        {pictures.map((picture, index) => (
          <img
            className="gallery__image"
            key={index}
            src={picture}
            alt={`${title} by Santiago Carrera`}
          />
        ))}
      </div>
      <p className="info">{info}</p>
      {/* </div> */}
    </div>
  );
}

export default Work;
