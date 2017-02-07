/**
 * Created by Паша on 19.10.2016.
 */

storeApp.factory('AdminServices', function($resource) {
   return $resource('/api/admin/:id', { id: '@_id' }, {
       update: {
           method: 'PUT'
       }
   });
});