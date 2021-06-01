// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Select from "react-select";

function App() {
  

  const productOptions = [
    { value: "Potato", label: "Potato" },
    { value: "Mojo", label: "Mojo" },
    { value: "Cocacola", label: "Cocacola" },
  ];

  const [rowDto, setRowDto] = useState([]);

  const addHandler = (v) => {
    const obj = {
      ...v,
      price: "",
      discount: "",
      netAmount: "",
    };
    setRowDto([...rowDto, obj]);
  };

  const rowDtoChangeHandler = (name, value, i) => {
    const data = [...rowDto];
    data[i][name] = value;
    setRowDto(data)
  };

  return (
    <div>
      <div className="w-75">
        <Select
          name="item"
          options={productOptions}
          onChange={(v) => addHandler(v)}
        />
      </div>

      {/* Table  */}
      <table className="table">
        <thead>
          <th>Item</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Net Amount</th>
        </thead>
        <tbody>
          {rowDto?.map((item, i) => (
            <tr>
              <td>{item?.label}</td>
              <td>
                <input
                  name="price"
                  value={item?.price}
                  onChange={(e) => {
                    rowDtoChangeHandler(e.target.name, e.target.value, i);
                    const netAmount = e.target.value - item?.discount || 0;
                    rowDtoChangeHandler("netAmount", netAmount, i);
                  }}
                />
              </td>
              <td>
                <input
                  name="discount"
                  value={item?.discount}
                  onChange={(e) => {
                    rowDtoChangeHandler(e.target.name, e.target.value, i);
                    const netAmount = item?.price - e.target.value;
                    rowDtoChangeHandler("netAmount", netAmount, i);
                  }}
                />
              </td>
              <td>{item?.netAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
