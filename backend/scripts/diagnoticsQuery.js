
  // Show form when diagnostics button is clicked
  document.getElementById("diagnosticsBtn").addEventListener("click", () => {
    document.getElementById("aiForm").classList.remove("hidden");
  });


document.getElementById("aiForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page reload

    const prompt = document.getElementById("prompt").value;

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      console.log("AI Response:", data);

      alert("AI Response: " + data.reply);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  });