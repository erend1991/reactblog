import { useParams } from "react-router-dom";

function PostPage() {
    const { id } = useParams();

    return (
        <div>Het productnummer is {id}</div>
    )
}

export default PostPage