import friends from '../tamplates/friends.json'
import '../styles/friends.css'

export default function Friend() {
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return (
                    <li key={friend.id} className="item-friends">
                        <span className={
                            friend.isOnline ? "status" + " " + "online" : "status" + " " + "offline"
                        }></span>
                        <img className="avatar-frieds" src={friend.avatar} alt="" width="48" />
                        <p className="name-friends">{friend.name}</p>
                    </li>
                )
            })
            }
        </ul>
    )
}
