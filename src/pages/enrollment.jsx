import '../App.css';
import Header from '../components/header';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from '../components/footer';

function Enrollment() {
    const [course, setCourse] = useState([])

    // Fetch enrollments
    useEffect(() => {
        axios
        .get('http://localhost:5001/enrollments')
        .then(response => {
            setCourse(response.data);
        })
        .catch(error => {
            console.error('Error fetching enrollments', error)
        });
    }, []);

    // Simulate enrollment
    const enroll = (id) => {
        axios
        .delete(`http://localhost:5001/enrollments/${id}`)
        .then(() => {
            setCourse(course.filter(item => item.id !== id));
        })
        .catch(error => {
            console.error('Error removing enrolled course', error);
        });
        return(
            alert('Course Enrolled!')
        )
    }

    if (!course) {
        return <p>No enrolled courses!</p>;
    }
  return (
    <>
        <Header/>
        <h3 className = 'nav'><Link className = 'links' to = '/'>Back to Course Listings</Link></h3>

        <div className = 'enrollments'>
            <h2>Enrollments</h2>
            <h3>Courses</h3>
            <ul>
                {course.map(item => (
                    <li key = {item.id} className = 'enrolledCourse'>
                        <p>{item.title}</p>

                        <p>Instructor: {item.instructor}</p>

                        <p>Duration: {item.duration}</p>

                        <button className = 'enrollButton' onClick={() => enroll(item.id)}>Enroll</button>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
    </>
  )
}

export default Enrollment