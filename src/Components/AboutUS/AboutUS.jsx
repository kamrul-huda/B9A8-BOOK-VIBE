import { useState } from "react";

const AboutUS = () => {
  // const data = ["Banana", "Orange", "Apple", "Mango"];
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
    },
  ];

  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

  const employees = [
    { id: 4, name: "Dean", country: "Denmark" },
    { id: 3, name: "Carl", country: "Canada" },
    { id: 2, name: "Bob", country: "Belgium" },
    { id: 1, name: "Alice", country: "Austria" },
    { id: 5, name: "Ethan", country: "Egypt" },
  ];

  // 👇️ Sort by Numeric property ASCENDING (1 - 100)
  const numAscending = [...employees].sort((a, b) => a.id - b.id);
  console.log(numAscending);

  // ------------------------------------------------

  // 👇️ Sort by Numeric property DESCENDING (100 - 1)
  const numDescending = [...employees].sort((a, b) => b.id - a.id);
  console.log(numDescending);

  // ------------------------------------------------

  // 👇️ Sort by String property ASCENDING (A - Z)
  const strAscending = [...employees].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  console.log(strAscending);

  // ------------------------------------------------

  // 👇️ Sort by String property DESCENDING (Z - A)
  const strDescending = [...employees].sort((a, b) =>
    a.name > b.name ? -1 : 1
  );
  console.log(strDescending);
  return (
    <div className="main">
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          None
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <ul>
        {books.sort(sortMethods[sortState].method).map((el, i) => (
          <li key={i}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUS;
