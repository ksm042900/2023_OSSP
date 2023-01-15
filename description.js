function getManual(){
  //HashMap 선언
  HashMap = function(){
    this.map = new Array();
  }
  //HashMap 기능 추가
  HashMap.prototype = {
    put: function(key,value){
      this.map[key] = value;
    },
    get : function(key){
      return this.map[key];
    },
    clear : function(){
    this.map = new Array();
    },
    getKeys : function(){
      var keys = new Array();
      for(i in this.map){
        keys.push(i);
      }
      return keys;
    }
  };

  //HashMap 객체 생성
  description = new HashMap();
  character = new HashMap();
  birthplace = new HashMap();
  weight = new HashMap();
  enName = new HashMap();

  //품종별 설명--------------------------------------------------------------------------------------------------------------
  
  //치와와
  enName.put("치와와","(Chihuahua)");
  description.put("치와와","치와와는 멕시코의 개 품종 중 하나입니다. 멕시코 치와와주에서 유래하였으며, 품종으로는 치와와, 장모치와와가 있습니다. 평균 몸무게는 2.7kg, 평균 키는 18cm로 반려견 중에서 가장 작은 품종입니다. 털색은 붉은색, 검은색, 담황색, 얼룩무늬 등이며 털은 단모종과 장모종으로 구별되지만 단모종이 흔히 볼 수 있는 종입니다. 귀는 위로 쫑긋하며, 눈은 크고 돌출되어 있습니다.");
  character.put("치와와","완고한, 공격적인, 총명한, 애정이 풍부한, 고집스러운, 성격이 좋은");
  birthplace.put("치와와","중국");
  weight.put("치와와","1.5 - 3kg(소형견)")

  //푸들
  enName.put("푸들","(Poodle)");
  description.put("푸들","푸들은 프랑스의 국견입니다. 과거의 푸들은 사냥개였으며 원산지는 독일이고, 프랑스 귀족 여성들에 의해 인기를 얻어 널리 퍼져나갔으며, 털이 길고 양털 모양으로 자랍니다. 털이 자주 엉키기 때문에 하루에 1회 이상 빗질은 필수이며, 털 빠짐이 적습니다.");
  character.put("푸들","총명한, 경계심이 많은, 활동적인, 훈련 능력이 뛰어난, 본능적인, 충실한");
  birthplace.put("푸들","프랑스, 독일");
  weight.put("푸들","2 - 4kg, 17 - 29kg (토이푸들, 미니어쳐푸들, 스탠다드푸들 등 크기가 다양함)");

  //불도그
  enName.put("불도그","(Poodle)");
  description.put("불도그","불도그는 영국 잉글랜드 원산의 개이며 브리티쉬 불독, 잉글리쉬 불독이라고도 불립니다. 머리는 크고 네모졌으며 코는 뭉뚝합니다. 입은 폭이 넓고 위로 향하였으며 어깨는 떡 벌어졌고, 다리는 튼튼합니다. 근년에는 개량되어 매우 순한 품종에 속하며 주요 질병으로는 폐암, 신장암, 췌장암, 위암 등이 있습니다. 그리고 코가 뭉뚝해서 코가 자주 막힌다고 합니다.");
  character.put("불도그","고집 센, 유순한, 우호적인, 사교적인");
  birthplace.put("불도그","영국, 잉글랜드");
  weight.put("불도그","22 - 25kg(중형견)");

  //진도개
  enName.put("진도개","(Jindodog)");
  description.put("진도개","진돗개(진도개)는 개 품종 중 하나로, 한국의 대표적인 개 품종으로 꼽힙니다. 용맹하고 충성심이 강해 주인을 잘 따르지만 한 주인에게 매이는 성격이 너무 강한지라 사역견으로는 못 씁니다. 어미에 대한 모성애가 매우 강합니다.");
  character.put("진도개"," 총명한, 대담한, 활동적인, 충성스러운, 충실한, 용감한");
  birthplace.put("진도개","대한민국 진도");
  weight.put("진도개","15 - 23kg(중형견)");

  //비숑프리제
  enName.put("비숑프리제","(Bichon frisé)");
  description.put("비숑프리제","비숑 프리제는 중세기 불어로 '비숑'은 작고 긴 털을 가진 개를 의미합니다. 주로 흰색의 곱슬거리는 털을 가진 프랑스와 벨기에 그리고 스위스 원산의 개로서, 곱슬한 털이 자라면서 얼굴이 동그란 형태가 되는 것이 특징입니다.");
  character.put("비숑프리제"," 총명한, 대담한, 활동적인, 충성스러운, 충실한, 용감한");
  birthplace.put("비숑프리제","프랑스, 벨기에, 스페인, 카나리 제도, 테네리페 섬");
  weight.put("비숑프리제","6 - 11kg(소형견)");

  //말티즈
  enName.put("말티즈","(Maltese)");
  description.put("말티즈","말티즈 혹은 몰티즈로 불리며 '몰티즈'란 이름은 이 개가 지중해의 몰타 섬이 원산지여서 붙여졌다는게 정설이지만, 지중해의 멜리타 지역에서 유래되었다고 주장하는 학자들도 있습니다. 온몸이 순백색의 길고 부드러운 명주실 같은 털로 덮인 매우 아름다운 개로, 새까만 코끝과 어두운 색의 눈이 순백색의 털이 돋보입니다. 아름다운 모습과 온화하고 높은 지능을 지녀 애완용으로 널리 사육되었습니다.");
  character.put("말티즈"," 총명한, 대담한, 활동적인, 충성스러운, 충실한, 용감한");
  birthplace.put("말티즈","프랑스, 벨기에, 스페인, 카나리 제도, 테네리페 섬");
  weight.put("말티즈","2 - 5kg(소형견)");

  //골든리트리버
  enName.put("골든리트리버","(Golden Retriever)");
  description.put("골든리트리버","골든 리트리버는 금색의 윤기나는 털을 가지고 있는데, 속털은 방수성이고 겉털은 탄력성이 있습니다. 장모지만 털빠짐이 매우 심한 견종입니다. 사람을 좋아하고 잘 따르며, 온순한 성품을 지니고 있습니다. 그래서 다른 견종에 비해 훈련이 쉬운 편입니다. 사회성이 좋아 어린아이들에게도 관대하여 외국에서는 자폐 아동의 사회성 육성에 이용되고 국내에서는 안내견으로서 활용됩니다.");
  character.put("골든리트리버","우호적인, 총명한, 믿음직한, 부드러운, 신뢰할 만한, 자신감에 차있는");
  birthplace.put("골든리트리버","영국, 스코틀랜드, 잉글랜드");
  weight.put("골든리트리버","25 - 34kg(중-대형견)");

  //셰퍼드
  enName.put("셰퍼드","(Shepherd)");
  description.put("셰퍼드","독일에서 개량된 목양견으로, 세계에서 가장 유명한 품종 중 하나입니다. 후각·청각이 예민하고 동작이 민첩하며 군용견·반려견등으로 많이 사육되고 있습니다. 제1차 세계 대전이 일어날 때부터 이미 독일 전역에서 인기가 높았습니다. 당시 군용견으로 훈련을 받아 크게 활약했으며 영리하고 붙임성이 있고 책임감이 강합니다. 대표적인 늑대개입니다.");
  character.put("셰퍼드","호기심이 많은, 총명한, 고집스러운, 경계심이 많은, 충성스러운");
  birthplace.put("셰퍼드","독일");
  weight.put("셰퍼드","23 - 43kg(대형견)");

  //시베리안허스키
  enName.put("시베리안허스키","(Siberian Husky)");
  description.put("시베리안허스키","시베리안 허스키는 활동적이고 힘이 넘치며, 쾌활한 종으로, 선조는 시베리아 북극지방의 극심한 추위와 혹독한 환경에서 건너와서 북동 아시아의 축치인(시베리아 북동부의 축치 반도에 사는 민족)에 의해 교배되었습니다. 이 견종은 놈 지역의 골드 러시 기간 동안 알래스카로 수입되었으며, 그곳에서 미국과 캐나다에 처음에는 썰매개로 들어와 퍼졌습니다.");
  character.put("시베리안허스키","우호적인, 총명한, 외향적인, 경계심이 많은, 온화한");
  birthplace.put("시베리안허스키","시베리아");
  weight.put("시베리안허스키","16 - 34kg(중-대형견)");

  //요크샤테리어
  enName.put("요크샤테리어","(Yorkshire Terrier)");
  description.put("요크샤테리어","한때 노동자들이 기르던 개이며, 쥐잡기용 강아지로 인기가 높았던 애완견입니다. 털의 색깔은 머리와 사지만 짙은 황갈색이고, 그 외의 다른 부위는 감청색 계통입니다. 요크셔 테리어에 자주 보이는 건강 문제로는 기관지염, 림프관확장증, 간문맥전신단락증, 백내장, 녹내장, 건성각결막염, 고혈압, 뇌졸중, 동맥경화, 위궤양, 췌장염, 간암, 수두증 등이 있습니다.");
  character.put("요크샤테리어","총명한, 대담한, 자신감에 차있는, 독립심이 강한, 용맹스러운");
  birthplace.put("요크샤테리어","잉그랜드");
  weight.put("요크샤테리어","2 - 3kg(소형견)");

  //사모예드
  enName.put("사모예드","(Samoyed)");
  description.put("사모예드","사모예드는 시베리아 원산으로 썰매용·가정용·반려용으로 많이 기릅니다. 북부 시베리아의 유목민 사모예드족이 옛날부터 기르던 썰매용 개로서, 부족의 이름을 따서 명명되었습니다. 우아한 용모와 대담한 성격, 썰매용으로 단련된 강력한 힘을 인정받아 세계에 알려지면서 세계의 304여개의 견종 사이에서 가장 비싼 견종이라고도 합니다. 또, 이와 같이 북부 시베리아 쪽에서 살다보니 더위에 취약하며 털 빠짐에 유의해야합니다.");
  character.put("사모예드","생기있는, 우호적인, 사교성 좋은, 고집스러운, 경계심이 많은, 장난스러운");
  birthplace.put("사모예드","러시아, 시베리아");
  weight.put("사모예드","16 - 30kg(중형견)");

  //슈나우저
  enName.put("슈나우저","(Schnauzer)");
  description.put("슈나우저","슈나우저는 1400년대 ~ 1500년대로부터 기원된 독일산 반려견의 한 품종입니다. 슈나우저는 1400년대 말부터 독일에서 농장개로 길러져, 쥐를 잡고 가축을 몰고 다니며 외양간을 지켰다고 합니다. 슈나우저는 주둥이를 뜻하는 독일어 'Schnauze' 에서 왔습니다. 주둥이 끝에 수염같은 털이 수북한것이 특징입니다.");
  character.put("슈나우저","생기있는, 우호적인, 사교성 좋은, 장난스러운");
  birthplace.put("슈나우저","독일");
  weight.put("슈나우저","미니어처 슈나우저 5 - 8kg, 스탠다드 슈나우저 14-20kg 자이언트 슈나우저 34-43kg");

  //스피츠
  enName.put("스피츠","(Spitz)");
  description.put("스피츠","한국에서 보이는 스피츠는 거의 대부분 재패니즈 스피츠입니다. 늑대와 닮은 쫑긋 선 귀, 꼴랑 말려 올라간 꼬리, 그리고 V자형 얼굴이 특징. 이것은 스피츠 계열로 구분되는 개들의 공통적 특징입니다. 털은 한국이나 일본 토종견처럼 단모종도 있고 썰매견 계열처럼 장모종도 있지만 모두 이중모라는 특징이 있습니다.");
  character.put("스피츠","생기있는, 적극적인, 사교성 좋은, 충성스러운, 총명한, 경계심이 많은");
  birthplace.put("스피츠","독일, 일본 등");
  weight.put("스피츠","6 - 10kg(소-중형견)");
  
  //시바이누
  enName.put("시바이누","(Shiba Inu)");
  description.put("시바이누","시바이누(시바견)은 일본 고유의 견종입니다. 일본에서 천연기념물로 지정된 7개의 일본 견종(현재는 6종)의 하나로, 1936년 12월 16일에 지정되었습니다. 현존 6견종 중 유일한 소형 견종이지만, 사육하는 수는 가장 많습니다. 일본견보존회에 따르면, 현재 일본에서 사육되는 일본 견종 6종 가운데, 시바이누는 약 80%를 차지하고 있으며 미국을 비롯해 외국에도 인기가 많습니다.");
  character.put("시바이누","매력적인, 감각이 예민한, 경계심이 많은, 겁이 없는, 자신감에 차있는, 충실한");
  birthplace.put("시바이누","일본");
  weight.put("시바이누","7 - 11kg(소-중형견)");

  //시추
  enName.put("시추","(Chichu)");
  description.put("시추","시추는 중국에서 비롯한 개 품종이며 과거 중국 황실이 기르던 견종입니다. 길고 화려한 털이 특징으로 꼬리를 높이 세우고 당당하게 걷는 자태는 볼 만합니다. 성격이 사교적이고 친근하고 영리하여 가정견으로서 인기가 높습니다. 하지만 '식탐'이 좀 많은 편이며 가끔 고집을 부리기도 합니다. 안구가 튀어나와 있어 각막에 상처를 입거나 결막염 등의 안구질환에 걸리기 쉽습니다.");
  character.put("시추","장난스러운, 영리한, 우호적인, 총명한, 생기있는, 외향적인");
  birthplace.put("시추","중국, 티베트");
  weight.put("시추","4 -7kg(소형견)");

  //시추
  enName.put("웰시코기","(Welsh corgi)");
  description.put("웰시코기","영국 웨일스 지역의 목양견 계통의 개 품종 중 하나입니다. 영국 왕실에서 키우던 개로 유명하며, 국내에는 80년대 말부터 애견 백과를 통해 간접적으로 알려지기 시작하다가 2010년대 중반부터 유명해지기 시작해 지금은 대중적으로 상당한 인기를 자랑하는 종입니다. 활동적이며 운동량이 많고, 털빠짐이 심하고 꼬리를 자른 웰시코기들이 많습니다. 자르지 않으면, 다리가 짧아서 꼬리가 쓸릴 수도 있기 때문입니다.");
  character.put("웰시코기","영리한, 매력적인, 사교성좋은, 우호적인, 활발한");
  birthplace.put("웰시코기","영국 웨일스");
  weight.put("웰시코기","14 - 17kg(중형견)");
  
  //잭러셀테리어
  enName.put("잭러셀테리어","(Jack Russell Terrier)");
  description.put("잭러셀테리어","잭 러셀 테리어는 주로 흰색의 몸통에 짧거나 그보다 조금 길고 거친 털을 지닌 영국산 테리어 견종으로 땅굴 속에 숨은 여우를 사냥할 목적으로 교배된 소형견입니다. 대형견에 맞먹는 강인한 체력과 뛰어난 도약력에 민첩함, 높은 지능, 섬세함, 호기심, 대담함, 집요함을 두루 갖췄으며, 쾌활하고 사람을 무척 좋아하지만 독립심이 왕성하고 고집이 세므로 생후 3개월부터 체계적인 복종 훈련을 시킬 필요가 있습니다.");
  character.put("잭러셀테리어","총명한, 에너제틱한, 고집스러운, 겁이 없는, 익살스러운, 탄탄한, 잘 짖는");
  birthplace.put("잭러셀테리어","잉글랜드");
  weight.put("잭러셀테리어","6 -8kg(소형견)");

  //포메라니안
  enName.put("포메라니안","(Pomeranian)");
  description.put("포메라니안","포메라니안은 중앙유럽(오늘날 독일 북동부, 폴란드 북서부)에 있는 포메라니아 지역에서 유래된 스피츠 종류의 반려견입니다. 작고 귀여운 외모와 복슬복슬한 털이 특징이며 털빠짐이 있습니다. 작은 크기 때문에 소형견로 분류되는데, 포메라니안은 대형 스피츠종 개인 독일 스피츠에서 유래되었습니다.");
  character.put("포메라니안","장난스러운, 친근한, 우호적인, 총명한, 사교성 좋은, 활동적인");
  birthplace.put("포메라니안","독일, 폴란드");
  weight.put("포메라니안","1.9 - 3.5kg(소형견)");
        
  //핀셔
  enName.put("핀셔","(Pinscher)");
  description.put("핀셔","핀셔는 성질이 난폭하고 공격적인 개라고 알려져 있고, 실제로도 그런 특성들 때문에 개인 경호용으로도 쓰여왔습니다. 하지만 워낙 인기가 많아서 지속적으로 공격성을 억누르는 쪽으로 교배가 진행되어, 현대에 이르러서는 예전에 비해 공격성이 누그러졌습니다. 하지만 어디까지나 독일에서 한창 경호견으로 쓰던 시절에 비해 누그러졌다는 것이지 골든 리트리버급으로 온순해졌다는 말이 절대 아닙니다. 세계적으로 위험한 개 리스트에도 항상 들어가 있으며 실제로 인명 피해도 자주내기 때문에 절대로 방심하지 말고 관리가 철저히 필요한 종입니다.");
  character.put("핀셔","공격적인, 총명한, 영리한, 난폭한, 충성스러운, 호기심많은");
  birthplace.put("핀셔","독일, 미국");
  weight.put("핀셔","미니어처 핀셔 3.6 - 4.5kg 아펜핀셔 2.9 - 6kg 도베르만 핀셔 40 - 45kg");
  
  //닥스훈트
  enName.put("닥스훈트","(Dachshund)");
  description.put("닥스훈트","닥스훈트는 몸통이 길고 사지가 짧은 독일 원산의 개로서, 원래는 오소리 사냥의 전문개였습니다. 이집트로부터 건너온 오래된 개의 품종으로 보입니다. 체질상 닥스훈트의 경우 다리가 짧아 살이찔 경우 배가 땅에 닿을 수도 있기 때문에 적절한 운동과 식단조절로 허리디스크 예방 및 비대해지지 않도록 조절해주는 것이 좋습니다.");
  character.put("닥스훈트","헌신적인, 영리한, 생기있는, 고집스러운, 활동적인, 독립심이 강한, 장난스러운, 용맹스러운");
  birthplace.put("닥스훈트","독일");
  weight.put("닥스훈트","7 - 15kg(소형견)");

  //달마티안
  enName.put("달마티안","(Dalmatian)");
  description.put("달마티안","영국에서는 코치도그라고 하여 마차를 탈 때나 승마할 때, 또는 여행의 안전을 위하여 데리고 다녔습니다. 순백색 바탕에 검은색 또는 갈색의 바둑알 같은 뚜렷한 얼룩점이 온몸에 아름답게 배치되어 있는 것이 특징이며, 외형은 영국의 포인터와 비슷합니다. 미국의 1961년 만화영화 101마리 강아지에 등장하는 강아지들의 품종이며, 소방관들 사이에 인기 있는 개 품종입니다.");
  character.put("달마티안","우호적인, 총명한, 외향적인, 에너제틱한, 예민한, 활동적인, 장난스러운");
  birthplace.put("달마티안","크로아티아");
  weight.put("달마티안","15 - 32kg(대형견)");

  //래브라도리트리버
  enName.put("래브라도리트리버","(Labrador Retriever)");
  description.put("래브라도리트리버","래브라도 리트리버는 조렵견, 사냥개, 인명구조견, 탐지견, 안내견, 간호견입니다. 골든 리트리버와 함께 개로서 모든 부분에서 월등하다. 골든 리트리버에 비해 번견으로서의 성질이 좋고 사람을 잘 따르지만 귀찮게 하지는 않습니다. 지질이 높고 침착하며 인내심이 많아 어떤 조건의 가정에도 적응력이 뛰어나며 발에 물갈퀴가 있습니다. 장모종인 골든 리트리버와 달리 털이 짧고, 먹성이 더 좋으며, 골든 리트리버와 달리 검은 색 털을 가진 종도 있습니다.");
  character.put("래브라도리트리버","침착한, 총명한, 부드러운, 외향적인, 민첩한, 잘따르는, 온화한");
  birthplace.put("래브라도리트리버","뉴펀들랜드 섬");
  weight.put("래브라도리트리버","25 - 36kg(대형견)");

  //베들링턴테리어
  enName.put("베들링턴테리어","(Labrador Retriever)");
  description.put("베들링턴테리어","베들링턴테리어는 테리어 종과 하운드 종을 교배한 종입니다. 곱슬거리는 털로 덮여있는 외관은 양(羊)과 같은 느낌을 주며, 어렸을 때는 검은색 털을 가지고 있다가 크면서 점점 밝은색의 털로 바뀝니다. 폭스 테리어와는 앙숙 관계인 것으로 나와 있습니다.");
  character.put("베들링턴테리어","성품이 좋은, 총명한, 애정이 풍부한, 활발한");
  birthplace.put("베들링턴테리어","잉글랜드");
  weight.put("베들링턴테리어","7.7 - 10kg(중형견)");

  //보더콜리
  enName.put("보더콜리","(Border Collie)");
  description.put("보더콜리","보더 콜리는 목양견 품종으로 잉글랜드와 스코틀랜드 사이의 국경에서 가축, 특히 양을 몰기 위해 개량되었습니다. 전형적으로 탄탄한 외형에 특출하게 활동적이고 재능이 뛰어나며, 프리스비 등 각종 스포츠에 뛰어나서 늘 우수한 성적으로 독 스포츠 경기와 쉽독 트라이얼(sheepdog trial)을 석권했습니다. 흔히들 가장 똑똑한 개라 말하곤 합니다.");
  character.put("보더콜리","집요한, 총명한, 감각이 예민한, 에너제틱한, 반응이 빠른, 경계심이 많은, 충성스러운, 탄탄한");
  birthplace.put("보더콜리","스코틀랜드, 영국, 잉글랜드, Ireland, 웨일즈, 노섬벌랜드");
  weight.put("보더콜리","12 - 20kg(중형견)");

  //불테리어
  enName.put("불테리어","(Bull Terrier)");
  description.put("불테리어","불 테리어는 불도그와 테리어를 교배하여 개량한 몸집이 중간 크기인 개입니다. 불도그처럼 묵직해 보이고 온순한 한편 테리어처럼 영리하고 민첩합니다. 두 가지 변종이 있는데, 흰 종과 갈색이나 적갈색 바탕에 흰 얼룩이 박힌 종이 있습니다. 영국에서는 불 테리어를 투견용이나 쥐잡이용으로 썼습니다. 힘이 세며, 오늘날에는 애완동물로 많이 기릅니다. 초보자가 키우기에는 부적합합니다.");
  character.put("불테리어","감각이 예민한, 고집스러운, 상냥한, 활동적인, 방어적인, 훈련 능력이 뛰어난");
  birthplace.put("불테리어","잉글랜드");
  weight.put("불테리어","22 - 38kg(대형견)");

  //차우차우
  enName.put("차우차우","(Chow Chow)");
  description.put("차우차우","기원전부터 중국에 있었던 토종견인데, 티베탄 마스티프와 사모예드 사이의 잡종으로 알려져 있습니다. 가장 큰 특징은 흑색 내지 보라색 혀를 가지고 있다는 것이고 북방계 스피츠에 속하는 오래된 품종입니다. 이 개의 이름은 18세기 무렵, 영국 상인이 중국과 교역할 때, 잘 안 통하는 회화 속에서 교환한 말이 그대로 붙여졌습니다. 성질이 사납고 주인또는 가족 이외의 사람에게는 강한 경계심을 나타낸다.");
  character.put("차우차우","냉담한, 충성스러운, 독립심이 강한, 조용한");
  birthplace.put("차우차우","중국");
  weight.put("차우차우","20 - 32kg(대형견)");

  //퍼그
  enName.put("퍼그","(Pug)");
  description.put("퍼그","퍼그는 주둥이가 아주 짧고, 눈은 둥글며 크게 튀어나왔습니다. 이마와 미간에는 깊은 주름이 있고 괴로운 듯한 표정이 특징입니다. 안쓰러운 표정이 특유의 매력이며 반짝이는 눈을 지녔습니다. 중국에 무역하러 왔던 네덜란드 상인이 퍼그를 데려가 왕실에 전했다고합니다. 네덜란드의 오라녜 공은 퍼그를 너무 사랑하여 왕가의 마스코트로 삼을 정도였습니다.");
  character.put("퍼그","매력적인, 장난을 좋아하는, 유순한, 영리한, 사교성 좋은");
  birthplace.put("퍼그","중국");
  weight.put("퍼그","6 - 10kg(소형견)");
  
  //살루키
  enName.put("살루키","(Saluki)");
  description.put("살루키","살루키는 기원이 오래된 개로 기원전 7,000~6,000년 수메르 유적에서도 발견될 정도입니다. 또한 이집트의 왕도 살루키를 아껴 왕이 죽으면 함께 미라가 되기도 하였습니다. 사막 등의 어려운 조건에서도 잘 살 수 있으며 추위에도 강합니다. 다리가 강하고 표정은 위엄이 있으며, 주인에 대하여 애정이 깊고 집을 지키는 개로서 이용됩니다.");
  character.put("살루키","냉담한, 총명한, 조용한");
  birthplace.put("살루키","이집트");
  weight.put("살루키","18 - 27(대형견)");

  //비글
  enName.put("비글","(Beagle)");
  description.put("비글","비글은 옛날부터 사냥개로 쓰여온 개의 품종이며, 17세기에 지금의 이름이 붙여졌습니다. 20세기 이전까지만해도 귀와 주둥이가 길었습니다. 20세기에 오면서 오늘날의 비글과 같이 주둥이와 귀가 짧아짐과 함께 애완용으로 기르기도 합니다. 민첩하고 붙임성이 있으나, 쉽게 훈련시킬 수 없어 애완용으로는 그리 적합하지 않아 전통적으로 사냥용으로 쓰인것입니다. 최근에는 후각이 예민한 특성을 이용해 마약탐지견으로 활용하고 있습니다.");
  character.put("비글","쾌활한, 침착한, 총명한, 결연한, 쉽게 흥분하는, 온화한");
  birthplace.put("비글","영국, 잉글랜드, 그레이트브리튼 섬");
  weight.put("비글","9 - 11(소형견)");

  //스키퍼키
  enName.put("스키퍼키","(Schipperke)");
  description.put("스키퍼키","스키퍼키는 벨기에 원산으로 온몸이 검은색 털로 싸여 있습니다. 종종 꼬리 없이 태어나기도 하며, 스키퍼키의 전설에 의하면 꼬리를 자르는 습관이 시작된 것은 1609년입니다. 이 견종은 수도 브뤼셀과 안트위프를 연결하는 운하에서 거룻배의 마스코트로 사랑 받았으며, 1885년 브뤼셀의 전람회에서 벨기에의 헨리에트 왕비가 발굴하여 이 견종을 키우게 되었습니다. 학습 능력과 문제해결 능력이 매우 뛰어나며, 쾌활하고 총명한 이 개는 예나 지금이나 대단히 사랑을 받으며 벨기에가 자랑하는 품종의 하나가 되었습니다.");
  character.put("스키퍼키","호기심이 많은, 충실한, 민첩한, 겁이 없는, 자신감에 차있는, 독립심이 강한");
  birthplace.put("스키퍼키","벨기에");
  weight.put("스키퍼키","3 - 9(소형견)");

  //그레이트데인
  enName.put("그레이트데인","(Great Dane)");
  description.put("그레이트데인","그레이트 데인은 기원은 확실하지 않으나 멧돼지를 사냥한 개로서 용맹성에 있어 개의 왕이라 불리고 있습니다. 그레이트 데인의 경우 식비 등에서 상당한 지출을 각오해야 하는 부분과 산책 시에 주인에게도 엄청난 근력이 요구된다는 점을 고려해볼 때 재력보다 대형견을 키우는 기술에 있어서는 최상급 견종임은 분명하다고 할 수 있습니다.");
  character.put("그레이트데인","헌신적인, 우호적인, 조용한, 자신감에 차있는, 애정이 넘치는, 온화한");
  birthplace.put("그레이트데인","독일");
  weight.put("그레이트데인","45 - 90kg(초대형견)");
  
  //그레이하운드
  enName.put("그레이트데인","(Greyhound)");
  description.put("그레이트데인","그레이트데인은 시력이 발달하여 주로 눈으로 보고 사냥하며 사냥감을 끝까지 쫓아갑니다. 오늘날에는 원형 트랙 위로 가짜 미끼를 쫓아서 달리는 경주에도 사용됩니다. 몸체는 유선형이고 머리는 길며, 허리는 가늘고, 다리는 강하며, 힘이 셉니다. 털은 짧으며, 회색·흰색·검은색·황갈색·적회색·청회색·혼합색 등이 있습니다.");
  character.put("그레이트데인","침착한, 총명한, 애정이 풍부한, 탄탄한, 조용한, 온화한");
  birthplace.put("그레이트데인","잉글랜드, 브리튼 제도");
  weight.put("그레이트데인","27 - 40kg(대형견)");
   
  //보스턴테리어
  enName.put("보스턴테리어","(Boston Terrier)");
  description.put("보스턴테리어","보스턴테리어는 불도그와 불 테리어의 교배로 생겨난 품종입니다. 단두종의 특성상 호흡이 곤란하기 때문에 잘 때 코를 많이 고는 견종입니다. 단두종에는 보스턴 테리어를 포함하여 불도그, 프렌치 불도그, 페키니즈, 퍼그, 시추 등이 속해 있습니다. 그 외에도 백내장에도 매우 약한 편입니다.");
  character.put("보스턴테리어","우호적인, 총명한, 생기있는");
  birthplace.put("보스턴테리어","미국");
  weight.put("보스턴테리어","7 - 11kg(소형견)");
    
  //브뤼셀그리펀
  enName.put("브뤼셀그리펀","(Brussels Griffon)");
  description.put("브뤼셀그리펀","브뤼셀 그리펀은 독일 원산으로 17세기 아펜핀셔와 벨기에 토착견의 교배로 탄생하였습니다. 그 후 퍼그와의 교배로 더욱 개량되었는데, 벨기에의 역대 왕실에서 이 개를 사랑하였습니다. 작지만 기품있고 강인한 성격때문에 브뤼셀 마차의 경비견으로도 키웠다고합니다. 그래서 이름을 벨기에 수도인 '브뤼셀'에서 기인해 지어졌습니다.");
  character.put("브뤼셀그리펀","예민한, 신중한, 호기심많은, 경계심이 많은, 붙임성이 있는, 경계심 많은");
  birthplace.put("브뤼셀그리펀","벨기에");
  weight.put("브뤼셀그리펀","3 - 5kg(소형견)");

  //블러드하운드
  enName.put("블러드하운드","(Bloodhound)");
  description.put("블러드하운드","블러드하운드는 영국과 벨기에 원산의 사냥개 품종입니다. 중세 이후로 사슴이나 멧돼지 사냥용으로 길러졌으며 수색견으로 활용되었습니다. '블러드'라는 이름은 피를 좋아한다는 뜻이 아니라 피를 흘리는 사냥감의 냄새를 잘 맡고 '귀족의 혈통'을 가졌다는 뜻이며, 후각이 뛰어나 사냥과 범인 또는 미아 등 사람을 추적하는 데 이용되어 왔습니다. 사납지 않고 다정하여 아이들에게도 인기있는 동반견이 될 수 있습니다.");
  character.put("블러드하운드","침착한, 애정이 풍부한, 고집스러운, 온화한");
  birthplace.put("블러드하운드","프랑스, 벨기에, 영국, 잉글랜드, 스코틀랜드");
  weight.put("블러드하운드","36- 50kg(대형견)");

}
