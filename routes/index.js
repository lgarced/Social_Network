const router = require("express").Router();
const userRoute = require("./api/users_route");
const thoughtRoute = require("./api/thought_routes");

router.use("/users", userRoute);
router.use("/thoughts", thoughtRoute);

module.exports = router;
