// app/page.tsx

'use client';

import Image from "next/image";
import Logo from "./public/assets/Logo/dynatheme.webp";
import Button from "./components/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
    console.log("Login clicked");
  };

  const handleSignup = () => {
    router.push('/signup');
    console.log("Sign Up clicked");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-gray-900">
      {/* Logo Section with Animation */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={Logo}
          alt="Company Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </motion.div>
      {/* Welcome Text with Animation */}
      <motion.h1
        className="text-4xl font-semibold text-white mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to the CMS Home Page
      </motion.h1>
      {/* Optional Description with Animation */}
      <motion.p
        className="text-lg text-gray-400 text-center max-w-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Manage your content easily and efficiently with our CMS.
      </motion.p>
      {/* Login and Signup Buttons */}
      <div className="flex space-x-4">
        <Button label="Login" onClick={handleLogin} variant="primary" />
        <Button label="Sign Up" onClick={handleSignup} variant="secondary" />
      </div>
    </div>
  );
}
