import React from "react";
import { Accordion, Card, Image, Icon } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

function Product(props) {
  return (
    <Card>
      <Image src="https://i.postimg.cc/cLRqxzxC/medicine.png" />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Divider />
        <Card.Header>{formatPrice(props.price)}</Card.Header>
        <Card.Meta>{props.manufacturer}</Card.Meta>
        {/* <Card.Description>
      
        </Card.Description> */}
      </Card.Content>
    </Card>
  );
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
}

export default Product;
