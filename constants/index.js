import sushis from '../assets/sakuraFestival/sushis.png';
import dishes from '../assets/sakuraFestival/dishes.png'
import drinks from '../assets/sakuraFestival/drinks.png';
import sweets from '../assets/sakuraFestival/sweets.png';


export const orderExample = [
  {
    title: 'Sashimi',
    price: 4.99,
    quantitySelected: 3,
    image:
    "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688029725/q7jxyvcwn562tazjdbrw.jpg",
  },
  {
    title: 'Muchiga',
    price: 4.1,
    quantitySelected: 1,
    image:
    "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934848/bg7vjubouiqkb0osvypi.webp",
  }
]

export const categories = [
  {
    label: "Sushis",
    japaneseLabel: "寿司",
    icon: sushis,
    description: "Fresh and flavorful Japanese delicacies.",
  },
  {
    label: "Drinks",
    japaneseLabel: "飲み物",
    icon: drinks,
    description: "Refreshing beverages to quench your thirst.",
  },
  {
    label: "Sweets",
    japaneseLabel: "お菓子",
    icon: sweets,
    description: "Tempting treats for your sweet tooth.",
  },
  {
    label: "Dishes",
    japaneseLabel: "食器",
    icon: dishes,
    description: "Delectable and diverse culinary creations.",
  },
];

