import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./usefetch";
const BlogDetails = () => {

    const {id}= useParams();
    const history =useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }

    const {data:blog,isPending,error} =useFetch('http://localhost:8000/blogs/'+id)

    return ( 
        <div className="blog-details">
           {isPending && <div> is loading</div>}
           {error && <div> {error}</div>}
           {blog &&(
            <article>
                <h2> {blog.title}</h2>
                <p>Written by </p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>delete</button>
                </article>
                
           )}
        </div>
     );
}
 
export default BlogDetails;
