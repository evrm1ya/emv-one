
import {generateStyles} from './style-generator/style-generator';

class BubbleArt {
  constructor(minBubbleWidth, totalBubbles, containerWidth, colorOpts, opacOpts) {
    this._minBubbleWidth = minBubbleWidth;
    this._totalBubbles = totalBubbles;
    this._containerWidth = containerWidth;
    this._colorOpts = colorOpts;
    this._opacOpts = opacOpts;
  }

  generateStyles() {
    return generateStyles.call(this);
  }
}

export {BubbleArt};
