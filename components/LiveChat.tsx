"use client"

import { useState, useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import { database } from '@/lib/firebase'
import { ref, push, onChildAdded, DataSnapshot } from 'firebase/database'

interface Message {
  id: string
  text: string
  userId: string
  username: string
}

export function LiveChat() {
  const { user } = useUser()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (user) {
      const messagesRef = ref(database, 'messages')
      const unsubscribe = onChildAdded(messagesRef, (snapshot: DataSnapshot) => {
        const message = snapshot.val()
        setMessages((prev) => [...prev, { id: snapshot.key as string, ...message }])
      })

      return () => {
        unsubscribe()
      }
    }
  }, [user])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() && user) {
      const messagesRef = ref(database, 'messages')
      await push(messagesRef, {
        text: newMessage,
        userId: user.id,
        username: user.username || user.firstName || 'Anonymous'
      })
      setNewMessage('')
    }
  }

  if (!user) {
    return <div>Please sign in to use the chat.</div>
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="h-96 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-2 ${
              message.userId === user.id ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.userId !== user.id && (
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                {message.username[0]}
              </div>
            )}
            <div
              className={`p-2 rounded-lg ${
                message.userId === user.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700'
              }`}
            >
              <p className="text-sm font-medium">{message.username}</p>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow bg-gray-700 text-white p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  )
}