import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Navigation/Nav";
import Recommended from "./Recomendend/Recomendend";
import Products from "./Products/Products";
import Card from "./components/Card";
import products from "./db/data";

// Firebase configuration
const firebaseConfig = {
  // Your Firebase config details
};

const auth = getAuth();

function App() {
  // State variables
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  // Effect to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Event handlers for input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to filter and map product data
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = products.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  // Content based on authentication state
  const authenticationContent = user ? (
    <div>
      <h1>Welcome, {user.email}!</h1>
      {/* Add your homepage content here */}
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  ) : (
    <div>
      <h1>Login or Register</h1>
      {/* Add your login/register form components here */}
    </div>
  );

  // Rendered components
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      {authenticationContent}
    </>
  );
}

export default App;
