import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/StatisticsSection';
import FriendList from './Components/Friends/FriendList';
import TransactionHistory from './Components/Transactions/TransactionHistory';
import user from './UserData/user.json';
import data from './UserData/data.json';
import friends from './UserData/friends.json';
import transactions from './UserData/transactions.json';
export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
