import "./Projects.scss";
import { useTranslation } from "react-i18next";
// import { useProjects } from "../../services/projects.service";
import { Works } from "../../types/works.interface";
// import { Project } from "../../components/Project/Project";
//import { useState } from "react";

function Projects() {
  const { t } = useTranslation();
  // const [projects, setProjects] = useState<Project[]>([]);
  // useProjects().then((projects) => {
  //   console.log(projects);
  //   //setProjects(projects);
  // });

  return (
    <section className="projects animated delay-2 fadeInLeft">
      <h2 className="projects__title">{t("works.title")}</h2>
      <div className="projects__list">
        {(t("works.items", { returnObjects: true }) as Works[]).map(
          (project: Works, index: number) => (
            <article
              className={`projects__list--item animated delay-${
                index + 3
              } fadeInUp`}
              key={index}
            >
              <img src={project.image} alt={project.title} />
              <div className="projects__list--item__content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="projects__list--item__content--tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      className="projects__list--item__content--tags--tag"
                      key={tagIndex}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        )}
        {}
      </div>
    </section>
  );
}

export default Projects;
