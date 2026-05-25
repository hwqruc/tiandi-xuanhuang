// ===== TRACE =====
var TRACE = true;
function log() { if (TRACE) console.log.apply(console, arguments); }

// ===== COLOR DATA =====
var colorData = {
  tianqing: {title:"一個皇帝的夢",body:"傳說宋徽宗做了一個夢，夢到雨後天空裂開一道縫隙，透出一種無法形容的青藍色。醒來後他寫下「雨過天青雲破處，這般顏色做將來」，下令汝州工匠燒出夢中的顏色。這是中國陶瓷史上最苛刻的命題作文。汝州工匠以瑪瑙末入釉，在1300度的窯火中反覆試驗。天青釉的呈色區間極窄——溫度高了偏藍，低了偏綠，必須在還原焰中精確控制氧氣含量，才能燒出「青中泛藍、溫潤如玉」的效果。成品率極低，稍有瑕疵即砸碎掩埋，絕不讓次品流入民間。所以汝窯傳世品僅存百餘件，每一件都是萬里挑一。宋徽宗的江山後來亡了，但他的夢留了下來。汝窯天青成為整個中國陶瓷史的最高峰，定義了中國人對「完美」的理解——不是張揚的完美，而是溫潤內斂、需要安靜下來才能看見的完美。一千年後方文山在《青花瓷》裡寫「天青色等煙雨，而我在等你」，一個皇帝的夢活成了整個文明的審美基因。",paletteName:"雨過天青",palette:[{hex:"#D7ECF1",name:"月白"},{hex:"#B5D0CC",name:"影青"},{hex:"#F0EEE8",name:"定白"}]},
  shiqing: {title:"18歲的永恆",body:"1113年，宋徽宗的宮廷裡來了一個18歲的少年，名叫王希孟。他不知道自己的壽命只剩不到十年，也不知道自己即將畫出中國美術史上最著名的青綠山水——他只知道手中有一捧來自礦山的藍色粉末。那是藍銅礦研磨成的石青。每一粒粉末都是大地的骨頭。王希孟用石青畫山，用石綠畫樹，在十二米長的絹上鋪展出一個少年的全部野心。《千里江山圖》完成時，見過的人都說那青色彷彿在絹上燃燒。此後王希孟從歷史中消失，有說早逝，有說遁入畫卷。但他留下的石青色沒有褪。近一千年後展開畫卷，青山依然鮮豔奪目——植物顏料會氧化、會褪色，但礦物不會。礦石是地球的骨骼，石青是山巒的顏色本身。18歲少年把礦石塗在絹上，就是把永恆鎖進了畫裡。",paletteName:"千里江山",palette:[{hex:"#5A9E6F",name:"石綠"},{hex:"#F2E8D5",name:"絹色"},{hex:"#A67B5B",name:"赭石"}]},
  liulv: {title:"「柳」與「留」",body:"中國古人發現，在所有的樹木中，柳樹最先感知春天。寒冬還沒完全退場，柳枝上已經冒出針尖大的嫩芽，遠遠看去是一層若有若無的淺綠。這是中國人每年第一個看到的生命信號。然後他們發現，「柳」和「留」發音一樣。這就是一切的開端。因為諧音，柳樹成為送別的樹——折一條柳枝給遠行的人，是把春天塞進他手裡，也是說「留下來」。王維在渭城送別元二，早晨剛下過雨，空氣裡是濕潤的塵土味，滿眼是雨後的青青柳色。他看著這片綠，知道朋友喝完這杯酒就要去往安西——今天的新疆庫車，那是一個唐朝人認知裡差不多是天涯海角的地方。折柳送別後來變成全民族的儀式。長安城外的灞橋兩邊種滿柳樹，每一根柳枝都被人折過。清明插柳、寒食戴柳——中國人的離別、思念和時間感，一直被編碼在這種嫩綠色裡。",paletteName:"灞橋煙柳",palette:[{hex:"#FFBF4D",name:"鵝黃"},{hex:"#B8D8E8",name:"水色"},{hex:"#F5F2E6",name:"素白"}]},
  zhusha: {title:"三千年的紅色線索",body:"如果把硃砂在中國文明中留下的痕跡串起來，你會得到一部微縮的中國史。商代：貞人在龜甲上刻下卜辭，把硃砂粉末調成糊狀填入刻痕，讓文字在骨甲上「燃燒」起來。這是我們今天能看到的最早的漢字，它們的顏色是硃砂色的。漢代：道家方士用硃砂煉製丹藥，相信硃砂——這種從大地深處挖出來的紅色礦物——是溝通天地的媒介。用硃砂畫符籙，鬼邪不敢近。唐代以後：皇帝用硃砂調製的硃墨批閱奏章。「硃批」兩個字本身就是權力的顏色——天下文書千萬，只有皇帝的筆可以是紅的。同時，每個文人都在用硃砂印泥在作品上鈐印。一枚紅色印章蓋下去，就是一段生命的契約。1278年，文天祥兵敗被俘，在零丁洋上寫下「人生自古誰無死，留取丹心照汗青」。丹心就是硃砂色的心。從甲骨文到印泥到丹心，中國人把最鄭重的承諾都塗成了硃砂色。",paletteName:"金石丹心",palette:[{hex:"#2C2C2C",name:"墨色"},{hex:"#F7F3ED",name:"宣紙"},{hex:"#CFA850",name:"泥金"}]},
  yanzhi: {title:"絲綢之路的顏色",body:"公元前138年，張騫從長安出發西行。十三年後他回來時，帶回的不只是葡萄、胡桃和汗血馬——還有一包種子。那是紅藍花的種子。在此之前，中原女子用茜草染紅。茜草染出來的紅偏暗、偏褐，像乾涸的血。紅藍花不一樣——它的花瓣碾碎後釋放出一種鮮豔得令人心悸的紅色，是中原人從未見過的顏色。他們給它取名「胭脂」。到了唐代，胭脂迎來了真正的黃金時代。長安女子發明了令人眼花繚亂的胭脂用法：「酒暈妝」在兩頰塗大面積胭脂，像喝醉了酒；「桃花妝」薄薄一層，嬌而不豔；「飛霞妝」只塗在顴骨高處，如晚霞掠過。絲綢之路運來的不只是一包包乾花瓣，還有一種文明的審美被悄悄改變了。蘇軾說「淡妝濃抹總相宜」——胭脂最妙的地方就在這裡：濃烈與淡雅之間有無窮的層次，全看你怎麼用。",paletteName:"紅妝仕女",palette:[{hex:"#55789A",name:"花青"},{hex:"#FFF8F0",name:"象牙白"},{hex:"#B8835C",name:"檀色"}]},
  haitanghong: {title:"四個人，一朵花",body:"唐玄宗在沈香亭召見楊貴妃時，貴妃醉意未消，被侍女扶出來，面帶酡紅，鬢亂釵橫。玄宗看著她的樣子笑了：「海棠睡未足。」從此「海棠春睡」成為中國文學中美人的最高代稱。三百年後，蘇軾被貶黃州，在定惠院中發現一株海棠。在當時的黃州，海棠是稀罕物。蘇軾欣喜若狂，夜夜去看它，甚至舉著蠟燭去——「只恐夜深花睡去，故燒高燭照紅妝」。一個被貶的詩人，怕一朵花在夜裡睡著了，舉著蠟燭去陪它。又過了幾十年，李清照晚年流落江南，寫下「知否知否，應是綠肥紅瘦」。一夜風雨過後，她問侍女海棠花怎麼樣了，侍女隨口說「和昨天一樣」，她急了——你知道什麼，肯定是葉子更肥了、花更瘦了。四個人，一朵花，一千年的海棠紅串聯起中國文學中所有關於美好易逝的表達。",paletteName:"海棠春睡",palette:[{hex:"#C03B4B",name:"胭脂"},{hex:"#99BD7E",name:"柳綠"},{hex:"#C5A3B0",name:"藕荷"}]},
  ehuang: {title:"春天的五種形狀",body:"鵝黃不是一種單一的顏色——它是春天在不同事物上投下的五種暖調。第一種：初生的小鵝。絨毛剛乾，是一團會移動的嫩黃，稚嫩得讓人不敢用力呼吸。第二種：柳樹的新芽。早春時節柳枝末梢泛起一層若有若無的淺黃——楊萬里對著窗外喊「且莫深青只淺黃」，別急著變綠，讓這層鵝黃多留一會兒。第三種：唐代女子的額頭。她們把花粉調成黃色，薄塗於額間，就叫「鵝黃妝」——把春天畫在臉上出門。第四種：杯中的酒。唐宋名酒「鵝黃酒」，色如鵝雛、味甘而醇。陸游騎驢過劍門時想的就是這一杯。第五種：清晨的陽光。冬天的陽光是白的，春天的陽光開始泛黃——當你注意到陽光變暖的那一天，鵝黃就來了。",paletteName:"鵝黃嫩柳",palette:[{hex:"#99BD7E",name:"柳綠"},{hex:"#B0D08A",name:"嫩綠"},{hex:"#FEFAF2",name:"乳白"}]},
  qiuxiang: {title:"可以聞到的顏色",body:"《紅樓夢》第四十回，賈母帶著劉姥姥逛大觀園，看見瀟湘館的窗紗舊了，說要換新的。鳳姐說庫裡有一種叫「軟煙羅」的紗，遠看像煙霧一樣。賈母說軟煙羅有四色：雨過天青、秋香、鬆綠、銀紅。曹雪芹在這裡做了一個大膽的通感：秋香色不是看到的，是聞到的。當秋天桂花盛開，你聞到那股幽遠綿長的香氣時，抬頭看見的花簇就是秋香色——介於黃綠之間，低調、不張揚，和桂花的氣味一樣，不濃烈但飄得很遠。李清照寫桂花「暗淡輕黃體性柔，情疏跡遠只香留」——顏色可以淡，但香氣會留很久，飄到你看不見的地方。清代宮廷將秋香色與明黃、杏黃並列為黃色系重要色名。寶玉就常穿「秋香色立蟒白狐腋箭袖」。秋香色是貴族才能用的顏色——不是因為它顯貴，而是因為它太難染，需要掌握植物染料的微妙配比才能得到那種「聞得到的黃綠」。",paletteName:"桂子秋香",palette:[{hex:"#EDE0D4",name:"藕色"},{hex:"#8B6E5A",name:"茶褐"},{hex:"#B8835C",name:"檀色"}]},
  xinghuang: {title:"一枝紅杏出牆來",body:"杏黃是杏子成熟時的顏色——不是生澀的青杏，也不是熟透的橘紅，而是恰到好處的暖金色。南宋詩人范成大退居石湖，寫下『梅子金黃杏子肥，麥花雪白菜花稀』，用四種顏色畫出江南初夏：梅子的金黃、杏子的暖黃、蕎麥花的雪白、油菜花的明黃。杏黃在中國人的生活裡反覆出現。它是佛教僧衣的顏色——『杏黃袈裟』是漢傳佛教最高等級的法衣，只有方丈和主持大法會的僧人才能穿。明清兩代的皇家目錄《大明會典》《大清會典》將杏黃列為僅次於明黃的御用色，皇太子和親王的朝服即為杏黃色。蘇州博物館藏有一件清代杏黃緞繡龍袍，在博物館燈光下呈現出一種溫暖得近乎透明的金色——不是明黃的耀眼，而是像秋天的銀杏葉被陽光穿透時的那種金。杏黃最微妙的地方在於：它比鵝黃沉穩，比明黃謙遜，是中國人對『恰到好處』的色彩表達。",paletteName:"杏黃秋暖",palette:[{hex:"#8C4356",name:"絳紫"},{hex:"#678C5A",name:"蒼綠"},{hex:"#F0EFE8",name:"霜色"}]},
  yuebai: {title:"一個「騙人」的名字",body:"月白不是一個誠實的名字。它說自己白，其實是淡藍色的。但這恰恰是中國古人對色彩最精微的洞察——他們發現月光照在白色物體上的時候，看到的不是純白，而是帶著一層清冷的淡藍。他們把這個差異捕捉下來，給它取名叫「月白」。名字叫白，顏色是月光，月光不是白的。這就是中國人最獨特的地方：我們願意為一個微妙的差異專門造一個名字。清代雍正皇帝的夕月祭祀朝袍就是月白色——在月光下祭月，人衣與天光融為一體。雍正是一個審美極簡的皇帝，他選擇月白而非明黃來面對天地，是因為他懂：最莊重的儀式不需要最張揚的顏色。《紅樓夢》中黛玉常穿月白——「月白繡花小毛皮襖」，清冷而素淨。月白是林黛玉的顏色，也是中秋望月時每個人心裡的那層淡藍。",paletteName:"月白風清",palette:[{hex:"#3D5A80",name:"黛藍"},{hex:"#F0EFE8",name:"霜色"},{hex:"#C0C5C8",name:"銀灰"}]},
  shuangse: {title:"藏在霜裡的時間",body:"兩千五百年前的一個秋晨，秦國的河邊，蘆葦蒼蒼。有人站在河邊看到露水凝結成了霜。這是一個普通得不能再普通的自然現象——天氣冷了，露水就會結霜。但這個人看著霜，想到了一件事：時間。「蒹葭蒼蒼，白露為霜。所謂伊人，在水一方。」霜的出現意味著秋天快結束了，一年又要過去了，而他想見的人還在河對岸，不知道什麼時候能見到。他大概是第一個把時間的流逝和霜的顏色聯繫在一起的人。一千多年後，李白半夜醒來，看到床前一片白色，以為是霜——「床前明月光，疑是地上霜」。他把月光錯認為霜，在月亮和霜之間建立了一個跨越時空的詩性等式：月=霜=思念=時間。霜色的妙處在於它幾乎是白色但又不是白。它比白多了一絲冷、一絲灰、一絲提醒：時間在走，季節在轉，而中國人對時光最細膩的感知，就凝在這一層薄霜的顏色裡。",paletteName:"蒹葭蒼蒼",palette:[{hex:"#C8C0B5",name:"蘆灰"},{hex:"#8EAABC",name:"秋水"},{hex:"#F5C352",name:"杏黃"}]},
  gaosu: {title:"未經染色的白",body:"『縞』是未經染色的生絹，『素』是沒有花紋的白帛。縞素不是添加了什麼才變白的——恰恰相反，它是因為什麼都沒有添加，才保持了最初的白。中國古人對這種『不加修飾的白』有一種哲學層面的敬重。《詩經》裡反覆出現『縞衣』——女子穿著素白的絹衣，不加文繡，卻比任何錦衣華服更動人。『縞衣綦巾，聊樂我員』，那個人只穿了一件素白絹衣，就讓我滿心歡喜。孔子說『繪事後素』——畫畫之前先要有素白的底子。這句話後來變成中國美學的核心信條：絢爛歸於平淡，所有的華彩最終都要回到一張白絹。道家主張『見素抱樸』——保持樸素的狀態，回歸本真的顏色。在佛教傳入之前，中國喪服就用縞素——《戰國策》載『天下縞素』，荊軻刺秦失敗後，燕國上下縞素致哀。白色是終結的顏色，也是回到原點的顏色。沒有添加，就沒有喪失。縞素是中國人對『純粹』的最終定義。",paletteName:"素以為絢",palette:[{hex:"#2C2C2C",name:"墨色"},{hex:"#9EA8AE",name:"青灰"},{hex:"#C8A882",name:"赭色"}]},
  xuanse: {title:"黑暗裡的宇宙",body:"《千字文》第一句：「天地玄黃，宇宙洪荒。」一千五百年來，中國兒童識字的第一課就是這八個字。玄是天的顏色——不是正午藍色的天，而是天將亮未亮時那種深暗裡透出微赤的天。黃是大地的顏色。八個字講完了中國人對宇宙的全部認知。但是玄遠不止是一個顏色。《道德經》說「玄之又玄，眾妙之門」——玄是萬物的起源，是那個深不可測、卻孕育了一切光芒的黑暗。它不是「無」，它是「有」之前的沉默，是宇宙大爆炸前一秒的黑暗。秦始皇懂得玄的力量。他統一六國後宣布大秦帝國屬水德，水德尚黑——「衣服旄旌節旗皆上黑」。黑色第一次也是唯一一次成為中國王朝的國色。周天子祭天時穿玄衣纁裳，以玄色面對蒼穹。玄是中國人對宇宙的第一次叩問：在一切開始之前，那片深暗裡藏著什麼？",paletteName:"天地玄黃",palette:[{hex:"#F5C352",name:"杏黃"},{hex:"#D4B870",name:"土黃"},{hex:"#5A7A6A",name:"青銅"}]},
  mose: {title:"五色令人盲，墨分五色",body:"中國人對矛盾的事物有特殊的好感。『墨分五色』就是其中最精妙的一個——明明只是一錠黑墨，兌上不同比例的水，就能在宣紙上分出焦、濃、重、淡、清五個層次。唐代張彥遠在《歷代名畫記》中寫道：『運墨而五色具。』只用黑色，就能畫出世間萬物——黑色的山、黑色的水、黑色的蘭竹、黑色的仕女。元代王冕畫墨梅，自題詩云：『我家洗硯池頭樹，朵朵花開淡墨痕。』他家洗硯池邊的梅花樹，因為常年沾染墨汁，開出的花居然帶著淡淡的墨痕。這可能是中國文學史上最浪漫的畫面——一棵被墨汁『染色』的梅花樹。在中國傳統中，墨色並非只是一種顏色，它承載著整個書畫傳統——《蘭亭序》的墨跡、蘇軾《寒食帖》的墨韻、八大山人的墨趣，都是同一種黑色在不同靈魂中的顯影。五色令人目盲，五色令人心亂，所以老子說『五色令人盲』。而文人們選擇了墨——選擇在單一的黑色中尋找無限的層次。",paletteName:"墨分五色",palette:[{hex:"#F0EFE8",name:"霜色"},{hex:"#B5B5B5",name:"清灰"},{hex:"#4A3C34",name:"焦茶"}]},
  jiangzi: {title:"紫色的權力之旅",body:"公元前七世紀，齊桓公做了一件在當時看起來微不足道的小事：他開始穿紫色衣服。由於他是霸主，臣民跟風，整個齊國都瘋狂購入紫色布料。紫色被炒到一匹紫絹的價格是普通素絹的五倍。齊桓公不得不出面干預才平息了這場紫色狂熱。這是中國歷史上第一次「顏色經濟泡沫」。一千年後，唐代的官員品級制度把紫色放在了頂端——三品以上著紫，四品五品著緋，六品七品著綠，八品九品著青。「滿朝朱紫貴」成為權貴的代稱。紫色從齊桓公的個人品味變成了整個帝國的等級制度。而在這之前，還有一條更深的線索。傳說老子西出函谷關之前，關令尹喜望見東方有紫氣飄來，知道必有聖人將至。果然，老子騎著青牛出現了。「紫氣東來」從此成為祥瑞的最高級別。又過了八百年，明成祖在北京建造皇宮，取名為「紫禁城」——紫微星是天帝的居所。從齊桓公到紫禁城，紫色走了兩千年，從一國之好走成了整個文明的權力符號。",paletteName:"紫氣東來",palette:[{hex:"#622A1D",name:"玄色"},{hex:"#E8B81A",name:"琉璃黃"},{hex:"#1560A0",name:"石青"}]}
};

