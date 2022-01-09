import { Container, Segment } from "semantic-ui-react";
import { React, useState, useEffect } from "react";

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from "../config/config.json";

function ProductList() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    async function fetchProducts() {
      const { data: productData } = await httpService.get(
        config.storeServiceUrl + "/product/all"
      );
      console.log("Returned products: ");
      console.log([productData]); // todo - remove
      setProducts([productData]);
    }

    fetchProducts();
  }, []);

  const productList = products.map((product) => 
    <Product
      key={product.id} 
      name={product.name}
      manufacturer={product.manufacturer}></Product>
  );

  return (
    <Segment>
      <Container>{productList}</Container>
    </Segment>
  );
}

export default ProductList;
