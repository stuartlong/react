import { Avatar, Chat, Divider } from '@stardust-ui/react'
import * as React from 'react'

const janeAvatar = {
  image: 'public/images/avatar/small/ade.jpg',
  status: { color: 'green', icon: 'check' },
}

const items = [
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Hello" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: 'top',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="I'm back!" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: true,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Thanks for waiting!"
          author="John Doe"
          timestamp="Yesterday, 10:15 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
    attached: 'bottom',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: <Chat.Message content="Hi" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />,
    },
    attached: 'top',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="No problem!" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: true,
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="What's up?" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: 'bottom',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Would you like to grab a lunch?"
          author="John Doe"
          timestamp="Yesterday, 10:16 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message
          content="Sure! Let's try the new place downtown."
          author="Jane Doe"
          timestamp="Yesterday, 10:15 PM"
        />
      ),
    },
  },
  {
    key: Math.random(),
    children: <Divider content="Today" color="primary" important />,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Ok, let's go." author="John Doe" timestamp="Today, 11:15 PM" mine />
      ),
    },
    contentPosition: 'end',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Hello" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: 'top',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="I'm back!" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: true,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Thanks for waiting!"
          author="John Doe"
          timestamp="Yesterday, 10:15 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
    attached: 'bottom',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: <Chat.Message content="Hi" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />,
    },
    attached: 'top',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="No problem!" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: true,
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="What's up?" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: 'bottom',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Would you like to grab a lunch?"
          author="John Doe"
          timestamp="Yesterday, 10:16 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message
          content="Sure! Let's try the new place downtown."
          author="Jane Doe"
          timestamp="Yesterday, 10:15 PM"
        />
      ),
    },
  },
  {
    key: Math.random(),
    children: <Divider content="Today" color="primary" important />,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Ok, let's go." author="John Doe" timestamp="Today, 11:15 PM" mine />
      ),
    },
    contentPosition: 'end',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Hello" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: 'top',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="I'm back!" author="John Doe" timestamp="Yesterday, 10:15 PM" mine />
      ),
    },
    contentPosition: 'end',
    attached: true,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Thanks for waiting!"
          author="John Doe"
          timestamp="Yesterday, 10:15 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
    attached: 'bottom',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: <Chat.Message content="Hi" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />,
    },
    attached: 'top',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="No problem!" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: true,
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message content="What's up?" author="Jane Doe" timestamp="Yesterday, 10:15 PM" />
      ),
    },
    attached: 'bottom',
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message
          content="Would you like to grab a lunch?"
          author="John Doe"
          timestamp="Yesterday, 10:16 PM"
          mine
        />
      ),
    },
    contentPosition: 'end',
  },
  {
    key: Math.random(),
    gutter: { content: <Avatar {...janeAvatar} /> },
    message: {
      content: (
        <Chat.Message
          content="Sure! Let's try the new place downtown."
          author="Jane Doe"
          timestamp="Yesterday, 10:15 PM"
        />
      ),
    },
  },
  {
    key: Math.random(),
    children: <Divider content="Today" color="primary" important />,
  },
  {
    key: Math.random(),
    message: {
      content: (
        <Chat.Message content="Ok, let's go." author="John Doe" timestamp="Today, 11:15 PM" mine />
      ),
    },
    contentPosition: 'end',
  },
]

const ChatExample = () => <Chat items={items} />

export default ChatExample
