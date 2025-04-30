const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function generatePdf(steps, testName) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const now = new Date();
  const timestamp = `${String(now.getDate()).padStart(2, '0')}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getFullYear()).slice(2)}_${now.getHours()}_${now.getMinutes()}`;
  const fileName = `${testName}_${timestamp}.pdf`;
  const outputPath = path.join(__dirname, 'Results', fileName);

  for (const step of steps) {
    const page = pdfDoc.addPage([595, 842]); // A4 size
    page.drawText(step.description, {
      x: 50,
      y: 800,
      size: 14,
      font,
      color: rgb(0, 0, 0),
    });

    const imageBytes = fs.readFileSync(step.screenshotPath);
    const image = await pdfDoc.embedPng(imageBytes);
    const dims = image.scale(0.5);

    page.drawImage(image, {
      x: 50,
      y: 300,
      width: dims.width,
      height: dims.height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
}

module.exports = { generatePdf };