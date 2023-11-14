// import router
const accountRouter = require("./accountRouter")
const adminRouter = require("./adminRouter")
const authRouter = require("./authRouter")
const bookingRouter = require("./bookingRouter")
const notificationRouter = require("./notificationRouter")
const searchRouter = require("./searchRouter")
const siteRouter = require("./siteRouter")

const route = (app) => {
    app.use("/admin", adminRouter)
    app.use("/auth", authRouter)
    app.use("/search", searchRouter)
    app.use("/notifications", notificationRouter)
    app.use("/account", accountRouter)
    app.use("/booking", bookingRouter)
    app.use("/", siteRouter)
}

module.exports = route