import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import React from "react"

export default function Component() {
  const { data: session, status } = useSession()

  if (session) {
    console.log(session.id_token);

    return (
      <>
        Signed in as {session.user?.email} <br />

        <button onClick={() => signOut()}>Sign out</button>

        <div>
          <Link href="/newpage">
            <a>move new page</a>
          </Link>
        </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}