//サニタイズ用関数
function xss_escape(val) {
  return $('<div />').text(val).html();
};

function create_menu(){
    chrome.contextMenus.removeAll();
    //dir_ary: [{label:x,path:x},] これは保存先のラベルとディレクトリ
    window["g_sm"].get("dir_ary",function(d){
        $.each(d.dir_ary,function(idx,dir){
            chrome.contextMenus.create({
                title: dir.label,
                contexts: ["image"],
                type: "normal",
                onclick: function (info) {
                    var d = new Date();
                    var name = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
                    var parse = new URL(info.srcUrl);
                    var ext = parse.pathname.match(/.+\.(.+?)$/)[1];
                    var name = dir.path + "/" + name + "." + ext;
                    //chrome.download APIはなぜかDownloadsフォルダ以下にしかファイルを保存出来ない
                    chrome.downloads.download({url:info.srcUrl,filename:name,conflictAction:"uniquify"});
                }
            });
        });
    });
}
