import { LinkTag } from "../ui-kit/LinkTag/LinkTag";
import { InfoTag } from "./InfoTag.props";

const InfoTag = ({
  type = "sm",
  color = "transparent",
  href,
  className = '',
  children,
}: InfoTag): JSX.Element => {

  return (
    <div className={`infoTag
                      infoTag_type_${type}
                      infoTag_color_${color}
                      ${className}`}
    >
      {href ?
            <LinkTag href={href} className='infoTag__link'>
              {children}
            </LinkTag>
            :
            <>
              {children}
            </>
      }
    </div>
  );

};

export { InfoTag };
