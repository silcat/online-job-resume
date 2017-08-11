/**
 * Created by admin on 2017/8/11.
 */

(function(window){
    function fillMain(select) {
        var $this=$(select);
        var url=$this.attr("data-url");
        $(".nav-menu li.selected").removeClass('selected');
        $this.parent().addClass('selected');
        $("#main").load(url,function() {

        });
    }
    function init() {

    }

    window.page={
        init:function () {
        },
        fillMain:fillMain
    }
})(window)
