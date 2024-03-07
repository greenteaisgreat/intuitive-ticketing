//explicitly states to use client-side javascript; this is due to
//form functionalities that rely on client input
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
    const startingTicketData = {
        title: '',
        description: '',
        category: '',
        priority: 1,
        progress: 0,
        status: 'Not Started',
        active: false,
    };

    const [formData, setFormData] = useState(startingTicketData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="flex justify-center">
            <form method="POST">
                <h3>Create Your Ticket</h3>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.title}
                />
            </form>
        </div>
    );
};

export default TicketForm;
