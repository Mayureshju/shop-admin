
// carousel data
export const mainCarouselData = [{
  id: 1,
  buttonLink: "#",
  buttonText: "Shop Now",
  subTitle: "GIFT SHOP",
  imgUrl: "/assets/images/Gift Shop/Header.png",
  title: "The gift of a man is his goodwill. Take care of gift"
}, {
  id: 2,
  buttonLink: "#",
  buttonText: "Shop Now",
  subTitle: "GIFT SHOP",
  imgUrl: "/assets/images/Gift Shop/Header.png",
  title: "The gift of a man is his goodwill. Take care of gift"
}];


// category navigation list
export const categoryNavigation = [{
  category: "Top Categories",
  categoryItem: [{
    icon: "Home",
    title: "Home",
    href: "/gift-shop"
  }, {
    icon: "Popular",
    title: "Popular Products",
    href: "/gift-shop/popular"
  }, {
    icon: "Trending",
    title: "Trending Products",
    href: "/gift-shop/trending"
  }, {
    icon: "Products",
    title: "Latest Products",
    href: "/gift-shop/latest"
  }]
}, {
  category: "Top Categories",
  categoryItem: [{
    icon: "BirthdayCake",
    title: "Birthday",
    href: "#",
    child: [{
      title: "Pears, apples, quinces",
      href: "/gift-shop/apples"
    }, {
      title: "Peaches, plums, apricots",
      href: "/gift-shop/pulms"
    }, {
      title: "Grapes",
      href: "/gift-shop/grapes-2"
    }]
  }, {
    icon: "Children",
    title: "Children's",
    href: "#",
    child: [{
      title: "Onion",
      href: "/gift-shop/onion"
    }, {
      title: "Potato",
      href: "/gift-shop/potato"
    }, {
      title: "Vegetable Pack",
      href: "/gift-shop/vegetable-pack"
    }]
  }, {
    icon: "Chirstmas",
    title: "Christmas Gifts",
    href: "#",
    child: [{
      title: "Pears, apples, quinces",
      href: "/gift-shop/pears"
    }, {
      title: "Peaches, plums, apricots",
      href: "/gift-shop/apricots"
    }, {
      title: "Grapes",
      href: "/gift-shop/grapes"
    }]
  }, {
    icon: "Flower",
    title: "Flower",
    href: "/gift-shop/flower"
  }, {
    icon: "TeddyBear",
    title: "Teddy Bears",
    href: "/gift-shop/teddy-bears"
  }, {
    icon: "ValentineGift",
    title: "Valentine Gifts",
    href: "/gift-shop/valentine-gifts"
  }, {
    icon: "WeddingGift",
    title: "Wedding Gifts",
    href: "/gift-shop/wedding-gifts"
  }, {
    icon: "NewYearGift",
    title: "New Year Gift",
    href: "/gift-shop/new-year-gift"
  }, {
    icon: "Toys",
    title: "Toys",
    href: "/gift-shop/toys"
  }, {
    icon: "Football",
    title: "Ball",
    href: "/gift-shop/ball"
  }, {
    icon: "BabyToys",
    title: "Baby Toys",
    href: "/gift-shop/baby-toys"
  }, {
    icon: "Robot",
    title: "Robot",
    href: "/gift-shop/robot"
  }]
}];


// services
export const serviceList = [{
  id: "742fb40b-c820-4caa-a23d-3bbc0216e1f7",
  icon: "Truck",
  title: "Delivery quality gift",
  description: "information on its origins"
}, {
  id: "28dc4b33-7b26-4f1c-bcac-5feda1825ce4",
  icon: "PickUpBox",
  title: "Gift for all Occession",
  description: "information on its origins"
}, {
  id: "381051cc-cadb-4aa8-9a2b-befd34419564",
  icon: "OnlineService",
  title: "Happy Service",
  description: "information on its origins"
}];


