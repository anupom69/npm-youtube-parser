"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestVideos = getLatestVideos;
const undici_1 = require("undici");
const xml2js_1 = require("xml2js");
async function getLatestVideos(channelId) {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const res = await (0, undici_1.fetch)(feedUrl);
    if (!res.ok) {
        throw new Error(`Failed to fetch feed: ${res.statusText}`);
    }
    const xml = await res.text();
    const parsed = await (0, xml2js_1.parseStringPromise)(xml);
    const entries = parsed.feed.entry;
    if (!entries || entries.length === 0)
        return [];
    return entries.map((entry) => ({
        id: entry['yt:videoId'][0],
        title: entry.title[0],
        link: entry.link[0].$.href,
        thumbnail: entry['media:group'][0]['media:thumbnail'][0].$.url,
    }));
}
