import { describe, it, expect } from "vitest";
import { validateCv, CV_MAX_BYTES } from "./cv";

describe("validateCv", () => {
  it("passes for a valid PDF file with leading %PDF- bytes", () => {
    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34]); // %PDF-1.4
    const result = validateCv({ name: "my-resume.pdf", size: pdfBytes.length }, pdfBytes);
    expect(result).toEqual({
      ok: true,
      mime: "application/pdf",
      filename: "my-resume.pdf",
    });
  });

  it("passes for a valid DOCX file with leading 50 4B 03 04 bytes", () => {
    const docxBytes = new Uint8Array([0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x06, 0x00]);
    const result = validateCv({ name: "resume.docx", size: docxBytes.length }, docxBytes);
    expect(result).toEqual({
      ok: true,
      mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      filename: "resume.docx",
    });
  });

  it("passes for a valid DOC file with leading D0 CF 11 E0 A1 B1 1A E1 bytes", () => {
    const docBytes = new Uint8Array([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
    const result = validateCv({ name: "old_resume.doc", size: docBytes.length }, docBytes);
    expect(result).toEqual({
      ok: true,
      mime: "application/msword",
      filename: "old_resume.doc",
    });
  });

  it("fails for a .pdf file whose bytes are plain text", () => {
    const textBytes = new Uint8Array(Buffer.from("This is plain text and not a PDF file"));
    const result = validateCv({ name: "fake.pdf", size: textBytes.length }, textBytes);
    expect(result).toEqual({
      ok: false,
      error: "The CV file does not look like a valid PDF, DOC or DOCX document.",
    });
  });

  it("fails for an unsupported extension like .exe", () => {
    const exeBytes = new Uint8Array([0x4d, 0x5a, 0x90, 0x00]);
    const result = validateCv({ name: "malware.exe", size: exeBytes.length }, exeBytes);
    expect(result).toEqual({
      ok: false,
      error: "Please upload your CV as a PDF, DOC or DOCX file.",
    });
  });

  it("fails when file size is 0", () => {
    const emptyBytes = new Uint8Array([]);
    const result = validateCv({ name: "empty.pdf", size: 0 }, emptyBytes);
    expect(result).toEqual({
      ok: false,
      error: "The CV file is empty.",
    });
  });

  it("fails when file size exceeds CV_MAX_BYTES", () => {
    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]);
    const oversized = CV_MAX_BYTES + 1;
    const result = validateCv({ name: "huge.pdf", size: oversized }, pdfBytes);
    expect(result).toEqual({
      ok: false,
      error: "The CV file is too large. Maximum size is 3 MB.",
    });
  });

  it("sanitizes filenames with paths and invalid characters", () => {
    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]);
    const result = validateCv(
      { name: "../../evil name?.pdf", size: pdfBytes.length },
      pdfBytes
    );
    expect(result).toEqual({
      ok: true,
      mime: "application/pdf",
      filename: "evil name_.pdf",
    });
  });

  it("handles extension-only filename .pdf returning cv.pdf", () => {
    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d]);
    const result = validateCv({ name: ".pdf", size: pdfBytes.length }, pdfBytes);
    expect(result).toEqual({
      ok: true,
      mime: "application/pdf",
      filename: "cv.pdf",
    });
  });
});
