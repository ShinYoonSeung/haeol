$(document).ready(function(){
    mainSwiper();
    subSwiper();
    historySwiper();

    editInfo();
    deleteInfo();

    date();

    textSwap(".textField",".selectComponent li");
    yearSwap();
    monthSwap();

    deleteImg();
    addImg();

    moreBtn();

    historyTab();

    // imgSize();
    // adminImgSize();
    // custimerImgSize();
});

function mainSwiper(){
    var mainSwiper = new Swiper('.mainSlide', {
        // autoplay:{
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        autoplay:false,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".pagination_bullet",
            type : 'bullets'
        },
        pagination : {
            el : '.mainSlide .swiper-pagination',
            clickable : true,
        },
    })
}

function subSwiper(){
    var suvSwiper = new Swiper('.subSlide',{
        slidesPerView: 5,
        centeredSlides: true,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true,
        speed: 1000,
        pagination : {
            el : '.subSlide .swiper-pagination',
            clickable : true,
        },
    })
}

function historySwiper(){
    var historySwiper = new Swiper('.history_tab',{
        slidesPerView: 9,
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
    })
}

function editInfo(){
    $('.show_info .edit_btn').on('click', function(){
        $(this).parent('.show_info').removeClass('active');
        $(this).parent().parents().siblings().children('.show_info').removeClass('active');
        $(this).parent().siblings('.edit_info').addClass('active');
        $(this).parent().parents().siblings().children('.edit_info').addClass('active');

            if($('.edit_info').hasClass('active') === true){
                $('.add_btn').attr("disabled",true);
            }else{
                $('.add_btn').removeAttr("disabled");
            }
    });

    $('.edit_info input[type="submit"], .edit_info .cancel_btn').on('click', function(){
        $(this).parent('.edit_info').removeClass('active');
        $(this).parent().parents().siblings().children('.edit_info').removeClass('active');
        $(this).parent().siblings('.show_info').addClass('active');
        $(this).parent().parents().siblings().children('.show_info').addClass('active');

        if($('.edit_info').hasClass('active') === true){
            $('.add_btn').attr("disabled",true);
        }else{
            $('.add_btn').removeAttr("disabled");
        }
    });
}

function deleteInfo(){
    $('.show_info .remove_btn').on('click', function(){
        if (confirm("삭제 하시겠습니까?") == true){
            $(this).parent().parent().parent().remove();
            alert("삭제되었습니다.");
          }else{
            alert("취소되었습니다.");
          }
    });
}

function date(){
    for(var i = 1; i <= 9999; i++){
        $("#datepicker" + i).datepicker({ 
			dateFormat: 'yy.mm',
			changeMonth: true,
		    changeYear: true,
		    showButtonPanel: true,
            closeText: "완료",
            currentText: "오늘",
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		    onClose: function(dateText, inst) {  
	            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val(); 
	            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val(); 
	            $(this).datepicker('setDate', new Date(year, month, 1));
	            $(".ui-datepicker-calendar").css("display","none");
	        }
		});
		$("#datepicker" + i).focus(function () {
			$(".ui-datepicker-calendar").css("display","none");
			$("#ui-datepicker-div").position({
				  my: "center top",
				  at: "center bottom",
				  of: $(this)
			});
		});
    }
}

function textSwap(field,dataLabel){
    $(dataLabel).on('click', function(){
        var insertTarget = $(this).text();
        $(field).text(insertTarget);
    });
}

function yearSwap(){
    $('.year_selectComponent li').on('click', function(){
        var insertTarget = $(this).text();
        for(var i = 1; i <= 9999; i++){
            $(this).parent().siblings('.yearField' + i).text(insertTarget);
        ;}
    });
}

function monthSwap(){
    $('.month_selectComponent li').on('click', function(){
        var insertTarget = $(this).text();
        for(var i = 1; i <= 9999; i++){
            $(this).parent().siblings('.monthField' + i).text(insertTarget);
        ;}
    });
}

function deleteImg(){
    $('.delete_file').on('click', function(){
        $(this).siblings().children('img').remove();
        $(this).removeClass('delete_file');
        $(this).addClass('add_file');

        if($('.file_btn').hasClass('add_file') === true){
            $('.file_btn').text('파일 첨부하기');
            $(this).on('click', function(){
                $('.register_img_popup').addClass('active');
            })
        }else{
            $('file_btn').text('파일 삭제하기');
        }
    });
}

function addImg(){
    $('.add_flie').on('click', function(){
        $('.register_img_popup').addClass('active');
    });
    $('.register_img_popup .close_popup').on('click', function(){
        $('.register_img_popup').removeClass('active');
    });
}

function moreBtn(){
    $(".list_more_btn").click(function(e){
        e.preventDefault();
        $(this).parents().siblings('.work_list').children('li:hidden').slice(0, 5).addClass('active'); // 클릭시 more 갯수 지저정
        if($(this).parents().siblings('.work_list').children('li:hidden').length == 0){ // 컨텐츠 남아있는지 확인
            $(this).parents('.btn_box').remove() // 컨텐츠 없을 시 버튼 사라짐
        }
    });
}

function historyTab(){
    $('.history_tab ul li').on('click', function(){
        $('.history_tab ul li').removeClass('active');
        $(this).addClass('active');
    })
}

// function imgSize(){
//     $('.work_list_wrap .img_box img').each(function(){
//         var maxWidth = 230;
//         var maxHeight = 90;
//         var ratio = 0;
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(width > maxWidth){
//             ratio = maxWidth / width;
//             $(this).css("width", maxWidth);
//             $(this).css("height", height * ratio);
//             height = height * ratio;
//         }
    
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(height > maxHeight){
//             ratio = maxHeight / height;
//             $(this).css("height", maxHeight);
//             $(this).css("width", width * ratio);
//             width = width * ratio;
//         }
//     })
// }

// function adminImgSize(){
//     $('table .img_title img').each(function(){
//         var maxWidth = 230;
//         var maxHeight = 80;
//         var ratio = 0;
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(width > maxWidth){
//             ratio = maxWidth / width;
//             $(this).css("width", maxWidth);
//             $(this).css("height", height * ratio);
//             height = height * ratio;
//         }
    
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(height > maxHeight){
//             ratio = maxHeight / height;
//             $(this).css("height", maxHeight);
//             $(this).css("width", width * ratio);
//             width = width * ratio;
//         }
//     })
// }

// function custimerImgSize(){
//     $('.admin_content table .img_box img').each(function(){
//         var maxWidth = 150;
//         var maxHeight = 50;
//         var ratio = 0;
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(width > maxWidth){
//             ratio = maxWidth / width;
//             $(this).css("width", maxWidth);
//             $(this).css("height", height * ratio);
//             height = height * ratio;
//         }
    
//         var width = $(this).width();
//         var height = $(this).height();
    
//         if(height > maxHeight){
//             ratio = maxHeight / height;
//             $(this).css("height", maxHeight);
//             $(this).css("width", width * ratio);
//             width = width * ratio;
//         }
//     })
// }