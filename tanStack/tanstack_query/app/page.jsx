import UsersList from "@/components/UsersList";

const Home = () => {
  return (
    <div className="container max-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-light mb-8 text-center">
        TanStack Query Demo
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <UsersList/>
        </div>
      </div>
    </div>
  );
};

export default Home;