// top categories
export const categories = [{
  id: "4c9681ac-69e7-4ab6-b819-971b8ee9563b",
  name: "Birthday Gift",
  icon: null,
  image: "/assets/images/Gift Shop/Product 1.png",
  slug: "birthday-gift",
  parent: [],
  description: "27 Available Items",
  for: {
    demo: "gift",
    type: "top-categories"
  }
}, {
  id: "c8305a8a-a71e-4240-a01f-6b6336be20d9",
  name: "Couple Gift",
  icon: null,
  image: "/assets/images/Gift Shop/Product 2.png",
  slug: "couple-gift",
  parent: [],
  description: "17 Available Items",
  for: {
    demo: "gift",
    type: "top-categories"
  }
}, {
  id: "ce8d812a-1df6-4c00-84a0-e4ef9780adcd",
  name: "Baby Doll",
  icon: null,
  image: "/assets/images/Gift Shop/Product 4.png",
  slug: "baby-doll",
  parent: [],
  description: "27 Available Items",
  for: {
    demo: "gift",
    type: "top-categories"
  }
}];


// products
export const products = [

// popular-items
{
  id: "33cb6269-901a-4fb9-bef8-cf4d7a37ab9a",
  slug: "birthday-gift-for-girl",
  shop: {
    id: "151bdd95-1df6-40fc-8d1d-193f2e15badd",
    slug: "cybershop",
    user: {
      id: "ccafbe9f-0171-42a9-a06e-53caef814aad",
      email: "Eryn_Wolf@yahoo.com",
      phone: "842-910-7678 x743",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1146.jpg",
      password: "Ry8KuYKChH_N84L",
      dateOfBirth: "1985-01-10T13:41:47.946Z",
      verified: true,
      name: {
        firstName: "Brenden",
        lastName: "Hayes"
      }
    },
    email: "Jeramie72@gmail.com",
    name: "Cybershop",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-8.png",
    profilePicture: "/assets/images/faces/propic(7).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Birthday Gift For Girl",
  brand: null,
  price: 162,
  size: null,
  colors: [],
  discount: 8,
  thumbnail: "/assets/images/Gift Shop/pngwing.com (3).png",
  images: ["/assets/images/Gift Shop/pngwing.com (3).png", "/assets/images/Gift Shop/pngwing.com (3).png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "popular-items"
  }
}, {
  id: "7e26ec15-1c2a-4581-a5ad-ce38a6dbf637",
  slug: "gift-for-boy",
  shop: {
    id: "6d111cb4-7a29-490a-80fb-0444a701a8e0",
    slug: "word-wide-wishes",
    user: {
      id: "ccafbe9f-0171-42a9-a06e-53caef814aad",
      email: "Eryn_Wolf@yahoo.com",
      phone: "842-910-7678 x743",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1146.jpg",
      password: "Ry8KuYKChH_N84L",
      dateOfBirth: "1985-01-10T13:41:47.946Z",
      verified: true,
      name: {
        firstName: "Brenden",
        lastName: "Hayes"
      }
    },
    email: "Drake_Satterfield79@gmail.com",
    name: "Word Wide Wishes",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-7.png",
    profilePicture: "/assets/images/faces/propic(6).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Boy",
  brand: null,
  price: 98,
  size: null,
  colors: [],
  discount: 11,
  thumbnail: "/assets/images/Gift Shop/Product 5.png",
  images: ["/assets/images/Gift Shop/Product 5.png", "/assets/images/Gift Shop/Product 5.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "popular-items"
  }
}, {
  id: "610a6f35-56eb-4a3a-b618-fffad3833d69",
  slug: "baby-toy-gift",
  shop: {
    id: "f7825673-105a-4d36-a4a7-ca399bc43093",
    slug: "keyboard-kiosk",
    user: {
      id: "2e320882-ace8-4bc4-82f1-efccd85572d0",
      email: "Kristoffer66@gmail.com",
      phone: "545.888.4321 x53286",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg",
      password: "gqRCk7WOeegsNFn",
      dateOfBirth: "1951-09-09T06:19:19.872Z",
      verified: true,
      name: {
        firstName: "Magdalena",
        lastName: "Quigley"
      }
    },
    email: "Demetris86@yahoo.com",
    name: "Keyboard Kiosk",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-5.png",
    profilePicture: "/assets/images/faces/propic(4).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Toy Gift",
  brand: null,
  price: 85,
  size: null,
  colors: [],
  discount: 13,
  thumbnail: "/assets/images/Gift Shop/Product 3.png",
  images: ["/assets/images/Gift Shop/Product 3.png", "/assets/images/Gift Shop/Product 3.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "popular-items"
  }
}, {
  id: "d940f1fb-7b5e-4f5b-a359-bb7bc4f72fdb",
  slug: "baby-doll-gift",
  shop: {
    id: "96fb91e0-1ac1-4ded-92ae-1b8ed5abd594",
    slug: "constant-shoppers",
    user: {
      id: "22f6a13e-6fa0-4e90-921c-29fab0285711",
      email: "Hayley.Osinski27@hotmail.com",
      phone: "928.204.9640",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/323.jpg",
      password: "tZoUPC2UnPhfc8f",
      dateOfBirth: "1942-07-24T01:56:47.840Z",
      verified: true,
      name: {
        firstName: "Randal",
        lastName: "Osinski"
      }
    },
    email: "Mckayla_Goodwin@yahoo.com",
    name: "Constant Shoppers",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-4.png",
    profilePicture: "/assets/images/faces/propic(3).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Doll Gift",
  brand: null,
  price: 218,
  size: null,
  colors: [],
  discount: 11,
  thumbnail: "/assets/images/Gift Shop/Product 6.png",
  images: ["/assets/images/Gift Shop/Product 6.png", "/assets/images/Gift Shop/Product 6.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "popular-items"
  }
}, {
  id: "6e87dec6-e96b-449c-bb1a-4b1f30df8ac4",
  slug: "jewellery-gift",
  shop: {
    id: "95bafff7-b0ae-4798-bc29-608086d2ebd4",
    slug: "coveted-clicks",
    user: {
      id: "2e320882-ace8-4bc4-82f1-efccd85572d0",
      email: "Kristoffer66@gmail.com",
      phone: "545.888.4321 x53286",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1194.jpg",
      password: "gqRCk7WOeegsNFn",
      dateOfBirth: "1951-09-09T06:19:19.872Z",
      verified: true,
      name: {
        firstName: "Magdalena",
        lastName: "Quigley"
      }
    },
    email: "Virgil86@gmail.com",
    name: "Coveted Clicks",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-3.png",
    profilePicture: "/assets/images/faces/propic(2).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Jewellery Gift",
  brand: null,
  price: 142,
  size: null,
  colors: [],
  discount: 12,
  thumbnail: "/assets/images/Gift Shop/Product 8.png",
  images: ["/assets/images/Gift Shop/Product 8.png", "/assets/images/Gift Shop/Product 8.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 4,
  for: {
    demo: "gift",
    type: "popular-items"
  }
}, {
  id: "e5a7e60c-fa0e-4aef-932d-1ef393a9b271",
  slug: "baby-doll-gift",
  shop: {
    id: "83e78b78-0f32-4969-8672-1daf5bb71e28",
    slug: "scroll-through",
    user: {
      id: "d6b4d457-e84f-4ae9-ba15-cef934fe9213",
      email: "Charley.Spencer69@hotmail.com",
      phone: "1-976-789-7681",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg",
      password: "WiPybHd2hc682F7",
      dateOfBirth: "1991-07-06T03:40:01.486Z",
      verified: true,
      name: {
        firstName: "Adrian",
        lastName: "Osinski"
      }
    },
    email: "Caesar_Shields@yahoo.com",
    name: "Scroll Through",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner.png",
    profilePicture: "/assets/images/faces/propic(1).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Doll Gift",
  brand: null,
  price: 71,
  size: null,
  colors: [],
  discount: 8,
  thumbnail: "/assets/images/Gift Shop/Product 6.png",
  images: ["/assets/images/Gift Shop/Product 6.png", "/assets/images/Gift Shop/Product 6.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "popular-items"
  }
},

// top-saled-items
{
  id: "f549e523-42d5-4530-9746-b603104fc7de",
  slug: "gold-wedding-ring",
  shop: {
    id: "6abcce56-f393-4b57-9823-82b9eaecf92f",
    slug: "scarlett-beauty",
    user: {
      id: "1505ca4c-c64c-4693-8c6d-d721ad9ea59b",
      email: "Jean.Mohr@hotmail.com",
      phone: "887.814.0875",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/101.jpg",
      password: "V8oIkOkHitfhIts",
      dateOfBirth: "1994-09-26T12:15:00.587Z",
      verified: true,
      name: {
        firstName: "Wanda",
        lastName: "Casper"
      }
    },
    email: "Nya_Ferry@hotmail.com",
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-9.png",
    profilePicture: "/assets/images/faces/propic(8).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gold Wedding Ring",
  brand: null,
  price: 219,
  size: null,
  colors: [],
  discount: 9,
  thumbnail: "/assets/images/Gift Shop/Product 7.png",
  images: ["/assets/images/Gift Shop/Product 7.png", "/assets/images/Gift Shop/Product 7.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
}, {
  id: "47c784fa-1235-4dea-adae-4c5faf07f7c8",
  slug: "gift-for-baby",
  shop: {
    id: "6abcce56-f393-4b57-9823-82b9eaecf92f",
    slug: "scarlett-beauty",
    user: {
      id: "1505ca4c-c64c-4693-8c6d-d721ad9ea59b",
      email: "Jean.Mohr@hotmail.com",
      phone: "887.814.0875",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/101.jpg",
      password: "V8oIkOkHitfhIts",
      dateOfBirth: "1994-09-26T12:15:00.587Z",
      verified: true,
      name: {
        firstName: "Wanda",
        lastName: "Casper"
      }
    },
    email: "Nya_Ferry@hotmail.com",
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-9.png",
    profilePicture: "/assets/images/faces/propic(8).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Baby",
  brand: null,
  price: 209,
  size: null,
  colors: [],
  discount: 17,
  thumbnail: "/assets/images/Gift Shop/Product 4.png",
  images: ["/assets/images/Gift Shop/Product 4.png", "/assets/images/Gift Shop/Product 4.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
}, {
  id: "21fee76d-b1ee-43ab-bfc3-13bf28877fab",
  slug: "special-gift-for-young",
  shop: {
    id: "6089c0ac-2bcb-4d9c-8b08-6d0faa65d384",
    slug: "anytime-buys",
    user: {
      id: "ff9d4d2c-9d3d-4d4d-9a18-33a5231a8a89",
      email: "Clemens.Miller@gmail.com",
      phone: "912.398.9908 x20258",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
      password: "bZKU_i_X_i2OR9D",
      dateOfBirth: "1992-12-21T14:58:33.108Z",
      verified: true,
      name: {
        firstName: "Colby",
        lastName: "Homenick"
      }
    },
    email: "Jacklyn30@yahoo.com",
    name: "Anytime Buys",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-6.png",
    profilePicture: "/assets/images/faces/propic(5).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Special Gift For Young",
  brand: null,
  price: 248,
  size: null,
  colors: [],
  discount: 9,
  thumbnail: "/assets/images/Gift Shop/Product 9.png",
  images: ["/assets/images/Gift Shop/Product 9.png", "/assets/images/Gift Shop/Product 9.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
}, {
  id: "d55580a0-8617-48e1-b158-69cd56b79bb7",
  slug: "gift-for-boy",
  shop: {
    id: "6089c0ac-2bcb-4d9c-8b08-6d0faa65d384",
    slug: "anytime-buys",
    user: {
      id: "ff9d4d2c-9d3d-4d4d-9a18-33a5231a8a89",
      email: "Clemens.Miller@gmail.com",
      phone: "912.398.9908 x20258",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
      password: "bZKU_i_X_i2OR9D",
      dateOfBirth: "1992-12-21T14:58:33.108Z",
      verified: true,
      name: {
        firstName: "Colby",
        lastName: "Homenick"
      }
    },
    email: "Jacklyn30@yahoo.com",
    name: "Anytime Buys",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-6.png",
    profilePicture: "/assets/images/faces/propic(5).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Boy",
  brand: null,
  price: 111,
  size: null,
  colors: [],
  discount: 12,
  thumbnail: "/assets/images/Gift Shop/Product 5.png",
  images: ["/assets/images/Gift Shop/Product 5.png", "/assets/images/Gift Shop/Product 5.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
}, {
  id: "4d6ea9ed-89a9-4ce2-87ed-3180e43da8c7",
  slug: "baby-toy-gift",
  shop: {
    id: "143763b8-ffda-443e-b06f-570edc1e7683",
    slug: "keyboard-kiosk",
    user: {
      id: "c564686b-25c9-4737-a1d9-9e554bdc02d5",
      email: "Maida_Rodriguez@gmail.com",
      phone: "(489) 756-5231 x33194",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg",
      password: "PlVf1jtwHSJfx3R",
      dateOfBirth: "2000-12-30T13:59:37.534Z",
      verified: true,
      name: {
        firstName: "Mikayla",
        lastName: "Okuneva"
      }
    },
    email: "Aimee.Bode77@yahoo.com",
    name: "Keyboard Kiosk",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-5.png",
    profilePicture: "/assets/images/faces/propic(4).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Toy Gift",
  brand: null,
  price: 65,
  size: null,
  colors: [],
  discount: 18,
  thumbnail: "/assets/images/Gift Shop/Product 3.png",
  images: ["/assets/images/Gift Shop/Product 3.png", "/assets/images/Gift Shop/Product 3.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
}, {
  id: "1221f822-1979-45fd-9eda-b5c8ec2047a9",
  slug: "baby-doll-gift",
  shop: {
    id: "143763b8-ffda-443e-b06f-570edc1e7683",
    slug: "keyboard-kiosk",
    user: {
      id: "c564686b-25c9-4737-a1d9-9e554bdc02d5",
      email: "Maida_Rodriguez@gmail.com",
      phone: "(489) 756-5231 x33194",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg",
      password: "PlVf1jtwHSJfx3R",
      dateOfBirth: "2000-12-30T13:59:37.534Z",
      verified: true,
      name: {
        firstName: "Mikayla",
        lastName: "Okuneva"
      }
    },
    email: "Aimee.Bode77@yahoo.com",
    name: "Keyboard Kiosk",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-5.png",
    profilePicture: "/assets/images/faces/propic(4).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Doll Gift",
  brand: null,
  price: 71,
  size: null,
  colors: [],
  discount: 8,
  thumbnail: "/assets/images/Gift Shop/Product 6.png",
  images: ["/assets/images/Gift Shop/Product 6.png", "/assets/images/Gift Shop/Product 6.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "top-saled-items"
  }
},

// all-products

{
  id: "306d1d88-12b9-40d1-951b-048a9d9eb6b5",
  slug: "baby-toy-gift",
  shop: {
    id: "8530c396-d8f9-4e51-9ca3-b885bc2d154b",
    slug: "cybershop",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Magdalen.Kovacek69@gmail.com",
    name: "Cybershop",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-8.png",
    profilePicture: "/assets/images/faces/propic(7).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Toy Gift",
  brand: null,
  price: 65,
  size: null,
  colors: [],
  discount: 18,
  thumbnail: "/assets/images/Gift Shop/Product 3.png",
  images: ["/assets/images/Gift Shop/Product 3.png", "/assets/images/Gift Shop/Product 3.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "502f5244-47df-485c-af86-c2a0b53fd7af",
  slug: "baby-doll-gift",
  shop: {
    id: "8530c396-d8f9-4e51-9ca3-b885bc2d154b",
    slug: "cybershop",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Magdalen.Kovacek69@gmail.com",
    name: "Cybershop",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-8.png",
    profilePicture: "/assets/images/faces/propic(7).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Doll Gift",
  brand: null,
  price: 71,
  size: null,
  colors: [],
  discount: 8,
  thumbnail: "/assets/images/Gift Shop/Product 6.png",
  images: ["/assets/images/Gift Shop/Product 6.png", "/assets/images/Gift Shop/Product 6.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "60ac013c-602b-40d0-8250-297677f8b00a",
  slug: "jewellery-gift",
  shop: {
    id: "865f9b6e-dd00-4ba6-847b-65d3a655fe9f",
    slug: "coveted-clicks",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Willie.Stehr@gmail.com",
    name: "Coveted Clicks",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-3.png",
    profilePicture: "/assets/images/faces/propic(2).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Jewellery Gift",
  brand: null,
  price: 172,
  size: null,
  colors: [],
  discount: 18,
  thumbnail: "/assets/images/Gift Shop/Product 8.png",
  images: ["/assets/images/Gift Shop/Product 8.png", "/assets/images/Gift Shop/Product 8.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 4,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "0143ad2d-ef4b-4e4c-9cad-7720baf31b0a",
  slug: "birthday-gift-for-girl",
  shop: {
    id: "037dfc2e-e2b8-446c-856f-87345f5da567",
    slug: "word-wide-wishes",
    user: {
      id: "6b2be297-e6ca-4602-8b58-060f137fe273",
      email: "Vella.Jones@gmail.com",
      phone: "925-396-4712 x54252",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg",
      password: "c3sxcKMNRlMk_Gx",
      dateOfBirth: "1970-11-18T04:44:58.479Z",
      verified: true,
      name: {
        firstName: "Brad",
        lastName: "Mueller"
      }
    },
    email: "Lillie.Schaden11@hotmail.com",
    name: "Word Wide Wishes",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-7.png",
    profilePicture: "/assets/images/faces/propic(6).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Birthday Gift For Girl",
  brand: null,
  price: 162,
  size: null,
  colors: [],
  discount: 8,
  thumbnail: "/assets/images/Gift Shop/pngwing.com (3).png",
  images: ["/assets/images/Gift Shop/pngwing.com (3).png", "/assets/images/Gift Shop/pngwing.com (3).png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "afab9900-9513-4f92-9f64-08a5599b496a",
  slug: "gift-for-boy",
  shop: {
    id: "9799ce59-ca64-4c99-89d6-f2003fa5a1c8",
    slug: "keyboard-kiosk",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Gabe_Considine65@gmail.com",
    name: "Keyboard Kiosk",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-5.png",
    profilePicture: "/assets/images/faces/propic(4).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Boy",
  brand: null,
  price: 98,
  size: null,
  colors: [],
  discount: 11,
  thumbnail: "/assets/images/Gift Shop/Product 5.png",
  images: ["/assets/images/Gift Shop/Product 5.png", "/assets/images/Gift Shop/Product 5.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "68afa84c-8382-47fe-9b94-02ee63075a0f",
  slug: "baby-toy-gift",
  shop: {
    id: "be5d53b4-cb55-48d9-81cf-d95a7078b520",
    slug: "scarlett-beauty",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Kaelyn37@hotmail.com",
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/cycle.png",
    profilePicture: "/assets/images/faces/propic.png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Toy Gift",
  brand: null,
  price: 85,
  size: null,
  colors: [],
  discount: 13,
  thumbnail: "/assets/images/Gift Shop/Product 3.png",
  images: ["/assets/images/Gift Shop/Product 3.png", "/assets/images/Gift Shop/Product 3.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "cf11aa8f-c73c-44fd-9411-64fc4623ab21",
  slug: "baby-doll-gift",
  shop: {
    id: "da162e0f-f738-42fc-93c4-4a1a6de7ec9e",
    slug: "anytime-buys",
    user: {
      id: "8ed08bfa-8db1-40bc-bacc-d023bdaba38d",
      email: "Immanuel44@hotmail.com",
      phone: "1-893-706-4479 x918",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg",
      password: "YPtTXXsAj5MLqgE",
      dateOfBirth: "1972-01-02T23:33:24.703Z",
      verified: true,
      name: {
        firstName: "Jennings",
        lastName: "Johns"
      }
    },
    email: "Hilda.Jerde11@hotmail.com",
    name: "Anytime Buys",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-6.png",
    profilePicture: "/assets/images/faces/propic(5).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Baby Doll Gift",
  brand: null,
  price: 218,
  size: null,
  colors: [],
  discount: 11,
  thumbnail: "/assets/images/Gift Shop/Product 6.png",
  images: ["/assets/images/Gift Shop/Product 6.png", "/assets/images/Gift Shop/Product 6.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "c0802456-cb8d-4ec1-8a56-8ba1554e4d2d",
  slug: "jewellery-gift",
  shop: {
    id: "865f9b6e-dd00-4ba6-847b-65d3a655fe9f",
    slug: "coveted-clicks",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Willie.Stehr@gmail.com",
    name: "Coveted Clicks",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-3.png",
    profilePicture: "/assets/images/faces/propic(2).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Jewellery Gift",
  brand: null,
  price: 142,
  size: null,
  colors: [],
  discount: 12,
  thumbnail: "/assets/images/Gift Shop/Product 8.png",
  images: ["/assets/images/Gift Shop/Product 8.png", "/assets/images/Gift Shop/Product 8.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 4,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "57d0d4cf-ed19-40d4-901b-cd322026e1b5",
  slug: "gold-wedding-ring",
  shop: {
    id: "99a020f3-287c-4684-8c26-1c00eeccf445",
    slug: "scarlett-beauty",
    user: {
      id: "6b2be297-e6ca-4602-8b58-060f137fe273",
      email: "Vella.Jones@gmail.com",
      phone: "925-396-4712 x54252",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg",
      password: "c3sxcKMNRlMk_Gx",
      dateOfBirth: "1970-11-18T04:44:58.479Z",
      verified: true,
      name: {
        firstName: "Brad",
        lastName: "Mueller"
      }
    },
    email: "Kellie32@hotmail.com",
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-9.png",
    profilePicture: "/assets/images/faces/propic(8).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gold Wedding Ring",
  brand: null,
  price: 219,
  size: null,
  colors: [],
  discount: 9,
  thumbnail: "/assets/images/Gift Shop/Product 7.png",
  images: ["/assets/images/Gift Shop/Product 7.png", "/assets/images/Gift Shop/Product 7.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "0cb3ffc0-8928-4c41-8c28-b15c2c5cc47f",
  slug: "gift-for-baby",
  shop: {
    id: "be5d53b4-cb55-48d9-81cf-d95a7078b520",
    slug: "scarlett-beauty",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Kaelyn37@hotmail.com",
    name: "Scarlett Beauty",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/cycle.png",
    profilePicture: "/assets/images/faces/propic.png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Baby",
  brand: null,
  price: 209,
  size: null,
  colors: [],
  discount: 17,
  thumbnail: "/assets/images/Gift Shop/Product 4.png",
  images: ["/assets/images/Gift Shop/Product 4.png", "/assets/images/Gift Shop/Product 4.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 3,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "2c99ae9e-cfab-46fc-8e52-bb40215fc0e3",
  slug: "special-gift-for-young",
  shop: {
    id: "8530c396-d8f9-4e51-9ca3-b885bc2d154b",
    slug: "cybershop",
    user: {
      id: "4ef26594-2190-4d5f-b7fd-a150102a71ef",
      email: "Melvina14@hotmail.com",
      phone: "1-412-575-4346 x7628",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
      password: "D0wFLaO4OSltrUK",
      dateOfBirth: "1978-07-10T06:56:34.658Z",
      verified: true,
      name: {
        firstName: "Marcella",
        lastName: "Grady"
      }
    },
    email: "Magdalen.Kovacek69@gmail.com",
    name: "Cybershop",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-8.png",
    profilePicture: "/assets/images/faces/propic(7).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Special Gift For Young",
  brand: null,
  price: 248,
  size: null,
  colors: [],
  discount: 9,
  thumbnail: "/assets/images/Gift Shop/Product 9.png",
  images: ["/assets/images/Gift Shop/Product 9.png", "/assets/images/Gift Shop/Product 9.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "all-products"
  }
}, {
  id: "cc9f83da-d183-4ea1-840b-4a7c09b40f7e",
  slug: "gift-for-boy",
  shop: {
    id: "39a0e8a3-0450-4ce0-aa8a-7b1bb7753269",
    slug: "constant-shoppers",
    user: {
      id: "61004b0f-06f1-48da-b8ba-8a33aad870c3",
      email: "Lydia_Quitzon@hotmail.com",
      phone: "1-676-317-1134",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/354.jpg",
      password: "KU0QBehAaBOHoaj",
      dateOfBirth: "1992-02-06T11:31:24.624Z",
      verified: true,
      name: {
        firstName: "Sean",
        lastName: "Herzog"
      }
    },
    email: "Adonis7@yahoo.com",
    name: "Constant Shoppers",
    phone: "(613) 343-9004",
    address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
    verified: false,
    coverPicture: "/assets/images/banners/banner-4.png",
    profilePicture: "/assets/images/faces/propic(3).png",
    socialLinks: {
      facebook: null,
      youtube: null,
      twitter: null,
      instagram: null
    }
  },
  title: "Gift For Boy",
  brand: null,
  price: 111,
  size: null,
  colors: [],
  discount: 12,
  thumbnail: "/assets/images/Gift Shop/Product 5.png",
  images: ["/assets/images/Gift Shop/Product 5.png", "/assets/images/Gift Shop/Product 5.png"],
  categories: ["giftshop"],
  status: null,
  reviews: [],
  rating: 5,
  for: {
    demo: "gift",
    type: "all-products"
  }
}];