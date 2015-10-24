/**
 * Created by Phuong Anh Nguyen on 10/22/2015.
 */
window.EVENTCODE="jKepl_Rc6JlyH09ipVtvU3WS_vLeQZpCHQuJ5ohfjr6";
$(document).ready(function(){
    var client = new Asteroid('10.0.0.222:3000');
    $('#dangkyform').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            var hovaten = $( "#hovaten" ).val();
            var nguoidangkyla = $( "#danhtinh" ).val();
            var sodienthoai = $( "#sodt" ).val();
            var chuongtrinh = $( "#chuongtrinh").val()  || null;
            var email = $( "#dcemail" ).val();
            var thoigianduhoc = $( "#tgduhoc" ).val();
            var thanhphodangsong = $( "#diachi" ).val();
            var bietchuongtrinhquakenh = $( "#kenh" ).val() || null;
            if(hovaten && sodienthoai && email && thanhphodangsong && nguoidangkyla && chuongtrinh && thoigianduhoc && bietchuongtrinhquakenh) {
                var obj = {
                    hovaten: hovaten,
                    sodienthoai: sodienthoai,
                    email: email,
                    thanhphodangsong: thanhphodangsong,
                    nguoidangkyla: nguoidangkyla,
                    chuongtrinh: chuongtrinh,
                    thoigianduhoc: thoigianduhoc,
                    bietchuongtrinhquakenh: bietchuongtrinhquakenh
                }
                window.location="/thankyou.html"

                var ret = client.call('registerEventGLVH', window.EVENTCODE, obj);
                ret.result
                    .then(function (result) {
                        if(result && result !== 'FAILED'){
                            /*analytics.identify(result, {
                                name : obj.hovaten,
                                email : obj.email,
                                phone : obj.sodienthoai
                            },{
                                anonymousId : analytics.user().anonymousId()
                            });*/
                            window.location.href = '/thankyou.html';
                        }
                    }).catch(function (error) {
                        console.error('Error:', error);
                    });
            }
            else {alert("Chua nhap du thong tin")}
        }

        return false
    })
})