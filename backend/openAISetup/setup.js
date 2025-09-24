require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey:`sk-proj-RERKkjxmPM
_oRRyv2glAPGBjmwzwtHXv9cpIjUxbXENA9D9PktNfRrSBMcQZMosMQKRb11rYtBT3BlbkFJH6BaWJO6hmLDI
_DhLUBQdhI9RMyPuRCPSkw2oJsjxvgQ-Q74StW4Li3_umtdO4g6-vtIqsw4kA`
  //apiKey: process.env.OPENAI_API_KEY,
});


module.exports = client;