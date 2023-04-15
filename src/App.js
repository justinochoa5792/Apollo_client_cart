import "./App.css";
import { Grid } from "@chakra-ui/react";
import Cart from "./Cart";
import StoreItem from "./StoreItem";

const StoreItems = [
  { name: "Shoes", description: "Cool comfortable shoes", price: 10, id: 1 },
  { name: "Shirt", description: "Plain black shirt", price: 5, id: 2 },
  { name: "Jeans", description: "Blue Jeans", price: 15, id: 3 },
  {
    name: "JavaScript",
    description: "Buy the JS source code!",
    price: 15,
    id: 4,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Apollo Store</h1>
        <Cart />
        <br />
        <h2>Store Items</h2>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
          {StoreItems.map((el) => {
            return <StoreItem el={el} />;
          })}
        </Grid>
      </header>
    </div>
  );
}

export default App;
