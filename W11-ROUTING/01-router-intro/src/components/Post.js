import { useParams } from "react-router-dom";
import {posts} from '../posts'

function Post(props) {

    const {id} = useParams()

    
    return (
        <div>
            hello from post {posts[id - 1].details}
        </div>
    );
}

export default Post;