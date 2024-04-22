import React from "react";
import { Card, CardBody, CardFooter, Stack, Text, Divider, ButtonGroup, Button, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, price, description, img, stock, id }) => {
  return (
    <Card maxW="sm" h="100%">
      <CardBody>
        <Image
          src={img}
          alt={name}
          borderRadius="lg"
          objectFit="cover"
          h="200px" 
          className="item-image"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/product/${id}`}>Ver detalle </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
