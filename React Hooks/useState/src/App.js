import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "", address: "" });

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input type="password" name="password" value={values.password} onChange={handleChange}/>
        <input type="text" name="address" value={values.address} onChange={handleChange}/>
      </>
    </div>
  );
};

export default App;