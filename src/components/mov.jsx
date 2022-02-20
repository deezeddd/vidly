import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Page from "./common/pagination";
class Movies extends Component {
  state = { movies: getMovies() };
  handleDelete = (movie) => {
    // console.log('egsfd');
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const count = this.state.movies.length;
    // if(count===0) return <p>fuck off</p>

    return (
      <>
        <p>No of movies left {count}</p>

        <table className="table">
          <thead>
            <tr>
              <th>title</th>
              <th>genre</th>
              <th>no in stock</th>
              <th>rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((c) => (
              <tr key={c._id}>
                <td>{c.title}</td>

                <td>{c.genre.name}</td>
                <td>{c.numberInStock}</td>
                <td>{c.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(c)}
                    className="btn btn-danger btn-small m-2"
                  >
                    Delete
                  </button>
                </td>
                <Page />
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
