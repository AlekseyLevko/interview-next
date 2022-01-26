import NextLink from "next/link";

const Link = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export { Link };
