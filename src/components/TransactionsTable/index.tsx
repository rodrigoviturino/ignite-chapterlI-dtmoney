import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable(){
  const transactions = useContext(TransactionsContext); 

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
            {transactions.map((transaction) => {
              return(
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              )
            })}
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>22/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000</td>
            <td>Casa</td>
            <td>20/05/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>22/05/2021</td>
          </tr> */}
        </tbody>

      </table>
    </Container>
  );
}