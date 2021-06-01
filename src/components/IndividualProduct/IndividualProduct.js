import React from "react";
import { Formik, Field } from "formik";

export const IndividualProduct = ({
  product,
  index,
  selectedProducts,
  setSelectedProducts,
}) => {
  let newArray;
  const updateSelectedProduct = (value, index) => {
    newArray=[...selectedProducts];
    newArray[index - 1] = value;
    setSelectedProducts(newArray)
    
    // setSelectedProducts(selectedProducts)
  };
  return (
    <>
      <tr>
        <Formik initialValues={product}>
          {({ values }) => (
            <>
              <td>{index}</td>
              <td>{product?.label}</td>
              <td 
              onChange={()=>{console.log(values)}}
              >
                <Field type="number" name="price"  />
              </td>

              <td 
              onChange={()=>{updateSelectedProduct(values, index)}}
              >
                <Field type="number" name="discount" />
              </td>

              <td>
                {values.price - values.discount >= 0
                  ? `${values.price - values.discount} tk only`
                  : "Invalid Data, Please Try Again"}
              </td>
            </>
          )}
        </Formik>
      </tr>
    </>
  );
};
