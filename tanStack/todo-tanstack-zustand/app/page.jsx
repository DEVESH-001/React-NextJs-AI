import TodoForm from "@/components/TodoForm";
import HeroSVG from "@/components/ui/hero-svg";
import ConnectDB from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  await ConnectDB();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 flex items-center justify-center gap-2">
            Focus{" "}
            <span className="flex">
              <HeroSVG />
            </span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            What do you need to get done today?
          </p>
        </header>

        <main className="mt-8 bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10 border border-gray-100">
          <TodoForm />
        </main>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} | Zustand | TanStack | ServerActions
          | NextJS | MongoDB | AI ~soon 🦁. <br />
          Crafted by{" "}
          <span className="text-sky-600 hover:text-amber-400 hover:font-bold hover:underline">
            <Link href="https://devesh.work" target="_blank">
              DEVESH
            </Link>
          </span>
          .
        </p>
      </footer>
    </div>
  );
}
