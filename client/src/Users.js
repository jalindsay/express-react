const { useState, useEffect } = require("react");

function Users() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      {backendData === null ? (
        <div>loading...</div>
      ) : (
        backendData?.map((user, index) => <p key={index}>{user.firstname}</p>)
      )}
    </div>
  );
}

export default Users;