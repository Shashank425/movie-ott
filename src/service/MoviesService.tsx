import { Movies } from "../entities/Moveis";

const movies: Movies[] = [
  {
    movieid: 1,
    name: "The Godfather",
    src: "./thegodfatherb.jpg",
    summary:
      "Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal.",
    genre: "Crime",
    language: "English",
    rating: 8,
  },
  {
    movieid: 2,
    name: "Interstellar",
    src: "./interstellarb.jpg",
    summary:
      "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.",
    genre: "Sci-Fi",
    language: "English",
    rating: 9,
  },
  {
    movieid: 3,
    name: "Inception",
    src: "./inceptionb.jpg",
    summary:
      "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious.",
    genre: "Sci-Fi",
    language: "English",
    rating: 10,
  },
  {
    movieid: 4,
    name: "Avengers",
    src: "./avengersb.jpg",
    summary:
      "When Thor's evil brother, Loki (Tom Hmovieiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth.",
    genre: "Action",
    language: "English",
    rating: 7,
  },
  {
    movieid: 5,
    name: "Toy Story",
    src: "./toystory.jpg",
    summary:
      "Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure.",
    genre: "Animated",
    language: "English",
    rating: 8,
  },
  {
    movieid: 6,
    name: "Hereditary",
    src: "./hereditary.jpg",
    summary:
      "When the matriarch of the Graham family passes away, her daughter and grandchildren begin to unravel cryptic and increasingly terrifying secrets about their ancestry, trying to outrun the sinister fate they have inherited.",
    genre: "Horror",
    language: "English",
    rating: 6,
  },
  {
    movieid: 7,
    name: "Aavesham",
    src: "./avesham.jpg",
    summary:
      "Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.",
    genre: "Comedy",
    language: "Malayalam",
    rating: 8,
  },
  {
    movieid: 8,
    name: "Jailer",
    src: "./jailer.jpg",
    summary:
      "Muthuvel Pandian, a retired prison guard, sets out on a quest for revenge after his son goes missing while investigating a smuggling case.",
    genre: "Action",
    language: "Tamil",
    rating: 8,
  },
];

export const fetchMovies = async (): Promise<Movies[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Fetched movies");
  return movies;
};

export const addMovie = async (movie: Movies): Promise<Movies> => {
  const newMovie = {
    movieid: movies.length + 1,
    name: movie.name,
    src: movie.src,
    summary: movie.summary,
    genre: movie.genre,
    language: movie.language,
    rating: movie.rating,
  };

  movies.push(newMovie);

  return newMovie;
};
