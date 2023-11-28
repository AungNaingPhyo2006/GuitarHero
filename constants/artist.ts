// mockData.ts
// Define a type for a song
type Song = {
    id: number;
    title: string;
    lyrics: string[];
    chords: string[];
  };
  
  // Define a type for an artist
  type Artist = {
    id: number;
    name: string;
    songs: Song[];
  };
export const artists : Artist[] = [
    {
      id: 1,
      name: 'စိုင်းထီးဆိုင်',
      songs: [
        { id: 101, title: 'Song 1', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['C', 'G', 'Am', 'F'] },
        { id: 102, title: 'Song 2', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['D', 'A', 'Bm', 'G'] },
      ],
    },
    {
      id: 2,
      name: 'လှိုင်ဦးမော်',
      songs: [
        { id: 201, title: 'Song 3', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['G', 'Em', 'C', 'D'] },
        { id: 202, title: 'Song 4', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['A', 'E', 'F#m', 'D'] },
      ],
    },
    {
      id: 3,
      name: 'ဇော်ပိုင်',
      songs: [
        { id: 301, title: 'Song 5', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['D', 'A', 'Bm', 'G'] },
        { id: 302, title: 'Song 6', lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['C', 'G', 'Am', 'F'] },
      ],
    },
    // Add more artists, songs, and lyrics as needed
  ];
  