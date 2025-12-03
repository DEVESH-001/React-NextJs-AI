//server component: just add 'async' to the function to make it a server component



export default async function Home() {
  const res = await fetch("https://api.github.com/users/DEVESH-001");
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p> {JSON.stringify(data)}</p>
    </div>
  );
}


