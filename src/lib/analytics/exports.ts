import { getContacts } from './tracker';

export const exportContactsCSV = () => {
  const contacts = getContacts().sort((a, b) => b.score - a.score);

  if (contacts.length === 0) {
    alert("No contacts to export.");
    return;
  }

  // Define headers
  const headers = ['Name', 'Email', 'Company', 'Score', 'Status', 'Captured At', 'Last Active'];

  // Create rows
  const rows = contacts.map(c => {
    const status = c.score >= 50 ? 'Hot' : c.score >= 20 ? 'Warm' : 'Cold';
    const captured = new Date(c.createdAt).toLocaleString();
    const active = new Date(c.lastActive).toLocaleString();

    // Escape quotes and wrap in quotes for CSV safety
    const safeName = `"${c.name.replace(/"/g, '""')}"`;
    const safeEmail = `"${c.email.replace(/"/g, '""')}"`;
    const safeCompany = `"${(c.company || '').replace(/"/g, '""')}"`;

    return [safeName, safeEmail, safeCompany, c.score, status, `"${captured}"`, `"${active}"`].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `brandcard_contacts_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportAnalyticsPDF = (elementId: string) => {
  const originalTitle = document.title;
  document.title = "BrandCard_Analytics_Report";

  // Use browser native print dialog to save as PDF to avoid modern CSS issues with html2canvas
  // Typically we would inject print-specific CSS or isolate the element, but keeping it simple.
  window.print();

  document.title = originalTitle;
};
