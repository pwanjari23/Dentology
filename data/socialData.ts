export interface InstagramPost {
  id: string;
  type: "video" | "image";
  caption: string;
  shortCaption: string;
  tag: string;
  likes: string | null; // null if unverified
  permalink: string;
  image: string;
  topic: string;
}

export const socialData = {
  instagram: {
    handle: "@dentology_og1",
    profileUrl: "https://www.instagram.com/dentology_og1",
    displayHandle: "dentology_og1",
    bioDescription:
      "DENTOLOGY (House of Dentistry and Aesthetics) • Your destination for joyful smiles • Led by Dr. Sanika Sharma • One stop for every dentistry needs! • Jaripatka, Nagpur",
    posts: [
      {
        id: "post-1",
        type: "video" as const,
        caption:
          "Dive deeper into your mouth 🦷 See what the mirror can't. Our intraoral scans capture high-resolution, detailed views of your teeth and gums helping us detect problems early, plan treatments accurately, and explain your oral health clearly. Fast. Precise. Comfortable.",
        shortCaption: "See what the mirror can't: 3D intraoral digital scans in real-time.",
        tag: "Digital Dentistry",
        likes: null,
        permalink: "https://www.instagram.com/dentology_og1",
        image: "/images/instagram/post-scan.jpg",
        topic: "3D Intraoral Scanning",
      },
      {
        id: "post-2",
        type: "video" as const,
        caption:
          "Not every dream needs a fancy address, sometimes, it belongs exactly where it started! Dentology was never just about opening a clinic. It was about bringing quality dental care back home, to the people, streets, and community that raised me — Jaripatka deserved better access to modern dental care.",
        shortCaption: "Bringing modern, quality dental care back home to Jaripatka.",
        tag: "Clinic Story",
        likes: null,
        permalink: "https://www.instagram.com/dentology_og1",
        image: "/images/instagram/post-clinic-story.jpg",
        topic: "Our Story in Jaripatka",
      },
      {
        id: "post-3",
        type: "image" as const,
        caption:
          "Jaripatka, Dentology is officially here! 🥂🦷 Just a few turns, and straight from Hanuman Mandir, to your right… and just like that, you've arrived at your new go-to spot for confident smiles 🦷",
        shortCaption: "A welcoming modern dental haven at Kamal Phool Chowk.",
        tag: "Community",
        likes: null,
        permalink: "https://www.instagram.com/dentology_og1",
        image: "/images/instagram/post-welcome.jpg",
        topic: "Welcoming Nagpur",
      },
      {
        id: "post-4",
        type: "video" as const,
        caption:
          "As a dentist, I can save your tooth but not if your advice comes from WhatsApp, Google, or random reels 🦷⚠️ Delaying proper clinical treatment turns small, reversible concerns into bigger issues. Trust professional diagnosis.",
        shortCaption: "Saving natural teeth with early diagnosis & professional guidance.",
        tag: "Tooth Preservation",
        likes: null,
        permalink: "https://www.instagram.com/dentology_og1",
        image: "/images/instagram/post-tooth-care.jpg",
        topic: "Conservative Dentistry",
      },
      {
        id: "post-5",
        type: "image" as const,
        caption:
          "Brushing harder or more often doesn't mean healthier teeth 🦷 Your enamel is strong, but not indestructible. Gentle, correct technique protects your smile for a lifetime.",
        shortCaption: "Enamel care: proper technique over aggressive force.",
        tag: "Oral Hygiene",
        likes: null,
        permalink: "https://www.instagram.com/dentology_og1",
        image: "/images/instagram/post-enamel.jpg",
        topic: "Enamel Protection",
      },
    ],
  },
};
