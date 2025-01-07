import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';

function ClassCard() {
    const [course, setCourse] = useState([])

    // Fetch courses
    useEffect(() => {
        axios
        .get('http://localhost:5001/courses')
        .then(response => {
            setCourse(response.data);
        })
        .catch(error => {
            console.error('Error fetching courses', error)
        });
    }, []);
    return(
        <div>
            <ul>
                {course.map(item => (
                    <li key = {item.id} className = 'card'>
                        <img className = 'cardImage' src = {item.thumbnail}></img>
                        <h2>{item.title}</h2>

                        <h3>Instructor: {item.instructor}</h3>

                        <h3>Duration: {item.duration}</h3>

                        <Link to = {`/description/${item.id}`}><button className = 'detailsButton'>Course Details</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClassCard