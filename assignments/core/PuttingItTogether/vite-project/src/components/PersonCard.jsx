import React, { useState } from 'react';
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [currentAge, setCurrentAge] = useState(age);
    const handleBirthday = () => {
        setCurrentAge(currentAge + 1);
    };
    return(
        <div>
            <h1 style={{color:"red"}}>{firstName},{lastName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthday}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;
