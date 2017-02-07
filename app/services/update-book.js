/**
 * Created by Паша on 21.10.2016.
 */
storeApp.factory('UpdateBookFactory', function() {
    var controllers = {};

    return {
        insert: function (key, value) {
            controllers[key] = value;
        },
        get: function (key) {
            return controllers[key];
        }
    };
});