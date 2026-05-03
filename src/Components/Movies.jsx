import React, { useState } from "react";

function Movies() {
  const [StartWatching, setStartWatching] = useState(false);
  const Movies = [
    { id: 101, name: "Gone girl", genre: "Thriller", year: "2016" },
    { id: 101, name: "Fight club", genre: "Thriller", year: "1999" },
    { id: 101, name: "Ender's Game", genre: "Sci-fi", year: "2018" },
    { id: 101, name: "Focus", genre: "Romance", year: "2017" },
    { id: 101, name: "Central Intelligence", genre: "Comedy", year: "2019" },
    { id: 101, name: "Tokyo Drift", genre: "Action", year: "2004" },
    { id: 101, name: "The Matrix", genre: "Action", year: "1996" },
    { id: 101, name: "Shawshank Redemption ", genre: "Thriller", year: "1986" },
    { id: 101, name: "Lord of the Rings", genre: "Fantasy", year: "2006" },
    { id: 101, name: "Last Air Bender", genre: "Animation", year: "2026" },
  ];
  const Shows = [
    { id: 1, name: "Breaking Bad", genre: "Crime", year: "2008" },
    { id: 2, name: "Stranger Things", genre: "Sci-fi", year: "2016" },
    { id: 3, name: "The Crown", genre: "Drama", year: "2016" },
    { id: 4, name: "Squid Game", genre: "Thriller", year: "2021" },
    { id: 5, name: "Black Mirror", genre: "Sci-fi", year: "2011" },
    { id: 6, name: "The Office", genre: "Comedy", year: "2005" },
    { id: 7, name: "Game of Thrones", genre: "Fantasy", year: "2011" },
    { id: 8, name: "Narcos", genre: "Crime", year: "2015" },
    { id: 9, name: "Arcane", genre: "Animation", year: "2021" },
    { id: 10, name: "The Last of Us", genre: "Drama", year: "2023" },
  ];


  const [List , setList] = useState(Movies);
  const selectList = (e) => {
    setList(e.target.value);
  };
  const DisplayList = () => {
if(StartWatching){
  switch(list){
case "Movies" :
  return(
<div>

  
</div>

  );
  case "Shows" :
    return(
      div
    )


  }
}


  }

  return (
    <>
    <div>
      <button onClick={() => setStartWatching(!StartWatching)}>
        {StartWatching ? "logout" : "Start Watching"}
      </button>
      <div>
        {StartWatching?(
        <select onChange={selectList} value={List}>
          <option value="Movies">Movies</option>
          <option value="Shows"> Tv shows</option>
        </select>) : (<p>log in to start watching</p>)}
      </div>
      </div>
    </>
  );
}

export default Movies;