// ===== DOM REFS (assigned after DOM is ready) =====
var starMap, lightBurst, inkBloom, tapHint, narrOverlay, narrPanel, mobileNav, closeBtn;

// ===== STATE =====
var currentFamily = null;
var currentPageIdx = {qing:0, chi:0, huang:0, bai:0, hei:0};
var pageCount = {};
var narrOpen = false;
var inkBlooming = false;
var enteringFamily = false;
var justClosedNarrative = false;

var families = ['qing','chi','huang','bai','hei'];
var starToFamily = {zhenxing:'huang', suixing:'qing', yinghuo:'chi', taibai:'bai', chenxing:'hei'};
var familyToStar = {huang:'zhenxing', qing:'suixing', chi:'yinghuo', bai:'taibai', hei:'chenxing'};

// ===== STARFIELD CANVAS =====
(function(){
  var c = document.getElementById('starfieldCanvas');
  var ctx = c.getContext('2d');
  var stars = [], w, h;

  function resize(){
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (var i = 0; i < 80; i++) {
    stars.push({
      x: Math.random() * 3000,
      y: Math.random() * 3000,
      r: Math.random() * 1.6 + 0.3,
      baseOpacity: Math.random() * 0.5 + 0.15,
      twinkleSpeed: Math.random() * 3 + 2,
      twinkleOffset: Math.random() * Math.PI * 2
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var twinkle = 0.5 + 0.5 * Math.sin(t / 1000 * s.twinkleSpeed + s.twinkleOffset);
      var alpha = s.baseOpacity * (0.6 + 0.4 * twinkle);
      ctx.beginPath();
      ctx.arc(s.x % w, s.y % h, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200,200,210,' + alpha + ')';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// ===== IMAGE FALLBACKS =====
function showFallback(img) {
  img.style.display = 'none';
  var fb = img.nextElementSibling;
  if (fb && fb.classList.contains('fallback')) fb.style.display = 'block';
}

function setupImageFallbacks() {
  // skip .poem-img — poems use printed text, no fallback needed
  document.querySelectorAll('.hand-img:not(.poem-img)').forEach(function(img) {
    img.addEventListener('error', function() { showFallback(this); });
    if (img.complete && img.naturalWidth === 0) showFallback(img);
  });
}

function checkFallbacksIn(el) {
  el.querySelectorAll('.hand-img:not(.poem-img)').forEach(function(img) {
    if (img.complete && img.naturalWidth === 0) showFallback(img);
  });
}

// ===== STAR MAP INIT =====
var starOrder = ['zhenxing','suixing','yinghuo','taibai','chenxing'];
var starDelays = [600, 1600, 2600, 3600, 4600];
var labelMap = {zhenxing:'labelZhen', suixing:'labelSui', yinghuo:'labelYing', taibai:'labelTai', chenxing:'labelChen'};

function initStars() {
  starOrder.forEach(function(cls, i) {
    setTimeout(function() {
      var star = document.querySelector('.main-star.' + cls);
      // labels don't have ids anymore, find by shared class
      var labels = document.querySelectorAll('.star-label.' + cls);
      if (star) star.style.opacity = '1';
      labels.forEach(function(l) { l.style.opacity = '1'; });
    }, starDelays[i]);
  });
}

function twinkleStars() {
  var allStars = document.querySelectorAll('.main-star');
  setInterval(function() {
    var s = allStars[Math.floor(Math.random() * allStars.length)];
    if (!s || s.style.opacity === '0') return;
    var core = s.querySelector('.core');
    if (!core) return;
    var orig = core.style.boxShadow || '';
    core.style.boxShadow = orig.replace(/0 0 (\d+)px/g, function(_, n) {
      return '0 0 ' + (parseInt(n) * 2.2) + 'px';
    });
    core.style.transform = 'translate(-50%,-50%) scale(1.6)';
    setTimeout(function() {
      core.style.boxShadow = orig;
      core.style.transform = 'translate(-50%,-50%) scale(1)';
    }, 180 + Math.random() * 200);
  }, 2200 + Math.random() * 1000);
}

// ===== PAGE STACKS & COLOR PALETTE =====
function initPageStacks() {
  families.forEach(function(fid) {
    var stack = document.getElementById('stack-' + fid);
    var pages = stack.querySelectorAll('.color-page');
    pageCount[fid] = pages.length;
    currentPageIdx[fid] = 0;
    buildPalette(fid, pages);
  });
}

function buildPalette(fid, pages) {
  var palette = document.getElementById('palette-' + fid);
  if (!palette) return;
  palette.innerHTML = '';
  for (var i = 0; i < pages.length; i++) {
    (function(idx) {
      var color = pages[idx].dataset.color;
      var isDark = pages[idx].classList.contains('dark-text');
      var s = document.createElement('div');
      s.className = 'swatch' + (idx === 0 ? ' active' : '') + (isDark ? ' dark-border' : '');
      s.style.background = color;
      s.addEventListener('click', function() {
        if (!inkBlooming) goToPage(fid, idx);
      });
      palette.appendChild(s);
    })(i);
  }
}

function updatePalette(fid, idx) {
  var palette = document.getElementById('palette-' + fid);
  if (!palette) return;
  var swatches = palette.querySelectorAll('.swatch');
  swatches.forEach(function(s, i) { s.classList.toggle('active', i === idx); });
}

// ===== TAP HINT =====
function updateTapHint(fid, idx) {
  if (!tapHint || !currentFamily) return;
  var stack = document.getElementById('stack-' + fid);
  var pages = stack.querySelectorAll('.color-page');
  var page = pages[idx];
  if (!page) return;
  tapHint.classList.remove('light', 'dark');
  tapHint.classList.add(page.classList.contains('light-text') ? 'light' : 'dark');
  tapHint.classList.add('visible');
}

function showTapHint() {
  if (tapHint && currentFamily) tapHint.classList.add('visible');
}

function hideTapHint() {
  if (tapHint) tapHint.classList.remove('visible');
}

// ===== INK BLOOM PAGE TRANSITION =====
function goToPage(fid, idx) {
  var stack = document.getElementById('stack-' + fid);
  var pages = stack.querySelectorAll('.color-page');
  var count = pages.length;
  if (idx < 0 || idx >= count) return;
  var oldIdx = currentPageIdx[fid];
  if (idx === oldIdx || inkBlooming) return;
  log('goToPage:', fid, oldIdx, '→', idx);

  inkBlooming = true;
  var newPage = pages[idx];
  var newColor = newPage.dataset.color;

  // Clear leftover inline styles so CSS classes can take effect
  inkBloom.classList.remove('dissolving');
  inkBloom.style.transform = '';
  inkBloom.style.opacity = '';

  // Organic center — biased toward tap area, with jitter
  var cx = window.innerWidth / 2 + (Math.random() - 0.5) * 160;
  var cy = window.innerHeight / 2 + (Math.random() - 0.5) * 100;
  inkBloom.style.left = cx + 'px';
  inkBloom.style.top = cy + 'px';

  // Randomly pick ink splash texture for organic edge
  var tex = Math.random() < 0.5 ? 'bloom1' : 'bloom2';
  inkBloom.style.maskImage = 'url(assets/ink/' + tex + '.png)';
  inkBloom.style.webkitMaskImage = 'url(assets/ink/' + tex + '.png)';

  // Bloom with new color from the start — visible against current page
  inkBloom.style.background = newColor;

  // CSS .spreading handles transform animation; inline styles must be clear
  inkBloom.classList.add('spreading');

  // Switch page at bloom peak, then dissolve
  setTimeout(function() {
    pages.forEach(function(p, i) {
      p.classList.remove('current');
      if (i === idx) p.classList.add('current');
    });
    currentPageIdx[fid] = idx;
    updatePalette(fid, idx);
    inkBloom.classList.remove('spreading');
    inkBloom.classList.add('dissolving');
  }, 550);

  setTimeout(function() {
    inkBloom.classList.remove('dissolving');
    inkBloom.style.transform = 'translate(-50%,-50%) scale(0)';
    inkBloom.style.opacity = '0';
    inkBlooming = false;
  }, 1050);
}

// ===== TOUCH SWIPE FOR COLOR SWITCHING =====
var touchStartX = 0, touchStartY = 0, touchStartTime = 0;
function setupTouchSwipe() {
  document.addEventListener('touchstart', function(e) {
    if (!currentFamily || narrOpen || inkBlooming || enteringFamily) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, {passive: true});

  document.addEventListener('touchend', function(e) {
    if (!currentFamily || narrOpen || inkBlooming || enteringFamily) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    var dt = Date.now() - touchStartTime;
    // Require horizontal swipe: faster than 30px and more horizontal than vertical
    if (Math.abs(dx) < 30 || Math.abs(dx) < Math.abs(dy) || dt > 800) return;
    var fid = currentFamily;
    var total = pageCount[fid];
    if (!total) return;
    var dir = dx < 0 ? 1 : -1;
    var newIdx = currentPageIdx[fid] + dir;
    if (newIdx >= 0 && newIdx < total) {
      goToPage(fid, newIdx);
    }
  });
}

// ===== KEYBOARD NAVIGATION =====
function setupKeyboard(fid) {
  document.addEventListener('keydown', function(e) {
    if (currentFamily !== fid || narrOpen || inkBlooming || enteringFamily) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      goToPage(fid, currentPageIdx[fid] + 1, 1);
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPage(fid, currentPageIdx[fid] - 1, -1);
    }
  });
}

// ===== LIGHT BURST =====
function showBurst(x, y, color, cb) {
  var inner = lightBurst.querySelector('.burst-inner');
  var size = Math.max(window.innerWidth, window.innerHeight) * 2.8;
  lightBurst.style.width = size + 'px';
  lightBurst.style.height = size + 'px';
  lightBurst.style.left = x + 'px';
  lightBurst.style.top = y + 'px';
  inner.style.background = 'radial-gradient(circle,' + color + ' 0%,rgba(0,0,0,0) 55%)';
  lightBurst.classList.add('active');
  setTimeout(cb, 500);
}

// ===== ENTER / EXIT FAMILY =====
function enterFamily(fid) {
  log('enterFamily called, fid=', fid, 'enteringFamily=', enteringFamily, 'inkBlooming=', inkBlooming, 'narrOpen=', narrOpen);
  if (enteringFamily || inkBlooming) { log('  BLOCKED: already transitioning'); return; }

  closeNarrative();

  // Deactivate ALL families
  families.forEach(function(f) {
    var el = document.getElementById('fam-' + f);
    if (el) el.classList.remove('active');
  });

  var family = document.getElementById('fam-' + fid);
  if (!family) { log('  ERROR: family not found:', fid); return; }
  log('  activating family:', family.id);

  enteringFamily = true;

  // Reset to first page
  var stack = document.getElementById('stack-' + fid);
  var pages = stack.querySelectorAll('.color-page');
  log('  pages in stack:', pages.length);
  pages.forEach(function(p, i) {
    p.classList.toggle('current', i === 0);
  });
  currentPageIdx[fid] = 0;
  updatePalette(fid, 0);

  var starCls = familyToStar[fid];
  var starEl = starCls ? document.querySelector('.main-star.' + starCls) : null;
  log('  starCls:', starCls, 'starEl found:', !!starEl);

  function activate() {
    log('  activate() callback fired');
    starMap.classList.add('fading');
    family.classList.add('active');
    currentFamily = fid;
    log('  currentFamily set to:', currentFamily);
    checkFallbacksIn(family);
    updateTapHint(fid, 0);
    if (window.innerWidth <= 768) {
      mobileNav.style.display = 'block';
      highlightMobile(fid);
    }
    document.body.style.overflow = 'hidden';
    setTimeout(function() { lightBurst.classList.remove('active'); }, 100);
    setTimeout(function() {
      enteringFamily = false;
      log('  enteringFamily reset to false');
    }, 600);
  }

  if (starEl) {
    var rect = starEl.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var core = starEl.querySelector('.core');
    var color = core ? getComputedStyle(core).backgroundColor : '#fff';
    log('  showing burst at', cx, cy, 'color:', color);
    showBurst(cx, cy, color, activate);
  } else {
    log('  no starEl, activating directly');
    activate();
  }
}

function backToStars() {
  log('backToStars called, currentFamily=', currentFamily);
  families.forEach(function(f) {
    var el = document.getElementById('fam-' + f);
    if (el) el.classList.remove('active');
  });
  starMap.classList.remove('fading');
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'hidden';
  currentFamily = null;
  closeNarrative();
  hideTapHint();
}

function highlightMobile(fid) {
  document.querySelectorAll('.m-item').forEach(function(item) {
    item.classList.toggle('active', item.dataset.family === fid);
  });
}

// ===== NARRATIVE =====
function openNarrative(pageEl) {
  log('openNarrative called, name=', pageEl.dataset.name, 'narrOpen=', narrOpen, 'enteringFamily=', enteringFamily, 'inkBlooming=', inkBlooming);
  if (narrOpen || inkBlooming || enteringFamily || justClosedNarrative) { log('  BLOCKED'); return; }

  var name = pageEl.dataset.name;
  var color = pageEl.dataset.color;
  var data = colorData[name];
  if (!data) { log('  no data for:', name); return; }
  log('  opening narrative for:', name, color);

  var nameImg = pageEl.querySelector('.name-img');
  var colorName = nameImg ? nameImg.alt : '';
  if (!colorName) {
    var fb = pageEl.querySelector('.name-img+.fallback');
    if (fb) colorName = fb.textContent;
  }

  // Poem — always printed text
  var poemTextEl = pageEl.querySelector('.poem-img + .fallback');
  var poemText = poemTextEl ? poemTextEl.textContent : '';
  document.getElementById('nPoem').textContent = poemText;

  var metaEl = pageEl.querySelector('.color-meta');
  var metaText = metaEl ? metaEl.textContent : '';

  narrOverlay.style.setProperty('--ncolor', color);
  narrOverlay.querySelectorAll('.narrative-frame').forEach(function(f) {
    f.style.background = color;
  });
  narrPanel.querySelector('.n-swatch').style.background = color;
  document.getElementById('nColorName').textContent = colorName;
  document.getElementById('nTitle').textContent = data.title;
  document.getElementById('nBody').textContent = data.body;
  document.getElementById('nMeta').textContent = metaText;
  document.getElementById('nHex').textContent = color;
  // Render palette — main color first, then companions
  document.getElementById('nPaletteName').textContent = data.paletteName || '';
  var paletteCards = document.getElementById('nPaletteCards');
  paletteCards.innerHTML = '';
  if (data.palette && data.palette.length) {
    // Prepend main color
    var all = [{hex: color, name: colorName, main: true}].concat(data.palette.map(function(p) {
      return {hex: p.hex, name: p.name, main: false};
    }));
    all.forEach(function(p) {
      var card = document.createElement('div');
      card.className = 'n-pcard';
      var swatch = document.createElement('div');
      swatch.className = 'n-pcard-swatch' + (p.main ? ' main' : '');
      swatch.style.background = p.hex;
      var label = document.createElement('div');
      label.className = 'n-pcard-name' + (p.main ? ' main' : '');
      label.textContent = p.name;
      card.appendChild(swatch);
      card.appendChild(label);
      paletteCards.appendChild(card);
    });
  }
  document.getElementById('nTabs').style.display = data.palette && data.palette.length ? '' : 'none';
  switchTab('story');

  narrOverlay.classList.add('visible');
  narrOpen = true;
  hideTapHint();
  document.body.style.overflow = 'hidden';
}

function switchTab(name) {
  document.querySelectorAll('.n-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.tab === name);
  });
  document.getElementById('nStory').classList.toggle('active', name === 'story');
  document.getElementById('nPaletteContent').classList.toggle('active', name === 'palette');
}

function closeNarrative() {
  if (!narrOpen) return;
  log('closeNarrative');
  narrOverlay.classList.remove('visible');
  narrOpen = false;
  justClosedNarrative = true;
  setTimeout(function() { justClosedNarrative = false; }, 400);
  showTapHint();
  setTimeout(function() {
    narrOverlay.style.removeProperty('--ncolor');
  }, 750);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  log('=== DOM READY ===');

  // Assign DOM refs
  starMap = document.getElementById('starMap');
  lightBurst = document.getElementById('lightBurst');
  inkBloom = document.getElementById('inkBloom');
  tapHint = document.getElementById('tapHint');
  narrOverlay = document.getElementById('narrOverlay');
  narrPanel = document.getElementById('narrPanel');
  mobileNav = document.getElementById('mobileNav');
  closeBtn = document.getElementById('closeBtn');

  setupImageFallbacks();
  initPageStacks();
  setupTouchSwipe();
  initStars();
  twinkleStars();

  // Star clicks → enter family
  document.querySelectorAll('.main-star').forEach(function(star) {
    star.addEventListener('click', function(e) {
      e.stopPropagation();
      var fid = star.dataset.family;
      log('★ STAR CLICK:', fid);
      if (fid) enterFamily(fid);
    });
  });

  // Click anywhere on active color family → narrative
  document.querySelectorAll('.color-family').forEach(function(family) {
    family.addEventListener('click', function(e) {
      if (e.target.closest('[data-action="back"]') || e.target.closest('.color-palette')) return;
      var fid = family.id.replace('fam-', '');
      if (currentFamily !== fid || narrOpen || inkBlooming || enteringFamily) return;
      var page = family.querySelector('.color-page.current');
      if (page) {
        log('◆ FAMILY CLICK → narrative:', page.dataset.name);
        openNarrative(page);
      }
    });
  });

  // Back buttons (use event delegation on document)
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="back"]');
    if (btn) {
      log('← BACK BUTTON clicked');
      backToStars();
    }
  });

  // Keyboard nav for each family
  families.forEach(setupKeyboard);

  // Tab switching
  document.getElementById('nTabs').addEventListener('click', function(e) {
    var tab = e.target.closest('.n-tab');
    if (tab) switchTab(tab.dataset.tab);
  });

  // Narrative close
  narrOverlay.addEventListener('click', function(e) {
    if (e.target === narrOverlay || e.target.closest('.n-close')) {
      closeNarrative();
    }
  });
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeNarrative();
  });

  // ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (narrOpen) closeNarrative();
      else if (currentFamily) backToStars();
    }
  });

  // Mobile nav
  document.querySelectorAll('.m-item').forEach(function(item) {
    item.addEventListener('click', function() {
      var fid = item.dataset.family;
      if (!fid) return;
      if (currentFamily) backToStars();
      setTimeout(function() { enterFamily(fid); }, 400);
    });
  });

  // Resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mobileNav.style.display = 'none';
    } else if (currentFamily) {
      mobileNav.style.display = 'block';
    }
  });

  log('=== INIT COMPLETE ===');
});
