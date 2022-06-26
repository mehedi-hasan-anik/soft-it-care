import { useState } from "react";
import table from "../../table.json";
const Table = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container my-2">
      <input onChange={handleSearch} type="text" placeholder="Search..." />
      {table
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.phone.toLowerCase().includes(search.toLowerCase())) {
            return value;
          } else if (value.email.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((item) => (
          <div key={item.phone}>
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
                <tr>
                  <th scope="row">1</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};
export default Table;
