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
                    <option value="Locked">Locked Out of Account</option>
                    <option value="Service">Customer Service Issue</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="priority">Priority</label>
                <div>
                    <input
                        id="priority-1"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={1}
                        checked={formData.priority == 1}
                    />
                    <label htmlFor="1">1</label>
                    <input
                        id="priority-2"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={2}
                        checked={formData.priority == 2}
                    />
                    <label htmlFor="2">2</label>
                    <input
                        id="priority-3"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={3}
                        checked={formData.priority == 3}
                    />
                    <label htmlFor="3">3</label>
                    <input
                        id="priority-4"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={4}
                        checked={formData.priority == 4}
                    />
                    <label htmlFor="4">4</label>
                    <input
                        id="priority-5"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={5}
                        checked={formData.priority == 5}
                    />
                    <label htmlFor="5">5</label>
                </div>
                <label htmlFor="progress">Progress</label>
                <input
                    type="range"
                    id="progress"
                    name="progress"
                    value={formData.progress}
                    min={0}
                    max={100}
                />
            </form>
        </div>
    );
};

export default TicketForm;
