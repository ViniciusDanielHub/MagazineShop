import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword } from "../screens/forgotPassword";
import { Home } from "../screens/home";
import { OnboardScreen } from "../screens/onboardScreen";
import { ResetPassword } from "../screens/resetPassword";
import { SignIn } from "../screens/signIn";
import { SignUp } from "../screens/signUp";
import { TermsAndConditions } from "../screens/termsAndConditions";
import { VerifyUserAccountCode } from "../screens/verifyUserAccountCode";
import { WelcomeScreen } from "../screens/welcomeScreen";

const Stack = createNativeStackNavigator()

export const UnauthenticatedRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
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
    </Stack.Navigator>
  )
}