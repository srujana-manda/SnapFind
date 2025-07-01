import React, { useEffect, useState } from 'react'
import pixabayContext from './PixabayContext'

const PixabayState = (props) => {

    const [image,setImage] = useState([]);

    const [search,setSearch] = useState('london');

    const api_key="51111841-1467602b0062e214a3a03738a";

    useEffect(()=>{
      const fetchData = async() => {
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${search}&image_type=photo&pretty=true&per_page=100`);
        const data = await api.json();

          console.log(data);
          setImage(data.hits)
      }
      fetchData();
    },[search]);

    const fetchImageByCategory = async(cat) => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
      const data = await api.json();

        console.log(data);
        setImage(data.hits)
    }

  return (
    <pixabayContext.Provider value={{image,fetchImageByCategory,setSearch}}>
     {props.children}
    </pixabayContext.Provider>
  )
}

export default PixabayState