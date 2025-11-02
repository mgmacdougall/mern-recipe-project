import { useState } from "react";
function UserInputContainer({ onSubmit }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const formData = {
      username: userName,
      email: email,
      password: password,
    };
    onSubmit(e, formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-input">
          User Name:
          <input
            id="user-input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter something..."
          />
        </label>
        <label htmlFor="user-name-input">
          Password:
          <input
            id="user-name-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter something..."
          />
        </label>
        <label htmlFor="user-email-input">
          Email:
          <input
            id="user-email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter something..."
          />
        </label>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserInputContainer;
