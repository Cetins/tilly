import styles from './ButtonFill.module.css';

interface ButtonFillProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function ButtonFill({ 
  children, 
  onClick,
  type = 'button' 
}: ButtonFillProps) {
  return (
    <button 
      className={styles.btn_fill} 
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}