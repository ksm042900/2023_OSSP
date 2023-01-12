# 2023 Open Source Software Project
## 강아지 품종 판별 프로그램

### 1. 프로젝트 계획
tensorflow.js의 이미지분류 모델을 기반으로 만들어진 강아지 품종 판별 오픈소스를 기존보다 성능향상 및 기능 추가를 목표
1. 기존 오픈소스는 강아지 품종이 무엇인가만 판별하였으나 판별된 품종에 대한 설명도 출력이 되도록 기능을 추가할 계획
2. 기존 오픈소스는 10가지 종류의 품종만 판별이 가능. 더 많은 품종이미지를 학습하여 보다 다양한 품종을 판별가능하도록 학습모델을 향상(업그레이드)시킬 계획


[오픈소스 : https://github.com/nanuyo/tensorflowjs_tutorial_by_easycoding](https://github.com/nanuyo/tensorflowjs_tutorial_by_easycoding)

[학습모델만들기 : https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)

![품종 판별 스크린샷](https://user-images.githubusercontent.com/90131881/211037338-9ee1f945-8a10-4959-88fe-59aac173c59e.PNG)
#

### 2. 기능 설명

강아지의 사진을 업로드하면 객체를 판별하여 무슨 품종인지 html에 출력이 됩니다.

처음에는 품종이 10개밖에 없어 switch-case 문을 사용해 객체에 대한 정보를 출력했으나 여러면에서 HashMap을 사용하는 것이 더 좋을 것 같아 변경을 하였습니다.

HashMap으로 강아지 품종에 대한 정보들을 미리 담아둔 뒤, 품종명을 키값으로 하여 보다 빠르게 정보를 가져올수 있도록 하였습니다.








