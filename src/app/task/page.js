'use client'
import Link from "next/link"

export default function Home() {
  return (
    <ul>
      <h1>Página de Tarefas do Peter</h1>
      <li>
        <Link href="/create">Criar Tarefa do Peter</Link>
      </li>
      <li>
        <Link href="/list">Listar Tarefas do Peter</Link>
      </li>
      <li>
        <Link href="/status">Status da Tarefa do Peter</Link>
      </li>
      <li>
        <Link href="/delete">Deletar Tarefa do Peter</Link>
      </li>
      <li>
        <Link href="/">Voltar pro Peter</Link>
      </li>
    </ul>
  );
}
