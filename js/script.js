const redirects = {};
redirects["https://reddit.com"] = "https://teddit.net";
redirects["https://twitter.com"] = "https://nitter.net";
redirects["https://youtube.com"] = "https://yewtu.be";

function redirect(windowUrl) {
    const regex = /^https?:\/\/.+\.[a-zA-Z]{2,}/;
    const match = regex.exec(windowUrl);
    const replace = redirect[match];

    window.location = windowUrl.replace(match, replace);
}

redirect(window.location);