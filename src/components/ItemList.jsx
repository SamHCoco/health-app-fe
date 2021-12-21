import { Container, Segment } from "semantic-ui-react";

import Item from '../components/Item';

function ItemList() {
    return ( 
        <Segment>
            <Container>
                <Item></Item>
            </Container>
        </Segment>
     );
}

export default ItemList;