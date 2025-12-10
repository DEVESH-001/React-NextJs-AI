import AddUserForm from "@/components/add-user-form";
import UsersList from "@/components/UsersList";

const Home = () => {
  return (
    <div className="p-10 max-auto  max-w-7xl ">
      <h1 className="text-3xl font-light mb-8 text-center">
        TanStack Query Demo
      </h1>
      <AddUserForm />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Home;
