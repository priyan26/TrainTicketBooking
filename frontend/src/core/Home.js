import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getTrains } from './apiCore';
import Card from './Card';
import Search from './Search';

const Home = () => {
    const [trainsBySell, setTrainsBySell] = useState([]);
    const [trainsByArrival, setTrainsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadTrainsBySell = () => {
        getTrains('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setTrainsBySell(data);
            }
        });
    };

    const loadTrainsByArrival = () => {
        getTrains('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setTrainsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadTrainsBySell();
        loadTrainsByArrival();
    }, []);

    return (
        <Layout
            title="FullStack React Node MongoDB Ecommerce App"
            description="Node React E-commerce App"
            className="container-fluid"
        >
            <Search />
            <h2 className="mb-4">Top Sellers</h2>
            <div className="row">
                {trainsByArrival.map((train, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card train={train} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;