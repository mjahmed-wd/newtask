import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Selection({ productOptions, selectedProducts, setSelectedProducts }) {
  const productSelection = (products) => {
    
    if (!selectedProducts.find((pd) => pd.label === products.label)) {
      const newArray = [...selectedProducts, products];
      setSelectedProducts(newArray);
    }
    
  };

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // isMulti
        options={productOptions}
        onChange={(products) => productSelection(products)}
      />
    </div>
  );
}

export default Selection;
