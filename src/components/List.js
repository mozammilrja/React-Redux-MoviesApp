import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesDetails } from "../redux/action/action";
import {moviesDataFunc} from '../Api/services'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const MoviesTrending = () =>{
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false);
  const  {AllMovies} = useSelector((state) => state.root.moviesReducer);
  console.log(AllMovies,"all");

  useEffect(() => {
    moviesDataFunc(setLoader)
    .then(res=>{
      dispatch(moviesDetails(res.results))
      setLoader(false);
    })
    .catch(err=>{
      setLoader(true);
    })
    // eslint-disable-next-line
  }, []); 
  return (
    <div className="App">
      { !loader?AllMovies?.map((e) =>(
        <div>
          <h3> {e.title}</h3>
          <img
                src={
                    `${BASE_URL}${e.backdrop_path || e.poster_path}` ||
                    `${BASE_URL}${e.poster_path}`
                }
                width={330}
                height={210}
                objectFit="cover"
                className="rounded-lg " alt=""
            />
        </div>
      )):
      <Box sx={{ display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <CircularProgress />
    </Box>
      }
    </div>
  );
}

export default MoviesTrending;
