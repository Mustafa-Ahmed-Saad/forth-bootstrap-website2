$(function () {
   'use strict';
   // Adjust Slider Height
   //   علشان السليدر ياخد الجزء اللي المتبقي اللي فاضل من الشاشة
   var winH = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH = $('.navbar').innerHeight();
   // innerHeight علشان يجيب الهوامش الداخلية و سحسبها
   // السليدر و الكاروسيل ايتم هياخدو مفس الطول بحيث الصورة تكون مالية السليدر و هنديها باك جراوند سايز كافر في ال سي اس اس
   $('.slider, .carousel-item').height(winH - (upperH + navH));

   // Featured Work Shuffle
   $('.featured-work ul li').on('click', function () {
      // لما اضغط كليك علي ال ال اي بيضيفلها كلاس اكتيف و بيشيل كلاس الاكتيف من اخواتو الاشقاء
      $(this).addClass('active').siblings().removeClass('active');
      // لو الال اي اللي ضغطت عليها الداتا كلاس بتاعتها خليليالاوباسيتي بتاع كل الديفات اللي فيها الصور ب واحد
      if ($(this).data('class') === 'all') {
         $('.shuffle-imgs .col-md').css('opacity', 1);
      } else {
         // و لو الداتا كاستم اللي في الال اي اللي دسنا عليها دي مش اول هتخلي كل الديفات اللي فيها الصور الاوباسيتي بتاعتها ب ثمانية من عشرة
         $('.shuffle-imgs .col-md').css('opacity', '.08');
         // هنا بقولو العنصر اللي واخد الكلاس اللي في الداتا كاستم بتعت الال اي دا الاب بتاعو اللي هوا الديف خليلي الاوباسيتي بتاعو ب واحد
         $($(this).data('class')).parent().css('opacity', 1);
      }
   });
});
