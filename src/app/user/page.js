'use client'
import Link from "next/link"
import "../globals.css";

export default function Menu() {
  return (
    <nav>
      <Link href="/create">Criar Usuário</Link>
    </nav>
  );
}
