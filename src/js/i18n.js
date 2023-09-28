/*
W3C def language codes is :
    language-code = primary-code ( "-" subcode )
        primary-code    ISO 639-1   ( the names of language with 2 code )
        subcode         ISO 3166    ( the names of countries )

NOTE: use lowercase to prevent case typo from user!
Use this as shown below..... */

function i18n(lang) {
    this.lang = lang;
    // in case someone says en-us, and en is present!
    this.fallbackLang = this.lang.includes('-') ? this.lang.split('-')[0] : this.lang;
    this.tran = (key) => {
        key = key.toLowerCase();
        if (tranTxt[this.lang] && tranTxt[this.lang][key]) {
            return tranTxt[this.lang][key];
        } else if (tranTxt[this.fallbackLang] && tranTxt[this.fallbackLang][key]) {
            return tranTxt[this.fallbackLang][key];
        } else if (standard[key]) {
            return standard[key];
        } else {
            return key;
        }
    };
}

// abstract model for recognizing if valid translations are present
// const model = {
//     'danmaku-loading': [],
//     top: [],
//     bottom: [],
//     rolling: [],
//     'input-danmaku-enter': [],
//     'about-author': [],
//     'dplayer-feedback': [],
//     'about-dplayer': [],
//     loop: [],
//     speed: [],
//     'opacity-danmaku': [],
//     normal: [],
//     'please-input-danmaku': [],
//     'set-danmaku-color': [],
//     'set-danmaku-type': [],
//     'show-danmaku': [],
//     'video-failed': [],
//     'danmaku-failed': [],
//     'danmaku-send-failed': [],
//     'switching-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     'switched-quality': [{ symbol: '%q', name: 'Quality', example: '720p' }],
//     ff: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     rew: [{ symbol: '%s', name: 'Seconds', example: '5' }],
//     'unlimited-danmaku': [],
//     'send-danmaku': [],
//     setting: [],
//     fullscreen: [],
//     'web-fullscreen': [],
//     send: [],
//     screenshot: [],
//     airplay: [],
//     chromecast: [],
//     'show-subs': [],
//     'hide-subs': [],
//     volume: [],
//     live: [],
//     'video-info': [],
// };

// Standard english translations
const standard = {
    'danmaku-loading': 'Danmaku is loading',
    top: 'Top',
    bottom: 'Bottom',
    rolling: 'Rolling',
    'input-danmaku-enter': 'Input danmaku, hit Enter',
    'about-author': 'About author',
    'dplayer-feedback': 'DPlayer feedback',
    'about-dplayer': 'About DPlayer',
    loop: 'Loop',
    speed: 'Speed',
    'opacity-danmaku': 'Opacity for danmaku',
    normal: 'Normal',
    'please-input-danmaku': 'Please input danmaku content!',
    'set-danmaku-color': 'Set danmaku color',
    'set-danmaku-type': 'Set danmaku type',
    'show-danmaku': 'Show danmaku',
    'video-failed': 'Video load failed',
    'danmaku-failed': 'Danmaku load failed',
    'danmaku-send-failed': 'Danmaku send failed',
    'switching-quality': 'Switching to %q quality',
    'switched-quality': 'Switched to %q quality',
    ff: 'FF %s s',
    rew: 'REW %s s',
    'unlimited-danmaku': 'Unlimited danmaku',
    'send-danmaku': 'Send danmaku',
    setting: 'Setting',
    fullscreen: 'Full screen',
    'web-fullscreen': 'Web full screen',
    send: 'Send',
    screenshot: 'Screenshot',
    airplay: 'AirPlay',
    chromecast: 'ChromeCast',
    subtitle: 'Subtitle',
    off: 'Off',
    'show-subs': 'Show subtitle',
    'hide-subs': 'Hide subtitle',
    volume: 'Volume',
    live: 'Live',
    'video-info': 'Video info',
    'remember-progress': 'Last time played to',
    'back-to-start': 'Back to start',
};

