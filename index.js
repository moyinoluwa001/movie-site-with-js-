// const apiKey = "801c681f9fd380835fcfc66c8ad2d35d";
// const baseImageUrl = "https://image.tmdb.org/t/p/w500";
// const searchInput = document.getElementById("searchInput");
// const moviesContainer = document.getElementById("movies");
// const favouritesContainer = document.getElementById("favourites");
// const homeBtn = document.getElementById("homeBtn");
// const favouritesBtn = document.getElementById("favouritesBtn");
// const mainPage = document.getElementById("main");
// const favouritesPage = document.getElementById("favouritesPage");

// Navigation bar
// homeBtn.addEventListener( "click",() =>{
//   mainPage.style.display  = "block";
//   favouritesPage.style.display = "none";
//   console.log("Home button clicked");
// });
// favouriteBtn.addEventListener("click", () =>{
//    mainPage.style.display = "none";
//    favouritesPage.style.display = "block";
//    console.log("favourites button clicked");
//    displayfavourites();
// });
//  searchInputmovies
// searchInput.addEventListener("input",()=>{
//   const query = searchInput.value.trim();
//   if(query) {
//     searchQuery(query);
//   }else{
//     fetchPopularMovies();
//   }
// })
// fetch popular movies
// function fetchPopularMovies(){
//    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
//    .then(response => response.json())
//    .then(data=> displaymovies(data.results));
// };
// function searchquary(query){
//   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
//   .then(response => response.json())
//   .then(data => displayMovies(data,results));
// }
// display movies in continers
//  function displaymovies(movies){
//    moviesContainer.innerHTML = "";
//    if(movies.length == 0){
//     moviesContainer.innerHTML = "<p>No movie found</p>";
//     return;
//    }
//    console.log("Displaying movies:", movies);
//    movies.forEach(movie =>{
//     const movieDiv = document.createElement("div");
//     movieDiv.classList.add("movie");
//     check if the movies is in favourite
//     const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
//     const isfavourite = favourites.some(fav => fav.id === movie.id);

//     movieDiv.innerHTML = `
//       <img src="${movie.poster_path ? baseImageUrl + movie.poster_path : 'placeholder.jpg'}" alt="${movie.title}"/>
//       <h3>${movie.title}</h3>
//       <button class="favourite-btn" onClick="togglefavourite(${movie.id},"${escapeQuotes(movie.title)}","${movie.poster_path ? baseImageUrl + movie.poster_path :""}")">
//         <span class="star">
//            ${isfavourite ? '★' : '☆'}
//         </span>
//       </button>
//     `;
//     moviesContainer.appendChild(movieDiv);
//    });
//   }
//   Toggle favourites movies
    
//   function togglefavourite(id,title,poster){
//        title = title || "unknow Title";
//        poster = poster || "";
//        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
//        const existingIndex = favourites.findIndex(movie => movie.id === id); 
//        if(existingIndex >= 0){
//          favourites.splice(existingindex,1);
//          console.log(`Removed ${title} from favourites`)
//        }else{
//         favourites.push({id,title,poster})
//         console.log(`Added ${title} to favourites`)
//        }
//        localStorage.setItem('favourites',JSON.stringify(favourites));
//        displayMoviesCurrent();
//        displaymovies();
//       }

//        function escapeQuotes(str){
//         if(!str) return '';
//         return str.replace (/'/g, "\\'").replace(/"/g, '\\"');
//        }
       

//         function displayfavourites(){
//           const favourites = JSON.parse(localStorage.getItem("favourites")) || [] ;
//           favouritesContainer.innerHTML = "";
//           if(favourites.length === 0){
//             favouritesContainer.innerHTML = `<p>No favourite film added</p>`
//             console.log('No favourites movies in the localStorage')
//             return;
//           }
//           console.log('displaying favourites:favourites');
//           favourites.forEach(movie =>{
//             const favouriteDiv = document.createElement('div')
//             favouriteDiv.classList.add('favourite')
//             favouriteDiv.innerHTML = `

