import { Edit } from "@mui/icons-material";
import {
  MessagesWrapper,
  Message,
  MessageContent,
  Image,
  EditIcon,
} from "../mui-components/HeroStyles";
const Messages = () => {
  return (
    <MessagesWrapper>
      <Message>
        <MessageContent>
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
          Hello dear kese ho{" "}
        </MessageContent>
        <EditIcon />
      </Message>
      <Message>
        <MessageContent>
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
          Hello dear{" "}
        </MessageContent>
        <EditIcon />
      </Message>
      <Message>
        <MessageContent>
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
          Hello dear I hope you're having an amazing day{" "}
        </MessageContent>
        <EditIcon />
      </Message>
      <Message>
        <MessageContent>
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" />
          Hello dear I hope you're well{" "}
        </MessageContent>
        <EditIcon />
      </Message>
    </MessagesWrapper>
  );
};

export default Messages;
