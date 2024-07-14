
"use client";

import Link from 'next/link'
import { useState } from "react";
import { useRouter } from 'next/navigation'



export default function Home() {

  const [customer, setcustomer] = useState({
    id: 5,
    name: "custom name"
  });
  const router = useRouter()

  console.log("params.id")

  return (
    <main >
      <div>
        <Link href="/user">USER</Link>
      </div>
      <div>
        <Link href="/user/login">USER login</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="/xx">XX</Link>
      </div>
      <div>
        <Link href="/customer/3">Customer</Link>
      </div>

      <button type="button" onClick={() => router.push('/xx')}>
        XX Dashboard
      </button>
    </main>
  );
}
