import { PTagProps } from './PTag.props';



const PTag = ({ size = 'md', className = '', children }: PTagProps):JSX.Element => {
  return(
    <p className={`paragraph
                  paragraph_${size}
                  ${className}` }>
      {children}
    </p>
  );
};

export { PTag };
