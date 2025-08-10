const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow max-w-sm mx-auto">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2">
        {user.name || user.login}
      </h2>
      <p className="text-center text-gray-600">{user.bio || "No bio available"}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-blue-500 mt-2"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
