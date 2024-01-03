import { Box, InputBase } from "@mui/material";
import {KeyboardVoice, Send} from "@mui/icons-material";
import { InputBox, InputButton } from "../mui-components/HeroStyles";

const Input = () => {
    return(
        <InputBox>
                <InputBase placeholder="Enter message.." sx={{
                    fontSize: "small",
                    color: "white",
                    opacity: "0.7",
                    width: "100%",
                }}/>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    paddingRight: "20px",
                }}>
                <InputButton
                    sx={{
                        padding: "5px",
                        '&:hover': {
                            backgroundColor: '#1f7a09',
                            opacity: '0.8',
                            borderRadius: '50%',
                            color: 'white',
                        }
                    }}
                ><KeyboardVoice sx={{
                    fontSize: "20px",
                }}/></InputButton>
                <InputButton sx={{
                    backgroundColor: 'blue',
                    padding: "5px",
                    borderRadius: '7px',
                    '&:hover': {
                        backgroundColor: '#2e4ed1',
                        opacity: '0.8',
                    }
                }}><Send sx={{
                    color: "white",
                    fontSize: "20px",
                }}/></InputButton>
                </Box>
            </InputBox>
    )
}

export default Input;