export interface VideoEntry {
    id: string;
    title: string;
    link: string;
    thumbnail: string;
}
export declare function getLatestVideos(channelId: string): Promise<VideoEntry[]>;
