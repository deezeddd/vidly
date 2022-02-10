// import react from 'react';
import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies :getMovies(),

        
     } ;

     
     

    render() {  
      
 return <table className='table'>
  <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  </thead>
  <tbody>
    {this.state.movies.map(movie=><tr>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
    </tr>)}
    
  </tbody>
</table>
      
    }
    /////////this is what i learned to render a list we gotta use map method { is used to dynamically change the value so acchi baat h}
    ////////// and jo num likha h na maine waha kuch bhi name use kr skte ho koi problem nai h
    /////////basic gyan-> agr tum kuch import kr rhe ho aur usko use nhi kr rhe to wo chiz automatically exclude ho jaayegi isliye apan ne<movies> krke use kia h app.js me!!
    // this.state.movies.map( (num)=><ul>{ num.title} </ul>);
      // this.state.movies.map( (num)=> num.title);
}
 
export default Movies;
