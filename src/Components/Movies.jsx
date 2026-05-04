import React, { useState } from "react";

function Movies() {
  const [StartWatching, setStartWatching] = useState(false);
  const [Movies, setMovies] = useState([
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
  ]);
  const [Shows, setShows] = useState([
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
  ]);

  const [List, setList] = useState("Movies");
  const selectList = (e) => {
    setList(e.target.value);
  };
  const DisplayList = () => {
    if (StartWatching) {
      switch (List) {
        case "Movies":
          return (
            <div className="grid grid-cols-2 gap-4 p-4">
              {Movies.map((Movie, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h2 className="text-gray-900 font-semibold text-lg">
                    {Movie.name}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                      {Movie.genre}
                    </span>
                    <span className="text-gray-400 text-sm">{Movie.year}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        case "Shows":
          return (
            <div className="grid grid-cols-2 gap-4 p-4">
              {Shows.map((Show) => (
                <div
                  key={Show.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h2 className="text-gray-900 font-semibold text-lg">
                    {Show.name}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                      {Show.genre}
                    </span>
                    <span className="text-gray-400 text-sm">{Show.year}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        default:
          return (
            <div className="grid grid-cols-2 gap-4 p-4">
              {Movies.map((Movie) => (
                <div
                  key={Movie.id}
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <h2 className="text-gray-900 font-semibold text-lg">
                    {Movie.name}
                  </h2>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                      {Movie.genre}
                    </span>
                    <span className="text-gray-400 text-sm">{Movie.year}</span>
                  </div>
                </div>
              ))}
            </div>
          );
      }
    }
  };

  const [newItem, setNewItem] = useState({ name: "", genre: "", year: "" });
  const addItem = () => {
      if (!newItem.name || !newItem.genre || !newItem.year) return;

      const entry = { id: Date.now(), ...newItem };

      if (List === "Movies") {
        setMovies([...Movies, entry]);
      } else {
        setShows([...Shows, entry]);
      }

      setNewItem({ name: "", genre: "", year: "" });
    
  };
  return (
    <>
      <div className="min-h-screen bg-sky-50 p-6">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {!StartWatching ? (
            <div className="text-center">
              <p className="text-gray-400 text-sm italic mb-4">
                Log in to start watching
              </p>
              <button
                onClick={() => setStartWatching(!StartWatching)}
                className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                Start Watching
              </button>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex items-center justify-between mb-6">
                <select
                  onChange={selectList}
                  value={List}
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option value="Movies">Movies</option>
                  <option value="Shows">TV Shows</option>
                </select>
                <button
                  onClick={() => setStartWatching(!StartWatching)}
                  className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Logout
                </button>
              </div>
              {DisplayList()}
              <div className="flex gap-2 mb-4">
                <input
                  placeholder="Name"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  placeholder="Genre"
                  value={newItem.genre}
                  onChange={(e) =>
                    setNewItem({ ...newItem, genre: e.target.value })
                  }
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  placeholder="Year"
                  value={newItem.year}
                  onChange={(e) =>
                    setNewItem({ ...newItem, year: e.target.value })
                  }
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <button
                  onClick={addItem}
                  className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies;
