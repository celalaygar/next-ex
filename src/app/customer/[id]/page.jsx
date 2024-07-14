
"use client";
import React, { useState } from 'react';

const Customer = ({ params }) => {

    const [id, setId] = useState(5);

    console.log(params);
    params?.id && console.log(params.id);

    return (
        <div>
            customer params  {params.id}
            <hr />
            <p>id : {id}</p>
        </div>
    );
};

export default Customer;