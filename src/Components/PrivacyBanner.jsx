import React, { useState } from 'react';

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleOkClick = () => {
    setShowBanner(false); // Hide the banner when OK is clicked
  };

  return (
    showBanner && (
      <div
        className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 text-center z-50"
        style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <p className="mb-2">
          This website uses cookies to improve your experience. By continuing to use this site, you accept our privacy policy.
        </p>
        <button
          onClick={handleOkClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          OK
        </button>
      </div>
    )
  );
};

export default PrivacyBanner;
