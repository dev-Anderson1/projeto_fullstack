'use client'
import Link from "next/link";
import ".//globals.css";

export default function Home() {
  return (
    <div>
      <h1>Página do Peter</h1>
      <li>
        <Link href="/user">Usuários do Peter</Link>
      </li>
      <li>
        <Link href="/task">Tarefas do Peter</Link>
      </li>
      <Link href="/teste">Teste do Peter</Link>
    </div>
  );
}
