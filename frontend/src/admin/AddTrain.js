import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createTrain, getCategories } from './apiAdmin';

const AddTrain = () => {
    const [values, setValues] = useState({
        name: '',
        categories: [],
        departFrom: '',
        destination: '',
        depatureDate: '',
        depatureTime: '',
        arrivalDate: '',
        arrivalTime: '',
        noOfSeats: '',
        price: '',
        photo: '',
        loading: false,
        error: '',
        createdTrain: '',
        redirectToProfile: false,
        formData: ''
    });

    const { user, token } = isAuthenticated();
    const {
        name,
        categories,
        category,
        departFrom,
        destination,
        depatureDate,
        depatureTime,
        arrivalDate,
        arrivalTime,
        noOfSeats,
        price,
        loading,
        error,
        createdTrain,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        createTrain(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    createdTrain: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories &&
                    categories.map((c, i) => (
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Depart From</label>
                <input onChange={handleChange('departFrom')} type="text" className="form-control" value={departFrom} />
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label className="text-muted">Depature Date</label>
                        <input onChange={handleChange('depatureDate')} type="date" className="form-control" value={depatureDate} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="text-muted">Depature Time</label>
                        <input onChange={handleChange('depatureTime')} type="time" className="form-control" value={depatureTime} />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label className="text-muted">Destination</label>
                <input onChange={handleChange('destination')} type="text" className="form-control" value={destination} />
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label className="text-muted">Arrival Date</label>
                        <input onChange={handleChange('arrivalDate')} type="date" className="form-control" value={arrivalDate} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="text-muted">Arrival Time</label>
                        <input onChange={handleChange('arrivalTime')} type="time" className="form-control" value={arrivalTime} />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label className="text-muted">Number of seats</label>
                <input onChange={handleChange('noOfSeats')} type="number" className="form-control" value={noOfSeats} />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
            </div>

            <button className="btn btn-primary btn-lg btn-block">Create Train</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdTrain ? '' : 'none' }}>
            <h2>{`${createdTrain}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <Layout title="Add a new product" description={`G'day ${user.name}, ready to add a new product?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};

export default AddTrain;