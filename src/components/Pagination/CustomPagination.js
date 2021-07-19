import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {ThemeProvider } from '@material-ui/core';
import { createTheme } from "@material-ui/core/styles";

const darkTheme= createTheme ({
    palette: {
        type:"dark",
    },
});

function CustomPagination({setPage, numberOfPages}){

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }

    return(
        <div
            style={{width:"100%", display:"flex", justifyContent:"center", marginTop:10}}>
                <ThemeProvider theme={darkTheme}>
            <Pagination 
            count = {numberOfPages}
            onChange={(e)=> handlePageChange(e.target.textContent)}/>
            </ThemeProvider>
        </div>
    );
}
export default CustomPagination;