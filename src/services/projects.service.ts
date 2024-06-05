// projects service react

// imports
import { useTranslation } from "react-i18next";
import i18n from "../services/translate";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

// services
// export const useProjects = (): Project[] => {
//   // init translations
//   const { t } = useTranslation();

//   // init state
//   const [projects, setProjects] = useState<Project[]>([]);

//   // init projects
//   useEffect(() => {
//     // fetch projects
//     fetch("http://localhost:3000/projects")
//       .then((response) => response.json())
//       .then((data) => setProjects(data));
//   }, []);

//   // return projects
//   return projects.map((project) => ({
//     ...project,
//     title: t(project.title),
//     description: t(project.description),
//   }));
// };

export const useProjects = async (): Promise<Project[]> => {
  // init translations
  const { t } = useTranslation();

  // init state
  const [projects, setProjects] = useState<Project[]>([]);

  // get projects from json translation files
  const projectsFromJson = await Promise.all(
    i18n.languages.map(async (lang) => {
      const response = await fetch(`/locales/${lang}/projects.json`);
      return await response.json();
    })
  );

  // set projects
  setProjects(projectsFromJson[0]);

  // fetch projects

  // return projects
  return projects.map((project) => ({
    ...project,
    title: t(project.title),
    description: t(project.description),
    tags: project.tags.map((tag) => t(tag)),
  }));
};
