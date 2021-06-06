import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const { createTransaction } = useContext(TransactionsContext);
  console.log(createTransaction);
  

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");


  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    })

    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
    onRequestClose();
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Novo Item</h2>
        
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>

        <input type="number" placeholder="Valor" value={amount} onChange={ event => setAmount(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
          </RadioBox>

        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

        <button type="submit">Adicionar</button>

      </Container>
    </Modal>
  )
}