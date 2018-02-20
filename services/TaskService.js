(function() {
  function TaskService () {
    var todoList = [];

    return {
      getTasks: getTasks
      sendTasks: sendTasks
    }

    function getTasks() {
      return todoList;
    }

    function setTasks () {
      todoList = list;
    }
  }
}

angular
.module("app")
.factory("TaskService", TaskService);
})();
