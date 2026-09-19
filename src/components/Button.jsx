import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  href,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  disabled = false,
  ...props
}) {
  const baseClasses = "group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#4F8CFF] hover:bg-[#3A7BF5] dark:bg-violet-600 dark:hover:bg-violet-500 text-white shadow-sm hover:shadow-[0_4px_16px_rgba(79,140,255,0.3)] dark:hover:shadow-violet-600/25 hover:-translate-y-0.5",
    secondary: "border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] text-[#172033] dark:text-[#F5F5F7] hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 hover:bg-[#EFF7FF] dark:hover:bg-[#171722] hover:text-[#4F8CFF] dark:hover:text-[#F5F5F7] hover:-translate-y-0.5 shadow-sm dark:shadow-none",
    outline: "border border-[#4F8CFF]/40 dark:border-violet-500/40 text-[#4F8CFF] dark:text-violet-400 hover:bg-[#4F8CFF]/10 dark:hover:bg-violet-500/10 hover:border-[#4F8CFF]/70 dark:hover:border-violet-500/70 hover:-translate-y-0.5"
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
        {...props}
      >
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}
