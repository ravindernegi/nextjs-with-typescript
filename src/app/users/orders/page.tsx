import Navbar from "@components/Navbar";

export const metadata = {
  title: "Orders",
  description: "Orders descriptions ",
};

export default function Page() {
  return (
    <main className="main">
      <Navbar />
      <h1>Orders</h1>
    </main>
  );
}
