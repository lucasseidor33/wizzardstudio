"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import magicBall from "../../../public/img/ball.png"
import dynamic from "next/dynamic";

export default function FlowiseWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
  }
  const BubbleChat = dynamic(
    () => import("flowise-embed-react").then(mod => mod.BubbleChat),
    { ssr: false }
  );
  return (
    <>
     
      
   

       
   
    <BubbleChat
     chatflowid="e28c6886-64d3-46ad-a040-4a91a3e8ff53"
            apiHost="https://daianaflowdev.seidoranalytics.com"
    chatflowConfig={{
        /* Chatflow Config */
    }}
    observersConfig={{
        /* Observers Config */
    }}
    theme={{    
        button: {
            backgroundColor: '#8897b7',
            right: 20,
            bottom: 30,
            size:70,
            dragAndDrop: true,
            iconColor: 'white',

            customIconSrc: 'https://github.com/lucasseidor33/wizzardstudio/blob/main/public/img/ChatGPT%20Image%2025%20abr%202025,%2009_32_09%20p.m..png?raw=true',
            autoWindowOpen: {
                autoOpen: false,
                openDelay: 2,
                autoOpenOnMobile: false
            }
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Your Wizzard assistant !',
            tooltipBackgroundColor: 'black',
            tooltipTextColor: 'white',
            tooltipFontSize: 16
        },
        disclaimer: {
            title: 'Disclaimer',
            message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
            textColor: 'black',
            buttonColor: '#3b82f6',
            buttonText: 'Start Chatting',
            buttonTextColor: 'white',
            blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'white'
        },
        customCSS: ``,
        chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Wizzard assistant',
            titleAvatarSrc: 'https://github.com/lucasseidor33/wizzardstudio/blob/main/public/img/ChatGPT%20Image%2025%20abr%202025,%2009_32_09%20p.m..png?raw=true',
            welcomeMessage: 'Hello! This is custom welcome message',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            backgroundImage: 'enter image path or link',
            height: 500,
            width: 400,
            fontSize: 15,
            starterPrompts: [
                "What is a bot?",
                "Who are you?"
            ],
            starterPromptFontSize: 15,
            clearChatOnReload: false,
            sourceDocsTitle: 'Sources:',
            renderHTML: true,
            botMessage: {
                backgroundColor: '#f7f8ff',
                textColor: '#303235',
                showAvatar: true,
                avatarSrc: 'https://github.com/lucasseidor33/wizzardstudio/blob/main/public/img/ChatGPT%20Image%2025%20abr%202025,%2009_32_09%20p.m..png?raw=true'
            },
            userMessage: {
                backgroundColor: '#3B81F6',
                textColor: '#232426',
                showAvatar: true,
                avatarSrc: 'https://github.com/lucasseidor33/wizzardstudio/blob/main/public/img/logo.png?raw=true'
            },
            textInput: {
                placeholder: 'Type your question',
                backgroundColor: '#ffffff',
                textColor: '#303235',
                sendButtonColor: '#3B81F6',
                maxChars: 50,
                maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                autoFocus: true,
                sendMessageSound: true,
                sendSoundLocation: 'send_message.mp3',
                receiveMessageSound: true,
          //     receiveSoundLocation: 'receive_message.mp3'
            },
            feedback: {
                color: '#303235'
            },
            dateTimeToggle: {
                date: true,
                time: true
            },
            footer: {
                textColor: '#303235',
                text: 'Powered by',
                company: 'Magic',
                companyLink: 'https://flowiseai.com'
            }
        }
    }
    }
    />

    </>
  )
}
