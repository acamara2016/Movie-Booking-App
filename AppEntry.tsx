import * as React from 'react';
import {useAppDispatch} from './hooks/state';
import SportMainNavigator from './components/sport/MainNavigator';
import {fetchLeagues} from './features/sport/sportSlicer';

export default function AppEntry() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchLeagues());
  }, []);
  return <SportMainNavigator />;
}
