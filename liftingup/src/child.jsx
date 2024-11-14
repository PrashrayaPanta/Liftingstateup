import { useState } from "react";

const Child = (props) => {
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child;
