import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadVehicles();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Star Wars Vehicles</h1>
            <div className="row">
                {store.vehicles.map((vehicle) => (
                    <div key={vehicle.uid} className="col-3">
                        <div className="card">
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} 
                                className="card-img-top" 
                                alt={vehicle.name} 
                                onError={(e) => e.target.src = "https://via.placeholder.com/150"} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <Link to={`/single/${vehicle.uid}`}>
                                    <button className="btn btn-primary">Learn more</button>
                                </Link>
                                <button className="btn btn-success" onClick={() => actions.addFavorite(vehicle.name)}>Add to Favorites</button>
                                <button className="btn btn-danger" onClick={() => actions.removeFavorite(vehicle.name)}>Remove from Favorites</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Favorites</h3>
            <ul className="list-group">
                {store.favorites.map((fav, index) => (
                    <li key={index} className="list-group-item">{fav}</li>
                ))}
            </ul>
        </div>
    );
};
