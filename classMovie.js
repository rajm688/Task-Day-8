class movie {
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(array){
      let PGval=  array.filter((arr)=> arr.PG == "PG" );
      console.log(PGval)

    }
}
let movie1 = new movie ("Casino Royale", "Econ Productions","PG13")
console.log(movie1)