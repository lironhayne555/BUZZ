export interface Post {
  user : string;
  text: string;
  date: Date;
  image: string;
  likes: Array<string>;
  comments: Array<string>;
}
