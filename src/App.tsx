import { useState } from "react";
import { MainNavbar, NavHub } from "./components/navigation";
import { Footer } from "./components/sections";
import AppRoutes from "./routes/AppRoutes";
import { ContactModal, LoginModal} from "./components/modals";
import { SectionsProvider } from "./contexts/SectionsProvider";

function App() {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <MainNavbar onContactClick={openContact} onLoginClick={openLogin} />

      {/* Wrap AppRoutes with SectionsProvider */}
      <SectionsProvider>
        <NavHub />
        <main className="w-full flex flex-col justify-start items-center overflow-hidden text-white">
          <AppRoutes openContact={openContact} />
          <Footer />
        </main>
      </SectionsProvider>

      {/* Modals */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
    </div>
  );
}

export default App;