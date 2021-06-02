// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import Select from "react-select";

function App() {
  const productOptions = [
    { value: "Potato", label: "Potato" },
    { value: "Mojo", label: "Mojo" },
    { value: "Cocacola", label: "Cocacola" },
  ];

  const [rowDto, setRowDto] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    const totalAmount = rowDto?.reduce( (acc, item) => acc + +item?.netAmount,0);
    const totalDiscount = rowDto?.reduce((acc, item) => acc + +item?.discount,0);
    setTotalAmount(totalAmount);
    setTotalDiscount(totalDiscount);
  }, [rowDto]);

  const addHandler = (v) => {
    const obj = {
      ...v,
      price: "",
      quantity: 1,
      discount: "",
      netAmount: "",
    };
    setRowDto([...rowDto, obj]);
  };

  const rowDtoChangeHandler = (name, value, i) => {
    const data = [...rowDto];
    data[i][name] = value;
    setRowDto(data);
  };

  // My solution via onChange
  // const reducer = (name, setter) => {
  //   const netAmountArray = rowDto.map((product) =>
  //     product[name] ? product[name] : 0
  //   );
  //   setter(
  //     netAmountArray.reduce(
  //       (accumulator, currentValue) =>
  //         parseInt(accumulator) + parseInt(currentValue)
  //     )
  //   );
  // };

  const calculationHandler = (e, i, item) => {
    const value = e.target.value;
    const name = e.target.name;
    rowDtoChangeHandler(name, value, i);
    const netAmount =
      name === "price"
        ? value - item?.discount
        : name === "discount"
        ? item?.price * item?.quantity - value
        : item?.price * value;
    rowDtoChangeHandler("netAmount", netAmount, i);

    // reducer("netAmount", setTotalAmount);
    // reducer("discount", setTotalDiscount);
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
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {rowDto?.map((item, i) => (
            <tr key={i}>
              <td>{item?.label}</td>
              <td>
                <input
                  name="price"
                  type="number"
                  min={0}
                  value={item?.price}
                  onChange={(e) => calculationHandler(e, i, item)}
                />
              </td>
              <td>
                <input
                  name="quantity"
                  type="number"
                  min={0}
                  value={item?.quantity}
                  onChange={(e) => calculationHandler(e, i, item)}
                />
              </td>
              <td>
                <input
                  name="discount"
                  type="number"
                  min={0}
                  value={item?.discount}
                  onChange={(e) => calculationHandler(e, i, item)}
                />
              </td>
              <td>{item?.netAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Amount</p>
      <p>{totalAmount}</p>
      <p>Total Discount</p>
      <p>{totalDiscount}</p>
    </div>
  );
}

export default App;
