import Loader from "./Loader";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Loader />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-5 mb-5">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
