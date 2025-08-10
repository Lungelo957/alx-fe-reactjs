import { useState } from "react";

function Search() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search input */}
      <input type="text" placeholder="Enter GitHub username" id="username" />
      <button onClick={() => handleSearch(document.getElementById("username").value)}>
        Search
      </button>

      {/* Loading state */}
      {loading && <p>Loading</p>}

      {/* Error state */}
      {error && <p>{error}</p>}

      {/* User data */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
