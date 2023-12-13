import { useParams } from "react-router-dom";

function posts() {
    const { post } = useParams();

    return (
        <div>dit blog {post}</div>
    )
}