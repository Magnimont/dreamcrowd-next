"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function GeminiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulating API call to Gemini
    setTimeout(() => {
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: `This is a simulated response from Gemini to: "${input}"`
      }
      setMessages(prevMessages => [...prevMessages, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-4">Gemini Chat</h1>
      <div className="flex-grow mb-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex items-start mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`flex items-start space-x-2 ${
                message.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
              }`}
            >
              <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                {message.role === 'user' ? (
                  <User className="h-6 w-6 text-white" />
                ) : (
                  <Bot className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                )}
              </div>
              <div 
                className={`p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center justify-start mb-4">
            <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              Gemini is thinking...
            </div>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-grow"
        />
        <Button onClick={handleSend} disabled={isLoading}>
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  )
}