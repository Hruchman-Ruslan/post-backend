import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
