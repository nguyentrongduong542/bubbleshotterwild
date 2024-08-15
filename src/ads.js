var integration = {}

integration.showBanner = function (){
    if(!integration.ads){
        try{
            H5Inject.showAndroidBanner()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

integration.hideBanner = function (){
	try{
		H5Inject.hideAndroidBanner()
	}catch(e){
		console.log(e)
	}
}

integration.showInterstitial = function (){
    if(!integration.ads){
        try{
            H5Inject.showAd()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

integration.showRewardedAd = function(){
    if(!integration.ads){
        try{
            H5Inject.showRewardedAd()
        }catch(e){
            console.log(e)
        }
    }else{
        console.log("App is Pro")
    }
}

integration.rewarded = function(){
    document.getElementById("currentrewards").innerHTML = "Got ad Reward!"
}

integration.landscape = function (){
	try{
		H5Inject.landscape()
	}catch(e){
		console.log(e)
	}
}

integration.portrait = function (){
	try{
		H5Inject.portrait()
	}catch(e){
		console.log(e)
	}
}

integration.alert = function(txt){
    try{
        H5Inject.showAlert(txt)
    }catch(e){
        console.log(e)
    }
}

integration.rateThisApp = function(){
    try{
        H5Inject.rateThisApp()
    }catch(e){
        console.log(e)
    }
}

integration.shareText = function(txt, title){
    try{
        H5Inject.shareText(txt, title)
    }catch(e){
        console.log(e)
    }
}

integration.shareThisApp = function(txt, title){
    try{
        H5Inject.shareThisApp(txt, title)
    }catch(e){
        console.log(e)
    }
}

integration.removeAds = function(){
    try{
        H5Inject.removeAds()
    }catch(e){
        console.log(e)
    }
}

integration.ads = false
integration.itsads = function(n){
    if(n == 1){
        integration.hideBanner()
        integration.ads = true
    }else{
        integration.ads = false
    }
}