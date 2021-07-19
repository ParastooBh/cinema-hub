import axios from 'axios';
import React, { useEffect } from 'react';
import { Chip } from "@material-ui/core";

function Genres({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage}
){

    //method of selecting a genre in Chips
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };

      //method of deleting a genre in Chips
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const fetchGenres = async () =>{
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

            setGenres(data.genres);
    };
    console.log(genres);

    useEffect(() => {
            fetchGenres();

            //unMounting the api key
            return()=>{
                setGenres({});
            };
            // eslint-disable-next-line 
    },[])

    return(
        <div style={{padding:"6px 0"}}>

            {selectedGenres && selectedGenres.map((genre)=>(
                <Chip
                    key={genre.id}
                    label={genre.name}
                    style={{margin:2}}
                    clickable
                    size="small"
                    color="primary"
                    onDelete={()=> handleRemove(genre)}
                />
            ))}


            {genres && genres.map((genre)=>(
                <Chip
                    key={genre.id}
                    label={genre.name}
                    style={{margin:2}}
                    clickable
                    size="small"
                    onClick={()=> handleAdd(genre)}
                    
                />
            ))}
        </div>
    );
}
export default Genres;