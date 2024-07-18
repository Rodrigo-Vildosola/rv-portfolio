// components/custom/LoadingSpinner.tsx
import styles from '@/styles/loader.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
