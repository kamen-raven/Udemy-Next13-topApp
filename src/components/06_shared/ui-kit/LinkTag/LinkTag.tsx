import { LinkTagProps } from './LinkTag.props';
import styles from "./LinkTag.module.scss";



const LinkTag = ({ href, children, className = '' }: LinkTagProps): JSX.Element => {
  return (
    <a className={`${styles.link} ${className}`}
      href={href}>
      {children}
    </a>
  );
};

export { LinkTag };
