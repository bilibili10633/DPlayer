import '../css/index.less';
import DPlayer from './player';

/* global DPLAYER_VERSION GIT_HASH */
console.log(
    `${'\n'} %c DPlayer v${DPLAYER_VERSION} ${GIT_HASH} %c https://dplayer.diygod.dev %c Ncfun Customized 2023 10 04 ${'\n'}`,
    'color: #fadfa3; background: #030307; padding:5px 0;',
    'background: #fadfa3; padding:5px 0;',
    'color: #FD4C5B; background: #030307; padding:5px 0;'
);

export default DPlayer;
