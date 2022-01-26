import Image from "next/image";
import styled from "styled-components";
import { Link } from "./Link";

const Header = () => {
  return (
    <StyledHeader>
      <div className="[ Header ] [ Content ]">
        <Link href="/" className="[ Header__logoLink ] [ Color_blue ]">
          <Image
            src="/YS_logo.svg"
            width={200}
            height={100}
            alt="logo"
            className="[ Header__logo ]"
          />
        </Link>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(255, 224, 61, 1);

  .Header {
    display: flex;
    justify-content: flex-start;
  }

  .Header__logoLink {
    line-height: 0;
  }
`;

export { Header };
