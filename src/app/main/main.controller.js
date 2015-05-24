'use strict';

angular.module('sdkDemo.landing.demo-ctrl', [])
  .controller('MainCtrl', function (userList) {
    var vm = this;
    vm.userList = userList;
  });
// users -> albums -> photos
// users -> posts -> comments
