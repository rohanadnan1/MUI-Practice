import {
  Navbar as Nav,
  NavContent,
  NavButton,
  ButtonsContainer,
} from "../mui-components/HeroStyles";
import { DeleteTwoTone, CommentBankTwoTone } from "@mui/icons-material";
import MapsUgcTwoToneIcon from "@mui/icons-material/MapsUgcTwoTone";

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
        <h3
          style={{
            fontWeight: "lighter",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <MapsUgcTwoToneIcon /> Explore NFT Industry
        </h3>
        <ButtonsContainer>
          <NavButton>
            <DeleteTwoTone />
          </NavButton>
          <NavButton>
            <CommentBankTwoTone />
          </NavButton>
        </ButtonsContainer>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
