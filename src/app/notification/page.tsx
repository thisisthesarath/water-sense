"use client";

import { useState } from "react";

const NotificationSettings = () => {
  // Define state with explicit types
  const [formData, setFormData] = useState<{
    email1: string;
    email2: string;
    email3: string;
    email4: string;
    wa1: string;
    wa2: string;
    wa3: string;
    wa4: string;
  }>({
    email1: "",
    email2: "",
    email3: "",
    email4: "",
    wa1: "",
    wa2: "",
    wa3: "",
    wa4: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleEmailSave = () => {
    console.log("Saved Emails:", {
      email1: formData.email1,
      email2: formData.email2,
      email3: formData.email3,
      email4: formData.email4,
    });
    alert("Emails Saved Successfully!");
  };

  const handleWaSave = () => {
    console.log("Saved WhatsApp Numbers:", {
      wa1: formData.wa1,
      wa2: formData.wa2,
      wa3: formData.wa3,
      wa4: formData.wa4,
    });
    alert("WhatsApp Numbers Saved Successfully!");
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>

      {/* Email Fields in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={`email${num}`}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email {num}
            </label>
            <input
              type="email"
              name={`email${num}`}
              value={formData[`email${num}` as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          </div>
        ))}
      </div>

      {/* Save Button for Emails */}
      <button
        onClick={handleEmailSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Save Emails
      </button>

      <hr className="my-6 border-gray-300 dark:border-gray-700" />

      {/* WhatsApp Fields in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={`wa${num}`}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              WhatsApp Number {num}
            </label>
            <input
              type="tel"
              name={`wa${num}`}
              value={formData[`wa${num}` as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
          </div>
        ))}
      </div>

      {/* Save Button for WhatsApp Numbers */}
      <button
        onClick={handleWaSave}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
      >
        Save WhatsApp Numbers
      </button>
    </div>
  );
};

export default NotificationSettings;
