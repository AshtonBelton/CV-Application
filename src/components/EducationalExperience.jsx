import React, { useState } from "react";
import "../styles/Education.css";

const EducationalExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({
        schoolName: '',
        studies: '',
        dateOfStudy: '', 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation({
            ...education, 
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
        <div className="educational-experience">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="schoolName">School Name:</label>
                        <input
                            type="text"
                            id="schoolName"
                            name="schoolName"
                            value={education.schoolName}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div>
                        <label htmlFor="titleOfStudy">Title of Study:</label>
                        <input
                            type="text"
                            id="titleOfStudy"
                            name="titleOfStudy"
                            value={education.titleOfStudy}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div>
                        <label htmlFor="dateOfStudy">Date of Study:</label>
                        <input
                            type="date"
                            id="dateOfStudy"
                            name="dateOfStudy"
                            value={education.dateOfStudy}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h2>Educational Experience</h2>
                    <p><strong>School Name:</strong> {education.schoolName}</p>
                    <p><strong>Title of Study:</strong> {education.titleOfStudy}</p>
                    <p><strong>Date of Study:</strong> {education.dateOfStudy}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default EducationalExperience;