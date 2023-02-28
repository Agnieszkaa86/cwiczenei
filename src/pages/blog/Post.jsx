import { useParams } from "react-router-dom";

function Post() {
    const { postId } = useParams();
    return (<>
        <h1>Single post</h1>
        <h3>Post id: {postId }</h3>
    </>);
}

export default Post;