export interface Post {
  user: string;
  text: string;
  createdAt: Date;
  image: string;
  likes: string[];
  comments: Comment[];
}

interface Comment {
  text: string;
  userId: string;
  createdAt: Date;
}
