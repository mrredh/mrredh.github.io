(function() {
    function findIframe(frameElement) {
        var iframeList = document.querySelectorAll('iframe');

        for (var i = 0; i < iframeList.length; ++i) {
            if (iframeList[i].contentWindow === frameElement) {
                return iframeList[i];
            }
        }
    }

    function receiveMessage(e) {
        try {
            var data = JSON.parse(e.data);
            var height = data['iframe-height'];
            var iframe;

            if (height && (iframe = findIframe(e.source))) {
                // Устанавливаем высоту в зависимости от значения height
                if (height < 300) {
                    iframe.style.height = (height - 250) + 'px';
                    console.log(height);
                } else {
                    // Отнимаем 50px от высоты
                    iframe.style.height = (height - 50) + 'px';
                }
            }
        } catch (err) {
            // Обработка ошибок, если не удается распарсить JSON
        }
    }

    window.addEventListener('message', receiveMessage, false);
})();
