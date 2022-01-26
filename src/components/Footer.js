import Image from "next/image";
import styled from "styled-components";
import { Link } from "./Link";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="[ Footer ] [ Content ]">
        <Link href="/" className="[ Footer__logoLink ] [ Color_blue ]">
          <Image
            src="/YS_logo.svg"
            width={200}
            height={100}
            alt="logo"
            className="[ Footer__logo ]"
          />
        </Link>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: rgba(255, 224, 61, 1);

  .Footer {
    display: flex;
    justify-content: flex-start;
  }

  .Footer__logoLink {
    line-height: 0;
  }
`;

export { Footer };
