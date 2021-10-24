function searchImage(keywords) {
    keywords = keywords.replace(/\s+/g, '%20');
    var url = "https://customsearch.googleapis.com/customsearch/v1?q=cooking%20" + keywords + "&key=AIzaSyDnLyGxP4R9I-RsyevAVAdJdG_KLHHDo3M&searchType=image&cx=b33c4f71011036716"
    var xhttp = new XMLHttpRequest();
    var linkUrl;
    xhttp.open("GET", url);
    xhttp.onloadend = function (data) {
        if (xhttp.readyState === xhttp.DONE && xhttp.status === 200) {
            var items = JSON.parse(xhttp.responseText).items;
            for (let i = 0; i < items.length; i++){
                linkUrl = items[i].link;
                if (linkUrl.length < 80) {
                    setImage(linkUrl);
                    break;
                }
            }
        }
    };
    xhttp.send();
}