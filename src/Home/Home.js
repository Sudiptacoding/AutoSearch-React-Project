import React from 'react';

const Home = (props) => {
    const {id, email,name} = props.suggestion;
    console.log(props.usr);

    return (
        <div>
            {id}
            {email}
            {name}
        </div>
    );
};

export default Home;