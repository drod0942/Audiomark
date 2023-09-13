import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';


const FileDetails = () => {

    const { id } = useParams();
    //this is how you get data
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="file-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>
                        {blog.title}
                    </h2>
                    <p>
                        Written by {blog.author}
                    </p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick} >Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default FileDetails;
// "homepage": "http://drod0942.github.io/Audiomark",