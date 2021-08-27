const app = require("../app");

function userRoutes() {
app.get("/user", (req, res) => {
res.send("user route working");
});
}

module.exports = userRoutes;