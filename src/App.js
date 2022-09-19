import './App.css';
import {useState} from "react";

import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import {getUserPosts} from "./Services/axios.users";

function App() {
    const [posts, setPosts] = useState([]);
    const [see,setSee] = useState(true)

    const showPost = (id) =>{
       getUserPosts(id).then(value => setPosts(value.data))
    }

    const showButton = (idButton)=>{
        setTimeout(()=> {
                if (idButton === posts[0].userId) {
                    setSee(!see)
                    // setSee(prev => !prev)
                } else {
                    setSee(true)
                }
                // console.log(see)
                // console.log(idButton)
                // console.log(posts[0].userId)
            },300
        )
    }

    return (
        <div className="App my-6">
            <Users showPost={showPost} showButton={showButton}/>
            {see &&
                posts
                && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
