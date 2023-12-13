import Section from '../../components/Section/Section';
import './Home.sass';
import projectsData from '../../data/projects.json';

function Home() {
  return (
    <div className="main" id="accueil">
      {projectsData.map((project) => (
        <Section key={project.id} id={project.id} />
      ))}
    </div>
  );
}

export default Home;
