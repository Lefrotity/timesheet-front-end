import { useCallback, useEffect, useState } from "react";
import $api from "../http";

function useTasks(id) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    $api
      .get(`/tasks?projectId=${id}`)
      .then((res) => setTasks(res.data.tasks))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const deleteTask = useCallback(
    (id: Number) => {
      setUpdateLoading(true);

      $api
        .delete(`/tasks/${id}`)
        .then(() => setTasks((tasks) => tasks.filter((task) => task.id !== id)))
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setTasks]
  );

  // {
  //   "id": 0,
  //   "title": "string",
  //   "description": "string",
  //   "priority": "HIGH",
  //   "deadlineDate": "2024-05-30T08:37:33.223Z",
  //   "projectId": 0,
  //   "workflow": "NEW"
  // }
  const createTask = useCallback(
    (data) => {
      setUpdateLoading(true);

      $api
        .post("/tasks", data)
        .then((res) => setTasks((tasks) => [...tasks, res.data]))
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setTasks]
  );

  const updateTask = useCallback(
    (data) => {
      setUpdateLoading(true);

      $api
        .put("/tasks", data)
        .then((res) =>
          setTasks((tasks) =>
            tasks.map((task) => (task.id === res.data.id ? res.data : task))
          )
        )
        .catch((err) => setError(err))
        .finally(() => setUpdateLoading(false));
    },
    [setTasks]
  );

  return {
    tasks,
    error,
    loading,
    updateLoading,
    deleteTask,
    createTask,
    updateTask,
  };
}

export default useTasks;
