export interface Post {
  id: number;
  title: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  description: string;
}
