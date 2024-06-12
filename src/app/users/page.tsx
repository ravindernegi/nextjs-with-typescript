import Navbar from "@components/Navbar";

export const metadata = {
  title: "Users",
  description: "Users descriptions ",
};
export default function Page() {
  return (
    <main className="main">
      <Navbar />
      <h1>Users</h1>
    </main>
  );
}
