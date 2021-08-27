import React from "react";

const Post = ({ title, catogeries, content, editPost,li, id, deletePost,likePost }) => {
  return (
    <>
      <div className="container">
        <div className="flex">
          <div className="mb-4">
            <div className="card mt-4">
              <div className="card-body">
                <h2 style={{ textAlign: "left" }} className="card-title" >{title}</h2>
                <hr/>
                <div className="card-subtitle" style={{ fontSize: 35 }} >{catogeries}</div>
                <hr/>
                <p className="card-text mb-2" > {content}</p>
                <button className="btn btn-info mt-2" onClick={() => editPost(id)}>Edit</button>
                <button style={{ marginLeft: 5 }} className="btn btn-danger mt-2" onClick={() => deletePost(id)}>Delete</button>
                <button className="btn btn-outline-dark mt-2 " style={{ marginLeft: 5 }} type="submit" onClick={()=>likePost()} > {li}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
