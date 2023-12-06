"use client";
import { createContext, useState } from "react";

// cria um contexto
export const ClienteContext = createContext();

function ClienteProvider({ children }) {
  const [clienteId, setClienteId] = useState(null);
  const [clienteNome, setClienteNome] = useState("");

  function mudaId(id) {
    setClienteId(id);
  }

  function mudaNome(nome) {
    setClienteNome(nome);
  }

  return (
    <ClienteContext.Provider
      value={{ clienteId, clienteNome, mudaId, mudaNome }}
    >
      {children}
    </ClienteContext.Provider>
  );
}

export default ClienteProvider;
