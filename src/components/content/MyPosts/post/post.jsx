import s from "./post.module.css";


const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
                alt="ava"/>
            <div>
                <span>{props.message}</span>
            </div>
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post