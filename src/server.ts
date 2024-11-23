const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);

  app.listen(port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}
