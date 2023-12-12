import React from 'react'
import '../App.css'
export default function Contact() {

  return (
    <div className='m-0 bg-gray-700 py-10 px-48 flex justify-evenly'>
      <a  href="https://github.com/AchyuthPRao" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-github text-white ikon"></i>
     <p className='text-sm text-center text-white sm:text-lg mx-1 sm:mx-0'>Github</p>
      </a>
      <a  href="https://www.linkedin.com/in/achyuth-p-rao/" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-linkedin text-white ikon "></i>
      <p className='text-sm text-center text-white sm:text-lg mx-1 sm:mx-0'>LinkedIn</p>
      </a>
      <a  href="https://mail.google.com/mail/u/0/#inbox?compose=XBcJlDLZZWcfPgCqDkCLZwWtkQcvvQdpssrQSwLtZNpczQQgJcBtlkXPtVKlwBhjZdrCsXppMHBdNXLl" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-envelope-fill text-white ikon"></i>
      <p className='text-sm text-center text-white sm:text-lg mx-1 sm:mx-0'>Gmail</p>
      </a>
    </div>
  )
}
