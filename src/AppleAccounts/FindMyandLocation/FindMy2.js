import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../ProgressBar";
import "./FindMy.css";

const FindMy2 = () => {
  const navigate = useNavigate();

  const stepLabels = [
    "Overview",
    "Managing Find My iPhone",
    "Manage Location Sharing in Apps",
  ];

  const totalSteps = stepLabels.length;
  const currentStep = 2;

  return (
    <div className="find-my-container">
      {/* Updated ProgressBar with dynamic steps */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      <button className="close-btn" onClick={() => navigate("/guides")}>
        Close Guide
      </button>

      <div className="find-my-content">
        <div className="step-info">
          <h3>How to Manage Find My iPhone</h3>
          <p></p>

          <p>1. Open "Settings" app.</p>
        
          <p>2. Tap your name at the top.</p>
          <div className="step-image">
            <img src="/img/apple-settings.jpg" alt="Apple Settings" className="find-my-img" />
          </div>
          <p>3. Go to "Find My."</p>
          <div className="step-image">
            <img src="/img/apple-findmy.jpg" alt="Apple FindMy button" className="find-my-img" />
          </div>
          <p>4. Tap “Find My iPhone."</p>
         <div className="step-image">
            <img src="/img/apple-findmy1.jpg" alt="Apple FindMy settings" className="find-my-img" />
          </div>
          <p>5. Toggle "Find My iPhone" to "Off."</p>
          <div className="step-image">
            <img src="/img/findmy-toggle.jpg" alt="Apple FindMy toggle button" className="find-my-img" />
          </div>
          <p>6. Enter your Apple ID password to confirm.</p>
        </div>
      </div>

      <div className="find-my-navigation">
        <button
          className="back-btn"
          onClick={() =>
            navigate("/AppleAccounts/FindMyandLocation/FindMy1")
          }
        >
          ← Back
        </button>
         <button
          className="next-btn"
          onClick={() => navigate("/AppleAccounts/FindMyandLocation/FindMy3")}
        >
          Next →
        </button>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default FindMy2;
