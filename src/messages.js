const messages = [
  {
    id: '1',
    message_parts: [{ body: 'message_1', type: 'text' }],
    thread_id: null
  },
  {
    id: '2',
    message_parts: [{ body: 'message_1_1', type: 'text' }],
    thread_id: 1
  },
  {
    id: '3',
    message_parts: [{ body: 'message_1_2', type: 'text' }],
    thread_id: 1
  },
  {
    id: '4',
    message_parts: [{ body: 'message_2', type: 'text' }],
    thread_id: null
  },
  {
    id: '5',
    message_parts: [{ body: 'message_2_1', type: 'text' }],
    thread_id: 4
  }
];

const groupedMessages = {};
const parnetMessages = messages.fitler(message => message.thread_id == null);
parnetMessages.forEach(parent_message => {
  const { id } = parent_message;
  const subThreads = messages.filter(message => message.thread_id === id);
  groupedMessages[id] = { ...parent_message, sub_threads: subThreads };
});

console.log(groupedMessages);
