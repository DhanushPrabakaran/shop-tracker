import React from 'react'

const footer = () => {
  return (
    <footer className="flex flex-row flex-wrap gap-1   justify-around bg-base-200 text-base-content p-10 bg-primary-black text-primary-white font-MintGrotesk">
  <nav
  className=' flex flex-col'>
    <h6 className="font-semibold bold">Services</h6>
    <div className="link link-hover">Branding</div>
    <div className="link link-hover">Design</div>
    <div className="link link-hover">Marketing</div>
    <div className="link link-hover">Advertisement</div>
  </nav>
  <nav
  className=' flex flex-col'>
    <h6 className="font-semibold bold">Services</h6>
    <div className="link link-hover">About us</div>
    <div className="link link-hover">Contact</div>
    <div className="link link-hover">Jobs</div>
    <div className="link link-hover">Press kit</div>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <div className="link link-hover">Terms of use</div>
    <div className="link link-hover">Privacy policy</div>
    <div className="link link-hover">Cookie policy</div>
  </nav>
  
</footer>
  )
}

export default footer
