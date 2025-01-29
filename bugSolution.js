This solution uses an event listener to listen for URL changes instead of relying solely on `Linking.getInitialURL()`, providing a more robust method for handling deep links:
```javascript
import * as Linking from 'expo-linking';
import { useEffect } from 'react';

const handleDeepLink = () => {
  useEffect(() => {
    const handleUrlChange = (url) => {
      if (url) {
        // Handle the deep link
        console.log('Deep link (event listener):', url);
      }
    };
    const subscription = Linking.addEventListener('url', handleUrlChange);
    return () => subscription.remove();
  }, []);
};
```