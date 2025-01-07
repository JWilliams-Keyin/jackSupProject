import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import {Link} from 'react-router-dom';
import '../App.css';
import Footer from '../components/footer';

function Favorites() {
    const [favorite, setFavorite] = useState([]);

    // Fetch favorites
    useEffect(() => {
        axios
            .get('http://localhost:5001/favorites')
            .then(response => {
                setFavorite(response.data);
            })
            .catch(error => {
                console.error('Error fetching favorites', error);
            });
    }, []);

    // Remove favorites
    const removeFavorite = (id) => {
        axios
            .delete(`http://localhost:5001/favorites/${id}`)
            .then(() => {
                setFavorite(favorite.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error removing favorite', error);
            });
    };

    return (
        <div>
            <Header/>
            <h3 className = 'nav'><Link className = 'links' to = '/'>Back to Course Listings</Link></h3>
            <ul>
                {favorite.map(item => (
                    <li key = {item.id} className = 'card'>
                        <img className = 'cardImage' src = {item.thumbnail}></img>
                        <h2>{item.title}</h2>

                        <h3>Instructor: {item.instructor}</h3>

                        <h3>Duration: {item.duration}</h3>

                        <Link to = {`/description/${item.id}`}><button className = 'detailsButton'>Course Details</button></Link>
                        <button className = 'removeFavButton' onClick={() => removeFavorite(item.id)}>Remove favorite</button>
                    </li>
                ))}
            </ul>
            <Footer/>
        </div>
    );
}

export default Favorites;
