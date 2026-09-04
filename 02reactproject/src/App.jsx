import './App.css'
import MovieCard from './components/moviecard'

function App() {  // A component is really just any function in Javascript that returns some kind of JSX code
  const movieNumber = 1;
  
  return(
    <>
       {movieNumber === 1 ? ( <MovieCard movie = {{title: "Tim's Film", release_date: "2025"}}/>
        ) : ( 
        <MovieCard movie = {{title: "Joe's Film", release_date: "2023"}}/> 
       )}


    </>
  )
}

export default App
