export class Host {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public image:string,
    public description: string,
    public categories: string[]) {}
}

export class Review {
  constructor(
    public id: number,
    public hostId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public comment: string) {}
}

export function getHosts(params = <any>{}): Host[] {
  let result = hosts;

  if (params.title) {
    result = result.filter(
      p => p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1);
  }
  if (parseInt(params.price) && result.length > 0) {
    result = result.filter(
      p => p.price <= parseInt(params.price));
  }
  if (params.category && result.length > 0) {
    result = result.filter(
      p => p.categories.indexOf(params.category.toLowerCase()) !== -1);
  }

  return result;
}

export function getHostById(hostId: number): Host {
  return hosts.find(p => p.id === hostId);
}

export function getReviewsByHostId(hostId: number): Review[] {
  return reviews.filter(r => r.hostId === hostId);
}

var hosts = [
  {
    "id": 0,
    "title": 'Chicken pasta',
    "price": 24.99,
    "image" : 'images/kk1.jpg',
    "rating": 4.3,
    "description": 'Try this when you are feeling daring and want to mix things up a bit! A Southern inspired recipe that is sure to add a little fun to your dinner table. Try serving it with corn bread.',
    "categories": ['pasta', 'Cajun Chicken Pasta']
  },
  {
    "id": 1,
    "title": "Braised Balsamic ",
    "price": 64.99,
    "image" : 'images/kk2.jpg',
    "rating": 3.5,
    "description": "This chicken is good with either rice or pasta. Green beans make a nice side dish",
    "categories": ["Chicken"]
  },
  {
    "id": 2,
    "title": "Garlic Prime Rib",
    "price": 74.99,
    "rating": 4.2,
    "image" : 'images/kk2.jpg',
    "description": "Quick and easy marinade and so tasty, I was trusted with this recipe but I can't keep it to myself!",
    "categories": ["Garlic Prime Rib"]
  },
  {
    "id": 3,
    "title": "Cabbage Rolls II",
    "price": 84.99,
    "rating": 3.9,
    "image" : 'images/kk3.jpg',
    "description": "Cabbage leaves stuffed with ground beef, onion and rice, covered in a sweet and tangy tomato sauce and cooked in a slow cooker",
    "categories": ["non-veg"]
  },
  {
    "id": 4,
    "title": "Fat-Burning Soup",
    "price": 94.99,
    "rating": 5,
    "image" : 'images/kk2.jpg',
    "description": "This tomato and cabbage soup was rumored, in days of old, to melt away those thighs",
    "categories": ["veg", "non-veg"]
  },
  {
    "id": 5,
    "title": "Chicken Bake",
    "price": 54.99,
    "rating": 4.6,
    "image" : 'images/kk1.jpg',
    "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "categories": ["veg"]
  }
];

var reviews = [
  {
    "id": 0,
    "hostId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 1,
    "hostId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 2,
    "hostId": 0,
    "timestamp": "2014-05-20T05:26:00+00:00",
    "user": "User 3",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 3,
    "hostId": 0,
    "timestamp": "2014-05-20T07:20:00+00:00",
    "user": "User 4",
    "rating": 4,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 4,
    "hostId": 0,
    "timestamp": "2014-05-20T11:35:00+00:00",
    "user": "User 5",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  },
  {
    "id": 5,
    "hostId": 0,
    "timestamp": "2014-05-20T11:42:00+00:00",
    "user": "User 6",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
  }
];
