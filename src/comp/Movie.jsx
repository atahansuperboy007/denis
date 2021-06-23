import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'



function Movie(){
    const link = "https://image.tmdb.org/t/p/w500"

    const { id } = useParams()

    const[movie, setMovie] = useState(null)

    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
          .then(res => res.json())
          .then(data => {
             setMovie(data)
        })
    },[])

    console.log(movie)
    if (!movie) return null
    return(
        <div className="movie">
            <img src={link + movie.poster_path} alt="" />
            <div className="movie-text">
                <h1>{movie.title}</h1>
                <h3>{movie.overview}</h3>
                <p>релиз: {movie.release_date}</p>
                <p>язык: {movie.original_language}</p>
                <p>статус: {movie.status}</p>
                <p>оценка критиков: {movie.vote_average}</p>
                <button>данлоад</button>
            </div>
        </div>
    )
}

export default Movie