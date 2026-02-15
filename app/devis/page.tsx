import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="pt-24 px-6 pb-16 bg-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <ContactForm embedded />
        </div>
      </main>
      <Footer />
    </>
  );
}
