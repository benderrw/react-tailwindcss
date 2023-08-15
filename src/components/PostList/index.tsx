function PostItem({ team }: any) {
  return (
    <li className="post-list-item">
      <h3 className="post-list-title">{team.title}</h3>
      <p className="post-list-description">{team.body}</p>
    </li>
  );
}

type IPostItem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type IPostList = {
  posts: IPostItem[];
};

export default function PostList({ posts }: IPostList) {
  return (
    <ul className="post-list">
      {posts.map((team: IPostItem) => (
        <PostItem key={team.id} team={team} />
      ))}
    </ul>
  );
}
