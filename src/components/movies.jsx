// import react from 'react';
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import Like from "./common/Liked";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id); //new movies array which includes all movies except current movie obj
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // console.log('like clicked',movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies; //picking len proprty of movies , obj destructuring
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0) return <p>There are no movies in the database</p>;
    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {" "}
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />{" "}
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                {/* in order to pass an arg we need to change it to arrow function jo map wala movie h wAHI WALA H YE BHI */}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
        {/* pagination interface above, koi bhi component bnana hota h to pehle interface decide kroo
         */}
        {/* at a minimum we need to give this comp total no of items as well as pagesize*/}
      </>
    );
  }
}

export default Movies;
