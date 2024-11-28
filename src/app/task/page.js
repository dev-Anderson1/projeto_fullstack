'use client'
import Link from "next/link"

export default function Home() {
  return (
    <ul>
      <h1>Página de Tarefas do Peter</h1>
      <li>
        <Link href="/create">Criar Tarefa</Link>
      </li>
      <li>
        <Link href="/list">Listar Tarefas</Link>
      </li>
      <li>
        <Link href="/status">Status da Tarefa</Link>
      </li>
      <li>
        <Link href="/delete">Deletar Tarefa</Link>
      </li>
      <li>
        <Link href="/">Voltar</Link>
      </li>
    </ul>
  );
}
