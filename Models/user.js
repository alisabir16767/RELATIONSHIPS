const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
    console.log("Connection successful");

    const userSchema = new mongoose.Schema({
      username: String,
      addresses: [
        {
          location: String,
          city: String,
        },
      ],
    });

    const User = mongoose.model("User", userSchema);

    const user1 = new User({
      username: "sabir",
      addresses: [
        {
          location: "221 B",
          city: "London",
        },
      ],
    });

    user1.addresses.push({ location: "3232 A", city: "London" });

    const result = await user1.save();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
