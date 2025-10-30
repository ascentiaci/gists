export function alertBar() {
  document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date("October 30, 2025");
    const endDate = new Date("January 25, 2026");
    const currentDate = new Date();

    // Only show the bar if within range
    if (currentDate >= startDate && currentDate <= endDate) {
      addBar();
    }

    function addBar() {
      const alertBarEl = document.getElementById("alertarea");

      if (!alertBarEl) {
        console.error("No element with ID 'alertarea' found.");
        return;
      }

      alertBarEl.classList.remove("d-none");
      alertBarEl.innerHTML = `Test`;
    }
  });
}
