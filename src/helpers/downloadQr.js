export function downloadCanvasAsPng(canvasElement, fileName = "qr-code.png") {
  if (!canvasElement) return;

  const pngUrl = canvasElement
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = fileName;
  downloadLink.click();
}