import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { TransactionsProvider } from "./TransactionsContext";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // essa função é aplicada no botão que está no header
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal = { handleOpenNewTransactionModal }
      />
        <Dashboard />
        <NewTransactionModal
          isOpen = { isNewTransactionModalOpen }
          onRequestClose = { handleCloseNewTransactionModal }
        />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
