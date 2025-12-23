// src/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link'; // Import Link

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string; // Add href prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  href, // Destructure href
  ...props
}) => {
  const baseStyles = 'font-bold py-2 px-4 rounded-full transition duration-300';

  const variants = {
    primary: 'bg-bronze hover:bg-bronze/80 text-off-white',
    secondary: 'bg-transparent border border-off-white text-off-white hover:bg-off-white hover:text-charcoal-black',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className || ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
