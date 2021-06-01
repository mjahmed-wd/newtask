import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Selection({ productOptions, selectedProducts, setSelectedProducts }) {
  const productSelection = (products) => {
    
    console.log(!!selectedProducts.find((pd) => pd.label === products.label));
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
        // onChange={(products) => setSelectedProducts(products)}
        onChange={(products) => productSelection(products)}
      />
    </div>
  );
}

export default Selection;
