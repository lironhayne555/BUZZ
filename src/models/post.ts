export interface Post {
  user: User;
  text: string;
  createdAt: Date;
  image: string;
  likes: string[];
  comments: Comment[];
}

interface User {
  username: string;
  avatar?: string;
}

interface Comment {
  text: string;
  userId: string;
  createdAt: Date;
}
