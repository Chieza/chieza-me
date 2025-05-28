import Modal from '../common/Modal'
import CopyButton from '../common/CopyButton'
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import { AiFillLinkedin } from 'react-icons/ai'

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const contacts = [
    {
      Icon: AiFillLinkedin,
      label: 'LinkedIn',
      value: 'https://linkedin.com/in/bruno-chieza',
      href: 'https://linkedin.com/in/bruno-chieza',
    },
    {
      Icon: SiGmail,
      label: 'Gmail',
      value: 'brunochiezac@gmail.com',
      href: 'mailto:brunochiezac@gmail.com',
    },
    {
      Icon: SiWhatsapp,
      label: 'WhatsApp',
      value: '+5528999041181',
      href: 'https://wa.me/+5528999041181?text=Hi,%20Lets%20chat!',
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[440px]">
      <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach me in any of the options below, clicking or copying any:
      </p>

      <div className="space-y-4">
        {contacts.map(({ Icon, label, value, href }) => (
          <div key={label} className="flex items-center justify-between">
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center text-white hover:underline"
            >
              <Icon className="h-6 w-6 mr-2" />
              {label}
            </a>
            <CopyButton value={value} />
          </div>
        ))}
      </div>
    </Modal>
  )
}
