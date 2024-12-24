import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { scaleFont, scaleHeight, scaleWidth } from "../constants/core";

const UserListScreen = ({ route }: any) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: user.picture.large }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Address</Text>
        </View>
        <Text style={styles.text}>
          {user.location.street.number} {user.location.street.name},{"\n"}
          {user.location.city}, {user.location.state},{"\n"}
          {user.location.country} - {user.location.postcode}
        </Text>
      </View>
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Contact</Text>
        </View>
        <Text style={styles.text}>Phone: {user.phone}</Text>
        <Text style={styles.text}>Cell: {user.cell}</Text>
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(16),
    backgroundColor: "#F9F9F9",
  },
  card: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    padding: scaleWidth(16),
    borderRadius: scaleWidth(10),
    marginBottom: scaleHeight(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileImage: {
    width: scaleWidth(120),
    height: scaleHeight(120),
    borderRadius: scaleWidth(60),
    marginBottom: scaleHeight(16),
  },
  name: {
    fontSize: scaleFont(22),
    fontWeight: "bold",
    color: "#333333",
    marginBottom: scaleHeight(8),
  },
  email: {
    fontSize: scaleFont(16),
    color: "#555555",
    marginBottom: scaleHeight(16),
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    padding: scaleWidth(16),
    borderRadius: scaleWidth(10),
    marginBottom: scaleHeight(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionHeader: {
    marginBottom: scaleHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: scaleHeight(4),
  },
  sectionTitle: {
    fontSize: scaleFont(18),
    fontWeight: "bold",
    color: "#444444",
  },
  text: {
    fontSize: scaleFont(16),
    color: "#555555",
    lineHeight: scaleHeight(24),
  },
});

export default UserListScreen;
