import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "saja",
    link: "https://guns.lol/limgui",
    discord_id: "347772167695368202",
    badges: ["https://i.postimg.cc/wxmQb92y/saja.png"],
    projects: [
      {
        name: "Wisp",
        description:
          "Wisp is Discord's premier all-in-one app.",
        url: "https://discord.com/oauth2/authorize?client_id=1357376349790142668",
        icon: "https://i.postimg.cc/zB9Z1XTV/e02f5214a1e4b8fbd838b8a28d2a394b.png",
        type: "website" as const,
      },
      {
        name: "Wrath",
        description:
          "Addendum to Wisp Bot.",
        url: "#",
        icon: "https://i.postimg.cc/bJrw5F83/77ea522c00a50fa3c928a6d95441baa8.png",
        type: "website" as const,
      },
    ],
  },
  {
    name: "nerable",
    link: "https://guns.lol/nerable",
    discord_id: "642838726753648662",
  },
  {
    name: "sexgeek",
    link: "#",
    discord_id: "1384662457569640448",
  },
  {
    name: "setsu",
    link: "https://guns.lol/sxtsu",
    discord_id: "827555837215768607",
  },
  {
    name: "hell0",
    link: "#",
    discord_id: "564552405283373058",
  },
  {
    name: "okuname",
    link: "https://faceit.com/ru/players/okuname",
    discord_id: "1121439009189670962",
  },
  {
    name: "loveis",
    link: "https://guns.lol/drgnvl",
    discord_id: "373147054844936193",
  },
  {
    name: "pravoslavn1y",
    link: "#",
    discord_id: "409374229922840577",
  },
  {
    name: "4ever",
    link: "#",
    discord_id: "624677536311279639",
  }
 
].sort((a, b) => {
  const topOrder = ["saja", "nerable", "sexgeek"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return 0;
});
