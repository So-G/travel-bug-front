import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import VisitedCountriesList from './VisitedCountriesList';
import BucketList from './CountryWishList';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/travellog" component={VisitedCountriesList} />
        <Route exact path="/bucketlist" component={BucketList} />
      </Switch>
    </main>
  );
}
