
import { useState } from 'react';
import { Message, UserInfo, ChatStep } from '@/types/chat';
import { initializeEmailJS, sendChatMessage } from '@/utils/emailService';

export const useChatContact = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Brian's AI assistant. I'll help you get in touch with him. What would you like to discuss?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '' });
  const [step, setStep] = useState<ChatStep>('intro');
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    addMessage(currentMessage, 'user');
    const userMessage = currentMessage;
    setCurrentMessage('');

    if (step === 'intro') {
      simulateTyping(() => {
        addMessage("Great! To get started, what's your name?", 'bot');
        setStep('name');
      });
    } else if (step === 'name') {
      setUserInfo(prev => ({ ...prev, name: userMessage }));
      simulateTyping(() => {
        addMessage(`Nice to meet you, ${userMessage}! What's your email address?`, 'bot');
        setStep('email');
      });
    } else if (step === 'email') {
      setUserInfo(prev => ({ ...prev, email: userMessage }));
      simulateTyping(() => {
        addMessage("Perfect! Now you can tell me about your project or ask any questions. I'll make sure Brian gets your message!", 'bot');
        setStep('chat');
      });
    } else if (step === 'chat') {
      setIsSending(true);
      
      try {
        initializeEmailJS();
        await sendChatMessage(userInfo, userMessage, messages);

        simulateTyping(() => {
          addMessage("Message sent! Brian will get back to you soon. Feel free to send another message if you have more questions.", 'bot');
        });
      } catch (error) {
        console.error('EmailJS Error:', error);
        simulateTyping(() => {
          addMessage("Sorry, there was an issue sending your message. Please try again or contact Brian directly at savatiabrian92@gmail.com", 'bot');
        });
      } finally {
        setIsSending(false);
      }
    }
  };

  return {
    messages,
    currentMessage,
    setCurrentMessage,
    isTyping,
    isSending,
    handleSendMessage
  };
};
