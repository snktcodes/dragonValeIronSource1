// GET SCREEN DIMENTIONS
var screenHeight  = document.getElementById('container').clientHeight;
                console.log('height:' + screenHeight);

var screenWidth  = document.getElementById('container').clientWidth;
    console.log('width:' + screenWidth);


// OPENING FRAME RESIZE FUNCTION
var $el = $("#main_container");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

console.log("NEWHEIGHT:" + elHeight)
console.log("NEWWIDTH:" + elWidth)

var $wrapper = $("#container");

$wrapper.resizable({
  resize: doResize
});

function doResize(event, ui) {

  var scale, origin;

  scale = Math.min(
    ui.size.width / elWidth,
    ui.size.height / elHeight
  );

  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
doResize(null, starterData);



// CLOUDS MOVEMENT
var tlClouds = new TimelineMax({
        delay:0,
        repeat:-1
    });

window.addEventListener('load', function(){

    tlClouds

    .to(clouds,5,{left:'53%',yoyo:true,repeat:1,ease:Power0.easeNone})
    // .to(logo,1,{autoAlpha:1})
    console.log(tlClouds.duration())
});

// CRYSTAL MOVEMENT
var tlCrystals = new TimelineMax({
        delay:0,
        repeat:-1
    });

window.addEventListener('load', function(){

    tlCrystals

    .to(blueCrystal,8,{y:-50,yoyo:true,repeat:1,ease:Power0.easeNone},'crystal')
    .to(redCrystal,5,{y:-50,yoyo:true,repeat:1,ease:Power0.easeNone},'crystal+=0.5')
    .to(purpleCrystal,5,{y:50,yoyo:true,repeat:1,ease:Power0.easeNone},'crystal')
    // .to(logo,1,{autoAlpha:1})
    // console.log(tlClouds.duration())
});

// CRYSTAL MOVEMENT
var tlEggRoll = new TimelineMax({
        delay:0,
        repeat:-1
    });

window.addEventListener('load', function(){

    tlEggRoll

    .set(eggContainer,{transformOrigin:'53px 128px'},'egg')
    // .fromTo(eggContainer,1,{rotation:-20}{rotation:20,ease:Power0.easeNone},'egg')
    .to(eggContainer, 0.5, {rotation:-5, ease:Power0.easeNone},'egg')
    .to(eggContainer, 1, {rotation:5, ease:Power0.easeNone},'egg+=0.5')
    .to(eggContainer, 0.5, {rotation:0, ease:Power0.easeNone},'egg+=1.5')

});

// Textbox 1 Pulse
var tlTextBoxScale = new TimelineMax({
        delay:1,
        repeat:-1,
        repeatDelay:2
    });

window.addEventListener('load', function(){

    tlTextBoxScale

    .to(textbox1,0.5,{scale:1.1,yoyo:true,repeat:3,ease:Power1.easeInOut})

});

// INTRO animation

var tlIntro = new TimelineMax({
        delay:0
    });

window.addEventListener('load', function(){

    tlIntro
    .set(textbox1,{display:'block'},'intro')
    .set(firstDragonA,{transformOrigin:'721px 831px'},'intro')
    .set(firstDragonC,{transformOrigin:'465px 1212px'},'intro')
    .set(firstDragonD,{transformOrigin:'471px 848px'},'intro')

    .to([logo,textbox1,island,firstEggs,firstDragonA,firstDragonB,firstDragonC,firstDragonD],0.5,{autoAlpha:1},'intro')
    .to(firstDragonA,0.5,{rotation:-5,yoyo:true,repeat:14},'intro')
    .to(firstDragonB,0.5,{y:-5,yoyo:true,repeat:7},'intro+=0.5')
    .to(firstDragonC,1,{x:-150,ease:Power0.easeNone,yoyo:true,repeat:3,repeatDelay:1},'intro')
    .to(firstDragonC,0.15,{y:-5,ease:Power0.easeNone,yoyo:true,repeat:5},'intro')
    .to(firstDragonC,0.15,{y:-5,ease:Power0.easeNone,yoyo:true,repeat:5},'intro+=2')
    .to(firstDragonC,0.15,{y:-5,ease:Power0.easeNone,yoyo:true,repeat:5},'intro+=4')
    .to(firstDragonC,0.15,{y:-5,ease:Power0.easeNone,yoyo:true,repeat:5},'intro+=6')
    .set(firstDragonC,{scaleX:-1},'intro+=2')
    .set(firstDragonC,{scaleX:1},'intro+=4')
    .set(firstDragonC,{scaleX:-1},'intro+=6')
    .set(firstDragonD,{scaleX:-1},'intro+=1')
    .to(firstDragonD,0.2,{y:-10,yoyo:true,repeat:1},'intro+=3')
    .set(firstDragonD,{scaleX:1},'intro+=5')
    .to(firstDragonD,0.2,{y:-10,yoyo:true,repeat:1},'intro+=7')

});

function startGame() {

  // var addClickToEggPile = document.getElementById('mainEggPile');
  //     addClickToEggPile.onclick  = 'changeDecorOne';

  var tlStageOne = new TimelineMax({
          delay:0
      });

  tlStageOne

  .add(tlTextBoxScale.pause(),'stage1')
  .to([textbox1,firstEggs,firstDragonA,firstDragonB,firstDragonC,firstDragonD,cloudsFront],1,{autoAlpha:0},'stage1')
  .set([textbox1,firstEggs,firstDragonA,firstDragonB,firstDragonC,firstDragonD,cloudsFront],{display:'none'},'stage1+=1')
  .set([textbox2,textbox3,mainEggPile],{display:'block'},'stage1')
  .to(mainEggPile,1,{autoAlpha:1},'stage1')
  .to(textbox2,1,{autoAlpha:1},'stage1+=1')
  .to(textbox2,1,{autoAlpha:0},'stage1+=3')
  .set(textbox2,{display:'none'},'stage1+=4')
  .to([island,islandEnd,mainEggPile],0.5,{scale:1.4,x:40,y:285},'stage1+=3')
  .to(blueCrystal,0.5,{scale:1.4,left:'46%',top:'70%'},'stage1+=3')
  .to(redCrystal,0.5,{scale:1.4,left:'5%',top:'44%'},'stage1+=3')
  .to(purpleCrystal,0.5,{scale:1.4,left:'89%',top:'89%'},'stage1+=3')
  .to(textbox3,1,{autoAlpha:1},'stage1+=4')
  // .to(handContainer1,1,{autoAlpha:1,yoyo:true},'stage1+=4.5')
  .to(handContainer1,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage1+=5.5')
  .to(pointer1,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage1+=6.5')
  .set(handContainer1,{display:'none'},'stage1+=10')
}

function changeDecorOne() {
  console.log("changeDecorOne Fired")

  // var tlChildDance = new TimelineMax({
  //         delay:0,
  //         repeat:6,
  //         repeatDelay:1.5,
  //         paused:true
  //     });
  //
  //     tlChildDance
  //     .to(dragonChildSprite,0.7,{x:-4038, ease:SteppedEase.config(6)},'dragondance')
  //     .to(dragonChildSprite,0.2,{y:-5,yoyo:true,repeat:1},'dragondance+=1')
  //     .to(dragonChildSprite,0.2,{y:-15,yoyo:true,repeat:1},'dragondance+=3')


  var tlDecorOne = new TimelineMax({
          delay:0
      });

  tlDecorOne

  .to(handContainer1,0.1,{autoAlpha:0},'stage2')
  .set(handContainer1,{display:'none'},'stage2')
  .set(eggContainer,{display:'block'},'stage2')
  // .set(dragonChild,{display:'block'},'stage2')
  // .set([egg1,egg2,egg3,egg4],{display:'block'},'stage2')
  .to([textbox3,mainEggPile],1,{autoAlpha:0},'stage2')
  .to(eggContainer,1,{autoAlpha:1},'stage2')
  // .fromTo(islandContainer, 0.3, {x:-5}, {x:5, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"},'stage2')
  .set([star1,star2,star3,star4,star5],{display:'block'},'stage2')
  .set([star1,star2,star3,star4,star5],{autoAlpha:1},'stage2+=0.45')
  .to(star1,1,{x:-200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage2+=0.5')
  .to(star2,1,{x:-150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage2+=0.5')
  .to(star3,1,{x:0, y:-200, autoAlpha:0, ease:Expo.easeOut},'stage2+=0.5')
  .to(star4,1,{x:150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage2+=0.5')
  .to(star5,1,{x:200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage2+=0.5')
  .set([handContainer2,flagContainer],{display:'block'},'stage2+=0.9')
  .to(flagContainer,1,{autoAlpha:1},'stage2+=1')
  // .to(handContainer2,1,{autoAlpha:1},'stage2+=2')
  .to(handContainer2,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage2+=2')
  .to(pointer2,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage2+=3')
  .set(handContainer2,{display:'none'},'stage2+=7.5')
}

function placeFlag() {

  var tlFlag = new TimelineMax({
          delay:0
      });

  tlFlag

  .to(handContainer2,0.1,{autoAlpha:0},'stage3')
  .set(handContainer2,{display:'none'},'stage3')
  .to(flagPlace,0.5,{autoAlpha:0},'stage3')
  .to(flag,0.5,{autoAlpha:1},'stage3')
  .set([star6,star7,star8,star9,star10],{display:'block'},'stage3')
  .set([star6,star7,star8,star9,star10],{autoAlpha:1},'stage3+=0.45')
  .to(star6,1,{x:-200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage3+=0.5')
  .to(star7,1,{x:-150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage3+=0.5')
  .to(star8,1,{x:0, y:-200, autoAlpha:0, ease:Expo.easeOut},'stage3+=0.5')
  .to(star9,1,{x:150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage3+=0.5')
  .to(star10,1,{x:200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage3+=0.5')
  // .set([handContainer2,flagContainer],{display:'block'},'stage3+=0.9')
  .set([handContainer3,treesContainer],{display:'block'},'stage3+=0.9')
  .to(treesContainer,1,{autoAlpha:1},'stage3+=1')
  // .to(handContainer3,1,{autoAlpha:1},'stage3+=2')
  .to(handContainer3,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage3+=2')
  .to(pointer3,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage3+=3')
  .set(handContainer3,{display:'none'},'stage3+=7.5')
}

function placeTrees() {

  var tlTrees = new TimelineMax({
          delay:0
      });

  tlTrees

  .to(handContainer3,0.1,{autoAlpha:0},'stage4')
  .set(handContainer3,{display:'none'},'stage4')
  .to(treesPlace,0.5,{autoAlpha:0},'stage4')
  .to(trees,0.5,{autoAlpha:1},'stage4')
  .set([star11,star12,star13,star14,star15],{display:'block'},'stage4')
  .set([star11,star12,star13,star14,star15],{autoAlpha:1},'stage4+=0.45')
  .to(star11,1,{x:-200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage4+=0.5')
  .to(star12,1,{x:-150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage4+=0.5')
  .to(star13,1,{x:0, y:-200, autoAlpha:0, ease:Expo.easeOut},'stage4+=0.5')
  .to(star14,1,{x:150, y:-150, autoAlpha:0, ease:Expo.easeOut},'stage4+=0.5')
  .to(star15,1,{x:200, y:0, autoAlpha:0, ease:Expo.easeOut},'stage4+=0.5')
  .set(handContainer4,{display:'block'},'stage4+=0.9')
  .to(textbox4,1,{autoAlpha:1},'stage4+=1')
  // // .to(handContainer3,1,{autoAlpha:1},'stage4+=2')
  .to(handContainer4,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage4+=2')
  .to(pointer4,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage4+=3')
  .set(handContainer4,{display:'none'},'stage4+=7.5')
}

function treesGrow() {

  var tlChildDragonDance = new TimelineMax({
          delay:0,
          repeat:3,
          repeatDelay:1.5,
          paused:true
      });

      tlChildDragonDance
      .to(dragonChildSprite,0.7,{x:-4038, ease:SteppedEase.config(6)},'dragondanceTwo')
      .to(dragonChildSprite,0.5,{y:-25,yoyo:true,repeat:1},'dragondanceTwo+=3')

  var tlGrow = new TimelineMax({
          delay:0
      });

  tlGrow

  .to(handContainer4,0.1,{autoAlpha:0},'stage5')
  .set(handContainer4,{display:'none'},'stage5')
  .set([treesBig,dragonChild,starTrees],{display:'block'},'stage5')
  .to(trees,0.5,{autoAlpha:0},'stage5')
  .to(treesBig,0.5,{autoAlpha:1},'stage5')
  .set(starTrees,{autoAlpha:1},'stage5')
  .to(starTrees,0.5,{scale:1.5,autoAlpha:0},'stage5')
  .set(handContainer5,{display:'block'},'stage5+=0.9')
  .to(textbox4,1,{autoAlpha:0},'stage5+=1')
  .to([textbox5,dragonChild],1,{autoAlpha:1},'stage5+=1')
  .add(tlChildDragonDance.play(),'stage5+=2')
  // .to(handContainer5,1,{autoAlpha:1},'stage5+=3')
  .to(handContainer5,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage5+=3')
  .to(pointer5,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage5+=4')
  .set(handContainer5,{display:'none'},'stage5+=8.5')
}


function feedDragon() {

  var tlDragonDance = new TimelineMax({
          delay:0,
          repeat:3,
          repeatDelay:1.5,
          paused:true
      });

      tlDragonDance
      .to(dragonSprite,0.7,{x:-4038, ease:SteppedEase.config(6)},'dragondanceTwo')
      .to(dragonSprite,0.2,{y:-5,yoyo:true,repeat:1},'dragondanceTwo+=3')

  var tlFeedDragon = new TimelineMax({
          delay:0
      });

  tlFeedDragon
  .set(starDragon,{display:'block'},'stage6')
  .set(dragon,{display:'block'},'stage6')
  .set(food,{autoAlpha:1,display:'block',x:'-100%',y:'-10%'},'stage6')

  .to(handContainer5,0.1,{autoAlpha:0},'stage6')
  .set(handContainer5,{display:'none'},'stage6')
  .to(food,0.5,{x:'0%',y:'0%', ease:Expo.easeOut},'stage6')
  .to(food,0.5,{autoAlpha:0},'stage6+=0.5')
  // .to(dragonChild,0.25,{y:-50,yoyo:true,repeat:5,ease:Power0.easeNone},'stage6+=0.5')
  .to([dragonChild,textbox5],1,{autoAlpha:0},'stage6+=0.6')

  .set(starDragon,{autoAlpha:1},'stage6+=0.6')
  .to(starDragon,0.5,{scale:1.5,autoAlpha:0},'stage6+=0.6')
  // .to(starDragon,0.5,{scale:1.5},'stage6+=0.6')

  .to(dragon,1,{autoAlpha:1},'stage6+=0.6')
  .add(tlDragonDance.play(),'stage6+=1.6')
  .to(textbox6,1,{autoAlpha:1},'stage6+=1.6')
  .set(handContainer6,{display:'block'},'stage6+=1.6')
  .to(handContainer6,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage6+=1.6')
  .to(pointer6,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage6+=2.6')
  .add(endCard,'stage6+=3.6')
  // .add(continueFeedDragon,'stage6+=1.6')

}

var tlContinueFeedDragonTwo = new TimelineMax({
        delay:0,
        paused:true
    });

tlContinueFeedDragonTwo

.set(food,{autoAlpha:1,display:'block',x:'-100%',y:'-71%'},'Feed')

.to(food,0.5,{x:'0%',y:'-71%', ease:Expo.easeOut},'Feed')
.to(food,0.5,{autoAlpha:0},'Feed+=0.5')
.to(dragon,0.2,{y:-20,yoyo:true,repeat:3},'Feed+=1')

function continueFeedDragon() {

  var tlContinueFeedDragon = new TimelineMax({
          delay:0
      });

      tlContinueFeedDragon
      .add(tlContinueFeedDragonTwo.play(),'feedbigdragon')

}

function endCard() {

    var tlEndAnim = new TimelineMax({
            delay:1
        });

    tlEndAnim

    .to(textbox6,1,{autoAlpha:0},'stage7')
    // .add(killStars,'stage4')
    // .to(meterContainer,0.5,{autoAlpha:0},'stage7+=2')
    .to(handContainer6,1,{autoAlpha:1,yoyo:true,repeat:1,repeatDelay:2},'stage7+=1')
    .to(pointer6,0.5,{autoAlpha:1,yoyo:true,repeat:3},'stage7+=2')
    .to(textbox7,0.5,{autoAlpha:1},'stage7+=0.5')
    .to(textbox7,0.5,{autoAlpha:0},'stage7+=2.5')


    .set(finalVig,{display:'block'},'stage7+=3')
    .to([finalVig,purple],0.5,{autoAlpha:1},'stage7+=3')
    .to([dragon,flag,treesBig,eggContainer,blueCrystal,redCrystal,purpleCrystal],0.5,{autoAlpha:0},'stage7+=3')
    .to(islandEnd,0.5,{autoAlpha:1},'stage7+=3')
    .to(island,0.5,{autoAlpha:0},'stage7+=3')
    .to([clouds,cloudsBottom],0.5,{filter:'hue-rotate(29deg)'},'stage7+=3')
    .add(tlCrystals.pause(),'stage7')
    .add(tlClouds.pause(),'stage7')
    .add(tlEggRoll.pause(),'stage7')
    .set([handContainer6,dragon],{display:'none'},'stage7+=3')
    .set(cta,{display:'block'},'stage7+=3.4')
    .to(cta,0.5,{autoAlpha:1},'stage7+=3.5')
  }
