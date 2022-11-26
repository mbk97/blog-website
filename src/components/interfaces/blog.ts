export interface getBlogState {
  blogs: [];
  createBlog: ICreate;
  singleBlog: {};
  singleBlogLoading: boolean;
}

export interface ICreate {
  title: string;
  description: string;
}
