import BlogList from "./Bloglist";
import useFetch from "./useFetch";
import { dataBase } from './firebase_setup/firebase';
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from 'firebase/firestore';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    const [files, setFiles] = useState([]);

    //New File States
    const [newFileName, setNewFileName] = useState("");
    const [newFileLength, setNewFileLengthe] = useState(0);

    const fileCollectionRef = collection(dataBase, "recordings");

    useEffect(() => {
        const getFileList = async () => {
            try {
                const data = await getDocs(fileCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setFiles(filteredData);
            } catch (err) {
                console.log(err);
            }

        };

        getFileList();
    }, []);

    const onSubmitFile = async () => {
        try {
            await addDoc(fileCollectionRef,
                {
                    RecordingName: newFileName,
                    MinutesLong: newFileLength
                })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blogs" />}


            <div>
                <input placeholder="File Name..."
                    onChange={(e) => setNewFileName(e.target.value)} />
                <input placeholder="Recording Length..." type="number"
                    onChange={(e) => setNewFileLengthe(Number(e.target.value))} />
                <button onClick={onSubmitFile}>Submit Recording</button>
                {/* LEft vid at 50:00 Firebase React Course For Beginners - Learn Firebase V9+ in 2 Hours*/}
            </div>

            <div>
                {files.map((file) => (
                    <div key={file.id}>
                        <h1>
                            {file.RecordingName}
                        </h1>
                        <p> File Size: {file.MinutesLong}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;

// sudo npx json-server --watch data/dataBase.json --port 8000
//git push origin main --force   