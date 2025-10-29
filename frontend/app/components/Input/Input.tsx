import styles from './Input.module.css'

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string; 
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '' 
}: InputProps) {
  return (
    <input
      className={`${styles.input_field} ${className}`} // Merge classes
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}