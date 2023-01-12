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

  //품종별 설명 
  
  //치와와
  enName.put("치와와","(Chihuahua)");
  description.put("치와와","치와와는 멕시코의 개 품종 중 하나입니다. 멕시코 치와와주에서 유래하였으며, 품종으로는 치와와, 장모치와와가 있습니다. 평균 몸무게는 2.7kg, 평균 키는 18cm로 반려견 중에서 가장 작은 품종입니다. 털색은 붉은색, 검은색, 담황색, 얼룩무늬 등이며 털은 단모종과 장모종으로 구별되지만 단모종이 흔히 볼 수 있는 종입니다. 귀는 위로 쫑긋하며, 눈은 크고 돌출되어 있습니다.");
  character.put("치와와","완고한, 공격적인, 총명한, 애정이 풍부한, 고집스러운, 성격이 좋은");
  birthplace.put("치와와","중국");
  weight.put("치와와","1.5 - 3kg(소형견)")









}

