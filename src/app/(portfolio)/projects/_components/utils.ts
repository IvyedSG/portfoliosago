export const emojiCursor = () => {
    const emojis = ['🚀', '💻', '🎨', '🔧', '🌟'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    return `cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><text y="28" font-size="24">${emoji}</text></svg>'), auto]`;
  };