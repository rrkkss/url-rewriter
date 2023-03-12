let redirects = {};
redirects["https://www.reddit.com"] = "https://www.teddit.net";
redirects["https://www.twitter.com"] = "https://www.nitter.net";
redirects["https://www.youtube.com"] = "https://www.yewtu.be";

function redirect(windowUrl) {
    const regex = /^https?:\/\/.+\.[a-zA-Z]{2,}/;
    const match = regex.exec(windowUrl)[0];
    const replace = redirects[match];

    if (replace) {
        window.location = windowUrl.replace(match, replace);
    }
}

redirect(window.location.href);

// browser.storage.local.set(
//     {
//         "https://www.reddit.com" : "https://www.teddit.net",
//         "https://www.twitter.com" : "https://www.nitter.net",
//         "https://www.youtube.com" : "https://www.yewtu.be"
//     }    
// );
