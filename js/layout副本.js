/**
 * Created by Administrator on 2016/8/9.
 */
window.onload = function(){
}
window.onresize = function(){
    resize();
}
function resize(){
    var layoutHeader = document.getElementsByClassName("layout-header")[0];
    var layoutLeft = document.getElementsByClassName("layout-left")[0];
    var layoutCenter = document.getElementsByClassName("layout-center")[0];
    var layoutFooter = document.getElementsByClassName("layout-footer")[0];

    var _height = document.documentElement.clientHeight||document.body.clientHeight;
    var _width = document.body.clientWidth||documet.documentElement.clientWidth;

//ͷ��

//���
    layoutLeft.style.height = _height - layoutHeader.offsetHeight -layoutFooter.offsetHeight + "px";
    layoutLeft.style.top = layoutHeader.offsetHeight + "px";
    layoutLeft.style.bottom = layoutFooter.offsetHeight + "px";

    console.log("����ɫ����߶�:"+layoutLeft.style.height);
//�в�
    layoutCenter.style.height = _height - layoutHeader.offsetHeight -layoutFooter.offsetHeight + "px";
    layoutCenter.style.width = _width - layoutLeft.offsetWidth + "px";
    layoutCenter.style.top = layoutHeader.offsetHeight + "px";
    layoutCenter.style.left = layoutLeft.offsetWidth + "px";
    layoutCenter.style.bottom = layoutFooter.offsetHeight + "px";
//�ײ�
//    layoutFooter.style.top = layoutLeft.offsetHeight + layoutHeader.offsetHeight+ "px";

    changeFrameHeight(layoutCenter.style.width,layoutCenter.style.height);
}
//iframe����Ӧ���
function changeFrameHeight(w,h){
    var iframe = document.getElementsByTagName("iframe")[0];
    iframe.width = w;
    iframe.height = h;
}
resize();/**
 * Created by Administrator on 2016/8/9.
 */
