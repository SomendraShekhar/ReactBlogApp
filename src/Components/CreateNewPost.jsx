import React from "react";
const CreateNewPost = (props) => {
    return (
      <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
          <button className="btn btn-outline-success  " onClick={props.show}>All Post</button>
            <span style={{ float: "left" }} className="navbar-text">
            Create New Post
          </span>
          </div>
        </nav>
        <section style={{ marginTop: "5%" }} className="create-post">
          <div className="card">
            <div className="card-body">
              <form onSubmit={props.savePost}>
                <input
                  style={{ marginTop: "10px" }}
                  className="card-text"
                  type="text"
                  onChange={props.savePostTitleToState}
                  placeholder="Title"
                  size="39"
                  required
                  ref={props.getTitle}
                ></input>
                <input
                  style={{ marginTop: "10px" }}
                  className="card-text"
                  type="text"
                  onChange={props.savePostCatogeriesToState}
                  placeholder="Catogries"
                  size="39"
                  required
                  ref={props.getCatogeries}
                ></input>
                <textarea
                  style={{ marginTop: "10px" }}
                  className="card-text"
                  onChange={props.savePostContentToState}
                  placeholder="Content"
                  size="39"
                  rows="8"
                  cols="30"
                  required
                  ref={props.getContent}
                ></textarea>
                <center>
                  <div style={{ marginTop: "10px" }} >
                    <button className="btn btn-success savebutton ">Save Post</button>
                  </div>
                </center>

              </form>
            </div>
          </div>

        </section>
      </>
    );
  };

export default CreateNewPost;
