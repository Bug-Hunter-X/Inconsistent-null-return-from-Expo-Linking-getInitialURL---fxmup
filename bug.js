This bug occurs when using the Expo `Linking` API to handle deep links.  The `getInitialURL` async function sometimes returns `null` even when a deep link is opened, leading to unexpected behavior in the app. This is inconsistent and unreliable, making it difficult to handle deep links effectively.  The issue seems to be intermittent, occurring on different devices and Expo SDK versions. Example: 
```javascript
import * as Linking from 'expo-linking';

const handleDeepLink = async () => {
  const initialUrl = await Linking.getInitialURL();
  if (initialUrl) {
    // Handle the deep link
    console.log('Deep link:', initialUrl);
  } else {
    console.log('No deep link found');
  }
};
```