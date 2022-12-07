import React from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './ProfileScreen.stye';
import {useProfile} from './profile.hooks';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  const {data, loading} = useProfile();
  const handleLogOut = () => {
    auth().signOut();
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {/* Top bar */}
          <View style={styles.barContainer}>
            <Image
              source={require('../../assets/logo2.png')}
              style={{height: 30, width: 110}}
            />
            <Text style={styles.barText}>Profile</Text>
          </View>

          {/* Content */}
          <View>
            <View style={styles.editProfile}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Icon name="ios-person" size={50} />
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>Edit Profile</Text>
            </View>
            <View style={{borderTopWidth: 1}}>
              <View style={styles.profileItem}>
                <Text>First Name</Text>
                <Text>{data[0].firstName}</Text>
              </View>
              <View style={styles.profileItem}>
                <Text>Last Name</Text>
                <Text>{data[0].lastName}</Text>
              </View>
              <View style={styles.profileItem}>
                <Text>Email</Text>
                <Text>{data[0].email}</Text>
              </View>
              <View style={styles.profileItem}>
                <Text>Gender</Text>
                <Text>{data[0].gender}</Text>
              </View>
            </View>
          </View>

          {/* logout button */}
          <TouchableOpacity
            style={styles.buttonLogout}
            activeOpacity={0.5}
            onPress={handleLogOut}>
            <Text style={styles.buttonLogoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
