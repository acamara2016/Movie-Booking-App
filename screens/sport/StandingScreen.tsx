import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
const StandingScreen = () => {
  const router = useRoute();
  const leagueId = router.params.id;
  React.useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

export default StandingScreen;
