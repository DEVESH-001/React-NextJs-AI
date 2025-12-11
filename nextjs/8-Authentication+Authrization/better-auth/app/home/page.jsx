"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




const Home = () => {

  const { data: session } = authClient.useSession();
  const router = useRouter();
  if (!session) {
    return <p>Not SignedIn ...</p>;
  }
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logged In as {session.user.email}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => router.push("/"),
            },
          })
        }
      >
        LogOut
      </Button>
    </div>
  );
};

export default Home;
