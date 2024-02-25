# single-tab-lock

An npm package to restrict users from opening multiple tabs of a single website.

## Installation

```bash
npm install single-tab-lock
```

## Usage

```javascript
import { preventMultipleTabs } from "single-tab-lock";

// Example usage with default values
preventMultipleTabs();

// Customized usage with options
preventMultipleTabs(
  "Custom error message",
  "custom-unique-key",
  2000,
  () => {
    console.log("Multiple tabs detected callback");
    // Additional actions on multiple tabs detected
  },
  { updateSpeed: 5 }
);
```

## Options

### `error_message` (String, optional)

Custom error message to display when multiple tabs are detected. Default is a generic message.

### `expiryTime` (Number, optional)

The time gap (in milliseconds) that determines the threshold for considering a tab as "offline". Default is 1000 milliseconds.

### `onMultipleTabsDetected` (Function, optional)

A callback function to be executed when multiple tabs are detected. Default is `undefined`.

### `config` (Object, optional)

Configuration object for internal processing

- `updateSpeed` (Number, optional): The speed of internal updates (frames per second).

## Notes

- This package, `single-tab-lock`, provides a simple mechanism to prevent users from opening your web application in multiple tabs simultaneously.

- **LocalStorage Usage:** The package uses `localStorage` to track the status of the tab. Ensure that your users have `localStorage` enabled for your domain. Users with disabled `localStorage` might not experience the intended behavior.

- **Fallback Mechanism:** It's recommended to implement a fallback mechanism for scenarios where users have disabled `localStorage` or are using browsers that do not support it.

- **Customization:** The animation section in the code can be customized or disabled based on your specific requirements. Adjust the `config` object in the function call to control the animation speed.

- **Security Considerations:** Keep in mind that client-side solutions like this can be manipulated by users. If security is a critical concern, consider combining this approach with server-side validation.
