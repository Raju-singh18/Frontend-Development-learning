
import React from 'react'

export const  getMoviesData = async() => {
 try {
   const response =await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3042a242&s=titanic&page=1");
   const data = response.json();
   return data;
 } catch (error) {
    console.error(error);
 }
}

