import React from 'react';
import { useProduct } from "../../context/furrlContext";
import Popup from "reactjs-popup";
import { FaBookmark, FaCartPlus } from "react-icons/fa";
import "./index.css";

const SharePopup = ({ product, close }) => (
  <div className="confirmation">
    <button
      type="button"
      className="button1 cross"
      onClick={close}
      data-testid="close"
    >
      X
    </button>
    <div className="card1">
      <img
        src={product.images[0].src}
        alt={product.vendor}
        className="share-image"
      />
      <p className="vendor">{product.vendor}</p>
      <p className="title">{product.title}</p>
      <div className="price-container">
        <p className="sp">Rs {product.price.value}</p>
        <p className="cp">Rs {product.MRP.value}</p>
        <p className="dis">{product.discountPercent}%</p>
      </div>
    </div>
    <div className="button-container">
      <button
        type="button"
        className="cancel-button button1"
        onClick={close}
      >
        Share
      </button>
    </div>
  </div>
);

const ProductDescription = ({ product }) => (
  <div className="product-desc-container">
    <Section
      imgSrc="https://web.furrl.in/_next/static/media/PdpDesc.b54078e8.svg"
      title="Product Description"
      description="Welcome to the future of shopping! E-shopping, or online shopping, revolutionizes the way you browse, select, and purchase products. From the comfort of your home or on the go, you can explore a vast array of items from around the world, all at your fingertips. This product is designed with the latest trends in mind, offering unparalleled quality and style."
    />
    <Section
      imgSrc="https://web.furrl.in/_next/static/media/PdpDelivery.e17a58c0.svg"
      title="Delivery Information"
      description="Enjoy fast and reliable shipping with our efficient delivery service. Your order usually ships within 1-4 working days. Track your shipment easily and get updates on the delivery status."
    />
    <Section
      imgSrc="https://web.furrl.in/_next/static/media/PdpReturn.51ac31d1.svg"
      title="Exchange & Return Policy"
      description="Size exchanges are enabled for this product. If you're not completely satisfied with your purchase, you can return or exchange it within 30 days. Please refer to our return policy for more details."
    />
  </div>
);

const Section = ({ imgSrc, title, description }) => (
  <div className="product-desc">
    <div className="product-desc-title">
      <img src={imgSrc} className="desc-img" alt={title} />
      <p className="product-desc-title-head">{title}</p>
    </div>
    <p className="product-desc-info">{description}</p>
  </div>
);

const ProductItem = () => {
  const { product } = useProduct();
  const handleCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been bookmarked!`);
  };
  const handleBookmark = (product) => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(product);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    alert(`${product.title} has been bookmarked!`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="banner-container">
        <img
          src={product.images[0].src}
          alt={product.vendor}
          className="item-image"
        />
        <div className="share-icon">
          <Popup
            modal
            trigger={
              <div className="trigger-button">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_6238_38939)">
                    <rect
                      x="4"
                      y="4.82983"
                      width="36"
                      height="36"
                      rx="18"
                      fill="#4B5563"
                    ></rect>
                    <path
                      d="M17.3895 19.8139H16.4565C14.4215 19.8139 12.7715 21.4639 12.7715 23.4989V28.3739C12.7715 30.4079 14.4215 32.0579 16.4565 32.0579H27.5865C29.6215 32.0579 31.2715 30.4079 31.2715 28.3739V23.4889C31.2715 21.4599 29.6265 19.8139 27.5975 19.8139H26.6545"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22.0215 13.0204V25.0614"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M19.1064 15.9486L22.0214 13.0206L24.9374 15.9486"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_6238_38939"
                      x="0"
                      y="0.829834"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6238_38939"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6238_38939"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            }
          >
            {(close) => (
              product && <SharePopup product={product} close={close} />
            )}
          </Popup>
        </div>
      </div>
      <div className="data-container">
        <div className="vendor-container">
          <p className="vendor-pr">{product.vendor}</p>
          <p className="vendor-pr review" onClick={() => handleCart(product)}>
            <FaCartPlus className="star" /> Add to Cart
          </p>
          <p className="vendor-pr review" onClick={() => handleBookmark(product)}>
            <FaBookmark className="star" /> Bookmark
          </p>
        </div>
        <p className="title-pr">{product.title}</p>
        <div className="price-container">
          <p className="sp-product">Rs {product.price.value}</p>
          <p className="cp-product">Rs {product.MRP.value}</p>
          <p className="dis-product">{product.discountPercent}% off</p>
        </div>
      </div>
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductItem;
