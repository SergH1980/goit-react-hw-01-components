import { Profile } from './Profile/Profile';
import user from './JSON/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from './JSON/data.json';
import { FriendList } from './Friends/FriendList/FriendList';
import friends from './JSON/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactionHistory from './JSON/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionHistory} />
    </div>
  );
};
