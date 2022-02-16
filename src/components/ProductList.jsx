import { Container, Segment, Card, Dropdown, Pagination, Grid, Search } from "semantic-ui-react";
import { React, useState, useEffect} from "react";

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from '../config/config.json';

function ProductList() {
  const [products, setProducts] = useState([{}]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  
  const [apiUrl, setApiUrl] = useState(config.storeServiceUrl + '/product/paged/all?page=' + activePage + '&size=' + pageSize.toString());

  useEffect(() => {
    async function fetchProducts() {
      const { data: response } = await httpService.get(apiUrl);
      console.log('Returned response: ');
      console.log(response);
      
      setProducts(response.content);
      setTotalPages(response.totalPages);
    }
    fetchProducts();
  },[apiUrl, pageSize]);


  const pageSizeOptions = [
        {key: 0, text: 'View 12', value: 12},
        {key: 1, text: 'View 24', value: 24}
      ];

  function onPageChange(e, { activePage }) {
    setActivePage(activePage);
    setApiUrl(config.storeServiceUrl + '/product/paged/all?page=' + activePage.toString() + '&size=' + pageSize.toString);
  }
  
  return (
    <Grid centered>
      
      <Grid.Row>
          <div>
            <Search placeholder='Search' />
          </div>

          <Dropdown
            selection
            options={pageSizeOptions} 
            onChange={(e, { value }) => setPageSize({ value })}
            defaultValue='View 12'
          />

      </Grid.Row>
        
        <Segment>
            <Container >
              <Card.Group itemsPerRow={3} >
                  {products.map(({id, name, manufacturer, price}) => <Product
                                            key={id} 
                                            name={name}
                                            price={price}
                                            manufacturer={manufacturer} />)}
              </Card.Group>
              <div style={{"margin-top": "20px"}}>
                <Pagination
                    activePage={activePage}
                    boundaryRange={0}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={totalPages}
                    ellipsisItem={null}
                    defaultActivePage={1}
                    onPageChange={onPageChange}
                />
              </div>
          </Container>
      </Segment>
    </Grid>
  );
}

export default ProductList;
