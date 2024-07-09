import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://swapi.tech/api/people/${params.theid}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setDetails(data.result.properties);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };

        fetchDetails();
    }, [params.theid]);

    return (
        <div className="jumbotron">
            {details ? (
                <>
                    <h1 className="display-4">{details.name}</h1>
                    <p className="lead">Gender: {details.gender}</p>
                    <p className="lead">Birth Year: {details.birth_year}</p>
                    <p className="lead">Height: {details.height}</p>
                    <p className="lead">Mass: {details.mass}</p>
                    <p className="lead">Hair Color: {details.hair_color}</p>
                    <hr className="my-4" />
                    <Link className="btn btn-primary btn-lg" to="/" role="button">
                        Back home
                    </Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
