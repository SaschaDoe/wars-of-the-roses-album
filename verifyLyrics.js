import fs from 'fs';

const content = fs.readFileSync('src/lib/data/songs.ts', 'utf-8');

const songs = [
  { num: 1, id: 'white-rose-red-rose', title: 'White Rose, Red Rose' },
  { num: 2, id: 'the-kingmakers-dawn', title: "The Kingmaker's Dawn" },
  { num: 3, id: 'she-wolf-queen-and-the-king', title: 'She-Wolf Queen and the King' },
  { num: 4, id: 'the-paper-crown', title: 'The Paper Crown' },
  { num: 5, id: 'the-three-suns', title: 'The Three Suns' },
  { num: 6, id: 'no-ransom-called', title: 'No Ransom Called' },
  { num: 7, id: 'to-the-gates-of-london', title: 'To the Gates of London' },
  { num: 8, id: 'towton-die-by-the-damned', title: 'Towton - Die by the Damned' },
  { num: 9, id: 'sacred-lies', title: 'Sacred Lies' },
  { num: 10, id: 'oh-god-see-our-plight', title: 'Oh, God, see our plight' },
  { num: 11, id: 'reaving-river-rats', title: 'Reaving River Rats' },
  { num: 12, id: 'the-kingmakers-scorn', title: "The Kingmaker's Scorn" },
  { num: 13, id: 'le-temple-de-boccace', title: 'Le Temple de Boccace' },
  { num: 14, id: 'melusine', title: 'Melusine' },
  { num: 15, id: 'the-kingmakers-pawn', title: "The Kingmaker's Pawn" },
  { num: 16, id: 'epic-rap-battle-of-the-roses', title: 'Epic Rap Battle of the Roses' },
  { num: 17, id: 'kaboom-2-0-live-wacken-2025', title: 'Kaboom 2.0 (Live Wacken 2025)' },
  { num: 18, id: 'the-kingmakers-fall', title: "The Kingmaker's Fall" },
  { num: 19, id: 'the-winter-of-all-discontent', title: 'The Winter of all Discontent' },
  { num: 20, id: 'rejoice', title: 'Rejoice!' },
  { num: 21, id: 'happy-birthday-stomp', title: 'Happy Birthday Stomp' }
];

console.log('Verifying lyrics for all 21 songs:\n');

let allHaveLyrics = true;
const missing = [];

songs.forEach(song => {
  const pattern = `id: '${song.id}',`;
  const startIdx = content.indexOf(pattern);

  if (startIdx === -1) {
    console.log(`✗ Song ${song.num}: ${song.title} - NOT FOUND IN FILE`);
    allHaveLyrics = false;
    missing.push(song);
    return;
  }

  // Find lyrics array
  const lyricsIdx = content.indexOf('lyrics: [', startIdx);
  const nextSongIdx = content.indexOf('id: \'', startIdx + pattern.length);

  if (lyricsIdx > startIdx && (nextSongIdx === -1 || lyricsIdx < nextSongIdx)) {
    // Check if lyrics array is empty
    const closeBracketIdx = content.indexOf('],', lyricsIdx);
    const lyricsContent = content.substring(lyricsIdx + 9, closeBracketIdx).trim();

    if (lyricsContent.length > 10) {
      const lineCount = (lyricsContent.match(/"/g) || []).length / 2;
      console.log(`✓ Song ${song.num}: ${song.title} - ~${Math.floor(lineCount)} lines`);
    } else {
      console.log(`✗ Song ${song.num}: ${song.title} - EMPTY LYRICS ARRAY`);
      allHaveLyrics = false;
      missing.push(song);
    }
  } else {
    console.log(`✗ Song ${song.num}: ${song.title} - NO LYRICS ARRAY FOUND`);
    allHaveLyrics = false;
    missing.push(song);
  }
});

console.log('\n' + '='.repeat(60));
if (allHaveLyrics) {
  console.log('✅ SUCCESS! All 21 songs have lyrics!');
} else {
  console.log(`❌ MISSING LYRICS for ${missing.length} song(s):`);
  missing.forEach(s => console.log(`   - Song ${s.num}: ${s.title}`));
}
console.log('='.repeat(60));
