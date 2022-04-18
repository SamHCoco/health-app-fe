import { Container, Segment, Card, Dropdown, Pagination, Grid, Search } from "semantic-ui-react";
import { React, useState, useEffect} from "react";

import { useKeycloak } from '@react-keycloak/web';

import Product from "../components/Product";
import httpService from "../service/httpService";
import config from '../config/config.json';

function ProductList() {
  const [products, setProducts] = useState([{}]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const { keycloak, initialized } = useKeycloak();
  
  const [apiUrl, setApiUrl] = useState(config.storeServiceUrl + '/product/paged/all?page=' + activePage + '&size=' + pageSize.toString());

  useEffect(() => {
    keycloak.init({onLoad: 'login-required'}); // todo - fix

    async function fetchProducts() {
      const { data: response } = await httpService.get(apiUrl);
      console.log('Returned response: ');
      console.log(response);
      
      setProducts(response.content);
      setTotalPages(response.totalPages);
    }
    fetchProducts();
  },[apiUrl]);


  const pageSizeOptions = [
        {key: 0, text: 'View 12', value: '12'},
        {key: 1, text: 'View 24', value: '24'}
      ];

  function onPageChange(e, { activePage }) {
    setActivePage(activePage);
    setApiUrl(config.storeServiceUrl + '/product/paged/all?page=' + activePage.toString() + '&size=' + pageSize.toString());
  }

  function onPageSizeChange(e, { value }) {
    setPageSize(value);
    setActivePage(1);
    setApiUrl(config.storeServiceUrl + '/product/paged/all?page=1&size=' + value);
    console.log("Page size changed to " + value);
  }
  
  return (
    <Grid centered>
      
      <Grid.Row>
          {/* <div>
            <Search placeholder='Search' />
          </div> */}

          <div style={{"margin-left": "0px"}}>
            <Dropdown
              selection
              options={pageSizeOptions}  
              onChange={onPageSizeChange}
              placeholder={'View 12'}
            />
          </div>

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
