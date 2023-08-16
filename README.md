# Cosmic Media Extension

Search from millions of royalty-free images and video to use in your Cosmic Bucket. Includes images from Unsplash, Pexels, and Pixabay, gifs from Giphy, video from Pexels, as well as OpenAI image generation from prompt.

## How to install

To install this extension:

1. [Log in to Cosmic](https://app.cosmicjs.com/login)
2. Go to _Project > Bucket > Extensions_.
3. Find this extension and clicking "Install".

## Service keys

The default extension uses shared keys for Unsplash, Giphy, Pexels, Pixaby, and OpenAI. Since other users using these shared keys may cause API throttling / service issues, you can update these to your own keys by going to _Extensions > Cosmic Media > Settings_, find the Query Parameters section and update the following query params to your own keys:

1. `unsplash_key` Register for a key [here](https://unsplash.com/developers).
2. `pexels_key` Register for a key [here](https://www.pexels.com/api).
3. `pixabay_key` Register for a key [here](https://pixabay.com/service/about/api)
4. `openai_key` Register for a key [here](https://platform.openai.com)
5. `giphy_key` Register for a key [here](https://developers.giphy.com)
<img width="1122" alt="query-params" src="https://github.com/cosmicjs/cosmic-media-extension/assets/1950722/61f79248-cd72-4f9f-a7f3-eb4e24d28dd7">

## Run locally

```bash
git clone https://github.com/cosmicjs/cosmic-media-extension
cd cosmic-media-template
yarn
yarn dev
```

## Features

- Next.js 13 App Directory
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## License

Licensed under the [MIT license](https://github.com/cosmicjs/media-extension/blob/main/LICENSE.md).
