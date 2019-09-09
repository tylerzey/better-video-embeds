# Better Video Embeds

Pass in a url that should be a video embed link...and get back a properly formated embed link. (Works for YouTube, Vimeo, Wistia and more!)

[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads) [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://www.npmjs.com/package/better-file-downloads)

`npm i better-file-downloader`
`yarn add better-file-downloader`

[View on NPM](https://www.npmjs.com/package/better-video-embeds)

For example:

`https://www.youtube.com/watch?v=O9ydMYA8dmw` becomes `https://www.youtube.com/embed/O9ydMYA8dmw`

The api currently supports parsing out the following embed strings:

- YouTube
- Vimeo
- Matterport
- Daily motion
- Wistia

The library works with react and is fairly lightweight in size.

You'll be converting your users dirty video links scripts into embed links that you can iframe in no time!

## Examples

```js
import getEmbedUrl from 'better-video-embeds';
const getEmbedUrl = require('better-video-embeds');

const embedLink = getEmbedUrl('https://www.youtube.com/watch?v=O9ydMYA8dmw');
```

```js
import getEmbedUrl from 'better-video-embeds';
const getEmbedUrl = require('better-video-embeds');

const embedLink = getEmbedUrl('https://www.youtube.com/watch?v=O9ydMYA8dmw', {
  includeModestYouTubeBranding: true,
});
```

```js
import React, { useState } from 'react';
import getEmbedUrl from 'better-video-embeds';

export default function example() {
  const [videoLink, setVideoLink] = useState('');

  const submit = event => {
    event.preventDefault();
    const embedLink = getEmbedUrl(videoLink);
    console.log(embedLink);
  };

  return (
    <form onSubmit={submit}>
      <input
        value={videoLink}
        type="text"
        onChange={event => setVideoLink(event.target.value)}
      />
      <button type="submit">Save!</button>
    </form>
  );
}
```
