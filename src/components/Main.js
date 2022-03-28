import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import TravelLog from '../screens/TravelLogPage';
import BucketList from '../screens/BucketListPage';
import LogIn from '../screens/LogInPage';
import AddNewCountry from './AddBucketList';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/travellog" component={TravelLog} />
        <Route exact path="/bucketlist" component={BucketList} />
        <Route exact path="/addnewcountry" component={AddNewCountry} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </main>
  );
}
