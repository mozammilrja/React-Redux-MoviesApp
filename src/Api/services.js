import axios from "axios";


export const  moviesDataFunc = async (setLoader) => {
  setLoader(true);
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=07ed9f845a6cd3911548b0b45b8f182e'
    // 'https://fakestoreapi.com/products/'
  );
  
  return data;
}
export const productData = async(setLoader) => {
  setLoader(true)
  const { data } = await axios.get(
    'https://fakestoreapi.com/products/'
    // 'https://jsonplaceholder.typicode.com/photos'
  );
  return data;
}

//   'https://fakestoreapi.com/products/'
