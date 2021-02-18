import s from "./post.module.css";


const Post = ()=>{
    return(
            <div className={s.item}>
                <img src="https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt=""/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
    )
};

export default Post