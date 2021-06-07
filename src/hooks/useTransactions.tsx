import { createContext, useEffect, ReactNode, useState, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput ) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get(`/transactions`)
    .then((response) => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionData: TransactionInput){
    const response = await api.post("/transactions", {
      ...transactionData,
      createAt: new Date()
    });
    const { transaction } = response.data;

    // ADICIONANDO novos itens na lista da tabela
    setTransactions([...transactions, transaction]);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}