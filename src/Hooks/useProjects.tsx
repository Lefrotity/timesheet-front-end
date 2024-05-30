import { useCallback, useEffect, useState } from "react";
import $api from "../http";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    $api
      .get("/projects")
      .then((res) => setProjects(res.data.projects))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const deleteProject = useCallback(
    (id: Number) => {
      setUpdateLoading(true);

      $api
        .delete(`/projects/${id}`)
        // remove it offline, no need to make GET request
        .then(() =>
          setProjects((projects) =>
            projects.filter((project) => project.id !== id)
          )
        )
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setProjects]
  );

  const createProject = useCallback(
    (namespace: String) => {
      setUpdateLoading(true);

      $api
        .post("/projects", { namespace })
        .then((res) => setProjects((projects) => [...projects, res.data]))
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setProjects]
  );

  const updateProject = useCallback(
    (data) => {
      setUpdateLoading(true);

      $api
        .put("/projects", data)
        .then((res) =>
          setProjects((projects) =>
            projects.map((project) =>
              project.id === res.data.id ? res.data : project
            )
          )
        )
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setProjects]
  );

  return {
    projects,
    error,
    loading,
    updateLoading,
    deleteProject,
    createProject,
    updateProject,
  };
}

export default useProjects;
