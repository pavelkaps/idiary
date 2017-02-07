/**
 * Created by Паша on 07.02.2017.
 */

module.exports = function (app) {
    app.use("/admin", require("./admin_router"));
    app.use("/child", require("./child_router"))
};