import fetch from "node-fetch";

const testLogins = async () => {
  const dummyEmails = [
    "testuser1@dummy.com",
    "testuser2@dummy.com",
    "testuser3@dummy.com",
    "invalid@dummy.com", // Should fail
  ];

  for (const email of dummyEmails) {
    try {
      const response = await fetch("http://localhost:3000/auth/user-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      console.log(`Login attempt for ${email}:`, result);
    } catch (error) {
      console.error(`Error testing ${email}:`, error);
    }
  }
};

testLogins();