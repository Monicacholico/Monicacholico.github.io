const settingsBtn = document.querySelector('.icon.settings');
const gridHome = [...document.querySelectorAll('.home')];
const gridRows = document.querySelector('.grid-rows');
const returnBtns = [...document.querySelectorAll('.return')];
const returnBtnOne = document.querySelector('.wrapper-one .return');
const voiceBtn = document.querySelector('.row-settings.icon-voice');
console.log(returnBtnOne);
const voiceCommandSettings = document.querySelector('.wrapper-two .grid-rows');
const phoneFeatures = document.querySelector('.grid-rows.phone-features');
const appFeatures = document.querySelector('.grid-rows.app-features');
const phoneFeatActiveBtn = document.querySelector('.row-settings.icon-phone .active-control');
const appFeatActiveBtn = document.querySelector('.row-settings.icon-apps .active-control');
const aiVoiceActiveBtn = document.querySelector('.row-settings.icon-voice .active-control');
const activeControlBtns = [...document.querySelectorAll('.active-control')]; 
const aiActiveIcon = document.querySelector('.ai-active-icon');

settingsBtn.addEventListener('click', () => {
  gridRows.classList.toggle('show-settings');
  gridHome.forEach( item => {
    item.style.display = 'none';
  })

});

  returnBtnOne.addEventListener('click', () => {
      gridHome.forEach( item => {
      item.style.display = 'grid';
      },1);
      gridRows.classList.remove('show-settings');
      console.log('return button clicked');
  })

  aiVoiceActiveBtn.addEventListener('click', () => {
    console.log('voice button clicked');
    aiVoiceActiveBtn.classList.toggle('active-control-btn');
    voiceCommandSettings.classList.toggle('show-settings');
    aiActiveIcon.classList.toggle('active');
    if(phoneFeatures.classList.contains('show-settings') || appFeatures.classList.contains('show-settings')) {
      phoneFeatures.classList.remove('show-settings');
      appFeatures.classList.remove('show-settings');
    }

  })

  phoneFeatActiveBtn.addEventListener('click', () => {
    console.log('phone button clicked');
    phoneFeatActiveBtn.classList.toggle('active-control-btn');
    if(appFeatures.classList.contains('show-settings')) {
      appFeatures.classList.remove('show-settings');
      appFeatActiveBtn.classList.remove('active-control-btn');
    }
    phoneFeatures.classList.toggle('show-settings');

  })
  appFeatActiveBtn.addEventListener('click', () => {
    console.log('phone button clicked');
    appFeatActiveBtn.classList.toggle('active-control-btn');
    if(phoneFeatures.classList.contains('show-settings')) {
      phoneFeatures.classList.remove('show-settings');
      phoneFeatActiveBtn.classList.remove('active-control-btn');
    }
    appFeatures.classList.toggle('show-settings');
  })


  // activeControlBtns.forEach( btn => {
  //   btn.parentElement.addEventListener('click', () => {
  //     console.log('phone button clicked');
  //     btn.classList.toggle('active-control-btn');
  
  //   })
  // })

