import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserListScreen from "../screens/UserListScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserListScreen">
        <Stack.Screen
          name={UserListScreen}
          component={UserListScreen}
          options={{
            title: "User List",
          }}
        />
        <Stack.Screen
          name={UserDetailsScreen}
          component={UserDetailsScreen}
          options={{
            title: "User Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
