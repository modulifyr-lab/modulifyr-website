export const CV_MAX_BYTES = 3 * 1024 * 1024; // 3 MB
export const CV_ACCEPT = ".pdf,.doc,.docx";

export type CvCheck =
  | { ok: true; mime: string; filename: string }
  | { ok: false; error: string };

const MAGIC_BYTES = {
  pdf: [0x25, 0x50, 0x44, 0x46, 0x2d], // %PDF-
  docx: [0x50, 0x4b, 0x03, 0x04],
  doc: [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1],
};

const MIMES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export function validateCv(file: { name: string; size: number }, bytes: Uint8Array): CvCheck {
  if (file.size === 0) {
    return { ok: false, error: "The CV file is empty." };
  }

  if (file.size > CV_MAX_BYTES) {
    return { ok: false, error: "The CV file is too large. Maximum size is 3 MB." };
  }

  const rawName = file.name ? file.name.split(/[/\\]/).pop() || "" : "";
  const lastDotIndex = rawName.lastIndexOf(".");
  const ext = lastDotIndex !== -1 ? rawName.slice(lastDotIndex + 1).toLowerCase() : "";

  if (!["pdf", "doc", "docx"].includes(ext)) {
    return { ok: false, error: "Please upload your CV as a PDF, DOC or DOCX file." };
  }

  const expectedBytes = MAGIC_BYTES[ext as keyof typeof MAGIC_BYTES];
  let matches = bytes.length >= expectedBytes.length;
  if (matches) {
    for (let i = 0; i < expectedBytes.length; i++) {
      if (bytes[i] !== expectedBytes[i]) {
        matches = false;
        break;
      }
    }
  }

  if (!matches) {
    return { ok: false, error: "The CV file does not look like a valid PDF, DOC or DOCX document." };
  }

  const mime = MIMES[ext];

  // Clean filename: keep A-Z, a-z, 0-9, ., _, -, and space
  const cleaned = rawName.replace(/[^A-Za-z0-9._ -]/g, "_");
  const stem = lastDotIndex !== -1 ? cleaned.slice(0, lastDotIndex) : cleaned;

  let filename: string;
  if (!stem || stem.trim() === "" || stem === ".") {
    filename = `cv.${ext}`;
  } else {
    filename = cleaned.length > 100 ? cleaned.slice(0, 100) : cleaned;
  }

  return { ok: true, mime, filename };
}
