import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Auth from "./components/auth";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/Audiomark');
        })


    }


    return (
        <div className="create">
            <Auth />
            <h2>Sign Up/In</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Name:</label>
                <input type="text" required
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)} />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) =>
                        setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) =>
                        setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="jack">jack</option>
                    <option value="darling">darling</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Publishing Blog...</button>}
            </form>
        </div>
    );
}

export default Create;