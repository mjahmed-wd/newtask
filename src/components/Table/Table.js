import React from "react";
import Selection from "../Selection/Selection";
import { IndividualProduct } from "../IndividualProduct/IndividualProduct";

const Table = ({ selectedProducts , setSelectedProducts }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Net Ammount</th>
          </tr>
        </thead>
        <tbody>
            {/* working code */}
          {/* {selectedProducts.map((product, index) => (
            <IndividualProduct
              key={index}
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              index={index + 1}
            />
          ))} */}
          { selectedProducts.map((product, index) =><IndividualProduct key={index} index={index+1} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
