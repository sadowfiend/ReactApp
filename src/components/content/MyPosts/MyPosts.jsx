import Post from "./post/post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    let postData = [
        {id:1, message: 'Hi, how are you', likesCount: 13},
        {id:2, message: 'It is my first post', likesCount: 9}
    ];
    return (
        <div className={s.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>
    )
};

export default MyPosts