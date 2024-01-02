import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full items-center justify-center text-lg flex flex-col gap-10">
        Hey, why don't you give the registration and login features a shot?
        <div className="flex gap-10">
          <button className="border-2 border-gray-400 rounded p-2 w-40 font-bold">
            <Link href="/register" className="ml-1 text-blue-500">
              Register
            </Link>
          </button>
          <button className="border-2 border-gray-400 rounded p-2 w-40 font-bold">
            <Link href="/login" className="ml-1 text-blue-500">
              Login
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
