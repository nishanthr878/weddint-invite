// =====================================================================
// Edit ONLY this file.
//   common = things shared by both languages (dates, times, links, photos)
//   en / kn = all the text for each language
// =====================================================================

const common = {
  date: { year: 2027, month: 6, day: 15 }, // month 1-12
  utcOffset: "+05:30",

  // Same order as `events` in each language block below
  events: [
    { time: "10:00", day: 15 }, // Wedding ceremony
    { time: "19:30", day: 15 }, // Reception
  ],
  reception: { startTime: "10:00", welcome: "17:00", reception: "19:30" },

  // Same order as `scheduleLabels` in each language block
  scheduleTimes: ["09:30", "10:00", "12:00", "13:00", "19:30", "20:30", "22:00"],

  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.505562125163!2d74.8783371!3d14.340128599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc08bb221a7cab%3A0xc97a49318a05b110!2sShri%20Sringeri%20Shankara%20Matha%2C%20Siddapura!5e0!3m2!1sen!2sin!4v1794155493460!5m2!1sen!2sin",
  directions: "https://maps.app.goo.gl/jXdmc8FznH1j7NxK9?g_st=aw",
  dressColors: ["#7b1e2b", "#d4a64a", "#f4c7b8"],

  gallery: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
  ],

  music: "/music/song.mp3", // "" to disable
  whatsapp: "910000000000", // digits only, with country code
};

const en = {
  htmlLang: "en",
  path: "/",
  otherPath: "/kn/",
  groom: { first: "Nanjunda", full: "Nanjunda" },
  bride: { first: "Pallavi", full: "Pallavi" },
  parents: {
    groom: ["Mr. & Mrs.", "Father Name", "Mother Name"],
    bride: ["Mr. & Mrs.", "Ramachandra", "Mangala"],
  },
  events: [
    { title: "Wedding Ceremony", venue: "Venue Name" },
    { title: "Reception", venue: "Venue Name" },
  ],
  venue: { title: "Wedding Venue", name: "Venue Name", city: "City, State" },
  dressText: "Traditional / Festive",
  scheduleLabels: [
    "Guests arrive and are seated",
    "Wedding rituals begin",
    "Blessings and photographs",
    "Lunch",
    "Reception begins",
    "Dinner",
    "Send-off",
  ],
  contactName: "Contact Person",
  months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  weekdays: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  dow: ["Mo","Tu","We","Th","Fr","Sa","Su"],
  dateFmt: "{m} {d}, {y}",
  ui: {
    switchLabel: "ಕನ್ನಡ",
    cordially: "Cordially Invites",
    celebrate: "to celebrate with our family",
    guestDefault: "Dear Guest",
    open: "Open",
    ceremonyInfo: "Ceremony Info",
    together1: "TOGETHER WITH OUR FAMILIES",
    together2: "WE INVITE YOU TO OUR WEDDING",
    at: "AT",
    photoGallery: "Photo Gallery",
    receptionInfo: "Reception Info",
    receptionAt: "THE RECEPTION WILL TAKE PLACE AT:",
    welcome: "WELCOME",
    reception: "RECEPTION",
    countdown: "COUNTDOWN",
    addCal: "Add to Calendar",
    confirm: "Confirm Attendance",
    getDirections: "Get directions",
    dressCode: "Dress Code",
    schedule: "Wedding Day Schedule",
    guestbook: "Guestbook",
    namePh: "Your name",
    wishPh: "Enter your wishes*",
    sendWishes: "Send Wishes",
    withLove: "With love,",
    days: "days", hours: "hours", min: "min", sec: "sec",
    waMsg: "Hello {contact}, this is {name}. I will be attending the wedding.",
    waGuest: "a guest",
    calSummary: "Wedding",
  },
};

