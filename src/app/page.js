'use client'
import Link from "next/link";
import ".//globals.css";

export default function Home() {
  return (
    <div>
      <h1>Página do Principal</h1>
      <li>
        <Link href="/user">Usuários</Link>
      </li>
      <li>
        <Link href="/task">Tarefas</Link>
      </li>
      <Link href="/teste">Teste</Link>
    </div>
  );
}
