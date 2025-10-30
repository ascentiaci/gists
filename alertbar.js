console.log("hello from github");


document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date("October 29, 2025");
    const endDate = new Date("January 25, 2026");
    const currentDate = new Date();

    // Only show bar if current date is in range
    if (currentDate >= startDate && currentDate <= endDate) {
      addBar();
    }

    function addBar() {
      const alertArea = document.getElementById("alertarea");

      if (!alertArea) {
        console.error("No element with ID 'alertarea' found.");
        return;
      }

      // Create clickable bar
      alertArea.classList.remove("d-none");
      alertArea.innerHTML = `
        <div id="winterAlertBar" style="
          background: linear-gradient(90deg, #007bff, #00aaff);
          color: white;
          text-align: center;
          padding: 12px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 6px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        ">
          ❄️ Winter Weather Notice — Click for Details ❄️
        </div>
      `;

      // Popup message
      const popup = document.createElement("div");
      popup.id = "winterPopup";
      popup.style.cssText = `
        display: none;
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 9999;
        justify-content: center;
        align-items: center;
        padding: 20px;
      `;

      popup.innerHTML = `
        <div style="
          background: white;
          color: #333;
          max-width: 650px;
          width: 100%;
          border-radius: 10px;
          padding: 24px;
          overflow-y: auto;
          max-height: 85vh;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        ">
          <h2 style="margin-top: 0; color: #007bff;">❄️ Winter Weather Reminder</h2>
          <p>As we approach winter weather season, we want to remind all students of our snow day and emergency closure policy.</p>
          <p>We follow School District 23's decisions regarding weather-related closures. If, in the unlikely event that the district announces a school closure due to snow or hazardous conditions, our campus will also close.</p>
          <h3>What You Need to Know</h3>
          <ul>
            <li><strong>Notification Time:</strong> In the event of a closure, we will send official notice via email and text no later than 7:30 AM, except in rare or exceptional circumstances.</li>
            <li><strong>Check Messages First:</strong> If there is snow on the ground or severe weather is expected, please check your messages before leaving for campus.</li>
            <li><strong>Learning Will Continue:</strong> If a closure occurs, instructors will make every effort to maintain instructional time through remote learning. Faculty will contact you with instructions, where applicable. Make sure you can sign into your school account on Microsoft Teams in preparation for this.</li>
            <li><strong>Students on Work Experience:</strong> The school closure will not affect your work experience schedule. Please check with your site supervisor and follow the directions given. Please be aware that you are still required to make up any missed hours, regardless of the reason.</li>
          </ul>
          <h3>Safety First</h3>
          <p>If you are unable to safely travel due to conditions in your area, please contact the school as soon as possible to make appropriate arrangements.</p>
          <p><strong>❗ Unexplained or unreported absences will be noted on your record.</strong></p>
          <p>We appreciate your cooperation in staying informed and safe throughout the season.</p>
          <div style="text-align: right; margin-top: 16px;">
            <button id="closePopupBtn" style="
              background: #007bff;
              color: white;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-weight: 600;
            ">Close</button>
          </div>
        </div>
      `;

      document.body.appendChild(popup);

      // Event listeners
      document.getElementById("winterAlertBar").addEventListener("click", () => {
        popup.style.display = "flex";
      });

      document.getElementById("closePopupBtn").addEventListener("click", () => {
        popup.style.display = "none";
      });

      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
      });
    }
  });
}
