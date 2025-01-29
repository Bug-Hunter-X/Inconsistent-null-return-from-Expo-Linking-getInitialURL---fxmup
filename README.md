# Inconsistent null return from Expo Linking.getInitialURL()

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it inconsistently returns `null`, even when a deep link is successfully opened.  This makes reliable deep link handling problematic.

## Bug Description

The `Linking.getInitialURL()` function is supposed to return the initial URL the app was opened with. However, in this scenario it intermittently returns `null`, preventing proper deep link processing.

## How to Reproduce

1. Clone this repository.
2. Run the app using Expo CLI.
3. Open a deep link that targets this app.
4. Observe the console logs - you might see `null` returned despite a deep link being used.

## Proposed Solution

The proposed solution in `bugSolution.js` uses event listeners to monitor URL changes, providing a more reliable way to handle deep links compared to relying solely on `getInitialURL()`.

## Additional Notes

This issue might be related to specific Expo SDK versions, devices, or app configurations. More investigation may be needed to identify the exact root cause.