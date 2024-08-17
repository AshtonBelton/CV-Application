import React, { useState } from "react";
import "../styles/General.css";

const GeneralInformation = () => {
    const [editing, setEditing] = useState(true);
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...generalInfo,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditing(false);
    };

    return (
        <div className="general-information">
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={generalInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={generalInfo.email}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={generalInfo.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            ) : (
               <div>
                    <h2>General Information</h2>
                    <p><strong>Name:</strong> {generalInfo.name}</p>
                    <p><strong>Email:</strong> {generalInfo.email}</p>
                    <p><strong>Phone:</strong> {generalInfo.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
               </div> 
            )}
        </div>
    );
};

export default GeneralInformation;