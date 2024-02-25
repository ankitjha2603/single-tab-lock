/**
 * Prevents the opening of multiple tabs for a specific website.
 *
 * @param {string} [error_message="This website is already open..."] - The error message to display if multiple tabs are detected.
 * @param {string} [unique_key="oBqM|[x.g#S/L#JRiu)9BnFLS"] - A unique key to identify whether the website is open in another tab.
 * @param {number} [expiryTime=1000] - The time gap (in milliseconds) that determines the threshold for considering a tab as "offline."
 * @param {function} [onMultipleTabsDetected] - A callback function to be executed when multiple tabs are detected.
 * @param {object} [config] - Configuration object for the animation section.
 * @param {number} [config.updateSpeed=3] - The speed of the animation (frames per second).
 */
export const preventMultipleTabs = (
  error_message = "This website is already open in another tab, and multiple tabs are prohibited.",
  unique_key = "oBqM|[x.g#S/L#JRiu)9BnFLS",
  expiryTime = 1000,
  onMultipleTabsDetected,
  config = { updateSpeed: 3 }
) => {
  const status = localStorage.getItem(unique_key);
  const ctime = new Date() * 1;

  if (status === undefined || ctime - status <= expiryTime) {
    if (
      onMultipleTabsDetected &&
      typeof onMultipleTabsDetected === "function"
    ) {
      // Call the callback function
      onMultipleTabsDetected();
    } else {
      // Default behavior: display alert and clear HTML content
      setTimeout(() => alert(error_message), 500);
      document.documentElement.innerHTML = "";
    }
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
