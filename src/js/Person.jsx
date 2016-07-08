import React from 'react';

const Person = ({name, img}) => {
    return (
        <article>
            <h1>{name}</h1>
            <div>
                <img src={img}/>
            </div>
        </article>
    );
};

export default Person;