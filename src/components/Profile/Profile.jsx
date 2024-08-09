import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.pageContainer}>
            <div>
                <img  className={css.photo} src={image} alt="User avatar" />
                <p className={css.nickName}>{name}</p>
                <p className={css.tag}><span className={css.atSymbol}>@</span>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.wrap}>
                <li className={css.items}>
                    <span>Followers</span>
                    <span className={css.stats}>{stats.followers}</span>
                </li>
                <li className={css.items}>
                    <span>Views</span>
                    <span className={css.stats}>{stats.views}</span>
                </li>
                <li className={css.items}>
                    <span>Likes</span>
                    <span className={css.stats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};




    
