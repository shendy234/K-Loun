import Navigation from "./app/navigation";
import AuthContextProvider from "./app/store/AuthContext";
import OnboardingScreen from './app/screens/onboarding/OnboardingScreen';

export default function App() {
  return (
    <AuthContextProvider>
      {/* <OnboardingScreen/> */}
      <Navigation />
    </AuthContextProvider>
  );
}