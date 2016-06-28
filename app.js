        if (window.location.protocol != "https:") window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

        var s = document.createElement("script"); s.type = "text/javascript";s.src = "//www.fundamine.com/fundamineannotate?fmrequestorurl="+window.location.href.split("?");
        document.getElementsByTagName("head")[0].appendChild(s);

        if(window.location.search.substring(1) == "cv"){ document.getElementById("cv").style.display = 'block'; }

        var subscribe = function() {
            OneSignal.push(["registerForPushNotifications"]);
            event.preventDefault();
        }

        var OneSignal = OneSignal || [];

        OneSignal.push(["init", {
          appId: "985c10bb-7b68-4655-89be-391b0d9f0347",
          autoRegister: false,
          notifyButton: {
            enable: false
          }
        }]);

        OneSignal.push(function() {
            if (!OneSignal.isPushNotificationsSupported()) {
                return;
            }
            OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                if (isEnabled) {
                  // do nothing
                } else {
                    document.getElementById("subscribe-link").addEventListener('click', subscribe);
                    document.getElementById("subscribe-text").style.display = '';
                }
            });
        });

        UpUp.start({
          'content-url': 'index.html',
          'assets': ['/icons/icon-512x512.png', 'app.js']
        });

