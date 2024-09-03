import React from "react";

const DogList = ({dogs}) => {
    return (
        <div>
            <h1>These are the dogs</h1>
            <ul>
                {dogs.map(dog => <li>{dog.name}</li>)}
            </ul>
        </div>
    );
};

export default DogList;
