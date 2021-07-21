import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import TravelLog from './TravelLog';
import BucketList from './BucketList';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/travellog" component={TravelLog} />
        <Route exact path="/bucketlist" component={BucketList} />
      </Switch>
    </main>
  );
}
