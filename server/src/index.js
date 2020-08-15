const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:3000`);
});
