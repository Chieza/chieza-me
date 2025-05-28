import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  /** Tailwind max-width class, e.g. 'max-w-md' or 'max-w-[440px]' */
  maxWidth?: string
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-md',
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 bg-opacity-50 z-50 flex items-center justify-center p-8"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div
        className={classNames(
          'relative bg-neutral-900 shadow-4xl w-full rounded-lg p-8 border border-neutral-700',
          maxWidth
        )}
      >
        {/* Close “X” */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-white/64 text-4xl cursor-pointer hover:text-white/100 transition-all duration-150"
          aria-label="Close"
        >
          ×
        </button>

        {children}
      </div>
    </div>,
    document.body
  )
}
