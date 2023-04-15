import { cartItemsVar } from "./cache";
import { useReactiveVar } from "@apollo/client";
import { Button, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const StoreItem = ({ el }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const id = el.id;
  let isInCart = cartItems.some((item) => item.id === id);

  return (
    <div>
      <GridItem bg="blue.700" p={"4"}>
        <Text>{el.name}</Text>
        <Text fontSize="xs">{el.description}</Text>
        <Text fontSize="xs">Price: ${el.price}.00</Text>
        <Button
          onClick={() => {
            cartItemsVar(
              isInCart
                ? cartItems.filter((item) => item.id !== id)
                : [...cartItems, el]
            );
          }}
          size="xs"
          textColor="black"
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </Button>
      </GridItem>
    </div>
  );
};

export default StoreItem;
