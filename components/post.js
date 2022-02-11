const Post = ({post}) => {
  return(
    <li>
      <span>{post.id}</span> : <span className="cursor-pointer text-blue-500 border-b border-blue-500">{post.title}</span>
    </li>
  )
}

export default Post;