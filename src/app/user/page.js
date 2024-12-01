'use client';
import Link from "next/link";
import "@/app/globals.css";

export default function Menu() {
  return (
    <nav>
      <Link href="/user/create">Criar Usuário</Link> {/* Corrigido o caminho */}
    </nav>
  );
}
