
import { Story } from "./types";

export const stories: Story[] = [
  {
    id: "1",
    title: "The Mysterious Forest",
    contributions: [
      {
        id: "1-1",
        content: "The forest was shrouded in mist as Sarah took her first steps onto the path. The trees seemed to whisper secrets to each other as she passed.",
        author: "Emma",
        createdAt: new Date(2023, 4, 15)
      },
      {
        id: "1-2",
        content: "A twig snapped behind her. Sarah froze. Was someone—or something—following her through this ancient woodland?",
        author: "James",
        createdAt: new Date(2023, 4, 16)
      }
    ],
    createdAt: new Date(2023, 4, 15),
    updatedAt: new Date(2023, 4, 16)
  },
  {
    id: "2",
    title: "The Space Between Stars",
    contributions: [
      {
        id: "2-1",
        content: "Captain Renner stared at the navigation screen. According to all known star charts, they were nowhere. Yet the ship's systems insisted they were... somewhere.",
        author: "Leo",
        createdAt: new Date(2023, 5, 10)
      }
    ],
    createdAt: new Date(2023, 5, 10),
    updatedAt: new Date(2023, 5, 10)
  },
  {
    id: "3",
    title: "The Last Library",
    contributions: [
      {
        id: "3-1",
        content: "In a world where digital had replaced paper centuries ago, the discovery of an intact physical library was unprecedented. Maya held her breath as she pushed open the heavy wooden door.",
        author: "Sophia",
        createdAt: new Date(2023, 3, 22)
      },
      {
        id: "3-2",
        content: "Dust motes danced in the ray of light that broke through the darkness. Shelves upon shelves of books stretched into the shadows, each one containing knowledge thought lost to time.",
        author: "Oliver",
        createdAt: new Date(2023, 3, 25)
      },
      {
        id: "3-3",
        content: "As Maya reached for the nearest tome, her fingers trembling with anticipation, a soft voice spoke from the darkness behind her. 'We've been waiting for you.'",
        author: "Charlie",
        createdAt: new Date(2023, 3, 27)
      }
    ],
    createdAt: new Date(2023, 3, 22),
    updatedAt: new Date(2023, 3, 27)
  }
];
