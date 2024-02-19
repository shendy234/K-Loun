export function formatDateTime(stringTanggal) {
    const timestamp = new Date(stringTanggal);
    const options = { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };

    return timestamp.toLocaleString('en-US', options);
}