import { Container, Segment, Card, Dropdown } from "semantic-ui-react";
import { React, useState, useEffect} from "react";

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from "../config/config.json";
import DropdownMenu from './DropdownMenu';

function ProductList() {
  const [products, setProducts] = useState([{}]);
  
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


  const sortOptions = [
        {key: 0, text: 'Price: lowest to highest', value: 'Price: lowest to highest'},
        {key: 1, text: 'Price: highest to lowest', value: 'Price: highest to lowest'}
      ];

  function handleClick(e, {key}) {
    
  }    
  
  return (
    <Segment>
          <Container >
            Sort By:
            <Dropdown style = {{margin: 20}}
              selectOnBlur={false}
              selection
              inline
              placeholder={'sort by'}
              options={sortOptions} />
            <Card.Group itemsPerRow={5} >
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