export const items = [
  {
    id: 3,
    price: 4.99,
    specification: "4 units",
    category: "Sushis",
    title: "Sashimi",
    description:
      "Experience the epitome of Japanese culinary artistry with our exquisite selection of sashimi. Delicately sliced, fresh raw fish and seafood are expertly arranged to showcase their vibrant colors and flavors. Each bite offers a sublime combination of textures and tastes, allowing you to savor the pure essence of the ocean.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688029725/q7jxyvcwn562tazjdbrw.jpg",
  },
  {
    id: 14,
    price: 4.1,
    specification: "1 cup 50cl",
    category: "Drinks",
    title: "Mugicha",
    description:
      'Mugicha, also known as "barley tea," is a refreshing and popular beverage in Japan and other Asian countries. This aromatic and caffeine-free infusion is made from roasted barley grains, which give it a rich, toasty flavor and a warm brown hue. Mugicha is commonly enjoyed both hot and cold, making it a versatile thirst-quencher throughout the year. Its mild and soothing taste, coupled with its reputed health benefits, including aiding digestion and promoting relaxation, have made mugicha a beloved staple in households and a widely appreciated beverage in various cultural traditions. Whether served with meals or as a comforting beverage on its own, mugicha offers a delightful and wholesome experience for tea enthusiasts and those seeking a caffeine-free alternative.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934848/bg7vjubouiqkb0osvypi.webp",
  },
  {
    id: 8,
    price: 6.99,
    specification: "1 unit",
    category: "Dishes",
    title: "Ramen",
    description:
      "Ramen is a popular Japanese dish that consists of Chinese-style wheat noodles served in a flavorful broth, typically garnished with various toppings. It has gained worldwide popularity for its rich and comforting flavors.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688820720/edcq0wswrkafd9gcknja.webp",
  },
  {
    id: 6,
    price: 8.99,
    specification: "1 cup 30cl",
    category: "Drinks",
    title: "Sakura Tea",
    description:
      "Indulge in the enchanting flavors of Sakura with our exquisite tea. Crafted from handpicked cherry blossoms, this delicate infusion captivates your senses with its floral aroma and subtle sweetness. Immerse yourself in the essence of springtime as you sip this soothing and refreshing blend. Perfect for moments of relaxation and contemplation, Sakura Tea is a harmonious symphony of flavors that transports you to the serene beauty of Japanese gardens in full bloom.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688636019/dy5th5zltanq5gwa1ywx.png",
  },
  {
    id: 5,
    price: 6.99,
    specification: "1 unit",
    category: "Sweets",
    title: "Parfait",
    description:
      "Parfait is a delightful and visually appealing dessert that originated in Japan. It is a layered dessert consisting of various ingredients such as ice cream, whipped cream, fresh fruits, jelly, syrup, and sometimes cake or cookies. The layers are carefully arranged in a tall glass or bowl, creating a visually appealing and indulgent treat. Parfaits often come in a wide variety of flavors, including classic options like chocolate, vanilla, and strawberry, as well as unique combinations like matcha green tea, mango, or black sesame. The combination of textures and flavors in a parfait makes it a satisfying and refreshing dessert option. Whether enjoyed as a special treat or as a dessert at a café or restaurant, the Japanese parfait is known for its beautiful presentation and delicious taste.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688635944/kxlcoqbamuful2avaitm.jpg",
  },
  {
    id: 7,
    price: 3.99,
    specification: "1 cup 40cl",
    category: "Drinks",
    title: "Amazake",
    description:
      "Amazake is a traditional Japanese fermented rice drink that is sweet, non-alcoholic, and highly nutritious. It is made by combining cooked rice or rice koji (a type of cultured rice) with water and allowing it to ferment for a certain period. The fermentation process breaks down the rice starches into simple sugars, resulting in a naturally sweet taste.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688820071/cnnq23zlukxoc0cwtujq.jpg",
  },
  {
    id: 4,
    price: 4.95,
    specification: "4 units",
    category: "Sushis",
    title: "Maki",
    description:
      "Maki sushi is a popular type of sushi originating from Japan. It consists of bite-sized rolls made with sushi rice and various ingredients wrapped in a sheet of seaweed called nori. The filling can include fresh seafood, such as tuna, salmon, or shrimp, as well as vegetables, avocado, or even cooked meats. The ingredients are tightly rolled together using a bamboo mat called a makisu. Once rolled, the maki sushi is typically sliced into bite-sized pieces. Maki sushi is often served with soy sauce, wasabi, and pickled ginger, and it is enjoyed for its combination of flavors, textures, and presentation. It is a versatile and widely appreciated sushi option both in Japan and internationally.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688059836/md5svfrf8ewucb83aqqq.jpg",
  },
  {
    id: 2,
    price: 7.2,
    specification: "6 units",
    category: "Sweets",
    title: "Daifuku",
    description:
      "These soft and pillowy glutinous rice cakes are filled with luscious and velvety sweet bean paste. Encased in a delicate mochi shell, each bite offers a delightful balance of textures and a burst of flavor. ",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1688028496/wu3m2wlfzgfo60w6ebmt.jpg",
  },
  {
    id: 15,
    price: 6.6,
    specification: "3 units",
    category: "Sushis",
    title: "Temaki",
    description:
      'Temaki is a popular and delectable Japanese dish that features a cone-shaped sushi roll, hand-rolled using nori (seaweed) sheets and filled with a variety of fresh and savory ingredients. The word "temaki" translates to "hand roll" in Japanese, highlighting the unique and customizable nature of this culinary delight. Typically served as a single, large sushi roll, temaki allows diners to craft their personalized combinations by filling the cone with rice, raw fish (such as tuna, salmon, or shrimp), vegetables (like cucumber, avocado, or radish), and other flavorful add-ons. With its delightful blend of textures and tastes, temaki offers a delightful experience for sushi enthusiasts and novices alike, inviting them to savor each bite with a sense of artistry and culinary adventure.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934925/s7djygxjgsbnf3ru3ysg.jpg",
  },
  {
    id: 1,
    price: 10.99,
    specification: "150g piece",
    category: "Sweets",
    title: "Castella Cake",
    description:
      "Immerse yourself in the rich history and enticing flavors of Castella, a beloved Japanese sponge cake. Originating from Portugal, this delicacy has been embraced by Japan and perfected over centuries. Our Castella is a masterpiece of simplicity and texture, with its moist and velvety crumb that melts in your mouth.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1690353329/jraeedg5enoofcesfs0q.webp",
  },
  {
    id: 13,
    price: 8.5,
    specification: "3 units 90g each",
    category: "Sweets",
    title: "Taiyaki",
    description:
      "Taiyaki is a delightful and iconic Japanese dessert that has captured the hearts of many with its charming fish-shaped appearance and scrumptious fillings. Traditionally made using a pancake-like batter, taiyaki is cooked in a fish-shaped mold, resulting in a golden-brown, crispy exterior with a fluffy and moist interior. The most popular fillings are sweet red bean paste (anko) and custard, though modern variations can include chocolate, cheese, matcha, or even savory options like cheese and sausage. This beloved street food snack, often enjoyed warm, embodies a perfect harmony of textures and flavors, making it a delightful treat for people of all ages, and a must-try delicacy for anyone exploring Japanese cuisine and culture.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934718/j4ugqy1tbuprdelcnett.jpg",
  },
  {
    id: 11,
    price: 5.99,
    specification: "6 units",
    category: "Sweets",
    title: "Mochi Daifuku",
    description:
      "Mochi is a traditional Japanese delicacy that has become popular worldwide for its unique texture and delightful taste. It is made from glutinous rice, also known as sticky rice or sweet rice, which is pounded into a smooth and elastic dough. This labor-intensive process gives mochi its characteristic chewy and stretchy consistency. Mochi can be enjoyed in various forms and flavors, including as round rice cakes, filled with sweet fillings like red bean paste or ice cream, or used in savory dishes. It is commonly served during special occasions and festivals, such as New Year celebrations in Japan. Its versatility and delightful mouthfeel have earned mochi a dedicated following, making it a beloved treat for people of all ages and a delightful way to experience the rich and diverse world of Japanese cuisine.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689933527/k9cfwvsnsut5sgvrmxev.webp",
  },
  {
    id: 10,
    price: 11.1,
    specification: "8 units",
    category: "Sushis",
    title: "Uramaki",
    description:
      'Uramaki is a type of sushi roll that stands out for its reversed preparation method compared to traditional maki rolls. In Japanese, "ura" means "reverse," hence the name "uramaki." Unlike regular maki, where the seaweed (nori) is on the outside, uramaki has the rice on the outside while the nori is hidden inside. The rice serves as a base for various fillings, such as raw fish, avocado, cucumber, or tempura, providing an array of flavors and textures in each roll. Uramaki is often coated with sesame seeds, tobiko (fish roe), or other toppings, adding an extra dimension of taste and visual appeal. This creative and modern sushi variation has become widely popular in sushi restaurants worldwide, allowing sushi enthusiasts to enjoy an exciting and diverse range of flavors within a single roll.',
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689011381/chntugz1eougkruvu8eb.webp",
  },
  {
    id: 12,
    price: 0,
    specification: "1 unit offered by person",
    category: "Dishes",
    title: "Miso Soup",
    description:
      "Miso soup is a traditional and nourishing Japanese soup known for its comforting and umami-rich flavors. The key ingredient is miso, a fermented soybean paste that comes in various colors and flavors, depending on the fermentation process and ingredients used. To prepare miso soup, dashi (a flavorful broth made from kombu seaweed and bonito flakes) is combined with miso paste, creating a flavorful base. Additional ingredients like tofu, seaweed, green onions, mushrooms, and sometimes fish or vegetables are added to enhance the soup's taste and nutritional value. This wholesome and soul-warming dish is a staple in Japanese cuisine, often served as a side dish or starter, providing a perfect balance of savory, earthy, and comforting notes that have made it a beloved classic both within Japan and across the world.",
    image:
      "https://res.cloudinary.com/dnhq4fcyp/image/upload/v1689934523/qeyjplzx0dy1fzumqpwk.webp",
  },
];

export const emojis = [
  "👨 ",
  "👱‍♀️ ",
  "👧 ",
  "👩‍🦰 ",
  "👩‍🦳 ",
  "👶 ",
  "👧🏾 ",
  "🧓🏾 ",
  "👨🏿‍🦱 ",
  "👨🏾‍🦳 ",
  "👨🏾 ",
  "👩🏻 ",
  "👩🏻‍🦲 ",
  "🧒🏼 ",
  "👨🏼‍🦰 ",
  "👨🏼 ",
  "👨🏼‍🦳 ",
  "👸🏼 ",
  "👦🏻 ",
  "👱🏻‍♀️ ",
  "👨🏻 ",
  "👸🏻 ",
  "👳🏻‍♀️ ",
  "👧🏻 ",
  "👨🏾‍🦳 ",
  "🤶🏾 ",
  "👧🏾 ",
  "👴🏾 ",
  "👲🏾 ",
  "👩🏿‍🦲 ",
  "👨🏿 ",
  "🧓🏿 ",
  "👨🏿‍🦳 ",
  "👱🏿‍♀️ ",
  "👨‍🦱 ",
  "👨🏻 ",
  "🧔🏽 ",
];
