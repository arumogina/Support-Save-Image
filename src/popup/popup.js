
$(function(){
    $("#show_add_btn").on("click",function(){
        $("#add_div").css("display","block");
        $(this).css("display","none");
    });

    $("#add_btn").on("click",function(){
        console.log("popup.js");
        console.log(location.href);
        if(!$("#add_label_input").val()){
            alert("Input Label");
            return false;
        };
        window["g_sm"].get("dir_ary",function(d_ary){
            var ary = d_ary.dir_ary || [];
            ary.push({label:$("#add_label_input").val(),path:$("#add_dir_path").val()});
            window["g_sm"].set({"dir_ary":ary},function(){
                $("#add_label_input").val("");
                $("#add_dir_path").val("")
                //メニュー内容が変更になったのでメニューを再作成
                create_menu();
            });
        });
    });

    $(document).on("click",".del_btn",function(){
        var tar = {label:this.getAttribute("data-label"),path:this.getAttribute("data-path")}
        var tar_this = this;//window["g_sm"].get()内ではthisが違うものになってしまう
        window["g_sm"].get("dir_ary",function(d){
            var tar_idx;
            $.each(d.dir_ary,function(idx,v){
                if(v.label==tar.label && v.path == v.path){
                    tar_idx = idx;
                    return false;//breakじゃなくてreturn falseでループを抜ける
                }
            });
            d.dir_ary.splice(tar_idx,1);
            window["g_sm"].set({"dir_ary":d.dir_ary});
            $(tar_this).parent().remove();
            //メニュー内容が変更になったのでメニューを再作成
            create_menu();
        });
    });

});
