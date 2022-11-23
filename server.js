
//Initial References
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
//Function to fetch data from API
let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  //If input field is empty
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  }
  //If input field is NOT empty
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        if (data.Response == "True") {
          result.innerHTML = `
          <div class=" h-screen my-1 mx-1 b-24 ">
        <div class="info flex bg-black text-white relative bg-gradient-to-br from-black via-black to-red-700">
            <img class=" mb-96 pt-16 pl-16 " src=${data.Poster} class="poster">
            <div class="">
                <h2 class="font-sans text-6xl ml-24 pt-10 pb-10">${data.Title}</h2>
                <div class="rating ml-48 ">
                    <h4>⭐️</h4>
                    <h4>${data.imdbRating}</h4>
                </div>
                <div class="details ml-48">
                    <span class="font-thin	">${data.Rated}</span>
                    <span class="font-thin	">${data.Year}</span>
                    <span class="font-thin	">${data.Runtime}</span>
                </div>
                <div class="genre ml-48  ">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
                <div class="pl-48 pt-16 space-x-3 flex">
                <button class="border border-red-700 rounded-xl p-2 text-red-700 px-4 flex hover:bg-red-400 hover:text-black " type="submit">Track <img class="w-4 pl-1.5 pt-1.5" src="/images/svg (1).svg" alt=""></button>
                <button class="border border-red-700 rounded-xl p-2 text-red-700 px-4 flex hover:bg-red-400 hover:text-black " type="submit">Watched <img class="w-6 pl-1 pt-1.5" src="/images/svg.svg" alt=""></button>

            </div>
            <div class=" bg-transparent text-white px-16 ml-24 mb-72 mt-24 font-light">
            <h3 class="text-xl font-light">Plot:</h3>
            <p>${data.Plot}</p>
            <h3 class="text-xl pt-7 font-light">Cast:</h3>
            <p>${data.Actors}</p>
        </div>
            </div>
        </div>
        
</div>
`;
        }
        //If movie does NOT exists in database
        else {
          result.innerHTML = `<h3 class=' text-white msg'>${data.Error}</h3>`;
        }
      })
      //If error occurs
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
      });
  }
};


function TestsFunction() {
  var T = document.getElementById("landing");
  T.style.display = "none";  
}
  


searchBtn.addEventListener("click", getMovie);

window.addEventListener("load", getMovie);





