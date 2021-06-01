import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Selection from "./components/Selection/Selection";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  // console.log(selectedProducts);

  const productOptions = [
    { value: "Potato", label: "Potato", price: "", discount: "" },
    { value: "Mojo", label: "Mojo", price: "", discount: "" },
    { value: "Cocacola", label: "Cocacola", price: "", discount: "" },
  ];
  return (
    <div className="d-flex justify-content-center mt-2 text-center">
      <div className="w-75">
        <Selection
          productOptions={productOptions}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        {/* working code */}
        {/* {selectedProducts?.length > 0 && (
          <Table
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        )} */}
        <Table
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </div>
    </div>
  );
}

export default App;
