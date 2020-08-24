import {
  KEY_STAGE_INITIATE,
  KEY_STAGE_IS_WAVE_CLEAN,
  KEY_STAGE_WAVES,
  DEFAULT_FRAME_WIDTH,
  KEY_OBJECT_ON_UPDATE,
  KEY_ENEMY_COMPUND_GENERATE_CHILDREN,
  KEY_STAGE_TRANSITION
} from '../constants';
import {
  enemies,
  platforms,
  player,
  cameraCenter,
  $cameraLoop,
  $cameraZoom
} from '../state';
import { alternateProgress, vector } from '../utils';
import { enemy, compund, shooter } from '../helper/enemy';
import { platform, boundary, followPlayerX, followPlayerY } from '../helper/platform';
import { easeInOutQuad } from '../easing';
import { circularMovement, slideIn } from '../animation';

let tempPlayerPos;

export default {
  [KEY_STAGE_INITIATE]() {
    player.p.x = 0;
    cameraCenter.y = player.p.y + 200;
    $cameraLoop.$ = () => {
      cameraCenter.y = Math.min(player.p.y - player.s.y / 2 + 200,
        Math.max(player.p.y + player.s.y / 2 - 200, cameraCenter.y)
      )
    }
    platforms.push(
      platform(0, -player.s.y / 2, player.s.x * 10, 0, {
        [KEY_OBJECT_ON_UPDATE]: [followPlayerX],
      }),
      boundary(DEFAULT_FRAME_WIDTH / 2, 0, 0, player.s.y * 10, {
        [KEY_OBJECT_ON_UPDATE]: [followPlayerY],
      }),
      boundary(-DEFAULT_FRAME_WIDTH / 2, 0, 0, player.s.y * 10, {
        [KEY_OBJECT_ON_UPDATE]: [followPlayerY],
      })
    );
  },
  [KEY_STAGE_WAVES]: [
    () => enemies.push(
      enemy(50, 200, 30, 30, {
        [KEY_OBJECT_ON_UPDATE]:[
          slideIn(1000, 300, 300),
          circularMovement(3000, 10, 5, 1000)
        ]
      })
    ),
    () => enemies.push(
      enemy(-100, 350, 30, 30, {
        [KEY_OBJECT_ON_UPDATE]:[
          slideIn(1000, 300, 300),
          circularMovement(5000, 10, 5, 1000)
        ]
      }),
      enemy(75, 450, 30, 30, {
        [KEY_OBJECT_ON_UPDATE]:[
          slideIn(1000, 300, 300),
          circularMovement(3000, 10, 5, 1000)
        ]
      })
    ),
    () => enemies.push(
      compund(0, 530, 30, 30, {
        [KEY_OBJECT_ON_UPDATE]:[
          slideIn(1000, 300, 300),
          circularMovement(5000, 10, 0, 1000)
        ],
        [KEY_ENEMY_COMPUND_GENERATE_CHILDREN]: [
          () => enemy(0, 300, 30, 30, {
            [KEY_OBJECT_ON_UPDATE]:[
              slideIn(1000, 300, 300),
              circularMovement(6000, 100, 50, 1000)
            ]
          })
        ]
      })
    ),
    () => enemies.push(
      shooter(0, 250, {
        [KEY_OBJECT_ON_UPDATE]:[
          circularMovement(10000, 80, 0)
        ]
      })
    )
  ],
  [KEY_STAGE_IS_WAVE_CLEAN]() {
    return enemies.length === 0;
  },
  [KEY_STAGE_TRANSITION](progress) {
    $cameraZoom.$ = 1 + (1 - easeInOutQuad(alternateProgress(progress))) * 0.2;
    if(progress == 0) tempPlayerPos = vector(player.p.x, player.p.y);
    else player.p.x = tempPlayerPos.x * easeInOutQuad(1 - progress);
  }
};