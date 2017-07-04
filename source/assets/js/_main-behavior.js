import './main-modules/utils/flush-lazysizes';

import 'rawblock/_$';
import rb from 'rawblock/_main';
import BezierEasing from 'bezier-easing';

//remove modules if you don't need them:
import 'rawblock/utils/keyboardfocus';
// import 'rawblock/utils/focus-within';
import 'rawblock/utils/click-area';

import 'rawblock/components/accordion';
import 'rawblock/components/itemscroller';

const ASSETBASEPATH = window.appGlobals && appGlobals.basePath || '';
//load dom or jQuery

rb.BezierEasing = BezierEasing;

//if webpack is used:
__webpack_public_path__ = ASSETBASEPATH + 'js/';


require('../../../gulp/js/webpack/globloader!./glob.paths');

require('../../../gulp/js/webpack/lazyglobloader!./lazyglob.paths');

rb.$(rb.live.init);
