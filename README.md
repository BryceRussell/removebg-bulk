### https://removebg-bulk.netlify.app/

# Remove Background Bulk

Remove the background from your images in bulk for free

- Free
- Bulk/Automatic
- Easy to use
- 100% safe
 
> Powered by [`@imgly/background-removal`](https://github.com/imgly/background-removal-js)

# Hosting

**locally**: (Fastest)
- Clone project and install depencencies
- Use the command `pnpm build` on Linux or `pnpm build:windows` for Windows
- Use the command `pnpm preview` to run a local server for viewing and using the tool

**Netlify**:
- Deploy the repo to Netlify, everything should already be setup

**Other**:
- [Astro Deployment Guides](https://docs.astro.build/en/guides/deploy/)

# Why is it slower than other tools?

- All image processing happens on the client in your browser
- The very first image has to wait for the 80mb model to download/initialize
- If an image is being processed and more images are uploaded, the image must finish processing before starting on the newly uploaded images (don't spam the upload!)
