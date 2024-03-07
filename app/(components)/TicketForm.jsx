//explicitly states to use client-side javascript; this is due to
//form functionalities that rely on client input
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = () => {
    const startingTicketData = {
        title: '',
        description: '',
        category: 'General IT Issue',
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

    const handleSubmit = () => {
        console.log('Form Submitted!');
    };

    return (
        <div className="flex justify-center">
            <form
                method="post"
                className="flex w-1/2 flex-col gap-3"
                onSubmit={handleSubmit}
            >
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
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required={true}
                    value={formData.description}
                    rows="5"
                />

                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="General">General IT Issue</option>
                    <option value="Software">Software Issue</option>
                    <option value="Hardware">Hardware Issue</option>
                    <option value="Locked Account">
                        Locked Out of Account
                    </option>
                    <option value="Service Issue">
                        Customer Service Issue
                    </option>
                    <option value="Other">Other</option>
                </select>
            </form>
        </div>
    );
};

export default TicketForm;
