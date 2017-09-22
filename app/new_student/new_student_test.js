'use strict';

describe('myApp.new_student module', function() {

  beforeEach(module('myApp.new_student'));

  describe('new_student controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var newStudentCtrl = $controller('NewStudentCtrl');
      expect(newStudentCtrl).toBeDefined();
    }));

  });
});