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
        if(idButton===posts[0].userId){
            setSee(!see)
        }else {
            setSee(see)
        }
        console.log(see)
    }

    return (
        <div className="App">
            <Users showPost={showPost} showButton={showButton}/>
            {see &&
                posts
                && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
