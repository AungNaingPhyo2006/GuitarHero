// mockData.ts
// Define a type for a song
type Song = {
    id: number;
    title: string;
    pattern : string,
    intro : string,
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
        {  id: 101,
           title: 'ဒီထက်ပိုပြီး မတတ်နိုင်ဘူး',
           pattern : 'UD ud ud ',
           intro : 'G bm F am ',
           lyrics: ['နှစ်တိုင်းကြုံကာနေမယ်', 'ဟေမာန်ဆောင်းရယ်', 
           'ဒီအလွမ်းရယ်','ချစ်တဲ့သူ','မျှော်နေခဲ့တဲ့',
           'ကိုယ့်အတွေးများလည်း','နောက်တစ်ခေါက်လာချင်သော်လည်း','မလာနိုင်တော့','ရင်နာမိတယ်','မငိုချင်ဘူး',
           'ဒီဆောင်းတစ်ညတော့','မငိုချင်ဘူး','အချစ်ဆုံးနဲ့လမ်းခွဲ ','ကိုယ်စီသွားတဲ့',
           'ဒီဆောင်းတစ်ညမှာ','အချစ်ဆုံးနဲ့ လမ်းဆုံးမှာ ငိုနေခဲ့','တယ်',
          'ချစ်တေးတွေ သီဆိုနေပြီး','ကြင်သူရဲ့ ရင်ခွင်ထဲမှာ','ဘ၀မေ့ကာ ပျော်နေတော့မယ်','အို မိန်းမချောလေးရယ်','အလွမ်းတေးတွေ သီဆိုရင်း',
        'ကိုယ်ဆုတောင်းနေမယ် အချစ်ရယ်','မငိုချင်ဘူး ဒီဆောင်းတစ်ညတော့ မငိုချင်ဘူး...'], 
           chords: [
            'C          Em', 
           '    Am','    F',
            '    C', '   Em', '  D  G' ,
             'C        Em',
             '   Am','   F','    C',' G7', '    F C', 
            'G','F','C','G','C  F G'] },
        { id: 102, 
          title: 'ဒီဆောင်းတစ်ည',
          pattern : 'Key : C , Beat : Go GO ',
          intro : '(Am D)2 (Dm G7)2 C Dm C F',
          lyrics: ['နှစ်တိုင်းကြုံကာနေမယ်', 'ဟေမာန်ဆောင်းရယ် ...ဒီအလွမ်းရယ်' , 
          'ချစ်တဲ့သူ မျှော်နေခဲ့တဲ့',
          'ကိုယ့်အတွေးများလည်း','နောက်တစ်ခေါက်လာချင်သော်လည်း','မလာနိုင်တော့.... ရင်နာမိတယ်','မငိုချင်ဘူး',
          'ဒီဆောင်းတစ်ညတော့ ....မငိုချင်ဘူး','အချစ်ဆုံးနဲ့လမ်းခွဲ ....ကိုယ်စီသွားတဲ့',
          'ဒီဆောင်းတစ်ညမှာ','အချစ်ဆုံးနဲ့ လမ်းဆုံးမှာ ငိုနေခဲ့','တယ်',
         'ချစ်တေးတွေ သီဆိုနေပြီး','ကြင်သူရဲ့ ရင်ခွင်ထဲမှာ','ဘ၀မေ့ကာ ...ပျော်နေတော့မယ်','အို မိန်းမချောလေးရယ်','အလွမ်းတေးတွေ ...သီဆိုရင်း',
       'ကိုယ်ဆုတောင်းနေမယ် ...အချစ်ရယ်','မငိုချင်ဘူး','ဒီဆောင်းတစ်ညတော့ ....မငိုချင်ဘူး...'], 
          chords: [
           'C....   ....Em', 
          'Am....      ....F',
           'C....   ....Em', 'D...  ....G' ,
            'C....  ....Em',
            'Am....  ....F','    C',' G7....   ....F-C', 
           'G.... ....F','C','G','C  F G', 'C....   ....Em', 
           'Am....      ....F',
            'C....   ....Em', 'D...  ....G' ,
             'C....  ....Em',
             'Am....  ....F','    C',' G7....   ....F-C', 
          ] },
      ],
    },
    {
      id: 2,
      name: 'လှိုင်ဦးမော်',
      songs: [
        { id: 201,
           title: 'ချစ်စရာလေးပါ', 
        pattern : 'UD ud ud ',
        intro : 'G bm F am ',
        lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['G', 'Em', 'C', 'D'] },
        { id: 202,
           title: 'ပျော်ပါစေ', 
           pattern : 'UD ud ud ',
           intro : 'G bm F am ',
           lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['A', 'E', 'F#m', 'D'] },
      ],
    },
    {
      id: 3,
      name: 'ဇော်ပိုင်',
      songs: [
        { id: 301, title: 'ရင်ခုန်ရလွန်းလို့',
        pattern : 'UD ud ud ',
        intro : 'G bm F am ',
         lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['D', 'A', 'Bm', 'G'] },
        { id: 302, title: 'မဆုံသောလမ်း', 
        pattern : 'UD ud ud ',
        intro : 'G bm F am ',
        lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['C', 'G', 'Am', 'F'] },
      ],
    },
    {
      id: 4,
      name: 'ပူစူး',
      songs: [
        { id: 401, title: 'တစ်မိုးအောက်',
        pattern : 'Key: D , Slow Go Go : d d udud d',
        intro : 'D Gbm G Gm Em A',
         lyrics: ['လမင်းကြီးလည်းသိပါတယ်', 'ကြယ်စင်လေးလည်း သိပါတယ်',
          'ဘယ်လောက်နင့်ကို ငါအရမ်းချစ်တယ်','ဘယ်လောက်နင့်ကို ငါမြတ်နိုးတယ်',
        'တောင်တန်းကြီးလည်း သိပါတယ်', 'ပင်လယ်ကြီးလည်း သိပါတယ်','ငါနင့်အတွက်ဆို ...အချိန်မရွေး အသင့်ပဲ',
      'ငါ အသက်ပေးဆိုတောင်... ပေးဝံ့တယ်','အရင်လို အချိန်ပြည့် မတွေ့နိုင်လည်း ','ရေမြေတွေ ခြားနားနေလည်း',
    'ဒီကမ္ဘာမြေပြင်ရဲ့','တစ်မိုးအောက်ထဲမှာပဲ', 'ငါဆိုနေတဲ့ သီချင်းလေး','မင်းကြားရင်ကွယ်','နင်လေတစ်ယောက်တည်း','ငိုမနေနဲ့နော်ကွယ်',
    'တစ်မြေဆီ ငါတို့နှစ်ဦး','ဝေးခဲ့ကြပေမယ့်','ရင်ခုန်သံချင်း','တွယ်ဆက်ထားသလိုပဲ','ပြန်ဆုံမယ့်ရက်','လက်ချိုးရေတွက်ရင်းနဲ့','အားတင်းထားနော်ကွယ်',''],
          chords: ['D....', 'Gbm....', 'G.... ....Gm','Em.... ....A',
           'D....', 'Gbm....', 'G.... ....Gm','Em.... ....A','Bm....','E7....','G....','A....',
          'D....','Gbm....','G....','A....','D....','Gbm....','G....','A....','D....','Gbm.... ....G','A....'
        ,'D....Gbm....G....Gm....Em....A...'] },
        { id: 302, title: 'မဆုံသောလမ်း', 
        pattern : '',
        intro : 'G bm F am ',
        lyrics: ['Lyric line 1', 'Lyric line 2', 'Lyric line 3'], chords: ['C', 'G', 'Am', 'F'] },
      ],
    },
  ];
  