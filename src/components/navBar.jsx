import {Link} from 'react-router-dom';
import '../App.css';

function NavBar() {
    return(
        <h3 className = 'nav'>
            <Link className = 'links' to = 'favorites'>Favorites</Link>|
            <Link className = 'links' to = 'enrollment'>Enrollment</Link>
        </h3>
    )
}

export default NavBar