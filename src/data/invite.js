// Edit ONLY this file to change content.
export default {
  groom: { first: "Nanjunda", full: "Nanjuna" },
  bride: { first: "Pallavi", full: "Pallavi" },

  // Wedding day (used for calendar, countdown, weekday)
  date: { year: 2027, month: 2, day: 15 }, // month 1-12
  utcOffset: "+05:30",

  parents: {
    groom: ["Mr. & Mrs.", "Ramachandra", "Mandala"],
    bride: ["Mr. & Mrs.", "Father Name", "Mother Name"],
  },

  events: [
    { title: "Wedding Ceremony", venue: "Venue Name", time: "10:00", day: 15 },
    { title: "Reception", venue: "Venue Name", time: "19:30", day: 15 },
  ],

  reception: { welcome: "17:00", reception: "19:30", startTime: "10:00" },

  venue: {
    title: "Wedding Venue",
    name: "Venue Name",
    city: "City, State",
    // Google Maps embed + directions links. Replace "Venue+Name+City".
    mapEmbed: "https://www.google.com/maps?q=Venue+Name+City&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Venue+Name+City",
  },

  dressCode: { text: "Traditional / Festive", colors: ["#7b1e2b", "#d4a64a", "#f4c7b8"] },

  schedule: [
    ["09:30", "Guests arrive and are seated"],
    ["10:00", "Wedding rituals begin"],
    ["12:00", "Blessings and photographs"],
    ["13:00", "Lunch"],
    ["19:30", "Reception begins"],
    ["20:30", "Dinner"],
    ["22:00", "Send-off"],
  ],

  // Put your photos in /public/images/gallery/ and list them here
  gallery: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
  ],

  // Background music. Put an mp3 in public/music/ . Set to "" to disable.
  music: "/music/song.mp3",

  contact: {
    name: "Contact Person",
    whatsapp: "910000000000", // digits only, with country code
  },
};