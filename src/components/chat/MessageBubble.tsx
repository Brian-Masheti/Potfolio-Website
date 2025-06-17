
import { User, Bot } from 'lucide-react';
import { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md`}>
        {message.sender === 'bot' && (
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
        )}
        <div
          className={`px-4 py-2 rounded-2xl ${
            message.sender === 'user'
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
              : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white'
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        {message.sender === 'user' && (
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
