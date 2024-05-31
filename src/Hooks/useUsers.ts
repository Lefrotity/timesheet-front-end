import { useEffect, useState } from "react";
import $api from "../http";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    $api
      .get("/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [setUsers]);

  return { error, users, loading };
}

export default useUsers;
