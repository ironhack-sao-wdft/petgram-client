function Post(props) {
  return (
    <div className="card border-0  mb-2" key={props.post._id}>
      <img
        src={props.post.picture}
        className="card-img-top rounded-0"
        alt={props.post.caption}
      />
      <div className="card-body">
        <div className="w-100">
          <i className="far fa-heart"></i>
        </div>
        <i className="fas fa-heart mr-1"></i>
        <span>{props.post.likes.length} likes</span>
        <p>{props.post.caption}</p>
      </div>
    </div>
  );
}

export default Post;
