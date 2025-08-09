import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "shintomu",
    link: "#",
    discord_id: "1013953531117568051", 
  },
  {
    name: "external",
    link: "#",
    discord_id: "1323491828648906855",
  },
  {
    name: "compile",
    link: "https://tempt.lol",
    discord_id: "659438962624167957",
    projects: [
      {
        name: "Tempt",
        description:
          "A powerful Discord bot for your community, with a focus on performance and reliability.",
        url: "https://tempt.lol",
        icon: "https://cdn.discordapp.com/avatars/1367774588750266408/a271d4855b63b329567c173cbd3557f9.png?size=1024",
        type: "website" as const,
      },
    ],
  }
 
].sort((a, b) => {
  const topOrder = ["arespro", "cortex", "nyx"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
