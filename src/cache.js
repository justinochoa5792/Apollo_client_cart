import { makeVar, InMemoryCache } from "@apollo/client";

//Reactive Variable
export const cartItemsVar = makeVar([]);

export const CustomInMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});
