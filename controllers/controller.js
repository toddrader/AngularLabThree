(function(){
  function loremIpsum(){
    return {
      templateUrl: "partials/loremipsum.template.html"
    };
  }
  angular.module("hello")
  .directive("loremIpsum", loremIpsum)
})();
