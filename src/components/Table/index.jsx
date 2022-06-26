import { useState } from "react";
import table from "../../data/table.json";
import "./Table.css";

const Table = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const result = table.filter((value) => {
    if (search === "") {
      return value;
    } else if (value.phone.toLowerCase().includes(search.toLowerCase())) {
      return value;
    } else if (value.email.toLowerCase().includes(search.toLowerCase())) {
      return value;
    }
  });

  return (
    <div className="table-wrapper">
      <div className="container">
        <div className="search d-flex justify-content-end">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search..."
            className="form-control"
          />
        </div>

        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
