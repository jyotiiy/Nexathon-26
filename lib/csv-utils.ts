import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use .data directory in the project root for storing data files
const DATA_DIR = path.join(process.cwd(), '.data');
const CSV_PATH = path.join(DATA_DIR, 'notifications.csv');

// Ensure the data directory exists
const ensureDataDir = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
};

// Ensure the CSV file exists with headers if it doesn't exist
const initCsvFile = () => {
  ensureDataDir();
  if (!fs.existsSync(CSV_PATH)) {
    const header = 'Timestamp,Name,Email,Phone,College,Year\n';
    try {
      fs.writeFileSync(CSV_PATH, header, 'utf8');
    } catch (error) {
      console.error('Error creating CSV file:', error);
      throw error;
    }
  }
};

export const saveToCsv = async (data: {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
}): Promise<boolean> => {
  try {
    // Ensure the file exists with headers
    initCsvFile();
    
    // Format the data as a CSV row
    const timestamp = new Date().toISOString();
    const csvRow = `"${timestamp}","${escapeCsvField(data.name)}","${escapeCsvField(data.email)}","${escapeCsvField(data.phone)}","${escapeCsvField(data.college)}","${escapeCsvField(data.year)}"\n`;
    
    // Append to the CSV file
    fs.appendFileSync(CSV_PATH, csvRow, 'utf8');
    
    return true;
  } catch (error) {
    console.error('Error writing to CSV:', error);
    return false;
  }
};

// Helper function to escape CSV fields
function escapeCsvField(field: string): string {
  if (field === null || field === undefined) return '';
  // Escape double quotes by doubling them
  const escaped = String(field).replace(/"/g, '""');
  // If the field contains commas, newlines, or double quotes, wrap it in quotes
  if (escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')) {
    return `"${escaped}"`;
  }
  return escaped;
}