//               <img src="${movie.poster ? movie.poster:'placeholder.jpg'}" alt='${movie.title}' />
//               <h3>${movie.title}</h3>
//               <button  class="favouritr-btn" onclick="togglefavourite(${movie.id}, "${escapeQuotes(movie.title)},'$(movie.poster)'")>
//                   <span class="star">★</span>
//               </button>

//             `
//             favouritesContainer.appendChild(favouriteDiv);
//           });
//         }


//         update displayed movies to update a favourites change without refeching
//            function displayMoviesCurrent(){
//             const currentMovies = moviesContainer.querySelectorAll(".movie");
//             const favourite = JSON.parse(localStorage.getItem('favourites')) || [];
//             currentMovies.forEach(movieDiv =>{
//               const title = movieDiv.querySelector("h3").textContent;
//               const star = movieDiv.querySelector(".star");
//               const isfav = favourites.some(fav =>fav.title === title);
//               star.textContent = isfav ? '★' : '☆';
//             })

//            }

       
const apiKey = '801c681f9fd380835fcfc66c8ad2d35d'; 
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('movies');
const favoritesContainer = document.getElementById('favorites');
const homeBtn = document.getElementById('homeBtn');
const favoritesBtn = document.getElementById('favoritesBtn');
const mainPage = document.getElementById('main');
const favoritesPage = document.getElementById('favoritesPage');


homeBtn.addEventListener('click', () => {
    mainPage.style.display = 'block';
    favoritesPage.style.display = 'none';
    console.log('Home button clicked');
});

favoritesBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    favoritesPage.style.display = 'block';
    console.log('Favorites button clicked');
    displayFavorites(); 
});


searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchMovies(query);
    } else {
        fetchPopularMovies();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    fetchPopularMovies();
});


function fetchPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => displayMovies(data.results));
}


function searchMovies(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results));
}


function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    if (movies.length === 0) {
        moviesContainer.innerHTML = '<p>No movies found.</p>';
        return;
    }
    console.log('Displaying movies:', movies); 
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(fav => fav.id === movie.id);

        movieDiv.innerHTML = `
            <img src="${movie.poster_path ? baseImageUrl + movie.poster_path : 'placeholder.jpg'}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button class="favorite-btn" onclick="toggleFavorite(${movie.id}, '${escapeQuotes(movie.title)}', '${movie.poster_path ? baseImageUrl + movie.poster_path : ''}')">
                <span class="star">${isFavorite ? '★' : '☆'}</span>
            </button>
        `;
        moviesContainer.appendChild(movieDiv);
    });
}


function toggleFavorite(id, title, poster) {
    
    title = title || 'Unknown Title'; 
    poster = poster || ''; 

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const existingIndex = favorites.findIndex(movie => movie.id === id);
    if (existingIndex >= 0) {
        
        favorites.splice(existingIndex, 1);
        console.log(`Removed ${title} from favorites`);
    } else {
        
        favorites.push({ id, title, poster });
        console.log(`Added ${title} to favorites`);
    }

    
    localStorage.setItem('favorites', JSON.stringify(favorites));

    
    displayMoviesCurrent();

    
    displayFavorites(); 
}


function escapeQuotes(str) {
    if (!str) return ''; 
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}


function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesContainer.innerHTML = '';
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorite movies added.</p>';
        console.log('No favorite movies in localStorage'); 
        return;
    }
    console.log('Displaying favorites:', favorites); 
    favorites.forEach(movie => {
        const favoriteDiv = document.createElement('div');
        favoriteDiv.classList.add('favorite');
        favoriteDiv.innerHTML = `
            <img src="${movie.poster ? movie.poster : 'placeholder.jpg'}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button class="favorite-btn" onclick="toggleFavorite(${movie.id}, '${escapeQuotes(movie.title)}', '${movie.poster}')">
                <span class="star">★</span>
            </button>
        `;
        favoritesContainer.appendChild(favoriteDiv);
    });
}


function displayMoviesCurrent() {
    const currentMovies = moviesContainer.querySelectorAll('.movie');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    currentMovies.forEach(movieDiv => {
        const title = movieDiv.querySelector('h3').textContent;
        const star = movieDiv.querySelector('.star');
        const isFav = favorites.some(fav => fav.title === title);
        star.textContent = isFav ? '★' : '☆';
    });
}
