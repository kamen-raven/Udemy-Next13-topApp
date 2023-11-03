import { ButtonProps } from './Button.props';

const Button = ({appearance, className='', children, ...props}: ButtonProps):JSX.Element => {
    return(
      <button c
          className={`button ${appearance} ${className}`}
          {...props}>
        {children}
      </button>
    );
};

export { Button };
