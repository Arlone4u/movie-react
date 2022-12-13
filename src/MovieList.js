const MovieList = (props) => {
    return <movie>
        <div className="title1">
               <h1 className='col1'>Weekly Top 10</h1>
        </div>

         <div data-testid = "top10" className = "movie-list">
            {props.movies?.map((movie,index) => <div className="test"><img src={movie.Poster} className = 'row_poster'alt = 'movie'>
                </img>
                <div className="info">
                    <div className="title"><span>
                        <text className="movie-title">{movie.Title}
                </text>
                </span>
                    </div>
                        <div>
                            <text className="movie-price">{movie.Price}
                    </text>
                </div>
            </div>
        </div>)}
        </div>
        <div className="title2">
               <h1 className='col2'>Watch Again</h1>
        </div>

          <div data-testid = "watchagain" className = "movie-list">
            {props.movies2?.map((movie2,index) => <div><img src={movie2.Poster} className = 'row_poster'alt = 'movie'></img><text className="movie-title">{movie2.Title}</text></div>)}

        </div>

    </movie>
}

export default  MovieList;