import {
  ChatsWrapper,
  TopBox,
  InsideTopBox,
  InputBox,
  ChatsBoxWrapper,
  ChatsBox,
  ChatsHeading,
  ClearChatButton,
} from "../mui-components/ChatsStyles";
import { Box, InputBase } from "@mui/material";
import {
  MoreHoriz,
  Search,
  RateReview,
  PushPin,
  Message,
  Close,
} from "@mui/icons-material";
import { SidebarButton as SearchButton } from "../mui-components/SidebarStyles";
import { HeadingContainer, HeadingContent } from "../mui-components/MainStyles";

const Chats = () => {
  return (
    <ChatsWrapper>
      <TopBox>
        <InsideTopBox>
          <HeadingContainer>
            <HeadingContent>
              <h4
                style={{
                  fontWeight: "lighter",
                }}
              >
                Chats
              </h4>
              <h4
                style={{
                  padding: "5px",
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  fontWeight: "lighter",
                }}
              >
                23
              </h4>
            </HeadingContent>
            <MoreHoriz />
          </HeadingContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBox>
              <InputBase
                placeholder="Search chats"
                sx={{
                  fontSize: "10px",
                  color: "white",
                  paddingLeft: "10px",
                  "&::placeholder": {
                    opacity: "0.9",
                  },
                }}
              />
              <Search
                sx={{
                  fontSize: "medium",
                  opacity: "0.7",
                }}
              />
            </InputBox>
            <SearchButton
              sx={{
                backgroundColor: "#b9bd93",
                "&:hover": {
                  opacity: "0.7",
                  backgroundColor: "#b9bd93",
                },
              }}
            >
              <RateReview
                sx={{
                  fontSize: "medium",
                  color: "black",
                }}
              />
            </SearchButton>
          </Box>
        </InsideTopBox>
      </TopBox>
      <ChatsBoxWrapper>
        <ChatsHeading>
          <PushPin
            sx={{
              fontSize: "10px",
            }}
          />
          Pinned
        </ChatsHeading>
        <ChatsBox>Some Random Chats</ChatsBox>
        <ChatsBox>Some Random Chats {"(2)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(3)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(4)"}</ChatsBox>
        <ChatsHeading>
          <Message
            sx={{
              fontSize: "10px",
            }}
          />
          All
        </ChatsHeading>
        <ChatsBox>Some Random Chats</ChatsBox>
        <ChatsBox>Some Random Chats {"(2)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(3)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(4)"}</ChatsBox>
        <ChatsBox>Some Random Chats {"(5)"}</ChatsBox>
      </ChatsBoxWrapper>
      <ClearChatButton>
        <Close /> Clear all chats
      </ClearChatButton>
    </ChatsWrapper>
  );
};

export default Chats;
