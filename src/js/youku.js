require('../less/index.less');
var oli = $('.warpper .move');
var index = 0;
var timer = null;
var flag = true;
function init() {
	oli.css({'left':'800px','z-index':1,'top':'50%','height':'0px','margin-top':'0px'});
    oli.eq(0).css({'top':'50%','margin-top':'-90px','height':'180px','width':'250px','left':'0px','opacity':'0.4','z-index':'1'});
    oli.eq(1).css({'top':'0','margin-top':'0px','height':'300px','left':'200px','width':'400px','opacity':'1','z-index':'100'});
    oli.eq(2).css({'top':'50%','margin-top':'-90px','height':'180px','width':'250px','left':'550px','opacity':'0.4','z-index':'1'});
}
init();

function leftMove() {
 if(flag){

	flag = false;
	oli.css({'z-index':1});

	oli.eq(index % 6).animate({'left':'-250px','width':'250px','height':'0','top':'50%','margin-top':'0','opacity':'0'});
	oli.eq( (index+1) % 6 ).animate({'left':'0px','width':'250px','height':'180px','top':'50%','margin-top':'-90px','opacity':'0.4'});
    oli.eq( (index+2) % 6 ).animate({'left':'200px','width':'400px','height':'300px','top':'0px','margin-top':'0','opacity':'1','z-index':'100'});
    oli.eq( (index+3) % 6 ).css({'left':'800px'});
    oli.eq( (index+3) % 6 ).animate({'left':'550px','width':'250px','height':'180px','top':'50%','margin-top':'-90px','opacity':'0.4'},function () {
    	index ++;
    	flag = true;
    });
  }	
}

function rightMove() {
  if(flag){
	flag =false;
	oli.css({'z-index':1});
	oli.eq( (index - 1) % 6 ).css({'left':'-250px'});
    oli.eq( (index - 1) % 6 ).animate({'left':'0px','width':'250px','height':'180px','top':'50%','margin-top':'-90px','opacity':'0.4'});
    oli.eq( index % 6  ).animate({'left':'200px','width':'400px','height':'300px','top':'0px','margin-top':'0','opacity':'1','z-index':'100'});
    oli.eq( (index + 1) % 6 ).animate({'left':'550px','width':'250px','height':'180px','top':'50%','margin-top':'-90px','opacity':'0.4'});
    oli.eq( (index + 2) % 6 ).animate({'left':'800px','width':'250px','height':'0px','top':'50%','margin-top':'0','opacity':'0.4'},function() {
    	index --;
    	flag = true;
    });
  }
}

timer = setInterval(leftMove,1000);
$('.btnleft').on('click',function () {
	leftMove();
});

$('.btnright').on('click',function () {
    rightMove();
})
$('.warpper').on('mousemove',function() {
	 clearInterval(timer);
})
$('.warpper').on('mouseout',function() {
	 timer = setInterval(leftMove,1000);
})