import Section from '../../components/Section/Section';
import './Home.sass';
import projectsData from '../../data/projects.json';

// Home component that renders sections for each project
function Home() {
  return (
    <div className="main" id="accueil">
      {/* Map through projectsData and create a Section component for each project */}
      {projectsData.map((project) => (
        <Section key={project.id} id={project.id} cover={project.cover} />
      ))}
    </div>
  );
}

export default Home;
