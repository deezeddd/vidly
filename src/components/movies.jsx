// import react from 'react';
import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies :getMovies(),

        
     } ;
 handleDelete=(movie)=>{ //we bind to access current obj
  const movies= this.state.movies.filter(m=>m._id !== movie._id); //new movies array which includes all movies except current movie obj
// console.log(movie);
this.setState({movies}); // to update the state!!
 };
     
    

    render() {  
      
 return <table className='table'>
  <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {this.state.movies.map(movie=>(
    <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td><button onClick={()=>(this.handleDelete(movie))} className="btn btn-danger btn-sm">Delete</button></td>
      {/* in order to pass an arg we need to change it to arrow function jo map wala movie h wAHI WALA H YE BHI */}
    </tr>
    ))}
    
  </tbody>
</table>
      
    }
  
}
 
export default Movies;
