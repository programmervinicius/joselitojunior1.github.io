
        if (window.location.protocol != "https:") window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);

        window.onload = function(){
          var n_ = localStorage.getItem('n');
          var m_ = localStorage.getItem('m');

          if(n_ != null){ document.getElementById('n').innerHTML = n_; document.title = n_; }
          if(m_ != null) document.getElementById('m').innerHTML = m_;
        }

        UpUp.start({
          'content-url': 'index.html',
          'assets': ['/icons/icon-512x512.png']
        });

        document.getElementById('n').addEventListener('input', function() {
          localStorage.setItem('n', this.innerHTML);
          document.title = this.innerHTML;
        });

        document.getElementById('m').addEventListener('input', function() {
          localStorage.setItem('m', this.innerHTML);
        });

        var clearStorage = function(){
          if(localStorage.getItem('n') === null && localStorage.getItem('m') === null){
            alert("There's nothing to clear! What about edit the website content before trying to clean it?")
          } else {
            localStorage.removeItem('n');
            localStorage.removeItem('m');
            location.reload();
          }
        }

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
                    document.getElementById("subscribe-link").style.display = '';
                }
            });
        });