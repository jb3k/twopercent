import { Link } from 'react-router-dom';

const styles = {
  primary:
    'bg-pine text-white shadow-sm hover:bg-ink focus-visible:outline-pine',
  secondary:
    'border border-slate-300 bg-white text-ink hover:border-pine hover:text-pine focus-visible:outline-pine',
  accent:
    'bg-coral text-white shadow-sm hover:bg-[#c85d43] focus-visible:outline-coral',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
