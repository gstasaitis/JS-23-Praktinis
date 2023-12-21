/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
const movies = [
    {
    title: "Avengers: Endgame", 
    director: "Anthony Russo", 
    budget: 356000000
},
{
    title: "Mr. Nobody", 
    director: "Jaco Van Dormael", 
    budget: 47000000
}]

const wasExpensive = (movie) => {
    if(movie.budget > 100000000){
        console.log(movie.title + " " + true) 
        console.log(movie.title + " was Expensive " + true) 
        return true
    }else 
    console.log(movie.title + " " + false)
    console.log(movie.title + " was Expensive " + false)
    return false
}
const results = movies.map(wasExpensive)



