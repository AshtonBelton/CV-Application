import React, { useState } from "react";
import "../styles/Experience.css";

const PracticalExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [experience, setExperience] = useState({
        companyName: "",
        positionTitle: "", 
        mainResponsibilities: "",
        dateStart: "",
        dateUntil: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({
            ...experience,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="practical-experience">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={practical.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="positionTitle">Position Title:</label>
                        <input
                        type="text"
                        id="positionTitle"
                        name="positionTitle"
                        value={practical.positionTitle}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
                        <textarea
                        id="mainResponsibilities"
                        name="mainResponsibilities"
                        value={practical.mainResponsibilities}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="dateFrom">Date From:</label>
                        <input
                        type="date"
                        id="dateFrom"
                        name="dateFrom"
                        value={practical.dateFrom}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="dateUntil">Date Until:</label>
                        <input
                        type="date"
                        id="dateUntil"
                        name="dateUntil"
                        value={practical.dateUntil}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                <h2>Practical Experience</h2>
                <p><strong>Company Name:</strong> {practical.companyName}</p>
                <p><strong>Position Title:</strong> {practical.positionTitle}</p>
                <p><strong>Main Responsibilities:</strong> {practical.mainResponsibilities}</p>
                <p><strong>Date From:</strong> {practical.dateFrom}</p>
                <p><strong>Date Until:</strong> {practical.dateUntil}</p>
                <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default PracticalExperience;