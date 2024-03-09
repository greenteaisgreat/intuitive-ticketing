//explicitly states to use client-side javascript; this is due to
//form functionalities that rely on client input
'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = ({ ticket }) => {
    const router = useRouter();
    const EDITMODE = ticket._id === 'new' ? false : true;

    const startingTicketData = {
        title: '',
        description: '',
        category: 'General IT Issues',
        priority: 1,
        progress: 0,
        status: 'Not Started',
        active: false,
    };

    if (EDITMODE) {
        startingTicketData.title = ticket.title;
        startingTicketData.description = ticket.description;
        startingTicketData.category = ticket.category;
        startingTicketData.priority = ticket.priority;
        startingTicketData.progress = ticket.progress;
        startingTicketData.status = ticket.status;
    }

    const [formData, setFormData] = useState(startingTicketData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (EDITMODE) {
            //this fetch request is using client side rendering
            const res = await fetch(`/api/Tickets/${ticket._id}`, {
                method: 'PUT',
                body: JSON.stringify({ formData }),
                'content-type': 'application/json',
            });

            if (!res.ok) {
                throw new Error('Failed to update ticket');
            }
        } else {
            //this fetch request is using client side rendering
            const res = await fetch('/api/Tickets', {
                method: 'POST',
                body: JSON.stringify({ formData }),
                'content-type': 'application/json',
            });

            if (!res.ok) {
                throw new Error('Failed to create a new ticket');
            }
        }
        //upon successful ticket creation, refresh the page and redirect home
        router.push('/');
        router.refresh();
    };

    return (
        <div className="flex justify-center">
            <form
                method="post"
                className="flex w-1/2 flex-col gap-3"
                onSubmit={handleSubmit}
            >
                <h3>{`${EDITMODE ? 'Update Your Ticket' : 'Create Your Ticket'}`}</h3>
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
                    <option value="General IT Issues">General IT Issue</option>
                    <option value="Software Issues">Software Issue</option>
                    <option value="Hardware Issues">Hardware Issue</option>
                    <option value="Locked Accounts">
                        Locked Out of Account
                    </option>
                    <option value="Service Issues">
                        Customer Service Issue
                    </option>
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
                    onChange={handleChange}
                />

                <label htmlFor="status">Status</label>
                <select
                    name="status"
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Finished">Finished</option>
                </select>
                <div className="flex justify-center">
                    <input
                        type="submit"
                        className="btn"
                        value={`${EDITMODE ? 'Edit Ticket' : 'Submit Ticket'}`}
                    />
                </div>
            </form>
        </div>
    );
};

export default TicketForm;
