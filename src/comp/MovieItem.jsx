import {Link} from 'react-router-dom'

function MovieItem(props){
    const link = "https://image.tmdb.org/t/p/w500"
    return(
       <Link to={'/movie/' + props.data.id} className="movie-item">
                <img src={link + props.data.poster_path} alt="" />

       </Link>
    )
}

export default MovieItem