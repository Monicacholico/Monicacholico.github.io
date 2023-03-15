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
const activeControlBtns = [...document.querySelectorAll('.icon-apps .active-control')]; 
const aiActiveIcon = document.querySelector('.ai-active-icon');
const saveBtn = [...document.querySelectorAll('.save-btn')];
const successScreen = document.querySelector('.success-screen');


settingsBtn.addEventListener('click', () => {
  gridRows.classList.toggle('show-settings');
  gridHome.forEach( item => {
    item.style.display = 'none';
  })

});

  returnBtnOne.addEventListener('click', () => {
      gridHome.forEach( item => {
      item.style.display = 'grid';
      });
      gridRows.classList.remove('show-settings');
      console.log('return button clicked');
      voiceCommandSettings.classList.remove('show-settings');
      aiVoiceActiveBtn.classList.remove('active-control-btn');
      phoneFeatures.classList.remove('show-settings');
      appFeatures.classList.remove('show-settings');
      successScreen.classList.remove('active-success');
      aiActiveIcon.classList.remove('active');
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
    if(comConfigurationContent.classList.contains('show-settings') ||
    emergencyConfigContent.classList.contains('show-settings')) {
      comConfigurationContent.classList.remove('show-settings');
      emergencyConfigContent.classList.remove('show-settings');
    }
    if(successScreen.classList.contains('active-success')) {
      successScreen.classList.remove('active-success');
    }

  })

  phoneFeatActiveBtn.parentElement.addEventListener('click', () => {
    console.log('phone button clicked');
    phoneFeatActiveBtn.classList.add('active-control-btn');
    if(appFeatures.classList.contains('show-settings')) {
      appFeatures.classList.remove('show-settings');
      // appFeatActiveBtn.classList.remove('active-control-btn');
    }
    if(successScreen.classList.contains('active-success')) {
      successScreen.classList.remove('active-success');
    }
    phoneFeatures.classList.add('show-settings');
  },1);
  appFeatActiveBtn.parentElement.addEventListener('click', () => {
    console.log('app button clicked');
    appFeatActiveBtn.classList.add('active-control-btn-app');
    console.log('button clicked');
    if(phoneFeatures.classList.contains('show-settings')) {
      phoneFeatures.classList.remove('show-settings');
      // phoneFeatActiveBtn.classList.remove('active-control-btn-app');
    }
    if(successScreen.classList.contains('active-success')) {
      successScreen.classList.remove('active-success');
    }
    appFeatures.classList.add('show-settings');
  },1);


  activeControlBtns.forEach( btn => {
    btn.addEventListener('click', () => {
      console.log('phone button clicked');
      btn.classList.toggle('active-control-btn');
  
    })
  })

  saveBtn.forEach( btn => {
    btn.addEventListener('click', () => {
      console.log('save button clicked');
      successScreen.classList.add('active-success');
      if(phoneFeatures.classList.contains('show-settings') || appFeatures.classList.contains('show-settings')) {
        phoneFeatures.classList.remove('show-settings');
        appFeatures.classList.remove('show-settings');
      }
      
    });
  })

  const comConfigurationBtn = document.querySelector('.row-settings.command-config');
  const emergencyConfigBtn = document.querySelector('.row-settings.command-config.for-emergency');
  const comConfigurationContent = document.querySelector('.row-two .grid-rows');
  const emergencyConfigContent = document.querySelector('.row-two .grid-rows.emergency');

  comConfigurationBtn.addEventListener('click', () => {
    comConfigurationContent.classList.add('show-settings');
    if(emergencyConfigContent.classList.contains('show-settings')) {
      emergencyConfigContent.classList.remove('show-settings');
    }
  });
  emergencyConfigBtn.addEventListener('click', () => {
    emergencyConfigContent.classList.add('show-settings');
    if(comConfigurationContent.classList.contains('show-settings')) {
      comConfigurationContent.classList.remove('show-settings');
    }
  });




  // Row Two

  const dropBtn = document.querySelector('.drop-list-btn');
  const dropList = document.querySelector('.drop-list');

  dropBtn.addEventListener('click', () => {
    dropList.classList.toggle('show-drop-list');
    dropBtn.classList.toggle('up');
  });