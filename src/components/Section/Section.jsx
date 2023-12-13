import './Section.sass';
function Section() {
  return (
    <div className="section">
      <img src="src\assets\image-banner-1.jpg" className="section__image"></img>
    </div>
  );
}

export default Section;

//   // Vérifie si selectedProject existe avant de déstructurer ses propriétés
//   if (!selectedProject) {
//     // Gére le cas où selectedProject est indéfini ou nul
//     return <Error />;
//   }
//   // Déstructuration d'objets pour extraire les propriétés individuelles de l'objet  du projet sélectionné.
//   const { title, pictures, description, mission, tags, site, github } =
//     selectedProject;

//   return (
//     <div className="main" key={id}>
//       <div className="main__content">
//         <FicheTitle title={title} mission={mission} />
//         <Tag tags={tags} />
//         <Responsive pictures={pictures} alt={`${title}`} />
//         <Description title="Description" content={description} />
//         <div className="links">
//           {site && <Button link={site} text="Site" className="blue" />}
//           {github && <Button link={github} text="Github" className="blue" />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Work;
