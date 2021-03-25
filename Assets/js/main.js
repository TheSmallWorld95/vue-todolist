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
          status: "done"
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
      text: "",    },
    methods: {
      add: function () {
        if (this.text !== "") {
          let obj = {
            title: this.text
          }
          this.todos.push(obj)
          this.text = ""
        }

      }
    }
  },

);
