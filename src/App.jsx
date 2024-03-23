import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";

function App() {
  const [users, setUsers] = useState([]);
  const [phones, sePhones] = useState([]);
  const name = useRef("");
  const price = useRef(0);
  const desc = useRef("");
  const status = useRef("active");
  useEffect(() => {
    fetch("https://auth-rg69.onrander.com/api/products/all").then((res) =>
      res
        .json()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  });
  function validate() {
    return true;
  }
  function handleClick(e) {
    e.preventDefault();
    const isValidate = validate();
    if (isValidate) {
      const phone = {
        name: name.current.value,
        description: desc.current.value,
        status: status.current.value,
        price: price.current.value,
        category_id: 2,
      };
      fetch("https://auth-rg69.onrander.com/api/products/all ", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(phone),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="container">
      <h1 className="my-4 text-center">Phones</h1>
      <form className="d-flex w-50 gap-3 flex-column mx-auto">
        <input
          type="text"
          className="form-control"
          ref={name}
          placeholder="Enter your name....."
        />
        <input
          type="number"
          ref={price}
          className="form-control"
          placeholder="Enter your price....."
        />
        <textarea
          ref={desc}
          className="form-control"
          rows="3"
          placeholder="Enter desc..."
        ></textarea>
        <select ref={status} className="form-control">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button onClick={handleClick} className="btn btn-success">
          SAVE
        </button>
      </form>
      <h1 className="d-flex ml-[600px] mt-2 mb-2 font-extrabold">
        Server is not working in 17:11 today......
      </h1>
      <div className="card-wrapper mt-3 d-flex flex-wrap gap-3 justify-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
