import { type Locale } from "#/i18n.config";

export interface CommentDictProps {
  sender: {
    name: { [key in Locale]: string };
    avatar: string;
    userType: string;
  };
  date: string;
  text: {
    [key in Locale]: string;
  };
  replies?: CommentDictProps[];
}

export const commentsDict: CommentDictProps[] = [
  {
    sender: {
      name: { fa: "یک فرد", en: "someone" },
      avatar: "/images/dev/person-avatar.jpg",
      userType: "student",
    },
    date: "1401/01/01",
    text: {
      fa: "یک متن که باید در اینجا قرار بگیرد و به نمایش گذاشته شود و کسی آن را ببیند و خوانده شود توسط آن افراد اما من نمی‌خواهم دیگر این متن را ادامه دهم.",
      en: "lorem ipsum i just realized i don't know what the full text of lorem ipsum is and i'm just hoping no one is paying attention.",
    },
    replies: [
      {
        sender: {
          name: { fa: "یک فرد", en: "someone" },
          avatar: "/images/dev/person-avatar.jpg",
          userType: "student",
        },
        date: "1401/01/01",
        text: {
          fa: "یک متن که باید در اینجا قرار بگیرد و به نمایش گذاشته شود و کسی آن را ببیند و خوانده شود توسط آن افراد اما من نمی‌خواهم دیگر این متن را ادامه دهم.",
          en: "lorem ipsum i just realized i don't know what the full text of lorem ipsum is and i'm just hoping no one is paying attention.",
        },
      },
      {
        sender: {
          name: { fa: "یک فرد", en: "someone" },
          avatar: "/images/dev/person-avatar.jpg",
          userType: "student",
        },
        date: "1401/01/01",
        text: {
          fa: "یک متن که باید در اینجا قرار بگیرد و به نمایش گذاشته شود و کسی آن را ببیند و خوانده شود توسط آن افراد اما من نمی‌خواهم دیگر این متن را ادامه دهم.",
          en: "lorem ipsum i just realized i don't know what the full text of lorem ipsum is and i'm just hoping no one is paying attention.",
        },
      },
    ],
  },
  {
    sender: {
      name: { fa: "یک فرد", en: "someone" },
      avatar: "/images/dev/person-avatar.jpg",
      userType: "student",
    },
    date: "1401/01/01",
    text: {
      fa: "یک متن که باید در اینجا قرار بگیرد و به نمایش گذاشته شود و کسی آن را ببیند و خوانده شود توسط آن افراد اما من نمی‌خواهم دیگر این متن را ادامه دهم.",
      en: "lorem ipsum i just realized i don't know what the full text of lorem ipsum is and i'm just hoping no one is paying attention.",
    },
  },
];
