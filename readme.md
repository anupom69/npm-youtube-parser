# yt-channel-feed

Fetch and parse the latest YouTube videos from any channel using its **channel ID** and the public XML feed.

> Lightweight. No API key needed.

---

## 🚀 Installation

```bash
npm install yt-channel-feed
# or
pnpm add yt-channel-feed
```

---

## 📦 Usage

```ts
import { getLatestVideos } from 'yt-channel-feed';

const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'; // replace with your channel ID

const videos = await getLatestVideos(CHANNEL_ID);

console.log(videos);
/*
[
  {
    id: 'abc123',
    title: 'Latest Upload',
    link: 'https://www.youtube.com/watch?v=abc123',
    thumbnail: 'https://i.ytimg.com/vi/abc123/default.jpg',
  },
  ...
]
*/
```

---

## 🔧 API

### `getLatestVideos(channelId: string): Promise<VideoEntry[]>`

Fetches the latest videos from the channel.

**VideoEntry structure:**

```ts
type VideoEntry = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
}
```

---

## ❓ How to Get a YouTube Channel ID

If you have a YouTube channel URL but not the channel ID, use this tool:

👉 [commentpicker.com/youtube-channel-id.php](https://commentpicker.com/youtube-channel-id.php)

Paste any YouTube channel URL (username, custom handle, or legacy URL) into the tool to get the corresponding channel ID.

Example:

```
Input:  https://www.youtube.com/@GoogleDevelopers
Output: UC_x5XG1OV2P6uZZ5FSM9Ttw
```

Use this ID in the API call.

---

## 📄 License

MIT
