export class Movies {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  tagline: string;
  posterPath: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.title = args.title;
      this.overview = args.overview;
      this.releaseDate = args.release_date;
      this.tagline = args.tagline;
      this.posterPath = args.poster_path;
    }
  }
}
