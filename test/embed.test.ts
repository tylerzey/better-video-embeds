import getEmbedUrl from '../src/index';

describe('it parses out embed links', () => {
  test('works for youtube', () => {
    expect(
      getEmbedUrl('https://www.youtube.com/watch?v=O9ydMYA8dmw', {
        includeModestYouTubeBranding: true,
      })
    ).toBe(
      'https://www.youtube.com/embed/O9ydMYA8dmw?rel=0&showinfo=0&modestbranding=0&enablejsapi=1'
    );
    expect(
      getEmbedUrl('https://www.youtube.com/watch?v=O9ydMYA8dmw', {
        includeModestYouTubeBranding: false,
      })
    ).toBe('https://www.youtube.com/embed/O9ydMYA8dmw');
    expect(
      getEmbedUrl(
        'https://www.youtube.com/watch?v=O9ydMYA8dmw&feature=youtu.be'
      )
    ).toBe('https://www.youtube.com/embed/O9ydMYA8dmw');
    expect(getEmbedUrl('https://youtu.be/O9ydMYA8dmw')).toBe(
      'https://www.youtube.com/embed/O9ydMYA8dmw'
    );
    expect(getEmbedUrl('https://www.youtube.com/embed/O9ydMYA8dmw')).toBe(
      'https://www.youtube.com/embed/O9ydMYA8dmw'
    );
  });
  test('works for vimeo', () => {
    expect(getEmbedUrl('https://vimeo.com/326104460')).toBe(
      'https://player.vimeo.com/video/326104460'
    );
    expect(getEmbedUrl('https://player.vimeo.com/video/326104460')).toBe(
      'https://player.vimeo.com/video/326104460'
    );
  });
  test('works for wistia', () => {
    expect(getEmbedUrl('https://fast.wistia.net/embed/iframe/awesome3')).toBe(
      'https://fast.wistia.net/embed/iframe/awesome3'
    );
    expect(getEmbedUrl('https://tylerzey.wistia.com/medias/abe3sc4')).toBe(
      'https://fast.wistia.net/embed/iframe/abe3sc4'
    );
  });
  test('works for daily motion', () => {
    expect(getEmbedUrl('https://dai.ly/x49lkdw')).toBe(
      'https://www.dailymotion.com/embed/video/x49lkdw'
    );
    expect(getEmbedUrl('https://www.dailymotion.com/embed/video/x5s5r35')).toBe(
      'https://www.dailymotion.com/embed/video/x5s5r35'
    );
  });
});
