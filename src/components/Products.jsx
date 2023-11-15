import React from "react";
import { connect } from "react-redux";
import { deleteProductInDB } from "../features";
import { toast } from "react-toastify";

// importing MUI component

import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";

const Products = (props) => {
  const { products, deleteProductFromlist } = props;
  const defaultImg =
    "https://png.pngtree.com/template/20220419/ourmid/pngtree-photo-coming-soon-abstract-admin-banner-image_1262901.jpg";

  // function to delete product
  const handleDeleteClick = (id) => {
    // handles notification
    toast.promise(deleteProductFromlist(id), {
      pending: "Product is being deleted..!!",
      success: "Produuct Deleted..!!",
      error: "Error in deleting product..!!!",
    });
  };

  return (
    <>
      {/* Container to display all products */}
      <div className="flex flex-wrap gap-2 justify-center items-center m-24">
        {/* Looping the displaying products */}
        {products.map((product, index) => {
          return (
            // individual product display starts
            <div
              key={index}
              className="w-full max-w-xl h-28 bg-slate-50 p-3 flex"
            >
              {/* displays product image starts*/}
              {/* <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: "contain",
                  backgroundColor: "#f7f7f7",
                }}
                image={product.image || defaultImg}
                alt="product.jpg"
              /> */}

              <div className="flex w-1/2">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                    maxWidth: "200px",
                    minWidth: "150px",
                  }}
                  to={`/${product.id}`}
                >
                  <img
                    src={product.image || defaultImg}
                    alt="image"
                    className="w-2/3 h-full"
                  />
                </Link>

                <div className="flex flex-col">
                  {/* display title */}
                  <h1 className="overflow-hidden">{product.title}</h1>
                  <p className="text-xs">
                    <Typography
                      variant="p"
                      color="text.secondary"
                      fontWeight={200}
                    >
                      &#8377;{" "}
                      {
                        // formats price upto 2 decimal
                        Intl.NumberFormat("en-US", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        }).format(product.price * 30)
                      }
                    </Typography>
                  </p>
                  <p className="mt-5">
                    {/* display rating */}
                    <Typography component="span" variant="h6">
                      {/* rating star */}
                      <Rating
                        precision={0.1}
                        value={product.rating}
                        sx={{
                          verticalAlign: "main",
                          color: "black",
                        }}
                        emptyIcon={<StarOutlineIcon sx={{ color: "black" }} />}
                        readOnly
                      />
                    </Typography>
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-full w-1/2 border border-stone-200 hover:shadow-2xl hover:shadow-gray-400 p-2 gap-3">
                <p className="h-2/3 overflow-hidden flex justify-end">
                  {product.description}
                </p>
                <div className="items-end w-full justify-end flex gap-6">
                  <button className="relative">
                    <IconButton
                      onClick={() => handleDeleteClick(product.id)}
                      size="small"
                      sx={{
                        position: "absolute",
                        right: 2,
                        bottom: -20,
                        color: "black",
                      }}
                    >
                      <IoTrashBin />
                    </IconButton>
                  </button>
                </div>
              </div>
              {/* displays product image ends*/}

              {/* delete button starts */}
              {/* <IconButton
                onClick={() => handleDeleteClick(product.id)}
                size="large"
                sx={{
                  position: "absolute",
                  right: 2,
                  top: 2,
                  color: "red",
                }}
              >
                <DeleteOutlineRoundedIcon fontSize="large" />
              </IconButton> */}
              {/* delete button ends*/}

              {/* current products info starts*/}

              {/* product info  starts*/}

              {/* display title */}

              {/* product price */}

              {/* product info section ends */}
              {/* current products info  ends*/}
            </div>
            // individual product display ends
          );
        })}
      </div>
      {/* Container to display all products */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProductFromlist: (productId) =>
      dispatch(deleteProductInDB(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
