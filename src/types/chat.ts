
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface UserInfo {
  name: string;
  email: string;
}

export type ChatStep = 'intro' | 'name' | 'email' | 'chat';
