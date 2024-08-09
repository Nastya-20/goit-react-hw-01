import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <div className={css.container}>
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={css.friendItem}>
                    <img src={avatar} alt={`${name} avatar`} className={css.avatar} />
                    <p className={css.nameFriend}>{name}</p>
                    <span className={isOnline ? css.online : css.offline}>
                        {isOnline ? 'Online' : 'Offline'}
                    </span>
                </li>
            ))}
            </ul>
       </div>
    );
}
