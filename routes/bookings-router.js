const express = require("express")
const router = express.Router()

const bookingsController = require("../controller/bookings-controller")

router.get("/", bookingsController.getAll)
router.post("/", bookingsController.create)

module.exports = router