'use client'

import React from 'react';
import {useParams, useSearchParams} from "next/navigation";

const UserById = () => {
    // params
    const {id} = useParams()

    // query
    const searchParams = useSearchParams()

    console.log(searchParams.get('page'))
    console.log(searchParams.get('name'))

    return (
        <div>
            User by ID {id}
        </div>
    );
};

export default UserById;