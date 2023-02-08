/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { CommonActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Hub } from 'aws-amplify';

import awsconfig from './src/aws-exports'

import { OnboardScreen } from './src/screens/onboardScreen';

import { WelcomeScreen } from './src/screens/welcomeScreen/index';
import { Theme } from './src/templates/theme';
import { SignUp } from './src/screens/signUp';
import { SignIn } from './src/screens/signIn';
import { TermsAndConditions } from './src/screens/termsAndConditions';
import { ForgotPassword } from './src/screens/forgotPassword';
import { VerifyUserAccountCode } from './src/screens/verifyUserAccountCode';
import { Home } from './src/screens/home';
import { ActivityIndicator, View } from 'react-native';
import { ResetPassword } from './src/screens/resetPassword';
import { RecoilRoot } from 'recoil';
import { TabNav } from './src/routes/tabNav';
import { ProductDetails } from './src/screens/productDetails';
import { ViewAllProducts } from './src/screens/viewAllProducts';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      setUser(authUser)
    } catch (error: any) {
      setUser(undefined)
    }
  }

  useEffect(() => {
    checkUser()
    const listener = (data: any) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    };

    Hub.listen('auth', listener);
  }, []);

  if (user === undefined) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'Center' }}>
      <ActivityIndicator />
    </View>
  }

  return (
    <Theme>
      <RecoilRoot>
        <NavigationContainer>

          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >

            {user ? (
             <>
              <Stack.Screen
                name="Home"
                component={TabNav}
                options={{ title: "Home" }} 
              />
                <Stack.Screen
                  name="ProductDetails"
                  component={ProductDetails}
                  options={{ title: "ProductDetails" }} 
                />

                <Stack.Screen
                  name="ViewAllProducts"
                  component={ViewAllProducts}
                  options={{ title: "ViewAllProducts" }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Welcome"
                  component={WelcomeScreen}
                  options={{ title: "Welcome" }}
                />

                <Stack.Screen
                  name="Onboard"
                  component={OnboardScreen}
                  options={{ title: "Onboard" }}
                />

                <Stack.Screen
                  name="SignIn"
                  component={SignIn}
                  options={{ title: "SignIn" }}
                />

                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  options={{ title: "SignUp" }}
                />

                <Stack.Screen
                  name="TermsAndConditions"
                  component={TermsAndConditions}
                  options={{ title: "TermsAndConditions" }}
                />

                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{ title: "ForgotPassword" }}
                />

                <Stack.Screen
                  name="VerifyUserAccountCode"
                  component={VerifyUserAccountCode}
                  options={{ title: "VerifyUserAccountCode" }}
                />

                <Stack.Screen
                  name="ResetPassword"
                  component={ResetPassword}
                  options={{ title: "ResetPassword" }}
                />

              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </Theme>
  );
};


export default App;
