'use client'
import Link from "next/link"

export default function Home() {
  return (
    <ul>
      <h1>Página de Tarefas do Peter</h1>
      <li>
        <Link href="task/create">Criar Tarefa</Link>
      </li>
      <li>
        <Link href="task/list">Listar Tarefas</Link>
      </li>
      <li>
        <Link href="task/status">Status da Tarefa</Link>
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
