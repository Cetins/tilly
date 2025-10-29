import styles from './ButtonOutline.module.css';

interface ButtonOutlineProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function ButtonOutline({ 
  children, 
  onClick,
  type = 'button' 
}: ButtonOutlineProps) {
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