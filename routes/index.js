/**
 * Created by Паша on 07.02.2017.
 */

module.exports = function (app) {

    app.use("/api/admin", require("./api/admin_router"));
    app.use("/api/child", require("./api/child_router"));
    app.use("/api/class", require("./api/class_router"));
    app.use("/api/diary", require("./api/diary_routing"));
    app.use("/api/homework", require("./api/homework_router"));
    app.use("/api/parent", require("./api/parent_router"));
    app.use("/api/subject", require("./api/subject_router"));
    app.use("/api/teacher", require("./api/teacher_router"));

};