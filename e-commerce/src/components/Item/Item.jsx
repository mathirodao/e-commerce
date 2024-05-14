import React from "react";
import { Card, CardBody, CardFooter, Stack, Text, Divider, Button, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, price, description, img, id }) => {
  return (
    <Card maxW="sm" h="100%" bg='primary.900' color="#eaece9" borderRadius={"0px"} boxShadow='2xl'>
      <CardBody p={"0px"}>
        <Image
          src={img}
          alt={name}
          boxSize='100%'
          w="100%"
          objectFit='cover'
          objectPosition='center'
          h='200px'
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color="#eaece9">{name}</Heading>
          <Text>
            {description}
          </Text>
          <Text color="#ffffff" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center" p="0px">
        <Button variant='ghost' color="white" w="100%">
          <Link to={`/product/${id}`}>Ver producto </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
