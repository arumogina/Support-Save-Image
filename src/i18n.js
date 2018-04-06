/*
<button trs-text="gsearch_btn"></button>
こんな感じでtrs-text属性を持つ要素を取得して、その属性値に該当するテキストをinnerHTMLに挿入する。
*/

trs = (function(){
  var dic = {};
  return {
    set_dic: function(lang,data){ dic[lang] = data },
    translate: function(lang,place){
      $("[trs-text]").each(function(idx,ele){
        ele.innerHTML = dic[lang][place][$(ele).attr("trs-text")];
      });
    },
    get_one: function(text,lang,place){
      return dic[lang][place][text];
    }
  }
})();

var ja_dic = {
  popup: {
      dir_path_exp:"デフォルトのダウンロード先のフォルダパス以下に指定されたフォルダパスで保存します",
      dir_path:"保存先フォルダパス",
      label:"保存先のラベル",
      add:"追加"
  }
}
trs.set_dic("ja",ja_dic);

var en_dic = {
  popup: {
      dir_path_exp:"save image to specified directory under default download directory",
      dir_path:"directory to save",
      label:"label",
      add:"add"
  }
}

trs.set_dic("en",en_dic);
