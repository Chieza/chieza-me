import React, { useState } from 'react'
import MainNavbar from './components/navigation/MainNavbar'
import AppRoutes   from './routes/AppRoutes'
import ContactModal from './components/modals/ContactModal'
import LoginModal from './components/modals/LoginModal'

function App() {
  const [isContactOpen, setContactOpen] = useState(false)
  const [isLoginOpen, setLoginOpen] = useState(false)

  const openContact  = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)
  const openLogin  = () => setLoginOpen(true)
  const closeLogin = () => setLoginOpen(false)

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      <MainNavbar
      onContactClick={openContact}
      onLoginClick={openLogin}
      />
      <main className="flex-grow pt-16">
        <AppRoutes openContact={openContact } />
      </main>
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
    </div>
  )
}

export default App