import { getLatestVideos } from '../dist/index';

(async () => {
  const channelId = 'UCsBjURrPoezykLs9EqgamOA'; // fireship channel id
  const videos = await getLatestVideos(channelId);
  console.log(videos[0]);
})();
