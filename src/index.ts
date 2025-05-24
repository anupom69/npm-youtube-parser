import { fetch } from 'undici';
import { parseStringPromise } from 'xml2js';

export interface VideoEntry {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
}

export async function getLatestVideos(channelId: string): Promise<VideoEntry[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(feedUrl);

  if (!res.ok) {
    throw new Error(`Failed to fetch feed: ${res.statusText}`);
  }

  const xml = await res.text();
  const parsed = await parseStringPromise(xml);
  const entries = parsed.feed.entry;

  if (!entries || entries.length === 0) return [];

  return entries.map((entry: any): VideoEntry => ({
    id: entry['yt:videoId'][0],
    title: entry.title[0],
    link: entry.link[0].$.href,
    thumbnail: entry['media:group'][0]['media:thumbnail'][0].$.url,
  }));
}
