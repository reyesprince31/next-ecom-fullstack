import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="h-screen p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SetupPage;
