import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      // nossa tabela está em SINGULAR e SEMPRE colocar em PLURAL AQUI
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          amount: 2500,
          type: "deposit",
          category: "Website",
          createAt: new Date("2021-06-04 16:54:00")
        },
        {
          id: 2,
          title: "Aluguel Agência",
          amount: 800,
          type: "withdraw",
          category: "Aluguel",
          createAt: new Date("2021-06-04 18:00:00")
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
