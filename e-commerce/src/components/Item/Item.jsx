import React from "react";
import { Card, CardBody, CardFooter, Stack, Text, Divider, ButtonGroup, Button, Image, Heading } from "@chakra-ui/react";

const Item = ({ name, price, description, img }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt={name}
          borderRadius="lg"
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
            Ver detalle
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
