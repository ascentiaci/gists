  const startDate = new Date("October 30, 2025");
  const endDate = new Date("January 25, 2026");
  const currentDate = new Date();

  // Check if current date is between start and end dates
  if (currentDate >= startDate && currentDate <= endDate) {
    addBar();
  } else {
    console.log("Outside date range — no alert bar shown.");
  }

  function addBar() {
    const alertBarEl = document.getElementById("alertBar");

    if (!alertBarEl) {
      console.error("No element with ID 'alertBar' found.");
      return;
    }

    alertBarEl.classList.remove("d-none");
    alertBarEl.innerHTML = `Test`;
  }

