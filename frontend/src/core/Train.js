import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

const Train = props => {
    const [train, setTrain] = useState({});
    const [relatedTrain, setRelatedTrain] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleTrain = trainId => {
        read(trainId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setTrain(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedTrain(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const trainId = props.match.params.trainId;
        loadSingleTrain(trainId);
    }, [props]);

    return (
        <Layout
            title={train && train.name}
            description={train && train.description && train.description.substring(0, 100)}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-4"  style={{marginLeft:"35%"}}>
                    {train && train.price && <Card train={train} showViewTrainButton={false} />}
                </div>
            </div>
        </Layout>
    );
};

export default Train;