var app = new Vue (
  {
    el: "#root",
    data: {
      todos: [
        {
          title: "Ritirare la posta",
          status: "todo"
        },
        {
          title: "Dar da mangiare al coniglio",
          status: "todo"
        },
        {
          title: "Buttare la spazzatura",
          status: "todo"
        },
        {
          title: "Stendere la biancheria",
          status: "todo"
        },

      ],
      text: "",
    },
    computed: {
      todosComputed: function () {
        let arrayTodo = this.todos.filter((todo) => todo.status == "todo");
        let arrayDone = this.todos.filter((todo) => todo.status == "done")
        return [...arrayTodo,...arrayDone];
      }
    },
    methods: {
      add: function () {
        if (this.text !== "") {
          let obj = {
            title: this.text,
            status: "todo",
          }
          this.todos.push(obj)
          this.text = ""
        }
      },
      check: function (todo) {
        let index = this.todos.indexOf(todo)
        this.todos[index].status = "done"
      },
      remove: function (todo) {
        let index = this.todos.indexOf(todo)
        this.todos.splice(index, 1);
      }
    }
  },

);
