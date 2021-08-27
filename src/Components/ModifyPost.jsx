import React from "react";
const ModifyPost = (props) => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <button className="btn btn-outline-success" onClick={props.showFromModify}>All Post</button>

          <span style={{ float: "left" }} className="navbar-text">
            Modify Post
          </span>
        </div>
      </nav>
      <section style={{ marginTop: "5%" }} className="create-post">
        <div  className="card">
          <div className="card-body">
            <form>
              <input type='text'
                style={{ marginTop: "10px" }}
                defaultValue={props.title}
                onChange={props.savePostTitleToState}
                text
                placeholder="title"
                size="39"
              ></input>
              <input
                style={{ marginTop: "10px" }}
                type='text'
                defaultValue={props.catogeries}
                onChange={props.savePostCatogeriesToState}
                text
                placeholder="Catogeries"
                size="39"
                className="mt-2"
              ></input>
              <textarea
                style={{ marginTop: "10px" }}
                defaultValue={props.content}
                placeholder="content"
                onChange={props.savePostContentToState}
                rows="8"
                cols="41"
                className="mt-2"
              ></textarea>
              <center>
              <section className="button-wrapper">
                <button className="btn btn-success" style={{ marginTop: "10px" }} onClick={props.updatePost}>Update Post</button>
              </section>
              </center>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModifyPost;
