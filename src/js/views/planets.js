import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Star Wars Planets</h1>
            <div className="row">
                {store.planets.map((planet) => (
                    <div key={planet.uid} className="col-3">
                        <div className="card">
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                                className="card-img-top" 
                                alt={planet.name} 
                                onError={(e) => e.target.src = "https://via.placeholder.com/150"} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <Link to={`/single/${planet.uid}`}>
                                    <button className="btn btn-primary">Learn more</button>
                                </Link>
                                <button className="btn btn-success" onClick={() => actions.addFavorite(planet.name)}>Add to Favorites</button>
                                <button className="btn btn-danger" onClick={() => actions.removeFavorite(planet.name)}>Remove from Favorites</button>
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
