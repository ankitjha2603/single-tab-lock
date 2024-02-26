# single-tab-lock

[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.5&x2=0)](https://www.npmjs.com/package/single-tab-lock) [![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-brightgreen)](http://www.apache.org/licenses/)

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
preventMultipleTabs({
  errorMessage: "Custom error message",
  expiryTime: 2000,
  onMultipleTabsDetected: () => {
    console.log("Multiple tabs detected callback");
    // Additional actions on multiple tabs detected
  },
  config: { updateSpeed: 5 },
});
```

## Options

### `options` (Object, optional)

Options object for customizing the behavior.

```javascript
{
  // Custom error message to display when multiple tabs are detected. Default is a generic message.
  errorMessage: "Custom error message",

  // The time gap (in milliseconds) that determines the threshold for considering a tab as "offline". Default is 1000 milliseconds.
  expiryTime: 2000,

  // A callback function to be executed when multiple tabs are detected. Default is `default_on_multiple_tabs_detected`.
  onMultipleTabsDetected: () => {
    console.log("Multiple tabs detected callback");
    // Additional actions on multiple tabs detected
  },

  // Configuration object for internal processing.
  config: {
    // The speed of internal updates (frames per second).
    updateSpeed: 5,
  },
}
```

## Notes

- This package, `single-tab-lock`, provides a simple mechanism to prevent users from opening your web application in multiple tabs simultaneously.

- **LocalStorage Usage:** The package uses `localStorage` to track the status of the tab. Ensure that your users have `localStorage` enabled for your domain. Users with disabled `localStorage` might not experience the intended behavior.

- **Fallback Mechanism:** It's recommended to implement a fallback mechanism for scenarios where users have disabled `localStorage` or are using browsers that do not support it.

- **Customization:** The animation section in the code can be customized or disabled based on your specific requirements. Adjust the `config` object in the function call to control the internal processing speed.

- **Security Considerations:** Keep in mind that client-side solutions like this can be manipulated by users. If security is a critical concern, consider combining this approach with server-side validation.

```

## License

`Apache License Version 2.0, January 2004 (http://www.apache.org/licenses/)`
```
