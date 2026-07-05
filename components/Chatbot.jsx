'use client'

import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useEffect, useRef, useState } from 'react';

const staticResponses = {
  greeting: "Hi — I'm Dhushyandh. I can help with:",
  options: ['Skills', 'Projects', 'Education', 'Experience', 'AWS', 'Azure', 'Contact'],
};

function normalizeChatMessage(text) {
  return (text || '').trim().toLowerCase();
}

function chatIncludes(text, terms) {
  return terms.some((term) => text.includes(term));
}

function chatHasWords(text, words) {
  const tokens = text.split(/\s+/).filter(Boolean);
  return words.every((word) => tokens.includes(word));
}

function getStaticChatResponse(message) {
  const raw = normalizeChatMessage(message);

  if (chatIncludes(raw, ['hello', 'hi', 'hey'])) {
    return {
      text: staticResponses.greeting,
      options: staticResponses.options,
    };
  }
  if (chatIncludes(raw, ['who are you', 'about yourself']) || chatHasWords(raw, ['who', 'you'])) {
    return { text: "I'm Dhushyandh.", options: [] };
  }
  if (chatIncludes(raw, ['your name']) || raw === 'name') {
    return { text: 'Dhushyandh N.', options: [] };
  }
  if (chatHasWords(raw, ['skill']) || chatHasWords(raw, ['technology'])) {
    return {
      text: 'Frontend: HTML, CSS, JS, React, Tailwind; Backend: Node, Express; DB: MongoDB; Languages: Python, Java; Cloud: AWS, Azure.',
      options: [],
    };
  }
  if (chatHasWords(raw, ['project'])) {
    return { text: 'Projects: SmartMart; Portfolio Website; Voting System; Gemini Clone.', options: [] };
  }
  if (chatHasWords(raw, ['education']) || chatHasWords(raw, ['college'])) {
    return { text: 'I am currently pursuing B.E. — Computer Science Engineering.', options: [] };
  }
  if (chatHasWords(raw, ['experience']) || chatHasWords(raw, ['internship'])) {
    return { text: 'Experience: MERN stack, backend APIs, DB integration, cloud.', options: [] };
  }
  if (chatHasWords(raw, ['contact'])) {
    return {
      text: 'Contact: GitHub: https://github.com/dhushyandh | LinkedIn: https://linkedin.com/in/dhushyandh | Portfolio: https://dhushyandh.me',
      options: [],
    };
  }
  if (chatIncludes(raw, ['resume'])) {
    return { text: 'Resume available for download on the portfolio page.', options: [] };
  }
  return {
    text: 'Ask about: Skills, Projects, Education, Experience, AWS, Azure, or Contact.',
    options: [],
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          from: 'bot',
          text: 'Hi there! Ask me about Dhushyandh’s skills, projects, education, experience, AWS, Azure, or contact.',
        },
      ]);
      setOptions(staticResponses.options);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function appendMessage(text, from = 'bot') {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, from, text },
    ]);
  }

  function renderOptions(optionList) {
    setOptions(optionList);
  }

  async function sendMessage(optMessage) {
    const msg = (optMessage || inputValue || '').trim();
    if (!msg) return;

    appendMessage(msg, 'user');
    setInputValue('');
    setOptions([]);

    try {
      const apiUrl = 'https://chatbot-xhqr.onrender.com/chat';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) {
        throw new Error(`Chat API returned ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const resp = data.response;

      if (!resp) {
        appendMessage('No response from server', 'bot');
      } else if (typeof resp === 'string') {
        appendMessage(resp, 'bot');
      } else if (typeof resp === 'object') {
        appendMessage(resp.text || '', 'bot');
        if (Array.isArray(resp.options) && resp.options.length) {
          renderOptions(resp.options);
        }
      } else {
        appendMessage(String(resp), 'bot');
      }
    } catch (err) {
      console.error('Chat error', err);
      appendMessage(`Chat server unavailable (${err?.message || 'unknown error'}). Using local fallback.`, 'bot');
      const fallbackResp = getStaticChatResponse(msg);
      appendMessage(fallbackResp.text, 'bot');
      if (Array.isArray(fallbackResp.options) && fallbackResp.options.length) {
        renderOptions(fallbackResp.options);
      }
    }
  }

  function handleClear() {
    setMessages([]);
    setOptions([]);
    setInputValue('');
  }

  return (
    <>
      <div
        id="chat-widget"
        className={`fixed right-6 bottom-24 w-80 md:w-96 z-50 ${isOpen ? '' : 'hidden'}`}
      >
        <div
          id="chat-window"
          className="shadow-lg rounded-xl overflow-hidden flex flex-col h-96 bg-white text-black"
          style={{ width: '100%' }}
        >
          <div
            className="flex items-center justify-between px-3 py-3"
            style={{ background: 'linear-gradient(90deg,#b820e6,#7b20e6)' }}
          >
            <div className="flex items-center gap-3">
              <button
                id="chat-back"
                type="button"
                aria-label="Back"
                className="text-white text-xl"
                onClick={() => setIsOpen(false)}
              >
                ‹
              </button>
              <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={assets.profile_img}
                  alt="Dhushy"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <div className="text-sm font-semibold">AI Assistant</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="chat-clear"
                type="button"
                aria-label="Clear chat"
                className="text-white bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-[0.7rem]"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                id="chat-close"
                type="button"
                aria-label="Close chat"
                className="text-white bg-white/20 hover:bg-white/30 px-2 py-1 rounded"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>

          <div id="chat-box" className="p-3 overflow-y-auto flex-1 space-y-3 bg-[#f6f6f8] text-black">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.from === 'user' ? 'flex justify-end' : 'flex justify-start'}
              >
                <div
                  className={
                    message.from === 'user'
                      ? 'inline-block px-3 py-2 rounded-full text-sm text-white'
                      : 'inline-block max-w-full bg-white rounded-xl p-3 shadow-sm text-sm text-gray-800'
                  }
                  style={
                    message.from === 'user'
                      ? { background: 'linear-gradient(90deg,#b820e6,#7b20e6)' }
                      : undefined
                  }
                  dangerouslySetInnerHTML={
                    message.from === 'user'
                      ? undefined
                      : { __html: message.text.replace(/\n/g, '<br>') }
                  }
                >
                  {message.from === 'user' ? message.text : null}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-3 bg-white border-t">
            <div className="flex items-center gap-2">
              <input
                id="chat-input"
                type="text"
                placeholder="Send a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                id="chat-send"
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#b820e6] to-[#7b20e6] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-95"
                onClick={() => sendMessage()}
              >
                Send
              </button>
            </div>
            {options.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
                    onClick={() => sendMessage(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          id="chat-floating-close"
          type="button"
          aria-label="Close widget"
          className="absolute -bottom-20 right-0 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
          style={{ background: 'linear-gradient(90deg,#b820e6,#7b20e6)', color: 'white' }}
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      <button
        id="chat-toggle"
        type="button"
        aria-label="Open chat"
        className={`fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        style={{ background: 'linear-gradient(90deg,#b820e6,#7b20e6)', color: 'white' }}
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m2 9l-5-5H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-3z" />
        </svg>
      </button>
    </>
  );
}
