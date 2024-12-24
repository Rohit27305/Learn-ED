const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/userdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

// Home route (Serve index.html)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Register route
app.post("/api/register", async (req, res) => {
    try {
        const { fullname, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.redirect("/?message=Passwords+do+not+match!");
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.redirect("/?message=Email+already+in+use!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullname, email, password: hashedPassword });

        await newUser.save();
        return res.redirect("/?message=User+registered+successfully!");
    } catch (error) {
        return res.redirect("/?message=Error+registering+user!");
    }
});

// Login route
app.post("/api/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ email: username });
        if (!user) {
            return res.redirect("/?message=User+not+found!");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.redirect("/?message=Invalid+credentials!");
        }

        return res.redirect("/?message=Login+successful!");
    } catch (error) {
        return res.redirect("/?message=Error+logging+in!");
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
