$(document).ready(function(){
  

  $(".notic-x").click(function(){
    $(".notic").hide();
  });
  $(".login-bt").click(function(){
    $(".modal-wrap").show();
  });
  $(".login-x").click(function(){
    $(".modal-wrap").hide();
  });

  $(".m-bt").click(function(){
    $(".b-wrap").toggle();
    
  });




  $(".i-d").click(function(){
    $(section).toggle()
  });



  $(".section .p0").stop().animate({width: 500}, 2000, 
  function(){
      console.log("1번끝")
  }).animate({
      height:300
  },2000,function(){
      console.log("2번끝")
  }).animate({
    width: 60
  },2000,function(){
    console.log("3번끝")

  })
    var $s1=$("#s1").offset().top;
    console.log("s1"+$s1)
    $(window).scroll(function(){
    console.log("스크롤 되고있어요");
    if($(window).scrollTop()+$(window).height()/2>$s1){
      console.log("도달함")
      $(".section .p1").addClass("p1-ani")
       console.log("애니메이션 끝")
      }  
    
  }) 

})



// $(document).ready(function(){
//   $(".section p1").animate({width: 500}, 2000, 
//   function(){
//       height:10
//       console.log("1번끝")
//   }).animate({
//       height: 500
//   },2000,function(){
//       console.log("2번끝")
//   }).animate({
//       width: 300
//   },2000,function(){
//       console.log("3번끝")
//   }).animate({
//       height: 350
//   },2000,function(){
//       console.log("4번끝")
//   })  
// })
