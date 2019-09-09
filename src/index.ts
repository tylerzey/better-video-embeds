type Params = {
  includeModestYouTubeBranding: boolean;
};

const getDailyMotion = (dirtyUrl: string) => {
  const dailyMotionRegex = /(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/g;
  const result = dailyMotionRegex.exec(dirtyUrl);

  return (
    (result &&
      result[1] &&
      `https://www.dailymotion.com/embed/video/${result[1]}`) ||
    dirtyUrl
  );
};

const getWistia = (dirtyUrl: string) => {
  const wistiaResults = dirtyUrl.split('/');
  const result = wistiaResults[wistiaResults.length - 1];

  return result ? `https://fast.wistia.net/embed/iframe/${result}` : dirtyUrl;
};

const getEmbedUrl = (dirtyUrl: string, params?: Params): string => {
  if (!dirtyUrl) return '';

  const vimeo = /vimeo.*\/(\d+)/i.exec(dirtyUrl);
  if (vimeo && vimeo[1]) {
    return `https://player.vimeo.com/video/${vimeo[1]}`;
  }

  if (dirtyUrl.includes('dailymotion') || dirtyUrl.includes('dai.ly')) {
    return getDailyMotion(dirtyUrl);
  } else if (dirtyUrl.includes('wistia')) {
    return getWistia(dirtyUrl);
  }

  const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const matchesYouTube = dirtyUrl.match(youtubeRegex);

  if (matchesYouTube && matchesYouTube[2].length === 11) {
    return `https://www.youtube.com/embed/${matchesYouTube[2]}${
      params && params.includeModestYouTubeBranding
        ? '?rel=0&showinfo=0&modestbranding=0&enablejsapi=1'
        : ''
    }`;
  }

  // fallback to just returning the link
  return dirtyUrl;
};

export default getEmbedUrl;
