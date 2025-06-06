import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
import Menu from "../components/Menu";
import MobileApp from "../components/MobileApp";
import Footer from "../components/Footer";


const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
 


  useEffect(() => {
    // Fetch Products
    axios
      .get("https://fsd-backend-project-1-21sl.onrender.com/api/products")
      .then((res) => {
        console.log("Products fetched:", res.data.data.items);
        setProducts(res.data.data || [])
      })
      .catch((err) => console.log("Product Error:", err));



    // Fetch Cart (only if user logged in)
    if (user) {
      if (user.role === "Admin") {
        navigate("/admin");
        return;
      }

      axios
        .get("https://fsd-backend-project-1-21sl.onrender.com/api/cart/view", {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((res) => setCartItems(res.data.data.items || []))
        .catch((err) => console.log("Cart Fetch Error:", err));
    }
  }, [user, navigate]);

  // Add to Cart
  const addToCart = (productId) => {
    if (!user) {
      alert("Please login to add items to cart!");
      setTimeout(() => navigate("/login"), 1500);
      return;
    }

    axios
      .post(
        "https://fsd-backend-project-1-21sl.onrender.com/api/cart/add",
        { productId, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
      .then(() => {
        setCartItems([...cartItems, { product: { _id: productId } }]);
      })
      .catch(() => alert("Error adding to cart!"));
  };

  //  Remove from Cart
  const removeFromCart = (productId) => {
    axios
      .delete(
        `https://fsd-backend-project-1-21sl.onrender.com/api/cart/remove/${productId}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      )
      .then(() => {
        setCartItems(
          cartItems.filter((item) => item.product._id !== productId)
        );
      })
      .catch(() => alert("Error removing from cart!"));
  };
   
  

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-6 py-10">
        {/* <Header/> */}
        <Menu />
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
          Explore Our <span className="text-blue-600">Foods</span>
        </h1>
        

        {products.length === 0 ? (

          console.log("products", products),

          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => {
             
              var trimmedData = product.name.replace(/ /g, '')
              // console.log("Product name ", trimmedData);
              const inCart = cartItems.some(
                (item) => item.product._id === product._id
              );
              
              return (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-transform hover:scale-105"
                >
                  <div>
                    <div className="text-sm text-gray-500 mt-2">
                      <img src={product.image} alt="Product image" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}  
                    </h2>
                    <div className="flex justify-between mt-2 ">
                      <p className="text-blue-600 font-bold mt-1 text-2xl">
                      ${product.price} 
                    </p>
                    <img src="rating_starts.png" alt="" />
                    </div>
                    

                    <p className="text-sm text-gray-500 mt-2">
                      {product.description}
                    </p>

                  </div>
                  {inCart ? (
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product._id)}
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <hr className="mt-4" />
        <MobileApp/>
        <Footer/>
      </div>
    </>

  );
};

export default Home;