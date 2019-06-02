export class Movies {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.title = args.title;
      this.overview = args.overview;
      this.releaseDate = args.release_date;
    }
  }
}
