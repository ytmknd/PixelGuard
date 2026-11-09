# PixelGuard

PixelGuard is a browser-based tool for applying mosaic redaction and non-destructive cropping to images and PDFs.

Public site: https://ytmknd.github.io/PixelGuard

## Features

- Open PNG, JPEG, WebP, and PDF files.
- Drag and drop files into the upload area.
- Paste images or PDFs from the clipboard with Ctrl+V (Cmd+V on macOS) or the **Paste from clipboard** button.
- Copy the edited current page to the clipboard as a PNG with the **Copy to clipboard** button or Ctrl+C (Cmd+C).
- Select an area and apply a mosaic effect.
- Crop images and PDF pages with a PowerPoint-like crop UI.
- Restore previously cropped-out areas by reopening crop mode and expanding the crop handles.
- Export the edited result as a PNG image or PDF.
- Show Japanese messages in Japanese browser environments and English messages otherwise.

## Usage

1. Open https://ytmknd.github.io/PixelGuard.
2. Choose or drag and drop an image or PDF file.
3. Drag on the preview to select an area for mosaic redaction.
4. Use **Crop** to adjust the visible area with the black crop handles.
5. Choose the output format and download the edited file.

## GitHub Pages

This app is designed to run as a static site on GitHub Pages. The published URL is:

https://ytmknd.github.io/PixelGuard

## Notes

- Processing runs in the browser.
- PDF loading and PDF export use browser libraries loaded from CDN, so PDF features require an internet connection.
- Exported PDFs are generated from rendered page images.

## License

MIT License. See [LICENSE](LICENSE).
