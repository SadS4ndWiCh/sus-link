import ShortUniqueId from 'short-unique-id';

const suspects = [
  '5wayskillwithmelon',
  'dhiuwesn2nver4osdoiv.onion',
  'virustroia.exe',
  'plshackme',
  'notisv1rus',
  'howkillants',
  'webcamaccess.bin',
  'leagueoflegendshack',
  'sexyapples',
];

export function generateSuspectUrl() {
  const uid = new ShortUniqueId();

  const suspectIndex = Math.floor(Math.random() * suspects.length);
  const suspectName = suspects[suspectIndex];

  return `${uid.stamp(10)}_${suspectName}`;

}

export function convertUrl(suspectUrl: string) {
  const { protocol, hostname, port } = window.location;

  return `${protocol}//${hostname}${port ? ':' + port : ''}/${suspectUrl}`;
}