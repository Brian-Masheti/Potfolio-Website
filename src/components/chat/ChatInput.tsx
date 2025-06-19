
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

interface ChatInputProps {
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  onSendMessage: () => void;
  disabled: boolean;
}

const ChatInput = ({ currentMessage, setCurrentMessage, onSendMessage, disabled }: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="flex space-x-2 flex-shrink-0 items-end">
      <Textarea
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message... (Shift+Enter for new line)"
        disabled={disabled}
        className="w-full max-w-full flex-1 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-base sm:text-base text-gray-700 dark:text-gray-300 placeholder:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 min-h-[100px] h-24 resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent break-words overflow-auto"
        rows={4}
        // Grammarly integration attributes
        data-gramm="true"
        data-gramm_editor="true"
        data-enable-grammarly="true"
        spellCheck="true"
        // Additional accessibility and UX attributes
        aria-label="Type your message"
        autoComplete="off"
        autoCorrect="on"
        autoCapitalize="sentences"
        style={{
          // Auto-resize based on content
          height: 'auto',
          minHeight: '40px',
          maxHeight: '120px',
          overflowY: currentMessage.split('\n').length > 3 ? 'auto' : 'hidden'
        }}
        onInput={(e) => {
          // Auto-resize textarea
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto';
          target.style.height = Math.min(target.scrollHeight, 120) + 'px';
        }}
      />
      <Button
        onClick={onSendMessage}
        disabled={!currentMessage.trim() || disabled}
        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 mb-1"
        size="icon"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
