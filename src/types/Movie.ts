export interface TypeMovie {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  director: string;
  releaseDate: Date;
  timeMovie: Date;
  descriptionMovie: string;
  posterMovie: string;
  trailerMovie: string;
  videoMovie: string;
  age: number;
  typeMovie: TypeMovie;
}

export type MovieHot = Pick<Movie, 'id' | 'name' | 'posterMovie' | 'age'>;
