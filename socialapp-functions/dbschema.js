// *Basic user Info

let db = {
  users: [
    {
      userId: "123dasdqwe213asd123",
      email: "user@email.com",
      handle: "user",
      createdAt: "2020-05-13T15:03:50:52.798Z",
      imageUrl: "image/szibcqiweooasd",
      bio: "Hello, i'm user, nice to meet you",
      website: "https://user.com",
      location: "Brasil, SP",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "Scream body sample",
      createdAt: "2020-05-12T02:44:01.735Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "aisdbqwubeu12z23",
      createdAt: "2020-05-12T02:44:01.735Z",
      body: "Scream body",
    },
  ],
  comments: [
    {
      recipient: "user",
      sender: "gabriel",
      read: "true | false",
      screamId: "aisdbqwubeu12z23",
      type: "like | comment",
      createdAt: "2020-05-12T02:44:01.735Z",
    },
  ],
};
const userDetails = {
  // * Redux
  credentials: {
    userId: "123dasdqwe213asd123",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-05-13T15:03:50:52.798Z",
    imageUrl: "image/szibcqiweooasd",
    bio: "Hello, i'm user, nice to meet you",
    website: "https://user.com",
    location: "Brasil, SP",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hhh78ASDjdn321PW3x",
    },
    {
      userHandle: "user 2",
      screamId: "3NAon32FoQexRcoFs50",
    },
  ],
};
