import Navigation from "@/components/navigation";

export default function AboutLayout({ children }) {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  );
}
