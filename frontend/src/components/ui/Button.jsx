function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'w-full py-3 px-6 rounded-full font-medium text-sm transition-colors'

  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white',
    outline: 'border border-text-primary text-text-primary hover:bg-surface-alt',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
