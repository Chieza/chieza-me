import React, { useState } from 'react'
import classNames from 'classnames'
import { FiCopy }     from 'react-icons/fi'

export interface CopyButtonProps {
  /** The text or URL to copy to clipboard */
  value: string
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'inline-flex items-center px-4 py-2 rounded-lg cursor-pointer w-[100px] text-sm transition-all duration-150',
        copied
          ? 'bg-neutral-800 text-white'
          : 'bg-neutral-700 text-gray-200 hover:bg-neutral-600'
      )}
    >
      <FiCopy className="h-5 w-5 mr-2" />
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
