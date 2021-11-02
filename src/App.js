import Profile from "./component/user";
import user from './tamplates/user.json';
import Statistics from "./component/statisticalList";
import FriendList from "./component/friendList";
import TransactionHistory from './component/transactions';

export default function App() {
  return (
    <div>
  <Profile
  avatar={user.avatar}
  name={user.name}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
    />

  <Statistics />
  
  <FriendList/>
      
  <TransactionHistory />
  </div>  
  )
}