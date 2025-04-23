import React from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';

/* Screens */
export default function Home() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/trench.jpg')}
          style={styles.reactLogo}
        />
      }>

      <View style={styles.container}>
        <Text style={styles.title}>Trench Crusade Roster Builder</Text>
        <Button 
        title="Roster Builder" 
        onPress={() => router.navigate('/RosterBuilder')}/>
        <Button title="Settings"/>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  }
});
