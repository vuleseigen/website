import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "limgui",
    link: "https://guns.lol/limgui",
    discord_id: "347772167695368202", 
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
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
