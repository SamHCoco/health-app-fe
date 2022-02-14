import { Container, Segment, Card, Dropdown, Pagination, Grid } from "semantic-ui-react";
import { React, useState, useEffect} from "react";

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from '../config/config.json';

function ProductList() {
  const [products, setProducts] = useState([{}]);
  
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState(config.storeServiceUrl + '/product/paged/all?page=1&size=1');
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  
  useEffect(() => {
    async function fetchProducts() {
      const { data: response } = await httpService.get(apiUrl);
      console.log('Returned response: ');
      console.log(response);
      
      setProducts(response.content);
      setTotalPages(response.totalPages);
    }
    fetchProducts();
  },[apiUrl]);


  const sortOptions = [
        {key: 0, text: 'Price: lowest to highest', value: 'Price: lowest to highest'},
        {key: 1, text: 'Price: highest to lowest', value: 'Price: highest to lowest'}
      ];

  

  function onPageChange(e, { activePage }) {
    setActivePage(activePage);
    setApiUrl(config.storeServiceUrl + '/product/paged/all?page=' + activePage.toString() + '&size=1');
  }
  
  return (
    <Grid centered>
      {/* Sort By:
              <Dropdown style = {{margin: 20}}
                selectOnBlur={false}
                selection
                inline
                placeholder={'sort by'}
                options={sortOptions} /> */}
        <Segment>
            <Container >
              <Card.Group itemsPerRow={5} >
                  {products.map(({id, name, manufacturer, price}) => <Product
                                            key={id} 
                                            name={name}
                                            price={price}
                                            manufacturer={manufacturer} />)}
              </Card.Group>
              <Pagination
                  activePage={activePage}
                  boundaryRange={0}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={1}
                  totalPages={5}
                  ellipsisItem={null}
                  defaultActivePage={1}
                  onPageChange={onPageChange}
              />
          </Container>
      </Segment>
    </Grid>
  );
}

export default ProductList;
