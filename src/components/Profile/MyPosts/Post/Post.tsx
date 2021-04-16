import styles from './Post.module.css';
import avatar from '../../../../img/avatar.png';


export type PostTypeProps = {
    id: number
    post: string
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={styles.post}>{props.post}</div>
        </div>
    )
}


export default Post;