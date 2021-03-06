function mstoic_shortcodes_h3(text) {
    return '<div class="section title section-details">' +
        '<h3>' + text + '</h3>' +
        '</div>';
}

function mstoic_shortcodes_p(text) {
    return '<div class="section section-details">' +
        '<p>' + text + '</p>' +
        '</div>';
}

var inputBoxArray,
    inputBoxData;
function mstoic_shortcodes_input_box_half(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'inputClass', 'inputId', 'optionTitle', 'optionDesc', 'type', 'dataOne', 'default'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    if (data['type']==='') {
        data['type'] = 'text';
    }

    inputBoxData += '<div class="section section-details shortcodeData ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<span class="option">' + data["optionTitle"];
        inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</span>';
    inputBoxData += '<input data-one=" '+data["dataOne"]+'" class="' +data['inputClass']+ '" type="' + data['type'] + '" id="' + data['inputId'] + '" name="' + data['inputId'] + '" value="' + data['default'] + '">';
    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_input_box_full(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'inputClass', 'inputId', 'optionTitle', 'optionDesc', 'type', 'dataOne', 'default'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    if (data['type']==='') {
        data['type'] = 'text';
    }

    inputBoxData += '<div class="section section-details shortcodeData ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<p class="option">' + data["optionTitle"];
    inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</p>';
    inputBoxData += '<input data-one=" '+data["dataOne"]+'" class="' +data['inputClass']+ '" type="' + data['type'] + '" id="' + data['inputId'] + '" name="' + data['inputId'] + '" value="' + data['default'] + '">';
    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_font_awesome(data) {

    inputBoxData = '';

    inputBoxArray = [
        'inputId', 'inputClass', 'optionTitle', 'optionDesc'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    var fontAwesome = [
        ['fa-adjust', 'Adjust'],
        ['fa-adn', 'Adn'],
        ['fa-align-center', 'Align center'],
        ['fa-align-justify', 'Align justify'],
        ['fa-align-left', 'Align left'],
        ['fa-align-right', 'Align right'],
        ['fa-ambulance', 'Ambulance'],
        ['fa-anchor', 'Anchor'],
        ['fa-android', 'Android'],
        ['fa-angellist', 'Angellist'],
        ['fa-angle-double-down', 'Angle double down'],
        ['fa-angle-double-left', 'Angle double left'],
        ['fa-angle-double-right', 'Angle double right'],
        ['fa-angle-double-up', 'Angle double up'],
        ['fa-angle-down', 'Angle down'],
        ['fa-angle-left', 'Angle left'],
        ['fa-angle-right', 'Angle right'],
        ['fa-angle-up', 'Angle up'],
        ['fa-apple', 'Apple'],
        ['fa-archive', 'Archive'],
        ['fa-area-chart', 'Area chart'],
        ['fa-arrow-circle-down', 'Arrow circle down'],
        ['fa-arrow-circle-left', 'Arrow circle left'],
        ['fa-arrow-circle-o-down', 'Arrow circle o down'],
        ['fa-arrow-circle-o-left', 'Arrow circle o left'],
        ['fa-arrow-circle-o-right', 'Arrow circle o right'],
        ['fa-arrow-circle-o-up', 'Arrow circle o up'],
        ['fa-arrow-circle-right', 'Arrow circle right'],
        ['fa-arrow-circle-up', 'Arrow circle up'],
        ['fa-arrow-down', 'Arrow down'],
        ['fa-arrow-left', 'Arrow left'],
        ['fa-arrow-right', 'Arrow right'],
        ['fa-arrow-up', 'Arrow up'],
        ['fa-arrows', 'Arrows'],
        ['fa-arrows-alt', 'Arrows alt'],
        ['fa-arrows-h', 'Arrows h'],
        ['fa-arrows-v', 'Arrows v'],
        ['fa-asterisk', 'Asterisk'],
        ['fa-at', 'At'],
        ['fa-backward', 'Backward'],
        ['fa-ban', 'Ban'],
        ['fa-bar-chart', 'Bar chart'],
        ['fa-barcode', 'Barcode'],
        ['fa-bars', 'Bars'],
        ['fa-bed', 'Bed'],
        ['fa-beer', 'Beer'],
        ['fa-behance', 'Behance'],
        ['fa-behance-square', 'Behance square'],
        ['fa-bell', 'Bell'],
        ['fa-bell-o', 'Bell o'],
        ['fa-bell-slash', 'Bell slash'],
        ['fa-bell-slash-o', 'Bell slash o'],
        ['fa-bicycle', 'Bicycle'],
        ['fa-binoculars', 'Binoculars'],
        ['fa-birthday-cake', 'Birthday cake'],
        ['fa-bitbucket', 'Bitbucket'],
        ['fa-bitbucket-square', 'Bitbucket square'],
        ['fa-bold', 'Bold'],
        ['fa-bolt', 'Bolt'],
        ['fa-bomb', 'Bomb'],
        ['fa-book', 'Book'],
        ['fa-bookmark', 'Bookmark'],
        ['fa-bookmark-o', 'Bookmark o'],
        ['fa-briefcase', 'Briefcase'],
        ['fa-btc', 'Btc'],
        ['fa-bug', 'Bug'],
        ['fa-building', 'Building'],
        ['fa-building-o', 'Building o'],
        ['fa-bullhorn', 'Bullhorn'],
        ['fa-bullseye', 'Bullseye'],
        ['fa-bus', 'Bus'],
        ['fa-buysellads', 'Buysellads'],
        ['fa-calculator', 'Calculator'],
        ['fa-calendar', 'Calendar'],
        ['fa-calendar-o', 'Calendar o'],
        ['fa-camera', 'Camera'],
        ['fa-camera-retro', 'Camera retro'],
        ['fa-car', 'Car'],
        ['fa-caret-down', 'Caret down'],
        ['fa-caret-left', 'Caret left'],
        ['fa-caret-right', 'Caret right'],
        ['fa-caret-square-o-down', 'Caret square o down'],
        ['fa-caret-square-o-left', 'Caret square o left'],
        ['fa-caret-square-o-right', 'Caret square o right'],
        ['fa-caret-square-o-up', 'Caret square o up'],
        ['fa-caret-up', 'Caret up'],
        ['fa-cart-arrow-down', 'Cart arrow down'],
        ['fa-cart-plus', 'Cart plus'],
        ['fa-cc', 'Cc'],
        ['fa-cc-amex', 'Cc amex'],
        ['fa-cc-discover', 'Cc discover'],
        ['fa-cc-mastercard', 'Cc mastercard'],
        ['fa-cc-paypal', 'Cc paypal'],
        ['fa-cc-stripe', 'Cc stripe'],
        ['fa-cc-visa', 'Cc visa'],
        ['fa-certificate', 'Certificate'],
        ['fa-chain-broken', 'Chain broken'],
        ['fa-check', 'Check'],
        ['fa-check-circle', 'Check circle'],
        ['fa-check-circle-o', 'Check circle o'],
        ['fa-check-square', 'Check square'],
        ['fa-check-square-o', 'Check square o'],
        ['fa-chevron-circle-down', 'Chevron circle down'],
        ['fa-chevron-circle-left', 'Chevron circle left'],
        ['fa-chevron-circle-right', 'Chevron circle right'],
        ['fa-chevron-circle-up', 'Chevron circle up'],
        ['fa-chevron-down', 'Chevron down'],
        ['fa-chevron-left', 'Chevron left'],
        ['fa-chevron-right', 'Chevron right'],
        ['fa-chevron-up', 'Chevron up'],
        ['fa-child', 'Child'],
        ['fa-circle', 'Circle'],
        ['fa-circle-o', 'Circle o'],
        ['fa-circle-o-notch', 'Circle o notch'],
        ['fa-circle-thin', 'Circle thin'],
        ['fa-clipboard', 'Clipboard'],
        ['fa-clock-o', 'Clock o'],
        ['fa-cloud', 'Cloud'],
        ['fa-cloud-download', 'Cloud download'],
        ['fa-cloud-upload', 'Cloud upload'],
        ['fa-code', 'Code'],
        ['fa-code-fork', 'Code fork'],
        ['fa-codepen', 'Codepen'],
        ['fa-coffee', 'Coffee'],
        ['fa-cog', 'Cog'],
        ['fa-cogs', 'Cogs'],
        ['fa-columns', 'Columns'],
        ['fa-comment', 'Comment'],
        ['fa-comment-o', 'Comment o'],
        ['fa-comments', 'Comments'],
        ['fa-comments-o', 'Comments o'],
        ['fa-compass', 'Compass'],
        ['fa-compress', 'Compress'],
        ['fa-connectdevelop', 'Connectdevelop'],
        ['fa-copyright', 'Copyright'],
        ['fa-credit-card', 'Credit card'],
        ['fa-crop', 'Crop'],
        ['fa-crosshairs', 'Crosshairs'],
        ['fa-css3', 'Css3'],
        ['fa-cube', 'Cube'],
        ['fa-cubes', 'Cubes'],
        ['fa-cutlery', 'Cutlery'],
        ['fa-dashcube', 'Dashcube'],
        ['fa-database', 'Database'],
        ['fa-delicious', 'Delicious'],
        ['fa-desktop', 'Desktop'],
        ['fa-deviantart', 'Deviantart'],
        ['fa-diamond', 'Diamond'],
        ['fa-digg', 'Digg'],
        ['fa-dot-circle-o', 'Dot circle o'],
        ['fa-download', 'Download'],
        ['fa-dribbble', 'Dribbble'],
        ['fa-dropbox', 'Dropbox'],
        ['fa-drupal', 'Drupal'],
        ['fa-eject', 'Eject'],
        ['fa-ellipsis-h', 'Ellipsis h'],
        ['fa-ellipsis-v', 'Ellipsis v'],
        ['fa-empire', 'Empire'],
        ['fa-envelope', 'Envelope'],
        ['fa-envelope-o', 'Envelope o'],
        ['fa-envelope-square', 'Envelope square'],
        ['fa-eraser', 'Eraser'],
        ['fa-eur', 'Eur'],
        ['fa-exchange', 'Exchange'],
        ['fa-exclamation', 'Exclamation'],
        ['fa-exclamation-circle', 'Exclamation circle'],
        ['fa-exclamation-triangle', 'Exclamation triangle'],
        ['fa-expand', 'Expand'],
        ['fa-external-link', 'External link'],
        ['fa-external-link-square', 'External link square'],
        ['fa-eye', 'Eye'],
        ['fa-eye-slash', 'Eye slash'],
        ['fa-eyedropper', 'Eyedropper'],
        ['fa-facebook', 'Facebook'],
        ['fa-facebook-official', 'Facebook official'],
        ['fa-facebook-square', 'Facebook square'],
        ['fa-fast-backward', 'Fast backward'],
        ['fa-fast-forward', 'Fast forward'],
        ['fa-fax', 'Fax'],
        ['fa-female', 'Female'],
        ['fa-fighter-jet', 'Fighter jet'],
        ['fa-file', 'File'],
        ['fa-file-archive-o', 'File archive o'],
        ['fa-file-audio-o', 'File audio o'],
        ['fa-file-code-o', 'File code o'],
        ['fa-file-excel-o', 'File excel o'],
        ['fa-file-image-o', 'File image o'],
        ['fa-file-o', 'File o'],
        ['fa-file-pdf-o', 'File pdf o'],
        ['fa-file-powerpoint-o', 'File powerpoint o'],
        ['fa-file-text', 'File text'],
        ['fa-file-text-o', 'File text o'],
        ['fa-file-video-o', 'File video o'],
        ['fa-file-word-o', 'File word o'],
        ['fa-files-o', 'Files o'],
        ['fa-film', 'Film'],
        ['fa-filter', 'Filter'],
        ['fa-fire', 'Fire'],
        ['fa-fire-extinguisher', 'Fire extinguisher'],
        ['fa-flag', 'Flag'],
        ['fa-flag-checkered', 'Flag checkered'],
        ['fa-flag-o', 'Flag o'],
        ['fa-flask', 'Flask'],
        ['fa-flickr', 'Flickr'],
        ['fa-floppy-o', 'Floppy o'],
        ['fa-folder', 'Folder'],
        ['fa-folder-o', 'Folder o'],
        ['fa-folder-open', 'Folder open'],
        ['fa-folder-open-o', 'Folder open o'],
        ['fa-font', 'Font'],
        ['fa-forumbee', 'Forumbee'],
        ['fa-forward', 'Forward'],
        ['fa-foursquare', 'Foursquare'],
        ['fa-frown-o', 'Frown o'],
        ['fa-futbol-o', 'Futbol o'],
        ['fa-gamepad', 'Gamepad'],
        ['fa-gavel', 'Gavel'],
        ['fa-gbp', 'Gbp'],
        ['fa-gift', 'Gift'],
        ['fa-git', 'Git'],
        ['fa-git-square', 'Git square'],
        ['fa-github', 'Github'],
        ['fa-github-alt', 'Github alt'],
        ['fa-github-square', 'Github square'],
        ['fa-glass', 'Glass'],
        ['fa-globe', 'Globe'],
        ['fa-google', 'Google'],
        ['fa-google-plus', 'Google plus'],
        ['fa-google-plus-square', 'Google plus square'],
        ['fa-google-wallet', 'Google wallet'],
        ['fa-graduation-cap', 'Graduation cap'],
        ['fa-gratipay', 'Gratipay'],
        ['fa-h-square', 'H square'],
        ['fa-hacker-news', 'Hacker news'],
        ['fa-hand-o-down', 'Hand o down'],
        ['fa-hand-o-left', 'Hand o left'],
        ['fa-hand-o-right', 'Hand o right'],
        ['fa-hand-o-up', 'Hand o up'],
        ['fa-hdd-o', 'Hdd o'],
        ['fa-header', 'Header'],
        ['fa-headphones', 'Headphones'],
        ['fa-heart', 'Heart'],
        ['fa-heart-o', 'Heart o'],
        ['fa-heartbeat', 'Heartbeat'],
        ['fa-history', 'History'],
        ['fa-home', 'Home'],
        ['fa-hospital-o', 'Hospital o'],
        ['fa-html5', 'Html5'],
        ['fa-ils', 'Ils'],
        ['fa-inbox', 'Inbox'],
        ['fa-indent', 'Indent'],
        ['fa-info', 'Info'],
        ['fa-info-circle', 'Info circle'],
        ['fa-inr', 'Inr'],
        ['fa-instagram', 'Instagram'],
        ['fa-ioxhost', 'Ioxhost'],
        ['fa-italic', 'Italic'],
        ['fa-joomla', 'Joomla'],
        ['fa-jpy', 'Jpy'],
        ['fa-jsfiddle', 'Jsfiddle'],
        ['fa-key', 'Key'],
        ['fa-keyboard-o', 'Keyboard o'],
        ['fa-krw', 'Krw'],
        ['fa-language', 'Language'],
        ['fa-laptop', 'Laptop'],
        ['fa-lastfm', 'Lastfm'],
        ['fa-lastfm-square', 'Lastfm square'],
        ['fa-leaf', 'Leaf'],
        ['fa-leanpub', 'Leanpub'],
        ['fa-lemon-o', 'Lemon o'],
        ['fa-level-down', 'Level down'],
        ['fa-level-up', 'Level up'],
        ['fa-life-ring', 'Life ring'],
        ['fa-lightbulb-o', 'Lightbulb o'],
        ['fa-line-chart', 'Line chart'],
        ['fa-link', 'Link'],
        ['fa-linkedin', 'Linkedin'],
        ['fa-linkedin-square', 'Linkedin square'],
        ['fa-linux', 'Linux'],
        ['fa-list', 'List'],
        ['fa-list-alt', 'List alt'],
        ['fa-list-ol', 'List ol'],
        ['fa-list-ul', 'List ul'],
        ['fa-location-arrow', 'Location arrow'],
        ['fa-lock', 'Lock'],
        ['fa-long-arrow-down', 'Long arrow down'],
        ['fa-long-arrow-left', 'Long arrow left'],
        ['fa-long-arrow-right', 'Long arrow right'],
        ['fa-long-arrow-up', 'Long arrow up'],
        ['fa-magic', 'Magic'],
        ['fa-magnet', 'Magnet'],
        ['fa-male', 'Male'],
        ['fa-map-marker', 'Map marker'],
        ['fa-mars', 'Mars'],
        ['fa-mars-double', 'Mars double'],
        ['fa-mars-stroke', 'Mars stroke'],
        ['fa-mars-stroke-h', 'Mars stroke h'],
        ['fa-mars-stroke-v', 'Mars stroke v'],
        ['fa-maxcdn', 'Maxcdn'],
        ['fa-meanpath', 'Meanpath'],
        ['fa-medium', 'Medium'],
        ['fa-medkit', 'Medkit'],
        ['fa-meh-o', 'Meh o'],
        ['fa-mercury', 'Mercury'],
        ['fa-microphone', 'Microphone'],
        ['fa-microphone-slash', 'Microphone slash'],
        ['fa-minus', 'Minus'],
        ['fa-minus-circle', 'Minus circle'],
        ['fa-minus-square', 'Minus square'],
        ['fa-minus-square-o', 'Minus square o'],
        ['fa-mobile', 'Mobile'],
        ['fa-money', 'Money'],
        ['fa-moon-o', 'Moon o'],
        ['fa-motorcycle', 'Motorcycle'],
        ['fa-music', 'Music'],
        ['fa-neuter', 'Neuter'],
        ['fa-newspaper-o', 'Newspaper o'],
        ['fa-openid', 'Openid'],
        ['fa-outdent', 'Outdent'],
        ['fa-pagelines', 'Pagelines'],
        ['fa-paint-brush', 'Paint brush'],
        ['fa-paper-plane', 'Paper plane'],
        ['fa-paper-plane-o', 'Paper plane o'],
        ['fa-paperclip', 'Paperclip'],
        ['fa-paragraph', 'Paragraph'],
        ['fa-pause', 'Pause'],
        ['fa-paw', 'Paw'],
        ['fa-paypal', 'Paypal'],
        ['fa-pencil', 'Pencil'],
        ['fa-pencil-square', 'Pencil square'],
        ['fa-pencil-square-o', 'Pencil square o'],
        ['fa-phone', 'Phone'],
        ['fa-phone-square', 'Phone square'],
        ['fa-picture-o', 'Picture o'],
        ['fa-pie-chart', 'Pie chart'],
        ['fa-pied-piper', 'Pied piper'],
        ['fa-pied-piper-alt', 'Pied piper alt'],
        ['fa-pinterest', 'Pinterest'],
        ['fa-pinterest-p', 'Pinterest p'],
        ['fa-pinterest-square', 'Pinterest square'],
        ['fa-plane', 'Plane'],
        ['fa-play', 'Play'],
        ['fa-play-circle', 'Play circle'],
        ['fa-play-circle-o', 'Play circle o'],
        ['fa-plug', 'Plug'],
        ['fa-plus', 'Plus'],
        ['fa-plus-circle', 'Plus circle'],
        ['fa-plus-square', 'Plus square'],
        ['fa-plus-square-o', 'Plus square o'],
        ['fa-power-off', 'Power off'],
        ['fa-print', 'Print'],
        ['fa-puzzle-piece', 'Puzzle piece'],
        ['fa-qq', 'Qq'],
        ['fa-qrcode', 'Qrcode'],
        ['fa-question', 'Question'],
        ['fa-question-circle', 'Question circle'],
        ['fa-quote-left', 'Quote left'],
        ['fa-quote-right', 'Quote right'],
        ['fa-random', 'Random'],
        ['fa-rebel', 'Rebel'],
        ['fa-recycle', 'Recycle'],
        ['fa-reddit', 'Reddit'],
        ['fa-reddit-square', 'Reddit square'],
        ['fa-refresh', 'Refresh'],
        ['fa-renren', 'Renren'],
        ['fa-repeat', 'Repeat'],
        ['fa-reply', 'Reply'],
        ['fa-reply-all', 'Reply all'],
        ['fa-retweet', 'Retweet'],
        ['fa-road', 'Road'],
        ['fa-rocket', 'Rocket'],
        ['fa-rss', 'Rss'],
        ['fa-rss-square', 'Rss square'],
        ['fa-rub', 'Rub'],
        ['fa-scissors', 'Scissors'],
        ['fa-search', 'Search'],
        ['fa-search-minus', 'Search minus'],
        ['fa-search-plus', 'Search plus'],
        ['fa-sellsy', 'Sellsy'],
        ['fa-server', 'Server'],
        ['fa-share', 'Share'],
        ['fa-share-alt', 'Share alt'],
        ['fa-share-alt-square', 'Share alt square'],
        ['fa-share-square', 'Share square'],
        ['fa-share-square-o', 'Share square o'],
        ['fa-shield', 'Shield'],
        ['fa-ship', 'Ship'],
        ['fa-shirtsinbulk', 'Shirtsinbulk'],
        ['fa-shopping-cart', 'Shopping cart'],
        ['fa-sign-in', 'Sign in'],
        ['fa-sign-out', 'Sign out'],
        ['fa-signal', 'Signal'],
        ['fa-simplybuilt', 'Simplybuilt'],
        ['fa-sitemap', 'Sitemap'],
        ['fa-skyatlas', 'Skyatlas'],
        ['fa-skype', 'Skype'],
        ['fa-slack', 'Slack'],
        ['fa-sliders', 'Sliders'],
        ['fa-slideshare', 'Slideshare'],
        ['fa-smile-o', 'Smile o'],
        ['fa-sort', 'Sort'],
        ['fa-sort-alpha-asc', 'Sort alpha asc'],
        ['fa-sort-alpha-desc', 'Sort alpha desc'],
        ['fa-sort-amount-asc', 'Sort amount asc'],
        ['fa-sort-amount-desc', 'Sort amount desc'],
        ['fa-sort-asc', 'Sort asc'],
        ['fa-sort-desc', 'Sort desc'],
        ['fa-sort-numeric-asc', 'Sort numeric asc'],
        ['fa-sort-numeric-desc', 'Sort numeric desc'],
        ['fa-soundcloud', 'Soundcloud'],
        ['fa-space-shuttle', 'Space shuttle'],
        ['fa-spinner', 'Spinner'],
        ['fa-spoon', 'Spoon'],
        ['fa-spotify', 'Spotify'],
        ['fa-square', 'Square'],
        ['fa-square-o', 'Square o'],
        ['fa-stack-exchange', 'Stack exchange'],
        ['fa-stack-overflow', 'Stack overflow'],
        ['fa-star', 'Star'],
        ['fa-star-half', 'Star half'],
        ['fa-star-half-o', 'Star half o'],
        ['fa-star-o', 'Star o'],
        ['fa-steam', 'Steam'],
        ['fa-steam-square', 'Steam square'],
        ['fa-step-backward', 'Step backward'],
        ['fa-step-forward', 'Step forward'],
        ['fa-stethoscope', 'Stethoscope'],
        ['fa-stop', 'Stop'],
        ['fa-street-view', 'Street view'],
        ['fa-strikethrough', 'Strikethrough'],
        ['fa-stumbleupon', 'Stumbleupon'],
        ['fa-stumbleupon-circle', 'Stumbleupon circle'],
        ['fa-subscript', 'Subscript'],
        ['fa-subway', 'Subway'],
        ['fa-suitcase', 'Suitcase'],
        ['fa-sun-o', 'Sun o'],
        ['fa-superscript', 'Superscript'],
        ['fa-table', 'Table'],
        ['fa-tablet', 'Tablet'],
        ['fa-tachometer', 'Tachometer'],
        ['fa-tag', 'Tag'],
        ['fa-tags', 'Tags'],
        ['fa-tasks', 'Tasks'],
        ['fa-taxi', 'Taxi'],
        ['fa-tencent-weibo', 'Tencent weibo'],
        ['fa-terminal', 'Terminal'],
        ['fa-text-height', 'Text height'],
        ['fa-text-width', 'Text width'],
        ['fa-th', 'Th'],
        ['fa-th-large', 'Th large'],
        ['fa-th-list', 'Th list'],
        ['fa-thumb-tack', 'Thumb tack'],
        ['fa-thumbs-down', 'Thumbs down'],
        ['fa-thumbs-o-down', 'Thumbs o down'],
        ['fa-thumbs-o-up', 'Thumbs o up'],
        ['fa-thumbs-up', 'Thumbs up'],
        ['fa-ticket', 'Ticket'],
        ['fa-times', 'Times'],
        ['fa-times-circle', 'Times circle'],
        ['fa-times-circle-o', 'Times circle o'],
        ['fa-tint', 'Tint'],
        ['fa-toggle-off', 'Toggle off'],
        ['fa-toggle-on', 'Toggle on'],
        ['fa-train', 'Train'],
        ['fa-transgender', 'Transgender'],
        ['fa-transgender-alt', 'Transgender alt'],
        ['fa-trash', 'Trash'],
        ['fa-trash-o', 'Trash o'],
        ['fa-tree', 'Tree'],
        ['fa-trello', 'Trello'],
        ['fa-trophy', 'Trophy'],
        ['fa-truck', 'Truck'],
        ['fa-try', 'Try'],
        ['fa-tty', 'Tty'],
        ['fa-tumblr', 'Tumblr'],
        ['fa-tumblr-square', 'Tumblr square'],
        ['fa-twitch', 'Twitch'],
        ['fa-twitter', 'Twitter'],
        ['fa-twitter-square', 'Twitter square'],
        ['fa-umbrella', 'Umbrella'],
        ['fa-underline', 'Underline'],
        ['fa-undo', 'Undo'],
        ['fa-university', 'University'],
        ['fa-unlock', 'Unlock'],
        ['fa-unlock-alt', 'Unlock alt'],
        ['fa-upload', 'Upload'],
        ['fa-usd', 'Usd'],
        ['fa-user', 'User'],
        ['fa-user-md', 'User md'],
        ['fa-user-plus', 'User plus'],
        ['fa-user-secret', 'User secret'],
        ['fa-user-times', 'User times'],
        ['fa-users', 'Users'],
        ['fa-venus', 'Venus'],
        ['fa-venus-double', 'Venus double'],
        ['fa-venus-mars', 'Venus mars'],
        ['fa-viacoin', 'Viacoin'],
        ['fa-video-camera', 'Video camera'],
        ['fa-vimeo-square', 'Vimeo square'],
        ['fa-vine', 'Vine'],
        ['fa-vk', 'Vk'],
        ['fa-volume-down', 'Volume down'],
        ['fa-volume-off', 'Volume off'],
        ['fa-volume-up', 'Volume up'],
        ['fa-weibo', 'Weibo'],
        ['fa-weixin', 'Weixin'],
        ['fa-whatsapp', 'Whatsapp'],
        ['fa-wheelchair', 'Wheelchair'],
        ['fa-wifi', 'Wifi'],
        ['fa-windows', 'Windows'],
        ['fa-wordpress', 'Wordpress'],
        ['fa-wrench', 'Wrench'],
        ['fa-xing', 'Xing'],
        ['fa-xing-square', 'Xing square'],
        ['fa-yahoo', 'Yahoo'],
        ['fa-yelp', 'Yelp'],
        ['fa-youtube', 'Youtube'],
        ['fa-youtube-play', 'Youtube play'],
        ['fa-youtube-square', 'Youtube square'],
    ],
        returnValue = '<div class="section section-details shortcodeData fontAwesomeSelect">';


    returnValue += '<span class="option">' + data["optionTitle"];
    returnValue += '<span class="desc">' + data['optionDesc'] + '</span></span>';

    fontAwesome.forEach(function(i) {
        returnValue += '<i class="fa ' + i[0] + '" id ="' + i[0] + '"></i>';
    });

    return returnValue + '<input type="text" id="' + data['inputId'] + '" class="faClass ms-hide ' + data['inputClass'] + '" value="" /></div>';

    //var myVariable;
    //
    //jQuery.ajax({
    //    'async': false,
    //    'type': "POST",
    //    'global': false,
    //    'dataType': 'html',
    //    'data': { 'action': 'ms_return_font_awesome_array',},
    //    'success': function (data) {
    //        myVariable = data;
    //    }
    //});
    //
    //return '<div class="section section-details shortcodeData option-detail">' + myVariable + '</div>';

}

function mstoic_shortcodes_input_editor(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'inputClass', 'inputId', 'optionTitle', 'optionDesc', 'dataOne', 'default'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    inputBoxData += '<div class="section section-details shortcodeData ms-editor ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<span class="option">' + data["optionTitle"];
    inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</span>';

    inputBoxData += '<textarea data-one=" '+data["dataOne"]+'" id="' + data['inputId'] + '" class="' + data['inputClass'] + '" name="' + data['inputId'] + '" cols="45" rows="8">' + data["default"] + '</textarea>';

    //WP Editor Not Working
    //inputBoxData += '<div class="hide" id="' + data['inputId'] + '" style="display: none;"></div>';
    //
    //$abc =  tinyMCEPreInit.mceInit.content;
    //
    //jQuery.ajax({
    //
    //    url: ajaxurl,
    //    data: {
    //        action: 'mstoic_shortcodes_editor',
    //        inputId: data['inputId'],
    //    },
    //    type: 'post'
    //
    //}).success(function (response) {
    //
    //    var eid = '#' + data['inputId'];
    //
    //    jQuery(eid).replaceWith(response);
    //
    //    //init quicktags
    //    switchEditors.go(eid, 'tmce');
    //    quicktags({id : eid});
    //
    //    //init tinymce
    //    tinyMCEPreInit.mceInit[eid]['elements'] = eid;
    //    tinyMCEPreInit.mceInit[eid]['body_class'] = eid;
    //    tinyMCEPreInit.mceInit[eid]['succesful'] =  false;
    //    tinymce.init(tinyMCEPreInit.mceInit[eid]);
    //
    //}).fail(function (response) {
    //
    //});

    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_select_box(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'optionTitle', 'optionDesc', 'selectClass', 'selectId',
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    if (data['selectArray'] == null) {
        // No select array received
        return;
    }

    inputBoxData += '<div class="section section-details shortcodeData ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<span class="option">' + data["optionTitle"];
    inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</span>';

    inputBoxData += '<select class="option-detail ' + data["selectClass"] + '" name="selectShortcode" id="' + data["selectId"] + '">';

    jQuery(data['selectArray']).each(function (index, element) {
        inputBoxData += '<option value="' + element[0] + '">' + element[1] + '</option>';
    });

    inputBoxData += '</select>';

    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_image(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'inputClass', 'inputId', 'optionTitle', 'optionDesc', 'min', 'max', 'step', 'value', 'dataOne',
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    inputBoxData += '<div class="section section-details shortcodeData ms-image-upload ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<label>' + data["optionTitle"] + '</label>';
    inputBoxData += '<span><input data-one=" '+data["dataOne"]+'" class="ms-img-upload-field ' + data["inputClass"] + '" id="' + data["inputId"] + '" type="text" size="36" name="upload_image" value="" /></span>';
    inputBoxData += '<span><input class="ms-img-upload-button ms-button button button-primary button-large" id="upload_image_button" type="button" value="Upload Image" /></span>';
    inputBoxData += '</div>';

    return inputBoxData;
}

function mstoic_shortcodes_slider_input(data) {

    inputBoxData = '';

    inputBoxArray = [
        'divClass', 'divId', 'inputClass', 'inputId', 'optionTitle', 'optionDesc', 'min', 'max', 'step', 'value'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    inputBoxData += '<div class="section section-details shortcodeData ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<span class="option">' + data["optionTitle"];
    inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</span>';

    inputBoxData +='<div class="slider' +
        '" data-min="' + data["min"] +
        '" data-max="' + data["max"] +
        '" data-value="' + data["value"] +
        '" data-step="' + data["step"] +
        '" data-field="' + data["inputId"] +
        '"></div>';
    inputBoxData +='<input disabled class="' + data["inputClass"] + '" id="' + data["inputId"] + '" value="' + data["value"] + '" />';

    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_check_box(data) {

    inputBoxData = '';

    inputBoxArray = [
        'checked', 'divClass', 'divId', 'inputClass', 'inputId', 'inputLabel', 'optionTitle', 'optionDesc'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    inputBoxData += '<div class="section section-details shortcodeData ' + data["divClass"] + '" id="' + data["divId"] + '">';
    inputBoxData += '<span class="option">' + data["optionTitle"];
    inputBoxData += '<span class="desc">' + data['optionDesc'] + '</span>';
    inputBoxData += '</span>';
    inputBoxData += '<label class="option-detail" for="' +data['inputId']+ '">';
    inputBoxData += '<input class="'+data['inputClass']+'-checkbox" ' +data['checked']+ ' id="'+data['inputId']+'" type="checkbox" />'+data['inputLabel']+'</label>';
    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_next_button(data) {

    inputBoxData = '';

    inputBoxArray = [
        'inputName', 'inputID',
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    inputBoxData += '<div class="section section-details shortcodeData">';
    inputBoxData += '<p class="clear-float">';
    inputBoxData += '<span>';
    inputBoxData += '<input ' +
        'id="' +data['inputID']+ '" ' +
        'class="ms-get-shortcode get-shortcode button button-primary button-large align-right" ' +
        'type="button" ' +
        'value="' +data['inputName']+ '" />';
    inputBoxData += '</span>';
    inputBoxData += '</p>';
    inputBoxData += '</div>';

    return inputBoxData;

}

function mstoic_shortcodes_submit_button(data) {

    inputBoxData = '';

    inputBoxArray = [
        'inputName', 'dataOne', 'livePreview', 'shortcode'
    ];

    jQuery( inputBoxArray ).each(function( index, element ) {
        if (typeof data[element] === 'undefined') {
            data[element] = '';
        }
    });

    if (data['livePreview'] === 'true') {

        inputBoxData += mstoic_shortcodes_h3('Live Preview');

        inputBoxData += '<div class="section section-details shortcodeData">';
        inputBoxData += '<p class="ms-live-preview-container">' +
            '<input ' +
            "data-one='"+data["dataOne"]+"' " +
            'data-shortcode="'+data['shortcode']+'" ' +
            'class="ms-live-preview button button-secondary button-large" ' +
            'type="button" ' +
            'value="Live Preview" />' +
            '</p>';
        inputBoxData += '</div><!-- .section -->';
    }

    inputBoxData += '<div class="section section-details shortcodeData">';
    inputBoxData += '<p class="clear-float">';
    inputBoxData += '<span>';
    inputBoxData += '<input ' +
        'data-shortcode="'+data['shortcode']+'" ' +
        "data-one='"+data["dataOne"]+"' " +
        'class="ms-get-shortcode get-shortcode button button-primary button-large align-right" ' +
        'type="button" ' +
        'value="' +data['inputName']+ '" />';
    inputBoxData += '</span>';
    inputBoxData += '</p>';
    inputBoxData += '</div>';

    return inputBoxData;

}

var $this;
function msjQuerySliders() {
    jQuery('.slider').each(function() {

        $this = jQuery(this);

        $this.slider({
            min: $this.data('min'),
            max: $this.data('max'),
            value: $this.data('value'),
            step: $this.data('step'),
            slide: function(event, ui) {
                jQuery('#' + jQuery(this).data('field')).val(ui.value);
            }});

    });

    console.log('Hi');

}

jQuery(document).ready(function ($) {

    "use strict";

    var background = $('.button-primary').css('background');
    $('body').append(
        '<style>' +
        '.mstoicPopUp h2, #fontAwesome i:hover, #fontAwesome i.active { background: ' + background + '; }' +
        '</style>'
    );

    $(document).off('click', '.fontAwesomeSelect i').on('click', '.fontAwesomeSelect i', function () {

        $(this).parent('.fontAwesomeSelect').find('i').removeClass('active');
        $(this).addClass('active');

        $(this).parent('.fontAwesomeSelect').find('.faClass').val($(this).attr('id'));
    });

}(jQuery));