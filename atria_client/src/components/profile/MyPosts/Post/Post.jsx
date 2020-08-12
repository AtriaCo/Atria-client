import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://images.discordapp.net/avatars/700660536966119474/febcc5ddf75ad5d9813fb7ea76385103.png?size=512" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
