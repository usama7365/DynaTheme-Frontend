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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // Cubic bezier for a smooth effect
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen items-center justify-center p-4 bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo Section with Enhanced Animation */}
      <motion.div
        className="mb-6"
        variants={logoVariants}
      >
        <Image
          src={Logo}
          alt="Company Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </motion.div>

      {/* Welcome Text with Staggered Animation */}
      <motion.h1
        className="text-4xl font-semibold text-white mb-4 text-center"
        variants={itemVariants}
      >
        Welcome to the CMS Home Page
      </motion.h1>

      {/* Optional Description with Staggered Animation */}
      <motion.p
        className="text-lg text-gray-400 text-center max-w-md mb-6"
        variants={itemVariants}
      >
        Manage your content easily and efficiently with our CMS.
      </motion.p>

      {/* Buttons with Entering Animation */}
      <motion.div
        className="flex space-x-4"
        variants={itemVariants}
      >
        <Button label="Login" onClick={handleLogin} variant="primary" />
        <Button label="Sign Up" onClick={handleSignup} variant="secondary" />
      </motion.div>
    </motion.div>
  );
}
