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
        <Card.Header>{props.price}</Card.Header>
        <Card.Meta>{props.manufacturer}</Card.Meta>
        <Card.Description>
          <Accordion>
            <Accordion.Title>
              <Icon name="dropdown" />
              Information
            </Accordion.Title>
            <Accordion.Content>
              <span>
                For the relief of mild to moderate pain, influenza, colds and
                feverishness.
                <br />
                Suitable for: Adults &amp; children aged 6 years &amp; over.
              </span>
            </Accordion.Content>
          </Accordion>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Product;
