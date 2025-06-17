
import emailjs from '@emailjs/browser';
import { Message, UserInfo } from '@/types/chat';

export const initializeEmailJS = () => {
  emailjs.init('XznZdfoTxtXcFDNb1');
};

export const sendChatMessage = async (
  userInfo: UserInfo,
  currentMessage: string,
  messages: Message[]
) => {
  const conversationHistory = messages
    .filter(msg => msg.sender === 'user')
    .map(msg => msg.text)
    .join('\n\n');

  return await emailjs.send('service_6j4s8s4', 'template_lw7yq2x', {
    from_name: userInfo.name,
    from_email: userInfo.email,
    message: `Latest message: ${currentMessage}\n\nConversation history:\n${conversationHistory}`
  });
};
