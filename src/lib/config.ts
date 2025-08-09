import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "limgui",
    link: "https://guns.lol/limgui",
    discord_id: "347772167695368202",
    projects: [
      {
        name: "Wisp",
        description:
          "Wisp is Discord's premier all-in-one app.",
        url: "https://discord.com/oauth2/authorize?client_id=1357376349790142668",
        icon: "https://i.postimg.cc/zB9Z1XTV/e02f5214a1e4b8fbd838b8a28d2a394b.png",
        type: "website" as const,
      },
    ],
  },
  {
    name: "nerable",
    link: "#",
    discord_id: "642838726753648662",
  },
  {
    name: "sexgeek",
    link: "#",
    discord_id: "1384662457569640448",
  }
 
].sort((a, b) => {
  const topOrder = ["limgui", "nerable", "sexgeek"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return 0;
});
