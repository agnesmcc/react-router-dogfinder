import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const params = useParams()
    const dog = dogs.find(dog => dog.name.toLowerCase() === params.name.toLowerCase());
    return (
        <div>
            {!dog ? <p>Dog not found</p> : (
            <div>
                <h1>{dog.name}</h1>
                <p>{dog.age} years old</p>
                <img src={dog.src} alt={dog.name} />
                <p>{dog.facts.map(fact => <li>{fact}</li>)}</p>
            </div>
            )}
        </div>
    );
};

export default DogDetails;
