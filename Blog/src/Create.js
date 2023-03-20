import { useState } from "react";
import { useForm } from "./useForm";
import { useHistory } from "react-router-dom";

const Create = () => {
  // create
  const [values, handleChange] = useForm({
    title: "",
    body: "",
    author: "mario",
  });
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    const title = values.title;
    const body = values.body;
    const author = values.author;

    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added!");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create a new blog!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <label>Blog Body: </label>
        <textarea
          required
          name="body"
          value={values.body}
          onChange={handleChange}
        ></textarea>
        <label>Blog Author: </label>
        <select name="author" value={values.author} onChange={handleChange}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Blog Added</button>}
      </form>
    </div>
  );
};

export default Create;
