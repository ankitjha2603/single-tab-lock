export const default_on_multiple_tabs_detected = (errorMessage) => {
  setTimeout(() => alert(errorMessage), 500);
  document.documentElement.innerHTML = "";
};
/**
 * Prevents the opening of multiple tabs for a specific website.
 *
 * @param {object} [options] - Options object for customizing the behavior.
 * @param {string} [options.errorMessage="This website is already open..."] - The error message to display if multiple tabs are detected.
 * @param {number} [options.expiryTime=1000] - The time gap (in milliseconds) that determines the threshold for considering a tab as "offline."
 * @param {function} [options.onMultipleTabsDetected=default_on_multiple_tabs_detected] - A callback function to be executed when multiple tabs are detected.
 * @param {object} [options.config] - Configuration object for internal processing.
 * @param {number} [options.config.updateSpeed=3] - The speed of internal updates (frames per second).
 */

export const preventMultipleTabs = (options = {}) => {
  const {
    errorMessage = "This website is already open in another tab, and multiple tabs are prohibited.",
    expiryTime = 1000,
    onMultipleTabsDetected = default_on_multiple_tabs_detected,
    config = { updateSpeed: 3 },
  } = options;
  const unique_key = "XtVrS!'$eURdQQA1E|<,9*IZMyhmB]:'*CF#^D;p";
  const status = localStorage.getItem(unique_key);
  const ctime = new Date() * 1;

  if (status === undefined || ctime - status <= expiryTime) {
    onMultipleTabsDetected(errorMessage);
  } else {
    //---------------------------------------------->
    // SECTION: Animation
    const { updateSpeed } = config;
    let lastTimeUpdate = -1000 / updateSpeed;
    const main = (ctime) => {
      if (ctime - lastTimeUpdate >= 1000 / updateSpeed) {
        localStorage.setItem(unique_key, new Date() * 1);
        lastTimeUpdate = ctime;
      }
      window.requestAnimationFrame(main);
    };
    window.requestAnimationFrame(main);
    //---------------------------------------------->
  }
};
