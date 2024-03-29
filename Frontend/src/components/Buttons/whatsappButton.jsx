import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Logo from '../../assets/Logo.png';

export default function App() {
  return (
    <FloatingWhatsApp
      phoneNumber="+923705004568"
      accountName="A1 24 HOUR"
      avatar={Logo } // Pass the imported local image as the avatar
      statusMessage="Typically replies within minutes"
      chatMessage="Hello there! 🤝 \nHow can we help?"
    />
  );
}
