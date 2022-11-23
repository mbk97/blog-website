export interface getBlogState {
  blogs: [];
  createBlog: ICreate;
}

export interface ICreate {
  title: string;
  description: string;
}
