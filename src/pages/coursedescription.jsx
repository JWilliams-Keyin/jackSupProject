import { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Footer from '../components/footer';


function CourseDesc() {
  const {id} = useParams();
  const [course, setCourse] = useState(null);

  // Fetch course details
  useEffect(() => {
    axios
      .get(`http://localhost:5001/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

    // Add favorites
    const addFavorite = (item) => {
        axios
        .post('http://localhost:5001/favorites', item)
        .then(() => {
            alert(`Course "${item.title}" added to favorites!`);
        })
        .catch((error) => {
            console.error('Error adding to favorites', error);
        });
    };

    // Add to enrollment
    const addEnrollment = (item) => {
        axios
        .post('http://localhost:5001/enrollments', item)
        .then(() => {
            alert(`Course "${item.title}" added to enrollments!`);
        })
        .catch((error) => {
            console.error('Error adding to enrollments', error);
        });
    };

    if (!course) {
        return <p>Loading course details...</p>;
    }
  return (
    <>
        <div className = 'detailsBanner'>
            <img className = 'detBannerImage' src = {course.banner}></img>
        </div>
        <h3 className = 'nav'>
        <Link className = 'links' to = '/'>
            Back to Course Listings
        </Link>
        </h3>

        <div className = 'courseDetails'>
            <h2>{course.title}</h2>

            <h3>Instructor: {course.instructor}</h3>

            <h3>Duration: {course.duration}</h3>

            <p>{course.description}</p>

            <h4>Key Teachings:</h4>
            <p>{course.keyTeachings}</p>

            <h4>Instructor Bio:</h4>
            <p>{course.bio}</p>

            <button className = 'addFavButton' onClick = {() => addFavorite(course)}>Add to Favorites</button>
            <button className = 'addEnrollButton' onClick = {() => addEnrollment(course)}>Add to Enrollments</button>

            <Footer/>
        </div>
    </>
  );
}

export default CourseDesc;