function fizzbuzz_1(){

    //チャレンジャー１さんのtextareaを取得
    var elem = document.getElementById("code-result-1");

    //◆関数のアルゴリズム
    //  ・1から100の数字を順に出力する
    //　・3で割り切れる場合は"Fizz"
    //　・5で割り切れる場合は"Buzz"
    //　・3でも5でも割り切れる場合は"FizzBuzz"
    //　・上述の条件以外はそのままの数字
    //　・出力結果は1行ずつ改行する
    //　・FizzBuzz出力処理の最終行は"Finish"と出力する

    /* ここからコード実装==============================*/
    var result = "";
    for (var i = 1; i <= 100; i++) {
      if (i%3==0 && i%5==0){
        result += "FizzBuzz\n";
      }
      else if(i%3==0){
        result += "Fizz\n";
      }
      else if(i%5==0){
        result += "Buzz\n";
      }
      else{
        result += i+"\n"
      }
    }
    result += "Finish"
    /* ==============================ここまでコード実装*/

    //処理の結果（XXX）をtextareaの値に設定
    elem.value = result;
}
