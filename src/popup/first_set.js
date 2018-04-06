//初期化処理
$(function(){
    $("body").css("width","300px");
    var lang = window.navigator.languages[0];
    if(lang == "ja"){
        window['trs'].translate("ja","popup");
    }else{
        window['trs'].translate("en","popup");
    }
    set_store_list();
});

//保存先の一覧を作成
function set_store_list(){
    window["g_sm"].get("dir_ary",function(d){
        $.each(d.dir_ary,function(idx,v){
            $("#store_list").append(`
                <div class="clearfix">
                    ${v.label}<br />
                    /${v.path}
                    <button class="del_btn" data-label="${v.label}" data-path="${v.path}">X</button>
                </div>
                <hr />
            `);
        });
    });
}
