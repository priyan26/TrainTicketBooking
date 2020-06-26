import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelperss';

const Card = ({
                  train,
                  showViewTrainButton = true,
                  showAddToCartButton = true,
                  cartUpdate = false,
                  showRemoveProductButton = false,
                  setRun = f => f,
                  run = undefined
                  // changeCartSize
              }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(train.count);

    const showViewButton = showViewTrainButton => {
        return (
            showViewTrainButton && (
                <Link to={`/train/${train._id}`} className="mr-2">
                    <button className="btn btn-primary btn-lg btn-block mt-2 mb-2 card-btn-1">View Train</button>
                </Link>
            )
        );
    };
    const addToCart = () => {
        // console.log('added');
        addItem(train, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button onClick={addToCart} className="btn btn-warning btn-lg btn-block mt-2 mb-2 card-btn-1">
                    Buy
                </button>
            )
        );
    };

    const showStock = noOfSeats => {
        return noOfSeats > 0 ? (
            <span className="badge badge-primary badge-pill">Available </span>
        ) : (
            <span className="badge badge-primary badge-pill">Not Available </span>
        );
    };

    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Adjust Quantity</span>
                        </div>
                        <input type="number" className="form-control" value={count} onChange={handleChange(train._id)} />
                    </div>
                </div>
            )
        );
    };
    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => {
                        removeItem(train._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                    className="btn btn-danger btn-lg btn-block mt-2 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };
    return (
        <div className="card ">
            <div className="card-header card-header-1 ">{train.name}</div>
            <div className="card-body">
                {shouldRedirect(redirect)}
                <ShowImage item={train} url="train" />
                <p className="card-p black-10">Rs.{train.price}</p>
                <p className="black-9">Category: {train.category && train.category.name}</p>
                <p className="black-9">Depature: {train.departFrom}</p>
                <p className="black-9">Destination: {train.destination}</p>
                <p className="black-9">Depature Date/Time: {train.depatureDate} / {train.depatureTime}</p>
                <p className="black-9">Arrival Date/Time: {train.arrivalDate} / {train.arrivalTime}</p>
                <p className="black-8">Added on {moment(train.createdAt).fromNow()}</p>
                {showStock(train.noOfSeats)}
                <br />

                {showViewButton(showViewTrainButton)}

                {showAddToCartBtn(showAddToCartButton)}

                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};

export default Card;