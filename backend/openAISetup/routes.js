const express = require("express");
const User = require("..user/model")
const openai = require("./setup")

const router = express.Router();


// ✅ Diagnose endpoint
router.post("/diagnose", async (req, res) => {
  try {
    const { email, anomalies, mileage } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found. Please log in." });
    }

    // Build prompt for AI
    const prompt = `
    A user reported the following anomalies in their car: ${anomalies.join(", ")}.
    The car has mileage: ${mileage} km.

    Please:
    1. List possible issues causing these anomalies.
    2. Suggest predictive maintenance actions that should be done soon.
    Provide answers in JSON format with keys: possibleIssues, maintenanceSuggestions.
    `;

    // Call ChatGPT
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    // Parse AI response
    let aiResponse;
    try {
      aiResponse = JSON.parse(completion.data.choices[0].message.content);
    } catch (e) {
      return res.status(500).json({ message: "Invalid AI response" });
    }

    res.json(aiResponse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;