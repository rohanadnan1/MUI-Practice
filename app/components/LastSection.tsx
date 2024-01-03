import {
  LastSectionWrapper,
  TopBox as TP,
  BoxWrapper,
  Box as B,
  LastBox,
} from "../mui-components/LastSectionStyles";
import { TopBox } from "../mui-components/ChatsStyles";
import { Close, MoreHoriz } from "@mui/icons-material";
import { HeadingContainer, HeadingContent } from "../mui-components/MainStyles";

const LastSection = () => {
  return (
    <LastSectionWrapper>
      <TP>
        <Close
          sx={{
            textAlign: "end",
            cursor: "pointer",
          }}
        />
      </TP>
      <HeadingContainer>
        <HeadingContent>
          <h4
            style={{
              fontWeight: "lighter",
            }}
          >
            Capabillities
          </h4>
        </HeadingContent>
        <MoreHoriz />
      </HeadingContainer>
      <BoxWrapper>
        <B></B>
        <B></B>
      </BoxWrapper>
      <HeadingContainer>
        <HeadingContent>
          <h4
            style={{
              fontWeight: "lighter",
            }}
          >
            Limitations
          </h4>
        </HeadingContent>
        <MoreHoriz />
      </HeadingContainer>
      <BoxWrapper>
        <B></B>
        <B></B>
      </BoxWrapper>
      <LastBox></LastBox>
    </LastSectionWrapper>
  );
};

export default LastSection;