// add translation text here
const tranTxt = {
    en: standard,
    'zh-cn': {
        'danmaku-loading': '弹幕加载中',
        top: '顶部',
        bottom: '底部',
        rolling: '滚动',
        'input-danmaku-enter': '输入弹幕，回车发送',
        'about-author': '关于作者',
        'dplayer-feedback': '播放器意见反馈',
        'about-dplayer': '关于 DPlayer 播放器',
        loop: '洗脑循环',
        speed: '速度',
        'opacity-danmaku': '弹幕透明度',
        normal: '正常',
        'please-input-danmaku': '要输入弹幕内容啊喂！',
        'set-danmaku-color': '设置弹幕颜色',
        'set-danmaku-type': '设置弹幕类型',
        'show-danmaku': '显示弹幕',
        'video-failed': '视频加载失败',
        'danmaku-failed': '弹幕加载失败',
        'danmaku-send-failed': '弹幕发送失败',
        'switching-quality': '正在切换至 %q 画质',
        'switched-quality': '已经切换至 %q 画质',
        ff: '快进 %s 秒',
        rew: '后退 %s 秒',
        'unlimited-danmaku': '海量弹幕',
        'send-danmaku': '发送弹幕',
        setting: '设置',
        fullscreen: '全屏',
        'web-fullscreen': '页面全屏',
        send: '发送',
        screenshot: '截图',
        airplay: '无线投屏',
        chromecast: 'ChromeCast',
        subtitle: '字幕',
        off: '关闭',
        'show-subs': '显示字幕',
        'hide-subs': '隐藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '视频统计信息',
        'remember-progress': '为您恢复播放到',
        'back-to-start': '回到开头',
    },
    'zh-tw': {
        'danmaku-loading': '彈幕載入中',
        top: '頂部',
        bottom: '底部',
        rolling: '滾動',
        'input-danmaku-enter': '輸入彈幕，Enter 發送',
        'about-author': '關於作者',
        'dplayer-feedback': '播放器意見回饋',
        'about-dplayer': '關於 DPlayer 播放器',
        loop: '循環播放',
        speed: '速度',
        'opacity-danmaku': '彈幕透明度',
        normal: '正常',
        'please-input-danmaku': '請輸入彈幕內容啊！',
        'set-danmaku-color': '設定彈幕顏色',
        'set-danmaku-type': '設定彈幕類型',
        'show-danmaku': '顯示彈幕',
        'video-failed': '影片載入失敗',
        'danmaku-failed': '彈幕載入失敗',
        'danmaku-send-failed': '彈幕發送失敗',
        'switching-quality': '正在切換至 %q 畫質',
        'switched-quality': '已經切換至 %q 畫質',
        ff: '快進 %s 秒',
        rew: '後退 %s 秒',
        'unlimited-danmaku': '巨量彈幕',
        'send-danmaku': '發送彈幕',
        setting: '設定',
        fullscreen: '全螢幕',
        'web-fullscreen': '頁面全螢幕',
        send: '發送',
        screenshot: '截圖',
        airplay: '無線投屏',
        chromecast: 'ChromeCast',
        subtitle: '字幕',
        off: '關閉',
        'show-subs': '顯示字幕',
        'hide-subs': '隱藏字幕',
        volume: '音量',
        live: '直播',
        'video-info': '影片統計訊息',
        'remember-progress': '為您恢復播放到',
        'back-to-start': '回到開頭',
    },
    'ko-kr': {
        'danmaku-loading': 'Danmaku를 불러오는 중입니다.',
        top: 'Top',
        bottom: 'Bottom',
        rolling: 'Rolling',
        'input-danmaku-enter': 'Danmaku를 입력하고 Enter를 누르세요.',
        'about-author': '만든이',
        'dplayer-feedback': '피드백 보내기',
        'about-dplayer': 'DPlayer 정보',
        loop: '반복',
        speed: '배속',
        'opacity-danmaku': 'Danmaku 불투명도',
        normal: '표준',
        'please-input-danmaku': 'Danmaku를 입력하세요!',
        'set-danmaku-color': 'Danmaku 색상',
        'set-danmaku-type': 'Danmaku 설정',
        'show-danmaku': 'Danmaku 표시',
        'video-failed': '비디오를 불러오지 못했습니다.',
        'danmaku-failed': 'Danmaku를 불러오지 못했습니다.',
        'danmaku-send-failed': 'Danmaku 전송에 실패했습니다.',
        'Switching to': '',
        'Switched to': '',
        'switching-quality': '전환 %q 화질',
        'switched-quality': '전환 됨 %q 화질',
        ff: '앞으로 %s 초',
        rew: '뒤로 %s 초',
        'unlimited-danmaku': '끝없는 Danmaku',
        'send-danmaku': 'Danmaku 보내기',
        setting: '설정',
        fullscreen: '전체 화면',
        'web-fullscreen': '웹 내 전체화면',
        send: '보내기',
        screenshot: '화면 캡쳐',
        airplay: '에어플레이',
        chromecast: 'ChromeCast',
        subtitle: '부제',
        off: '끄다',
        'show-subs': '자막 보이기',
        'hide-subs': '자막 숨기기',
        Volume: '볼륨',
        live: '생방송',
        'video-info': '비디오 정보',
        'remember-progress': '마지막 재생 위치',
        'back-to-start': '처음으로 돌아가기',
    },
    de: {
        'danmaku-loading': 'Danmaku lädt...',
        top: 'Oben',
        bottom: 'Unten',
        rolling: 'Rollend',
        'input-danmaku-enter': 'Drücke Enter nach dem Einfügen vom Danmaku',
        'about-author': 'Über den Autor',
        'dplayer-feedback': 'DPlayer Feedback',
        'about-dplayer': 'Über DPlayer',
        loop: 'Wiederholen',
        speed: 'Geschwindigkeit',
        'opacity-danmaku': 'Transparenz für Danmaku',
        normal: 'Normal',
        'please-input-danmaku': 'Bitte Danmaku Inhalt eingeben!',
        'set-danmaku-color': 'Danmaku Farbe festlegen',
        'set-danmaku-type': 'Danmaku Typ festlegen',
        'show-danmaku': 'Zeige Danmaku',
        'video-failed': 'Das Video konnte nicht geladen werden',
        'danmaku-failed': 'Danmaku konnte nicht geladen werden',
        'danmaku-send-failed': 'Das senden von Danmaku ist fehgeschlagen',
        'switching-quality': 'Wechsle zur %q Qualität',
        'switched-quality': 'Zur %q Qualität gewechselt',
        ff: '%s s Vorwärts',
        rew: '%s s Zurück',
        'unlimited-danmaku': 'Unlimitiertes Danmaku',
        'send-danmaku': 'Sende Danmaku',
        setting: 'Einstellungen',
        fullscreen: 'Vollbild',
        'web-fullscreen': 'Browser Vollbild',
        send: 'Senden',
        screenshot: 'Screenshot',
        airplay: 'AirPlay',
        'show-subs': 'Zeige Untertitel',
        chromecast: 'ChromeCast',
        subtitle: 'Untertitel',
        off: 'Schließung',
        'hide-subs': 'Verstecke Untertitel',
        volume: 'Lautstärke',
        live: 'Live',
        'video-info': 'Video Info',
        'remember-progress': 'Letztes Mal gespielt',
        'back-to-start': 'Zurück zum Anfang',
    },
};

export { i18n };
