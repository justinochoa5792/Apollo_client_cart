import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
const Cart = () => {
  const { loading, error, data } = useQuery(GET_CART_ITEMS);

  if (loading) return "Loading cart!";
  if (error) return <p>ERROR:{error.message}</p>;
  return (
    <>
      <h4>My Cart</h4>
      {data && data.cartItems.length === 0 ? (
        <p>There are no items in your cart!</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {data &&
            data.cartItems.map((el) => {
              return <li key={el.id}>{el.name}</li>;
            })}
        </ul>
      )}
    </>
  );
};

export default Cart;
