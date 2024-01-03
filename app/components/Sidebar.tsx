import {
  SidebarWrapper,
  Box1,
  Box2,
  LogoContainer,
  SidebarButton,
} from "../mui-components/SidebarStyles";
import { Stack } from "@mui/material";
import {
  Settings,
  InsertComment,
  Home,
  WbSunny,
  Logout,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Box1>
        <LogoContainer>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src="https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png"
            alt="logo"
          />
        </LogoContainer>
        <Stack>
          <SidebarButton>
            <Settings
              sx={{
                fontSize: "medium",
                opacity: "0.7",
              }}
            />
          </SidebarButton>
          <SidebarButton>
            <InsertComment
              sx={{
                fontSize: "medium",
                opacity: "0.7",
              }}
            />
          </SidebarButton>
          <SidebarButton>
            <Home
              sx={{
                fontSize: "medium",
                opacity: "0.7",
              }}
            />
          </SidebarButton>
          <SidebarButton>
            <Settings
              sx={{
                fontSize: "medium",
                opacity: "0.7",
              }}
            />
          </SidebarButton>
        </Stack>
      </Box1>
      <Box2>
        <WbSunny
          sx={{
            color: "yellow",
          }}
        />
        <SidebarButton>
          <Logout
            sx={{
              opacity: "0.8",
            }}
          />
        </SidebarButton>
      </Box2>
    </SidebarWrapper>
  );
};

export default Sidebar;
