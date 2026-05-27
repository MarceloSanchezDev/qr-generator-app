export function downloadCanvasAsPng(canvasElement, fileName = "codigo-qr.png") {
  if (!canvasElement) return;

  const pngUrl = canvasElement.toDataURL("image/png");

  const downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = fileName;
  downloadLink.click();
}