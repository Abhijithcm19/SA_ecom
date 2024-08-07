import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Loading from "../components/PrductsPage/Loading";
import "../Styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      let url = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProductData(data);
        setFilter(data);
      } catch (error) {
        setError("An error occurred while fetching products.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const filterProduct = (cates) => {
    const updateList = productData.filter((p) => p.category === cates);
    setFilter(updateList);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      navigate("/ProductCart");
    });
  };

  const handleBuyClick = (productId) => {
    navigate(`/Products/${productId}`);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-4 pb-4">
          <button
            className="btn btn-outline-dark me-2 w-25"
            onClick={() => setFilter(productData)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 w-25"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
          <button
            className="btn btn-outline-dark me-2 w-25"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 w-25"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 w-25"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>
        {filter.map((product) => (
          <div className="product-container col-md-3" key={product.id}>
            <div className="card mb-3 me-2 text-center">
              <div className="product-img">
                <NavLink to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height={300}
                  />
                </NavLink>
              </div>
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 10)}..
                </h5>
                <p className="card-text">
                  {product.description.length > 30
                    ? product.description.substring(0, 80)
                    : product.description}
                  <NavLink
                    to={`/products/${product.id}`}
                    className="fs-6 text-decoration-none fw-normal text-success"
                  >
                    ..more
                  </NavLink>
                </p>
                <p className="card-text fw-normal">{product.category}</p>
                <div className="rating">
                  <p>
                    <FontAwesomeIcon
                      className="sa me-1"
                      icon={faStar}
                      style={{ color: "#ff9900" }}
                    />
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faStar}
                      style={{ color: "#ff9900" }}
                    />
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faStar}
                      style={{ color: "#ff9900" }}
                    />
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faStar}
                      style={{ color: "#ff9900" }}
                    />
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faStar}
                      style={{ color: "#ff9900" }}
                    />
                    <span>
                      {product.rating.rate}{" "}
                      <FontAwesomeIcon icon={faAngleDown} size="sm" />
                    </span>
                  </p>
                </div>
                <p className="card-text fw-bolder fs-3">${product.price}</p>
                <p className="card-text text-secondary">
                  {product.rating.count} + bought in past month
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-outline-danger fw-medium w-75"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-danger fw-medium w-50"
                    onClick={() => handleBuyClick(product.id)}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="Product-Page-container px-5 my-2 py-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="text-center fw-bold display-5">Latest Products</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Products;
