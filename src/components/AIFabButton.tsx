import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AIFabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FAB Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-elegant glow-effect gradient-accent animate-float hover:scale-110 transition-transform duration-300 z-40"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* AI Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 md:w-96 h-[500px] bg-card border border-border rounded-2xl shadow-elegant z-40 animate-fade-in flex flex-col">
          <div className="gradient-primary p-4 rounded-t-2xl">
            <h3 className="text-white font-semibold text-lg">AI Assistant</h3>
            <p className="text-white/80 text-sm">How can I help you today?</p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! I'm your AI assistant. Feel free to ask me anything about Settlo Tech's services, portfolio, or general inquiries.</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-primary">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIFabButton;
