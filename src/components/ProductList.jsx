import { Container, Segment, Card } from "semantic-ui-react";
import { React, useState, useEffect, Text } from "react";

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from "../config/config.json";

function ProductList() {
  const [products, setProducts] = useState([{}]);
  const [test, setTest] = useState(['first', 'second']);

  useEffect(() => {
    async function fetchProducts() {
      const { data: productData } = await httpService.get(
        config.storeServiceUrl + "/product/all"
      );
      console.log("Returned products: ");
      setProducts(productData);
    }

    fetchProducts();
  }, []);

  return (
    <Segment>
      <Container>
        <Card.Group itemsPerRow={5}>
            {products.map(({id, name, manufacturer, price}) => <Product
                                      key={id} 
                                      name={name}
                                      price={price}
                                      manufacturer={manufacturer} />)}
        </Card.Group>
    </Container>
    </Segment>
  );
}

export default ProductList;
