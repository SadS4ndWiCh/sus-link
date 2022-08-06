const suspiciousContent = {
  animals: ["aardvark","albatross","alligator","alpaca","ant","anteater","antelope","ape","armadillo","donkey","baboon","badger","barracuda","bat","bear","beaver","bee","bison","boar","buffalo","butterfly","camel","capybara","caribou","cassowary","cat","caterpillar","cattle","chamois","cheetah","chicken","chimpanzee","chinchilla","chough","clam","cobra","cockroach","cod","cormorant","coyote","crab","crane","crocodile","crow","curlew","deer","dinosaur","dog","dogfish","dolphin","dotterel","dove","dragonfly","duck","dugong","dunlin","eagle","echidna","eel","eland","elephant","elk","emu","falcon","ferret","finch","fish","flamingo","fly","fox","frog","gaur","gazelle","gerbil","giraffe","gnat","gnu","goat","goldfinch","goldfish","goose","gorilla","goshawk","grasshopper","grouse","guanaco","gull","hamster","hare","hawk","hedgehog","heron","herring","hippopotamus","hornet","horse","human","hummingbird","hyena","ibex","ibis","jackal","jaguar","jay","jellyfish","kangaroo","kingfisher","koala","kookabura","kouprey","kudu","lapwing","lark","lemur","leopard","lion","llama","lobster","locust","loris","louse","lyrebird","magpie","mallard","manatee","mandrill","mantis","marten","meerkat","mink","mole","mongoose","monkey","moose","mosquito","mouse","mule","narwhal","newt","nightingale","octopus","okapi","opossum","oryx","ostrich","otter","owl","oyster","panther","parrot","partridge","peafowl","pelican","penguin","pheasant","pig","pigeon","pony","porcupine","porpoise","quail","quelea","quetzal","rabbit","raccoon","rail","ram","rat","raven","red deer","red panda","reindeer","rhinoceros","rook","salamander","salmon","sand dollar","sandpiper","sardine","scorpion","seahorse","seal","shark","sheep","shrew","skunk","snail","snake","sparrow","spider","spoonbill","squid","squirrel","starling","stingray","stinkbug","stork","swallow","swan","tapir","tarsier","termite","tiger","toad","trout","turkey","turtle","viper","vulture","wallaby","walrus","wasp","weasel","whale","wildcat","wolf","wolverine","wombat","woodcock","woodpecker","worm","wren","yak","zebra"],
  adjectives: ['beautiful', 'cutie'],
  videoExtensions: ['.mp4', '.avi', '.mov', '.mkv'],
  archiveExtensions: ['.exe', '.bin', '.dll', '.dam', '.dr', '.plugin', '.kit', '.gen'],
  sexualWords: ['hot', 'sexy'],
  games: ['league-of-legends', 'roblox', 'minecraft', 'valorant', 'terraria'],
  virusTypes: ['backdoor', 'browsermodifier', 'ddos', 'exploit', 'trojan'],
  virusNames: ['iloveyou', 'troia', 'aids-trojan', 'wannacry', 'petya'],
  domainExtensions: ['.com', '.com.ru', '.onion', '.jp', '.fr', '.xxx']
};

const suspiciousFormats = [
  'sexualWords-animals-videoExtensions-_-virusTypes-archiveExtensions',
  'games-_-virusTypes-_-virusNames-archiveExtensions',
  'virusNames-domainExtensions',
  'sexualWords-_-games-_-characters-_-virusTypes-archiveExtensions'
]

export const generateSusLink = () => {
  const choosedFormat = randomIndex(suspiciousFormats);

  return generateSusLinkByFormat(choosedFormat);
};

const generateSusLinkByFormat = (linkFormat: string) => {
  const linkStructure = linkFormat.split('-');

  let suspiciousLink = '';
  linkStructure.forEach((instruction) => {
    if (!Object.keys(suspiciousContent).includes(instruction)) {
      suspiciousLink += instruction;
      return
    }

    const content = suspiciousContent[instruction as keyof typeof suspiciousContent];

    suspiciousLink += randomIndex(content);
  });

  return suspiciousLink;
};

const randomProperty = (obj: any) => {
  const keys = Object.keys(obj) as string[];
  const choosedKey = keys[keys.length * Math.random() << 0];

  return obj[choosedKey];
};

const randomIndex = (arr: any[]) => {
  return arr[arr.length * Math.random() << 0];
};