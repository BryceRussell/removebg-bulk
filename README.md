# Remove Background Bulk

Remove the background from your images in bulk

- Free
- Bulk/Automatic
- Easy to use
- 100% safe

> [!NOTE]  
> Powered by [`@imgly/background-removal`](https://github.com/imgly/background-removal-js)

# Why is it slower than other tools?

- All image processing happens on the client in your browser
- The very first image has to wait for the (80mb) model to download/initialize
- If an image is being processed and more images are uploaded, the image must finish processing before starting on the newly uploaded images (don't spam the upload!)