const kn = {
  htmlLang: "kn",
  path: "/kn/",
  otherPath: "/",
  groom: { first: "ನಂಜುಂಡ", full: "ನಂಜುಂಡ" },
  bride: { first: "ಪಲ್ಲವಿ", full: "ಪಲ್ಲವಿ" },
  parents: {
    groom: ["ಶ್ರೀ & ಶ್ರೀಮತಿ", "ಕೊಟ್ರಪ್ಪ, ಕೋಟೆಕೊಪ್ಪ", "ರೇಣುಕಮ್ಮ "],
    bride: ["ಶ್ರೀ & ಶ್ರೀಮತಿ", "ರಾಮಚಂದ್ರ", "ಮಂಗಲಾ "],
  },
  events: [
    { title: "ವಿವಾಹ ಸಮಾರಂಭ", venue: "ಶ್ರೀ ಶೃಂಗೇರಿ ಶಂಕರ ಮಠ, ಸಿದ್ದಾಪುರ" },
    { title: "ಆರತಕ್ಷತೆ", venue: "ಶ್ರೀ ಶೃಂಗೇರಿ ಶಂಕರ ಮಠ, ಸಿದ್ದಾಪುರ" },
  ],
  venue: { title: "ಶ್ರೀ ಶೃಂಗೇರಿ ಶಂಕರ ಮಠ", name: "ಸಿದ್ದಾಪುರ", city: "ಸಿದ್ದಾಪುರ" },
  dressText: "ಸಾಂಪ್ರದಾಯಿಕ / ಹಬ್ಬದ ಉಡುಗೆ",
  scheduleLabels: [
    "ಅತಿಥಿಗಳ ಆಗಮನ",
    "ವಿವಾಹ ವಿಧಿಗಳ ಆರಂಭ",
    "ಆಶೀರ್ವಾದ ಮತ್ತು ಛಾಯಾಚಿತ್ರ",
    "ಮಧ್ಯಾಹ್ನದ ಊಟ",
    "ಆರತಕ್ಷತೆ ಆರಂಭ",
    "ರಾತ್ರಿ ಭೋಜನ",
    "ಬೀಳ್ಕೊಡುಗೆ",
  ],
  contactName: "ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ",
  months: ["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"],
  weekdays: ["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"],
  dow: ["ಸೋ","ಮಂ","ಬು","ಗು","ಶು","ಶ","ಭಾ"],
  dateFmt: "{d} {m} {y}",
  ui: {
    switchLabel: "English",
    cordially: "ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    celebrate: "ನಮ್ಮ ಕುಟುಂಬದೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಲು",
    guestDefault: "ಆತ್ಮೀಯ ಅತಿಥಿ",
    open: "ತೆರೆಯಿರಿ",
    ceremonyInfo: "ಮದುವೆಯ ವಿವರಗಳು",
    together1: "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ ಸೇರಿ",
    together2: "ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ತಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    at: "ಸಮಯ",
    photoGallery: "ಫೋಟೋ ಗ್ಯಾಲರಿ",
    receptionInfo: "ಆರತಕ್ಷತೆ ವಿವರಗಳು",
    receptionAt: "ಆರತಕ್ಷತೆ ನಡೆಯುವ ಸಮಯ:",
    welcome: "ಸ್ವಾಗತ",
    reception: "ಆರತಕ್ಷತೆ",
    countdown: "ಉಳಿದಿರುವ ಸಮಯ",
    addCal: "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ",
    confirm: "ಹಾಜರಾತಿ ದೃಢೀಕರಿಸಿ",
    getDirections: "ದಾರಿ ತೋರಿಸಿ",
    dressCode: "ಉಡುಗೆ ಸಂಹಿತೆ",
    schedule: "ಮದುವೆ ದಿನದ ಕಾರ್ಯಕ್ರಮ",
    guestbook: "ಅತಿಥಿ ಪುಸ್ತಕ",
    namePh: "ನಿಮ್ಮ ಹೆಸರು",
    wishPh: "ನಿಮ್ಮ ಶುಭಾಶಯಗಳನ್ನು ಬರೆಯಿರಿ*",
    sendWishes: "ಶುಭಾಶಯ ಕಳುಹಿಸಿ",
    withLove: "ಪ್ರೀತಿಯೊಂದಿಗೆ,",
    days: "ದಿನ", hours: "ಗಂಟೆ", min: "ನಿಮಿಷ", sec: "ಸೆಕೆಂಡ್",
    waMsg: "ನಮಸ್ಕಾರ {contact}, ನಾನು {name}. ನಾನು ಮದುವೆಗೆ ಹಾಜರಾಗುತ್ತೇನೆ.",
    waGuest: "ಒಬ್ಬ ಅತಿಥಿ",
    calSummary: "ವಿವಾಹ",
  },
};

export default { common, en, kn };