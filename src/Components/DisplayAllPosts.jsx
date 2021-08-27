import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost"

const DisplayAllPosts = () => {
  const [li, isli] = useState("Like")
  const [title, setTitle] = useState("");
  const [catogeries, setCatogeries] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");
  const [islikePost, setIsLikePost] = useState(false);


  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();
  const getCatogeries = useRef();

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };

  const savePostCatogeriesToState = event => {
    setCatogeries(event.target.value);
  };

  const savePostContentToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);

  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost)
  }

  const toggleIsLiskePost = () => {
    setIsLikePost(!islikePost)

  }
  const editPost = id => {
    setEditPostId(id);
    console.log(id)
    toggleModifyPostComponent();
  };

  const show = () => {
    toggleCreateNewPost();

  }

  const showFromModify = () => {
    toggleModifyPostComponent();
  }

  const likePost = () => {
    if (islikePost === false) {
      isli("Dislike")
      console.log(li)
      toggleIsLiskePost()
    }
    else {
      isli("Like")
      toggleIsLiskePost()
    }
  }

  const deletePost = id => {
    if (window.confirm("you want to delete this post")) {
      const modifiedPost = allPosts.filter(eachPost => {
        return eachPost.id !== id;
      });
      setAllPosts(modifiedPost);
    }
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId])
        return {
          ...eachPost,
          title: title || eachPost.title,
          catogeries: catogeries || eachPost.catogeries,
          content: content || eachPost.content
        };
      }
      console.log(eachPost)
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = event => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, catogeries, content, id }]);
    console.log(allPosts);
    setTitle("");
    setCatogeries("");
    setContent("");
    getTitle.current.value = "";
    getCatogeries.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();

  };
  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          savePostCatogeriesToState={savePostCatogeriesToState}
          getTitle={getTitle}
          getCatogeries={getCatogeries}
          getContent={getContent}
          savePost={savePost}
          deletePost={deletePost}

          show={show}
        />
      </>
    );
  }
  else if (isModifyPost) {
    const post = allPosts.find(post => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        title={post.title}
        catogeries={post.catogeries}
        content={post.content}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        savePostCatogeriesToState={savePostCatogeriesToState}
        savePostContentToState={savePostContentToState}
        showFromModify={showFromModify}

      />
    );
  }
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      {(!allPosts.length) ? (
        <>
          <div >
            <div >
              <section >
                <nav style={{ width: "100%" }} className="navbar navbar-dark bg-dark">
                  <div className="container-fluid">
                    <button className="btn btn-outline-success" style={{ marginTop: 5, marginBottom: 5 }} onClick={toggleCreateNewPost} >Create New</button>
                  </div>
                </nav>
              </section>
            </div>
            <div >
              <h1 style={{ marginTop: 20 }}>No Post Found!</h1>
              <h3 style={{ marginTop: 20 }} >There is nothing to see here.</h3>
              <br />
              <br />
            </div>
          </div>
        </>
      ) : (
          <div>
            <section >
              <center>
                <nav className="navbar navbar-dark bg-dark px-3">
                  <div className="container-fluid">
                    <button className="btn btn-outline-success" style={{ marginTop: 5, marginBottom: 5 }} onClick={toggleCreateNewPost} >Create New</button>
                    <span style={{ float: "left" }} className="navbar-text">
                      All Posts
                      </span>
                  </div>
                </nav>
              </center>
            </section>
            <section className="all-post">
              {allPosts.map(eachPost => {
                return (
                  <Post
                    id={eachPost.id}
                    key={eachPost.id}
                    title={eachPost.title}
                    catogeries={eachPost.catogeries}
                    content={eachPost.content}
                    editPost={editPost}
                    deletePost={deletePost}
                    likePost={likePost}
                    li={li}

                  />
                );
              })}
            </section>
          </div>
        )}
    </>
  );
};
export default DisplayAllPosts;